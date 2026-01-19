import React from "react"

const RoleCard = ({ title, description, children, className = "" }) => {
  return (
    <div className={`rounded-lg shadow p-4 bg-white ${className}`}>
      {children}
      {title && <h3 className="text-second-color text-center text-[32px] font-bold mb-2">{title}</h3>}
      {description && <p className="text-[28px] mb-2">{description}</p>}
    </div>
  )
}

export default RoleCard