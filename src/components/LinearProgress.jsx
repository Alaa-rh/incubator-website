import React from "react"

const LinearProgress = ({ steps = 1, current = 0, className = "" }) => {
  // نسبة التقدم = رقم الخطوة الحالية ÷ عدد الخطوات الكلي
  const progressPercent = (current / (steps - 1)) * 100

  return (
    <div className={`w-full ${className}`}>
      <div className="relative border w-full h-2 bg-white rounded">
        <div
          className="absolute top-0 left-0 h-2 bg-second-color rounded transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  )
}

export default LinearProgress