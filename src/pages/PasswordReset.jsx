import React, { useContext, useReducer, useEffect, useState } from 'react'
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

import { LoadingSpinner, MessageInformation } from '../components';
import { BASE_URL, getError } from '../utils';

const reducer = (state, action) => {
    switch (action.type) {
      case 'RESET_REQUEST':
        return { ...state, resetStatus: true };
      case 'RESET_SUCCESS':
        return { ...state, resetStatus: false, user: action.payload.user };
      case 'RESET_FAIL':
        return { ...state, resetStatus: false, error: action.payload };
      default:
        return state;
    }
  };
const PasswordReset = () => {
const navigate = useNavigate();
const {resetToken} = useParams();
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const [{ resetStatus, error }, dispatch] = useReducer(reducer, {
    error: '',
    });

const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        setPassword("");
        setConfirmPassword("");
        return toast.error("Passwords don't match");
    }
    try {
        dispatch({ type: 'RESET_REQUEST' });
        const { data } = await Axios.put(`${BASE_URL}/auth/reset-password/${resetToken}`, {
        password,
        });
        
        dispatch({ type: 'RESET_SUCCESS', payload: data });

        toast.success("Password Changed Successfully");

        navigate('/login');

        } catch (err) {
        dispatch({ type: 'RESET_FAIL', payload: getError(err), });
        console.log(err)
    }
};

  return (
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <Helmet>
            <title>{ `Reset Password` }</title>
            <meta name="description" content={`Reset Password`}></meta>
        </Helmet>

        {resetStatus ? (
          <LoadingSpinner/>
        ) : error ? (
          <MessageInformation>{error}</MessageInformation>
        ) : (
        <div className="max-w-md mx-auto">
          <div className="w-full md:w-1/2 mb-4 md:pr-2">
            <h1 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Reset Your Password
            </h1>
          </div>
        </div>
        )}

        <form className="max-w-md mx-auto" onSubmit={submitHandler}>

        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
             />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmpassword">
                Confirm Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirmpassword" type="password" placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
             />
        </div>

        <div className="mb-4">
            <button className="bg-green-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                Reset Password
            </button>
        </div>

        </form>
    </div>
  )
}

export default PasswordReset;