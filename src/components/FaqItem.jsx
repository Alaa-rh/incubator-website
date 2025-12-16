import React, { useState } from "react"

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-main-color rounded py-3">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center"
      >
        <span className="font-medium text-main-color">{question}</span>
        <span className="text-xl text-main-color">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <p className="mt-2 text-sm text-main-color">{answer}</p>
      )}
    </div>
  )
}

export default FaqItem