import React from 'react'
import {Link} from "react-router-dom";
import styles from "../style";

export default function Dashboard() {
  return (
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <h1 className={`${styles.heading2} flex flex-wrap justify-center`}>
            Dashboard
        </h1>
        <div className="flex flex-wrap justify-center">
            <div className="bg-red-200 p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3 m-4">
                <h2 className="text-xl font-bold mb-2">Empowerment structures</h2>
                <p className="text-gray-700">Manage various Empowerment structures and projects.</p>
                <Link to={"/manage/structures"}>
                    <button className="bg-neutral-600 text-white rounded-md py-1 px-2 text-sm">Manage</button>
                </Link>
            </div>
            <div className="bg-green-200 p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3 m-4">
                <h2 className="text-xl font-bold mb-2">Committees</h2>
                <p className="text-gray-700">Manage committees and teams involved in various projects.</p>
                <Link to={"/manage/committees"}>
                    <button className="bg-neutral-600 text-white rounded-md py-1 px-2 text-sm">Manage</button>
                </Link>
            </div>
            <div className="bg-blue-200 p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3 m-4">
                <h2 className="text-xl font-bold mb-2">Data Tools</h2>
                <p className="text-gray-700">Manage the various data collections tools and surveys.</p>
                <Link to={"/manage/tools"}>
                    <button className="bg-neutral-600 text-white rounded-md py-1 px-2 text-sm">Manage</button>
                </Link>
            </div>
            <div className="bg-yellow-200 p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3 m-4">
                <h2 className="text-xl font-bold mb-2">App Settings</h2>
                <p className="text-gray-700">Manage the default typography and feel of the app.</p>
                <Link to={"/manage/settings"}>
                    <button className="bg-neutral-600 text-white rounded-md py-1 px-2 text-sm">Manage</button>
                </Link>
            </div>
            <div className="bg-indigo-200 p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3 m-4">
                <h2 className="text-xl font-bold mb-2">Partners</h2>
                <p className="text-gray-700">Manage partners interested in various projects.</p>
                <Link to={"/manage/partners"}>
                    <button className="bg-neutral-600 text-white rounded-md py-1 px-2 text-sm">Manage</button>
                </Link>
            </div>
            <div className="bg-purple-200 p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3 m-4">
                <h2 className="text-xl font-bold mb-2">App Pages</h2>
                <p className="text-gray-700">Manage app pages like the about, privacy policy and terms and conditions.</p>
                <Link to={"/manage/pages"}>
                    <button className="bg-neutral-600 text-white rounded-md py-1 px-2 text-sm">Manage</button>
                </Link>
            </div>
        </div>

    </div>

  )
}
