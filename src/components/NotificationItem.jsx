import React from "react"

const NotificationItem = ({ image, time, status, read = false, children }) => {
  return (
    <div
      className={`flex items-start gap-4 p-4 border-b border-gray-200 relative 
        ${read ? "bg-white" : "bg-third-color shadow-md"}`}
    >
      {/* صورة أو شعار */}
      <div className="w-10 h-10 flex-shrink-0">
        <img src={image} alt="logo" className="w-full h-full object-contain" />
      </div>

      {/* محتوى الإشعار */}
      <div className="flex-1 space-y-1">
        <div className="text-sm text-gray-600">{time} • {status}</div>
        <div className="text-base text-gray-800 leading-relaxed">
          {children}
        </div>
      </div>

      {/* دائرة خضراء للإشعارات الجديدة */}
      {!read && (
        <span className="absolute top-4 right-2 w-3 h-3 bg-second-color rounded-full"></span>
      )}
    </div>
  )
}

export default NotificationItem