import { NavLink } from "react-router-dom"
import girl from "../assets/images/girl.jpg"
import React, { useLocation } from "react"    
const roleOptions = {
  visitor: [
    { label: "تعديل الملف الشخصي", link: "/profile" },
    { label: "تواصل معنا", link: "/contact" },
    { label: "إعدادات الحساب", link: "/settings" },
  ],
  // باقي الأدوار...
}

const Sidebar = ({ role, userName }) => {
  const options = roleOptions[role] || roleOptions.visitor
  const location = useLocation()

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-100 shadow-md p-4">
      <div className="flex flex-col items-center mb-6">
        <img src={girl} alt="avatar" className="w-16 h-16 rounded-full mb-2" />
        <p className="text-gray-800 font-semibold">{userName}</p>
      </div>
      <nav className="flex flex-col gap-3">
        {options.map((opt, idx) => (
          <NavLink
            key={idx}
            to={opt.link}
            className={`px-3 py-2 ${location.pathname === opt.link ? 'bg-main-color text-white rounded' : 'hover:bg-main-color hover:text-white rounded'}`}
          >
            {opt.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
export default Sidebar