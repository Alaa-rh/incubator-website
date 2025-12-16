import React from "react"

const Stepper = ({ steps = [], current = 0, className = "" }) => {
  return (
    <div className={`flex justify-center items-center gap-4 ${className}`}>
      {steps.map((step, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <div className={`w-12 h-12 flex items-center justify-center rounded-full text-sm font-bold border
            ${idx < current ? "bg-second-color text-white border-second-color" :
              idx === current ? "bg-white text-main-color border-second-color" :
              "bg-gray-100 text-gray-400 border-gray-300"}`}>
            {step}
          </div>
          <span className={`${idx === current ? "text-second-color font-semibold" : idx < current ? "text-gray-600" : "text-gray-400"}`}>
          </span>
          {idx < steps.length - 1 && <div className="w-10 h-px bg-gray-300 mx-1" />}
        </div>
      ))}
    </div>
  )
}

export default Stepper