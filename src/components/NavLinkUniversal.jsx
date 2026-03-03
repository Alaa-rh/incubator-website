import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

const NavLinkUniversal = ({
  label,
  to,
  scrollId,
  className = "",
  variant = ""
}) => {
  const location = useLocation()
  const [isActive, setIsActive] = useState(false)

  // تحديد الـ active للـ landing + mainpage
  useEffect(() => {
    // إذا لم يكن scrollId
    if (!scrollId) {
      setIsActive(location.pathname === to)
      return
    }

    //إذا الرابط   Scroll
    const handleScroll = () => {
      const section = document.getElementById(scrollId)
      if (!section) return

      const rect = section.getBoundingClientRect()
      const inView = rect.top <= 150 && rect.bottom >= 150

      setIsActive(inView)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [location, scrollId, to])

  const activeClass =
    variant === "landing"
      ? "text-second-color font-bold"
      : variant === "mainpage"
      ? "font-bold border-b-2 border-main-color"
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