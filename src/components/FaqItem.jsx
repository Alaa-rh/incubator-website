import React, { useState } from "react"

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-fit border border-main-color rounded-lg py-3 transition px-6 mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full font-medium text-main-color transition duration-300"
      >
        {question}
      </button>
      {isOpen && (
        <p className="mt-2 text-sm text-main-color">{answer}</p> 
      )}
    </div>
  )
}

export default FaqItem