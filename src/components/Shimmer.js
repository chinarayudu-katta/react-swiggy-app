import React from 'react'

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      
      {Array(12)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="w-[250px] h-[350px] bg-gray-200 rounded-xl p-4 animate-pulse shadow-lg"
          >
            <div className="h-[150px] bg-gray-300 rounded-lg mb-4"></div>

            <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>

            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>

            <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>

            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        ))}
    </div>
  )
}

export default Shimmer