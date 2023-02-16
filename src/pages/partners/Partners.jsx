import React from 'react'
import {Link} from "react-router-dom";
import styles from "../../style";

export default function Partners() {
  return (
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <h1 className={`${styles.heading2} flex flex-wrap justify-center`}>
            Partners Management
        </h1>
        <div className="flex flex-wrap justify-center">

            <div className="bg-green-100 p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3 m-4">
                <h2 className="text-xl font-bold mb-2">Partner</h2>
                <p className="text-gray-700">Manage various Structure and projects.</p>
                <div className="mt-4 flex justify-between items-center">
                    <Link to={"/structures/slug"} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">View</Link>
                    <Link to={"/manage/structures/edit/id"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</Link>
                    <Link to={"/manage/structures"} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</Link>
                </div>
            </div>
            <div className="bg-green-100 p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3 m-4">
                <h2 className="text-xl font-bold mb-2">Partner</h2>
                <p className="text-gray-700">Manage various Structure and projects.</p>
                <div className="mt-4 flex justify-between items-center">
                    <Link to={"/structures/slug"} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">View</Link>
                    <Link to={"/manage/structures/edit/id"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</Link>
                    <Link to={"/manage/structures"} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</Link>
                </div>
            </div>
            <div className="bg-green-100 p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3 m-4">
                <h2 className="text-xl font-bold mb-2">Partner</h2>
                <p className="text-gray-700">Manage various Structure and projects.</p>
                <div className="mt-4 flex justify-between items-center">
                    <Link to={"/structures/slug"} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">View</Link>
                    <Link to={"/manage/structures/edit/id"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</Link>
                    <Link to={"/manage/structures"} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</Link>
                </div>
            </div>
            <div className="bg-green-100 p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3 m-4">
                <h2 className="text-xl font-bold mb-2">Partner</h2>
                <p className="text-gray-700">Manage various Structure and projects.</p>
                <div className="mt-4 flex justify-between items-center">
                    <Link to={"/structures/slug"} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">View</Link>
                    <Link to={"/manage/structures/edit/id"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</Link>
                    <Link to={"/manage/structures"} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</Link>
                </div>
            </div>
            <div className="bg-green-100 p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3 m-4">
                <h2 className="text-xl font-bold mb-2">Partner</h2>
                <p className="text-gray-700">Manage various Structure and projects.</p>
                <div className="mt-4 flex justify-between items-center">
                    <Link to={"/structures/slug"} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">View</Link>
                    <Link to={"/manage/structures/edit/id"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</Link>
                    <Link to={"/manage/structures"} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</Link>
                </div>
            </div>
            <div className="bg-green-100 p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3 m-4">
                <h2 className="text-xl font-bold mb-2">Partner</h2>
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
