import React from "react"

const RadioGroup = ({ label, name, options = [], value, onChange, error = "", disabled = false, className = "" }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <p className="text-sm font-medium">{label}</p>}
      {options.map(opt => (
        <label key={opt.value} className="flex items-center gap-2">
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={onChange}
            disabled={disabled}
            className={`w-5 h-5 accent-main-color cursor-pointer ${className}`}
          />
          {opt.label}
        </label>
      ))}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export default RadioGroup