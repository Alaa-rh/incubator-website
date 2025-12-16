import React from "react"

const Select = ({ label, name, value, onChange, options = [], placeholder = "", error = "", disabled = false, className = "" }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={name} className="text-sm font-medium">{label}</label>}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full border border-second-color rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-700 ${className}`}
      >
        <option value="" disabled hidden>{placeholder}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value} className="bg-main-color text-white hover:bg-white">{opt.label}</option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export default Select