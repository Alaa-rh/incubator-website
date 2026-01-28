import React from 'react'
import logo from "../assets/images/logo.png"
import girl from "../assets/images/girl.jpg"
import NavLinksGroup from "./NavLinksGroup"
import NavLinkUniversal from "./NavLinkUniversal"
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegMessage } from 'react-icons/fa6';
const UserNavbar = ({navOptions}) => {
  return (
    <div className='fixed top-0 left-0 w-full z-50 shadow-lg bg-white flex items-center justify-between '>
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
        to="/notificationspage"
        className="px-4 py-2 hover:scale-105 transition"
      />
      <NavLinkUniversal
      label={<img src={girl} alt='avatar' className='h-12 w-12 rounded-full object-contain' />}
      to="/VisitorSettings"
      className='px-4 py-2 hover:scale-105 transition'
      />
    </div>
  )
}

export default UserNavbar