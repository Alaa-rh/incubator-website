import { NavLink } from "react-router-dom"

const CategoryGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {items.map(item => (
        <NavLink
          key={item.id}
          to={item.link}
          className="py-10 rounded-xl shadow-md flex flex-col items-center bg-white 
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
