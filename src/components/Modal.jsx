import React from "react"

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  footer = null, 
  className = "" 
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className={`border border-second-color bg-white rounded-lg shadow-lg p-6 relative max-w-md w-full ${className}`}>
        
        {/* زر الإغلاق */}
        <button 
          onClick={onClose} 
          className="absolute top-3 left-3 text-2xl text-main-color hover:text-gray-700"
        >
          &times;
        </button>

        {/* العنوان */}
        {title && <h2 className="text-lg font-bold mb-4 text-center">{title}</h2>}

        {/* المحتوى */}
        <div className="text-center text-gray-600">{children}</div>

        {/* الفوتر */}
        {footer && <div className="mt-6 flex justify-center">{footer}</div>}
      </div>
    </div>
  )
}

export default Modal