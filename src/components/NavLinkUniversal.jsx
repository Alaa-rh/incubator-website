import React from "react"
import { Link, useLocation } from "react-router-dom"

const NavLinkUniversal = ({ label, to, scrollId, className }) => {  
  const location = useLocation()

  const handleClick = (e) => {
    // إذا الرابط داخلي بنفس الصفحة
    if (scrollId && location.pathname === to) {
      e.preventDefault()
      const el = document.getElementById(scrollId)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <Link
      to={scrollId ? `${to}#${scrollId}` : to}
      onClick={handleClick}
      className={`px-3 py-2 text-lg text-white transition ${className}`}
    >
      {label}
    </Link>
  )
}

export default NavLinkUniversal