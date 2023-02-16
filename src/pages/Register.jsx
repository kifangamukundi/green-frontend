import React, { useContext, useReducer,useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';

import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError, BASE_URL } from '../utils.jsx';

const reducer = (state, action) => {
    switch (action.type) {
      case 'SIGNUP_REQUEST':
        return { ...state, signUpStatus: true };
      case 'SIGNUP_SUCCESS':
        return { ...state, signUpStatus: false };
      case 'SIGNUP_FAIL':
        return { ...state, signUpStatus: false, error: action.payload };
      default:
        return state;
    }
  };

export default function Register() {
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [{ signUpStatus, error }, dispatch] = useReducer(reducer, {
        error: '',
      });
    
      const { state, dispatch: ctxDispatch } = useContext(Store);

      const { userInfo } = state;

      const submitHandler = async (e) => {
          e.preventDefault();
          
          try {
          dispatch({ type: 'SIGNUP_REQUEST' });
          const { data } = await Axios.post(`${BASE_URL}/users/signup`, {
              firstName,
              lastName,
              mobileNumber,
              email,
              password,
          });

          ctxDispatch({ type: 'USER_SIGNIN', payload: data });

          localStorage.setItem('userInfo', JSON.stringify(data));

          dispatch({ type: 'SIGNUP_SUCCESS' });

          toast.success('Register Successful');

          navigate(redirect || '/');

        } catch (err) {
          toast.error(getError(err));
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
            <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">
                First Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="Enter your first name"
            onChange={(e) => setFirstName(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">
                Last Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Enter your last name" 
            onChange={(e) => setLastName(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="mobileNumber">
                Mobile Number
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobileNumber" type="text" placeholder="Enter your mobile number"
            onChange={(e) => setMobileNumber(e.target.value)}
             />
        </div>

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
                Register
            </button>
        </div>
        <p className="text-sm font-semibold mt-2 pt-1 mb-0">
          Already have an account?{' '}
          <Link to={`/login?redirect=${redirect}`}>Sign-In</Link>
        </p>

        </form>
    </div>
  )
}
