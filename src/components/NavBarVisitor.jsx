import React from 'react'
import logo from "../assets/images/logo.png"
import NavLinksGroup from "./NavLinksGroup"
import NavLinkUniversal from "./NavLinkUniversal"
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegMessage } from 'react-icons/fa6';
const NavBarVisitor = ({navOptions}) => {
  return (
    <div className='px-6 py-2 mb-4 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-lg'>
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
      </div>

      <NavLinksGroup options={navOptions} variant="mainpage" className="container flex justify-between items-center font-medium text-[30px]" />

      <NavLinkUniversal
        label={<FaRegMessage size={20} />}
        to=""
        className="px-4 py-2 hover:scale-105 transition"
      />
      <NavLinkUniversal
        label={<IoIosNotificationsOutline size={30} />}
        to=""
        className="px-4 py-2 hover:scale-105 transition"
      />
    </div>
  )
}

export default NavBarVisitor