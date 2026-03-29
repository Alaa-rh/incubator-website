import React from "react"
import Input from "./Input"
const SearchBar = ({ placeholder = "ابحث...", onSearch }) => {
  const handleChange = (e) => {
    const value = e.target.value
    if (onSearch) onSearch(value.trim())
  }

  return (
    <div className="flex items-center gap-2 my-4">
      <Input
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
        className="flex-grow w-80 sm:w-64"
      />
    </div>
  )
}

export default SearchBar