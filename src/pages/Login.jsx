import React, { useContext, useReducer, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { Helmet } from 'react-helmet-async';

import { Store } from '../Store';
import { toast } from 'react-toastify';

import { getError, BASE_URL } from '../utils';
import { LoadingSpinner, MessageInformation } from '../components';

const reducer = (state, action) => {
    switch (action.type) {
      case 'SIGN_REQUEST':
        return { ...state, loginStatus: true };
      case 'SIGN_SUCCESS':
        return { ...state, loginStatus: false, user: action.payload.user };
      case 'SIGN_FAIL':
        return { ...state, loginStatus: false, error: action.payload };
      default:
        return state;
    }
  };

export default function Login() {
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [{ loginStatus, error }, dispatch] = useReducer(reducer, {
    error: '',
    });

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch({ type: 'SIGN_REQUEST' });
            const { data } = await Axios.post(`${BASE_URL}/users/signin`, {
            email,
            password,
            });
            ctxDispatch({ type: 'USER_SIGNIN', payload: data });

            localStorage.setItem('userInfo', JSON.stringify(data));
            
            dispatch({ type: 'SIGN_SUCCESS', payload: data });

            toast.success(data.message);

            navigate(redirect || '/');

         } catch (err) {
          dispatch({ type: 'SIGN_FAIL', payload: getError(err), });
        }
    };

    useEffect(() => {
        if (userInfo) {
        navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);

  return (
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <Helmet>
            <title>{ `Login` }</title>
            <meta name="description" content={`Login`}></meta>
        </Helmet>

        {loginStatus ? (
          <LoadingSpinner/>
        ) : error ? (
          <MessageInformation>{error}</MessageInformation>
        ) : (
        <div className="max-w-md mx-auto">
          <div className="w-full md:w-1/2 mb-4 md:pr-2">
            <h1 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Login to your account
            </h1>
          </div>
        </div>
        )}

        <form className="max-w-md mx-auto" onSubmit={submitHandler}>
        
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email Address
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
             />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
             />
        </div>

        <div className="mb-4">
            <button className="bg-green-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                Login
            </button>
        </div>
        <p className="text-sm font-semibold mt-2 pt-1 mb-0">
            New user?{' '}
            <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
        </p>

        </form>
    </div>
  )
}
