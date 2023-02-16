import React, { useContext, useReducer, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';

import { Store } from '../Store';
import { toast } from 'react-toastify';

import { getError, BASE_URL } from '../utils';

const reducer = (state, action) => {
    switch (action.type) {
      case 'SIGN_REQUEST':
        return { ...state, loginStatus: true };
      case 'SIGN_SUCCESS':
        return { ...state, loginStatus: false };
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
            
            dispatch({ type: 'SIGN_SUCCESS' });

            toast.success('Login Successful');

            navigate(redirect || '/');

         } catch (err) {
          toast.error("Something went wrong");
        }
    };

    useEffect(() => {
        if (userInfo) {
        navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);

  return (
    <div className="container mx-auto px-4">
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
