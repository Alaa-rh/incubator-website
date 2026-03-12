import React from "react"

const CategoryFilterBar = ({ categories, selected, onSelect, className = "" }) => {
  return (
    <div className={`mt-4 w-full overflow-x-auto flex gap-6 justify-between items-center py-2  bg-white ${className}`}>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`
            flex items-center justify-center min-w-[80px] px-4 py-2 rounded-md transition cursor-pointer
            ${selected === cat.id ? "bg-second-color text-white font-bold" : "border border-second-color"}
          `}
        >
          {cat.icon && <span className="inline-block text-2xl mb-1 px-2">{cat.icon}</span>}
          <span className="text-2xl">{cat.label}</span>
        </button>
      ))}
    </div>
  )
}

export default CategoryFilterBar