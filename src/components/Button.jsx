import React from "react"

const Button = ({ label, onClick, type = "button", disabled = false, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn text-white font-bold py-2 px-4 rounded transition ${className}`}
    >
      {label}
    </button>
  )
}

export default Button