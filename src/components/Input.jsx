import React from "react"

const Input = ({ label, name, type = "text", value, onChange, placeholder = "", error = "", disabled = false, className = "" }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={name} className="text-sm font-medium">{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full border border-second-color rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-700 ${disabled ? "bg-gray-100" : ""} ${className}`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export default Input