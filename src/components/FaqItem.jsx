import React, { useState } from "react"

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative border border-main-color rounded-lg py-3 transition px-6 mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-100 cursor-pointer text-right text-main-color text-[28px] transition duration-300"
      >
        {question}
      </button>
      {isOpen && (
        <p className="mt-2 text-[28px] text-main-color transition">{answer}</p> 
      )}
    </div>
  )
}

export default FaqItem