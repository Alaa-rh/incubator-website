import { NavLink } from "react-router-dom"

const CategoryGrid = ({ items, className }) => {
  return (
    <div className={`w-200 grid gap-6 mt-4 ${className}`}>
      {items.map(item => (
        <NavLink
          key={item.id}
          to={item.link}
          className="w-50 py-10 rounded-xl shadow-md flex flex-col items-center bg-white 
                     hover:bg-main-color hover:text-white transition-all duration-200"
        >
          <span className="text-5xl text-main-color">{item.icon}</span>
          <span className="mt-2 font-medium text-main-color">{item.label}</span>
        </NavLink>
      ))}
    </div>
  )
}

export default CategoryGrid
