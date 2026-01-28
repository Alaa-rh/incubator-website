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
      ? "font-bold text-main-color after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-main-color after:content-['']"
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
        relative inline-block px-3 py-2 text-lg transition
        ${isActive ? activeClass : ""}
        ${className}
      `}
    >
      {label}
    </Link>
  )
}

export default NavLinkUniversal


