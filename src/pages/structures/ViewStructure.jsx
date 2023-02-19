import React, { useReducer, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { generateHTML } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
import { Helmet } from 'react-helmet-async';

import { getError, BASE_URL } from '../../utils';
import styles from '../../style';
import { LoadingSpinner, MessageInformation } from '../../components';

const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return {
          ...state,
          structure: action.payload.structure,
          loading: false,
        };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
export default function Structures() {
    const params = useParams();
    const { slug: slug } = params;

    const [{ loading, error, structure }, dispatch] =
        useReducer(reducer, {
          loading: true,
          error: '',
        });

    const [json, setJson] = useState({
        "type": "doc",
        "content": [
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "Hello World"
                    }
                ]
            }
        ]
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${BASE_URL}/structures/slug/${slug}`);
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
            toast.success(data.message);
            setJson(data.structure.content);
            } catch (err) {
                dispatch({
                    type: 'FETCH_FAIL',
                    payload: getError(err),
                });
                console.log(err)
            }
        };
        fetchData();
        }, []);

    const output = useMemo(() => {
        return generateHTML(json, [
            StarterKit,
        ])
        }, [json])

  return (
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <Helmet>
            <title>{ `${ structure?.title }` }</title>
            <meta name="description" content={`${structure?.summary}`}></meta>
        </Helmet>

      {loading ? (
        <LoadingSpinner/>
      ) : error ? (
        <MessageInformation>{error}</MessageInformation>
      ) : (
        <div>

          <div className="flex flex-wrap">

            <div className="w-full mb-4">
                <h1 className={styles.heading3}>
                    {structure?.title}
                </h1>
            </div>

          </div>

          <div className="prose prose-stone">
            <div dangerouslySetInnerHTML={{ __html: output }} />
          </div>
          
        </div>
      )}
      
    </div>

  )
}
