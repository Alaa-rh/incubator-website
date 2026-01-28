import React from "react"
import logo from "../assets/images/logo.png"
import girl from "../assets/images/girl.jpg"
import NavLinksGroup from "./NavLinksGroup"
import NavLinkUniversal from "./NavLinkUniversal"
import { IoIosNotificationsOutline } from "react-icons/io"
import { FaRegMessage } from "react-icons/fa6"

const UserNavbar = ({ navOptions }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Main navigation links */}
        <NavLinksGroup
          options={navOptions}
          variant="mainpage"
          className="flex items-center gap-10 text-lg font-medium"
        />

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <NavLinkUniversal
            label={<FaRegMessage size={20} />}
            to="/messages"
            className="text-gray-600 hover:text-main-color transition"
          />

          <NavLinkUniversal
            label={<IoIosNotificationsOutline size={28} />}
            to="/notificationspage"
            className="text-gray-600 hover:text-main-color transition"
          />

          <NavLinkUniversal
            label={
              <img
                src={girl}
                alt="avatar"
                className="h-10 w-10 rounded-full object-cover border"
              />
            }
            to="/VisitorSettings"
            className="hover:ring-2 hover:ring-main-color rounded-full transition"
          />
        </div>

      </div>
    </nav>
  )
}

export default UserNavbar
