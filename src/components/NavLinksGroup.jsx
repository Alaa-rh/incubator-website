import { useEffect, useState } from "react"
import NavLinkUniversal from "./NavLinkUniversal"

const NavLinksGroup = ({ options, className = "", variant= "default" }) => {
  const [activeSection, setActiveSection] = useState(null)

 useEffect(() => {
  const handleScroll = () => {
    options.forEach((opt) => {
      if (!opt.scrollId) return

      const section = document.getElementById(opt.scrollId)
      if (!section) return

      const rect = section.getBoundingClientRect()

      const triggerLine = window.innerHeight * 0.20

      if (rect.top <= triggerLine && rect.bottom >= triggerLine) {
        setActiveSection(opt.label)
      }
    })
  }

  window.addEventListener("scroll", handleScroll)
  handleScroll()

  return () => window.removeEventListener("scroll", handleScroll)
}, [options])

  return (
    <nav className={className}>
      {options.map((opt, idx) => (
        <NavLinkUniversal
          key={idx}
          {...opt}
          isActive={activeSection === opt.label}
          variant={variant}
        />
      ))}
    </nav>
  )
}

export default NavLinksGroup