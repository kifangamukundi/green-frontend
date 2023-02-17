import React, { useContext, useReducer, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

import { Store } from '../../Store';
import { getError, BASE_URL } from '../../utils';
import { LoadingSpinner, MessageInformation } from '../../components';

const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return {
          ...state,
          structures: action.payload.structures,
          loading: false,
        };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      case 'DELETE_REQUEST':
        return { ...state, loadingDelete: true, successDelete: false };
      case 'DELETE_SUCCESS':
        return {
          ...state,
          loadingDelete: false,
          successDelete: true,
        };
      case 'DELETE_FAIL':
        return { ...state, loadingDelete: false, successDelete: false };
      case 'DELETE_RESET':
        return { ...state, loadingDelete: false, successDelete: false };
      default:
        return state;
    }
  };
export default function Structures() {
    const navigate = useNavigate();

    const { state } = useContext(Store);
    const { userInfo } = state;

    const [{ loading, error, structures, loadingDelete, 
        successDelete }, dispatch] =
        useReducer(reducer, {
          loading: true,
          error: '',
        });

    useEffect(() => {
        const fetchData = async () => {
            try {
            const { data } = await axios.get(
                `${BASE_URL}/structures`, {
                headers: { Authorization: `Bearer ${userInfo.token}` },
                });
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
            toast.success(data.message);
            } catch (err) {
              dispatch({
                type: 'FETCH_FAIL',
                payload: getError(err),
              });
              toast.error(getError(err));
            }
        };
        if (successDelete) {
            dispatch({ type: 'DELETE_RESET' });
        } else {
            fetchData();
        }
        }, [successDelete, error]);

    const deleteHandler = async (structure) => {
        if (window.confirm('Are you sure you want to delete?')) {
            try {
            dispatch({ type: 'DELETE_REQUEST' });
            const {data} = await axios.delete(`${BASE_URL}/structures/${structure._id}`, {
                headers: { Authorization: `Bearer ${userInfo.token}` },
            });
            dispatch({ type: 'DELETE_SUCCESS', payload: data });
            toast.success(data.message);
            } catch (error) {
              dispatch({
                  type: 'DELETE_FAIL',
                  payload: getError(error),
              });
              toast.error(getError(error));
            }
        }
        };
  return (
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
      <Helmet>
          <title>{ `Manage Empowerment Structures` }</title>
          <meta name="description" content={`Manage the various empowerment structures`}></meta>
      </Helmet>
      <div className="flex flex-wrap">
        
        <div className="w-full md:w-1/2 mb-4 md:pr-2">
          <h1 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Manage Empowerment Structures
          </h1>
        </div>

        <div className="w-full md:w-1/2 mb-4 md:pr-2">
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 mb-4 md:pr-2">
                    <Link to={"/manage/dashboard"}>
                        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            Dashboard
                        </button>
                    </Link>
                </div>
                <div className="w-full md:w-1/2 mb-4 md:pr-2">
                    <Link to={"/manage/structures/create"}>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            New Structure
                        </button>
                    </Link>
                </div>
            </div>
        </div>

      </div>

      {loading ? (
        <LoadingSpinner/>
      ) : error ? (
        <MessageInformation>{error}</MessageInformation>
      ) : (
        <div className="flex flex-wrap">

          {structures?.map((structure) => (
              <div key={structure._id} className="w-full md:w-1/2 lg:w-1/3 mb-4 md:pr-2 bg-green-100 p-2 rounded-md shadow-md m-1">
                  <h2 className="text-xl font-bold mb-2">{structure.title}</h2>
                  <p className="text-gray-700">{structure.summary}</p>
                  <div className="mt-4 flex justify-between items-center">
                      <button onClick={() => { navigate(`/structure/${structure.slug}`);}} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">View</button>
                      <button onClick={() => navigate(`/manage/structures/edit/${structure._id}`)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                      <button onClick={() => deleteHandler(structure)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                  </div>
              </div>
          ))}
          
        </div>
      )}

      {/* Cose here */}

    </div>

  )
}
