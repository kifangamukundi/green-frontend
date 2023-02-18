import React from 'react'

export default function MessageInformation(props) {
  return (
    <>
      {props.children.map((error, index) => (
      <div key={index} className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">{error.param}: </strong>
        <span className="block sm:inline">{error.msg}</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <title>Close</title>
            <path d="M14.348 5.652a.999.999 0 1 0-1.414 1.414L11 7.414l-1.935 1.936a.999.999 0 1 0 1.414 1.414L12.414 9l1.935 1.935a.999.999 0 1 0 1.414-1.414L13.828 7.586l1.52-1.52z"/>
          </svg>
        </span>
      </div>
      ))}
    </>
  )
}
