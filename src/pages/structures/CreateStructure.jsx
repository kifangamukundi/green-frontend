import React, { useContext, useReducer, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

import { Store } from '../../Store';
import { getError, BASE_URL } from '../../utils';
import { LoadingSpinner, MessageInformation, Tiptap, TipTapPreview } from '../../components';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_REQUEST':
      return { ...state, loadingCreate: true };
    case 'CREATE_SUCCESS':
      return { ...state, loadingCreate: false, structure: action.payload.structure };
    case 'CREATE_FAIL':
      return { ...state, loadingCreate: false, error: action.payload };
    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true, errorUpload: '' };
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        loadingUpload: false,
        errorUpload: '',
      };
    case 'UPLOAD_FAIL':
      return { ...state, loadingUpload: false, errorUpload: action.payload };

    default:
      return state;
  }
};
export default function CreateStructure() {
  const navigate = useNavigate();

  const { state } = useContext(Store);
  const { userInfo } = state;

  const [{ error, loadingCreate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });
  
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState('');
  const [images, setImages] = useState([]);
  const [content, setContent] = useState({});

  const createHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'CREATE_REQUEST' });
      const {data} = await axios.post(
        `${BASE_URL}/structures`,
        {
          title,
          slug,
          summary,
          image,
          images,
          content,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.user.token}` },
        }
      );
      dispatch({ type: 'CREATE_SUCCESS', payload: data });
      toast.success(data.message);
      navigate('/manage/structures');
    } catch (err) {
      dispatch({ type: 'CREATE_FAIL', payload: getError(err), });
      console.log(err)
    }
  };
  return (
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
      <Helmet>
          <title>{ `Create Empowerment Structure` }</title>
          <meta name="description" content={`Create an empowerment structures`}></meta>
      </Helmet>
      {loadingCreate ? (
        <LoadingSpinner/>
      ) : error ? (
        <MessageInformation>{error}</MessageInformation>
      ) : (
        <div className="flex flex-wrap">
          
          <div className="w-full md:w-1/2 mb-4 md:pr-2">
            <h1 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Create New Structure
            </h1>
          </div>

          <div className="w-full md:w-1/2 mb-4 md:pr-2">
              <div className="flex flex-wrap">

                  <div className="w-full md:w-1/2 mb-4 md:pr-2">
                      <Link to={"/manage/structures"}>
                          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                              Structures
                          </button>
                      </Link>
                  </div>

                  <div className="w-full md:w-1/2 mb-4 md:pr-2">
                      <Link to={"/manage/structures/create"}>
                          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                              Preview
                          </button>
                      </Link>
                  </div>

              </div>
          </div>

        </div>
      )}

      <form className="flex flex-wrap">

        <div className="w-full md:w-1/2 mb-4 md:pr-2">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="title" 
            type="text" 
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="w-full md:w-1/2 mb-4 md:pl-2">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="slug">
            Slug
          </label>
          <input 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="slug" 
            type="text" 
            placeholder="Example... structure-name"
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>

        <div className="w-full mb-4">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="summary">
            Short Summary
          </label>
          <textarea 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="summary" 
            placeholder="Enter your summary here"
            onChange={(e) => setSummary(e.target.value)}
          >
          </textarea>
        </div>

        <div className="w-full mb-4">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input type="file" id="image" className="hidden" />
          <label htmlFor="image" className="block w-full md:w-1/2 mb-4 md:pr-2 md:float-left cursor-pointer bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Upload Image
          </label>
          <div className="flex items-center justify-center w-full md:w-1/2 mb-4 md:pl-2">
            <div id="image-preview" className="w-full p-2 rounded-lg border border-gray-300">
              <img id="preview" className="w-full h-auto" src="" alt="Image Preview" />
              <div id="no-preview" className="hidden">
                No image selected.
              </div>
            </div>
          </div>
        </div>

      </form>

      <div className="w-full mb-4">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="content">
          Structure Content
        </label>
        <Tiptap setContent={setContent} />
      </div>

      <div className="mb-4">
          <button onClick={createHandler} disabled={loadingCreate} className={`bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded ${loadingCreate ? 'opacity-50 cursor-not-allowed' : ''}`} type="button" >
              Create
          </button>
      </div>
      {/* preview */}
      {/* <TipTapPreview content={content} /> */}

      {/* testing */}
      {/* {error.length > 0 && <MessageInformation>{error}</MessageInformation>} */}
      
    </div>
  )
}
