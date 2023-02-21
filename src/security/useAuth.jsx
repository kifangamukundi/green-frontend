import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import {BASE_URL} from '../utils';
import { Store } from '../Store';

export default function useAuth () {
  const { state } = useContext(Store);
  const { userInfo } = state;

  const [accessToken, setAccessToken] = useState(userInfo.user.accessToken);
  const [refreshToken, setRefreshToken] = useState(userInfo.user.refreshToken);

  useEffect(() => {
    const axiosInstance = axios.create({
      BASE_URL,
    });

    // Add an Axios interceptor to automatically refresh the access token
    axiosInstance.interceptors.request.use(async (config) => {
      const tokenExpiration = jwtDecode(accessToken)?.exp;
      const currentTime = Math.floor(Date.now() / 1000);

      // If access token has expired, try to refresh it using the refresh token
      if (accessToken && refreshToken && tokenExpiration && tokenExpiration < currentTime) {
        try {
          const response = await axiosInstance.post('/users/refresh', {
            refreshToken,
          });

          localStorage.setItem('userInfo', response.data);
          setAccessToken(response.data.user.accessToken);
          setRefreshToken(response.data.user.refreshToken);
        } catch (error) {
          if (error.response && error.response.status === 401) {
            // If refresh token has expired, log out the user
            localStorage.removeItem('userInfo');
            window.location.href = '/logout';
          } else {
            // If API returns an error response, throw an error
            throw error;
          }
        }
      }

      // Set the Authorization header with the access token
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    });

    return () => {
      axiosInstance.interceptors.request.eject();
    };
  }, [accessToken, refreshToken]);

  return { accessToken, setAccessToken, refreshToken, setRefreshToken };
};
