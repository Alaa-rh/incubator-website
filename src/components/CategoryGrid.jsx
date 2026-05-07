import { NavLink } from "react-router-dom"

const CategoryGrid = ({ items, className }) => {
   return (
  <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 ${className}`}>
    {items.map(item => (
      <NavLink
        key={item.id}
        to={item.link}
       
        className="w-full mx-auto py-10 rounded-xl shadow-lg flex flex-col items-center bg-white 
                   hover:scale-105 transition-all duration-200"
      >
        <span className="text-5xl text-main-color">{item.icon}</span>
        <span className="mt-2 font-medium text-main-color text-center px-2">{item.label}</span>
      </NavLink>
    ))}
  </div>
)
}

export default CategoryGrid
