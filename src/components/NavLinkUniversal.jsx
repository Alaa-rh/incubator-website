import { Link, useLocation } from "react-router-dom"

const NavLinkUniversal = ({
  label,
  to,
  scrollId,
  className = "",
  variant = "",
  isActive
}) => {
  const location = useLocation()

  const activeClass =
    variant === "landing"
      ? "text-second-color font-bold"
      : variant === "mainpage"
      ? "font-bold border border-b-2 border-main-color"
      : "text-second-color"
  const handleClick = (e) => {
    if (scrollId && location.pathname === to) {
      e.preventDefault()
      const el = document.getElementById(scrollId)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
      window.history.replaceState(null, "", `${to}#${scrollId}`)
    }
  }

  return (
    <Link
      to={scrollId ? `${to}#${scrollId}` : to}
      onClick={handleClick}
      className={`
        px-3 py-2 text-lg transition
        ${isActive ? activeClass : ""}
        ${className}
      `}
    >
      {label}
    </Link>
  )
}

export default NavLinkUniversal