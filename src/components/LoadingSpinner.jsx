import React from 'react'

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-5 h-5 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
  )
}

{/* <div class="flex justify-center items-center">
  <div class="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin"></div>
</div> */}