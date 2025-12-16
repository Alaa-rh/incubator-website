import React from "react"

const ServiceCard = ({ title, descriptions=[], icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center hover:shadow-lg transition">
    <div className="flex flex-row items-center gap-1">
      {/* أيقونة الخدمة */}
      <div className="text-4xl mb-3">{icon}</div>
      
      {/* عنوان الخدمة */}
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      </div>
      {/* وصف الخدمة */}
      <ul className="text-sm">{descriptions.map(desc => <li>{desc}</li>)}</ul>
    </div>
  )
}

export default ServiceCard