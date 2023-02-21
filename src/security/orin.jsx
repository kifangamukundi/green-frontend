import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import {BASE_URL} from '../utils';
import { Store } from '../Store';

const useAxios = () => {
    const { state } = useContext(Store);
    const { userInfo } = state;

    const [accessToken, setAccessToken] = useState(userInfo.user.accessToken);
    const [refreshToken, setRefreshToken] = useState(userInfo.user.refreshToken);

    const axiosInstance = axios.create({
        BASE_URL,
        headers: {Authorization: `Bearer ${accessToken}`}
    });

    axiosInstance.interceptors.request.use(async req => {
        const tokenExpiration = jwtDecode(accessToken)?.exp;
        const currentTime = Math.floor(Date.now() / 1000);

        const isExpired = tokenExpiration < currentTime;
        if(!isExpired) return req;

        const {data} = await axios.post(`${BASE_URL}/users/refresh`,{
            refresh: refreshToken
        });

        localStorage.setItem('userInfo', JSON.stringify(data));

        req.headers.Authorization = `Bearer ${data.user.accessToken}`;
        setAccessToken(data.user.accessToken);
        setRefreshToken(data.user.refreshToken);
        return req
    });

    return { axiosInstance, accessToken, refreshToken, setAccessToken, setRefreshToken };
}

export default useAxios;