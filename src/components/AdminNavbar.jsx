import React from 'react'
import SearchBar from './SearchBar';
import NavLinkUniversal from './NavLinkUniversal';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FaRegMessage } from 'react-icons/fa6';
import { FiSettings } from 'react-icons/fi';
import Button from './Button';

const AdminNavbar = ({BtnLabel, onBtnClick}) => {
  return (
    <header className="fixed top-0 right-90 w-400 h-20 bg-white shadow-md flex justify-between items-center px-20">
      <SearchBar />
      <div className="flex items-center gap-6 pl-6">
        <NavLinkUniversal label={<IoNotificationsOutline size={26} className="cursor-pointer text-gray-600" />} to="/notificationspage" />
        <NavLinkUniversal label={<FaRegMessage size={26} className="cursor-pointer text-gray-600" />} to="/messagespage" />
        <NavLinkUniversal label={<FiSettings size={24} className="cursor-pointer text-gray-600" />} to="/admin/settings" />
        <Button label={BtnLabel} onClick={onBtnClick} className="bg-main-color"/>
      </div>
      

    </header>
  )
}

export default AdminNavbar