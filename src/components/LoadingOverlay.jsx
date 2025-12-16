import React from "react"
import { ClipLoader } from "react-spinners" 

const LoadingOverlay = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center m-50 py-10">
      <ClipLoader color="var(--secondary-color)" size={50} />
      {children && (
        <div className="mt-4 text-gray-600 text-sm">
          {children}
        </div>
      )}
    </div>
  )
}

export default LoadingOverlay