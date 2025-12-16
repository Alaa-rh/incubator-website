import React from "react"

const Textarea = ({ label, name, value, onChange, placeholder = "", error = "", disabled = false, rows = 6, className = "" }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={name} className="text-sm font-medium">{label}</label>}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={`w-full border border-second-color rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-700 ${disabled ? "bg-gray-100" : ""} ${className}`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export default Textarea