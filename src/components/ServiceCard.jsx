import React from "react"

const ServiceCard = ({ title, descriptions=[], icon, className}) => {
  return (
  <div className={`flex  ${ className}`}>
    <div className="bg-white border border-gray-400 rounded-lg p-5 my-8 mx-5 flex flex-col shadow-sm">
      <div className="flex justify-start mb-4">
      {/* أيقونة الخدمة */}
      <div className="text-6xl">{icon}</div>
      {/* عنوان الخدمة */}
      <h3 className="text-[28px] font-bold py-3">{title}</h3>
      </div>
      {/* وصف الخدمة */}
      <ul className="text-[20px]">{descriptions.map((desc, i) => (<li key={i}>- {desc}</li>))}</ul>
      </div>
 </div>
  )
}

export default ServiceCard