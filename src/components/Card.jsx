import React from "react"

const Card = ({ title, description, children, className = "" }) => {
  return (
    <div className={`rounded-lg shadow p-4 bg-white ${className}`}>
      {children}
      {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
      {description && <p className="text-sm mb-2">{description}</p>}
    </div>
  )
}

export default Card