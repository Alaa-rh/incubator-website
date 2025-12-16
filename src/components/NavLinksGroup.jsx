import React from "react"
import NavLinkUniversal from "./NavLinkUniversal"

const NavLinksGroup = ({ options, className }) => {
  return (
    <nav className={className}>
      {options.map((opt, idx) => (
        <NavLinkUniversal
          key={idx}
          label={opt.label}
          to={opt.to}
          scrollId={opt.scrollId}
        />
      ))}
    </nav>
  )
}

export default NavLinksGroup