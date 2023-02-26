import React, { useContext, useReducer, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

import { LoadingSpinner, MessageInformation } from '../components';
import { BASE_URL, getError } from '../utils';

const reducer = (state, action) => {
    switch (action.type) {
      case 'FORGOT_REQUEST':
        return { ...state, forgotStatus: true };
      case 'FORGOT_SUCCESS':
        return { ...state, forgotStatus: false, user: action.payload.user };
      case 'FORGOT_FAIL':
        return { ...state, forgotStatus: false, error: action.payload };
      default:
        return state;
    }
  };
const ForgotPassword = () => {
const navigate = useNavigate();
const [email, setEmail] = useState('');

const [{ forgotStatus, error }, dispatch] = useReducer(reducer, {
    error: '',
    });

const submitHandler = async (e) => {
    e.preventDefault();
    try {
        dispatch({ type: 'FORGOT_REQUEST' });
        const { data } = await Axios.post(`${BASE_URL}/auth/forgot-password`, {
        email,
        });
        
        dispatch({ type: 'FORGOT_SUCCESS', payload: data });

        toast.success("Reset Link Has Been Sent");

        navigate('/');

        } catch (err) {
        dispatch({ type: 'FORGOT_FAIL', payload: getError(err), });
        console.log(err)
    }
};
  return (
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <Helmet>
            <title>{ `Forgot Passowrd` }</title>
            <meta name="description" content={`Forgot Password`}></meta>
        </Helmet>

        {forgotStatus ? (
          <LoadingSpinner/>
        ) : error ? (
          <MessageInformation>{error}</MessageInformation>
        ) : (
        <div className="max-w-md mx-auto">
          <div className="w-full md:w-1/2 mb-4 md:pr-2">
            <h1 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Password Reset Request
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
            <button className="bg-green-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                Reset
            </button>
        </div>

        </form>
    </div>
  )
}

export default ForgotPassword;