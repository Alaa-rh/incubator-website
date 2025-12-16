import React from "react"

const Checkbox = ({ label, name, checked, onChange, error = "", disabled = false, className = "" }) => {
  return (
    <div className="flex items-center gap-2 hover:bg-white">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`w-5 h-5 accent-main-color cursor-pointer ${className}`}
      />
      <label htmlFor={name} className="text-lg">{label}</label>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export default Checkbox