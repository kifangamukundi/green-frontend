import React from 'react'
import {Link} from "react-router-dom";
import styles from "../../style";

export default function Structures() {
  return (
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="flex flex-row justify-center">
            <h1 className={`${styles.heading2}`}>
                Structures Management
            </h1>
        </div>
        
        <div className="flex flex-row justify-end">
            <Link to={"/manage/structures/create"}>
                <button className="bg-green-700 text-white rounded-md py-1 px-2 text-sm ml-10">New Structure</button>
            </Link>
        </div>
        
        <div className="flex flex-row justify-end pt-5">
            <Link to={"/dashboard"}>
                <button className="bg-green-700 text-white rounded-md py-1 px-2 text-sm ml-10">Back</button>
            </Link>
        </div>
        
        
        <div className="flex flex-wrap justify-center">

            <div className="bg-green-100 p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3 m-4">
                <h2 className="text-xl font-bold mb-2">Structure</h2>
                <p className="text-gray-700">Manage various Structure and projects.</p>
                <div className="mt-4 flex justify-between items-center">
                    <Link to={"/structures/slug"} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">View</Link>
                    <Link to={"/manage/structures/edit/id"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</Link>
                    <Link to={"/manage/structures"} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</Link>
                </div>
            </div>
            <div className="bg-green-100 p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3 m-4">
                <h2 className="text-xl font-bold mb-2">Structure</h2>
                <p className="text-gray-700">Manage various Structure and projects.</p>
                <div className="mt-4 flex justify-between items-center">
                    <Link to={"/structures/slug"} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">View</Link>
                    <Link to={"/manage/structures/edit/id"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</Link>
                    <Link to={"/manage/structures"} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</Link>
                </div>
            </div>
            <div className="bg-green-100 p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3 m-4">
                <h2 className="text-xl font-bold mb-2">Structure</h2>
                <p className="text-gray-700">Manage various Structure and projects.</p>
                <div className="mt-4 flex justify-between items-center">
                    <Link to={"/structures/slug"} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">View</Link>
                    <Link to={"/manage/structures/edit/id"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</Link>
                    <Link to={"/manage/structures"} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</Link>
                </div>
            </div>
            <div className="bg-green-100 p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3 m-4">
                <h2 className="text-xl font-bold mb-2">Structure</h2>
                <p className="text-gray-700">Manage various Structure and projects.</p>
                <div className="mt-4 flex justify-between items-center">
                    <Link to={"/structures/slug"} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">View</Link>
                    <Link to={"/manage/structures/edit/id"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</Link>
                    <Link to={"/manage/structures"} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</Link>
                </div>
            </div>
            <div className="bg-green-100 p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3 m-4">
                <h2 className="text-xl font-bold mb-2">Structure</h2>
                <p className="text-gray-700">Manage various Structure and projects.</p>
                <div className="mt-4 flex justify-between items-center">
                    <Link to={"/structures/slug"} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">View</Link>
                    <Link to={"/manage/structures/edit/id"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</Link>
                    <Link to={"/manage/structures"} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</Link>
                </div>
            </div>
            <div className="bg-green-100 p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3 m-4">
                <h2 className="text-xl font-bold mb-2">Structure</h2>
                <p className="text-gray-700">Manage various Structure and projects.</p>
                <div className="mt-4 flex justify-between items-center">
                    <Link to={"/structures/slug"} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">View</Link>
                    <Link to={"/manage/structures/edit/id"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</Link>
                    <Link to={"/manage/structures"} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</Link>
                </div>
            </div>

            
        </div>

    </div>

  )
}
