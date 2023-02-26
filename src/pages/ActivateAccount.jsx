import React, { useEffect, useReducer, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

import { BASE_URL, getError } from "../utils";
import { LoadingSpinner, MessageInformation } from "../components";

const reducer = (state, action) => {
    switch (action.type) {
      case 'ACTIVATION_REQUEST':
        return { ...state, activationStatus: true };
      case 'ACTIVATION_SUCCESS':
        return { ...state, activationStatus: false, user: action.payload.user };
      case 'ACTIVATION_FAIL':
        return { ...state, activationStatus: false, error: action.payload };
      default:
        return state;
    }
  };

const ActivateAccount = () => {
const {activationToken} = useParams();
console.log(activationToken);
const navigate = useNavigate();

const [{ activationStatus, error }, dispatch] = useReducer(reducer, {
    error: '',
    });

useEffect(() => {
    const activateUser = async () => {
        try {
            dispatch({ type: 'ACTIVATION_REQUEST' });
            const { data } = await axios.put(`${BASE_URL}/auth/activate-account/${activationToken}`);
            
            dispatch({ type: 'ACTIVATION_SUCCESS', payload: data });
            toast.success(data.data);
            navigate('/login');
        } catch (err) {
            dispatch({ type: 'ACTIVATION_FAIL', payload: getError(err), });
        }
    };
    activateUser();
}, [activationToken]);

  return (
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <Helmet>
            <title>{ `Account Activation` }</title>
            <meta name="description" content={`Account Activation`}></meta>
        </Helmet>

        {activationStatus ? (
          <LoadingSpinner/>
        ) : error ? (
          <MessageInformation>{error}</MessageInformation>
        ) : (
        <div className="max-w-md mx-auto">
          <div className="w-full md:w-1/2 mb-4 md:pr-2">
            <h1 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Account Activation
            </h1>
          </div>
        </div>
        )}

    </div>
  )
}

export default ActivateAccount;