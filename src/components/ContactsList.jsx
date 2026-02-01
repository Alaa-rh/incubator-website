import React from "react"
import logo from "../assets/images/logo.png"
const ContactsList = ({ contacts, onSelect, selectedId }) => {
  return (
    <div className="w-full md:w-1/3 p-2 mx-6 bg-white border border-second-color overflow-y-auto">
      <ul className="space-y-3">
        {contacts.map((contact) => (
          <li
            key={contact.id}
            onClick={() => onSelect(contact.id)}
            className={`flex justify-between items-center cursor-pointer p-3 rounded-lg shadow-sm ${
              selectedId === contact.id
                ? "bg-white-color"
                : "hover:bg-gray-100 transition"
            }`}
          >
            <div className="flex items-center gap-4">
              <img src={logo} alt="logo" className="w-18 h-15" />
              <div className="flex flex-col">
                <span className="font-semibold">{contact.name}</span>
                <span className="text-xs">{contact.preview}</span>
              </div>
            </div>
              <p className="align-self-end text-sm truncate text-gray-600">{contact.time}</p>
            
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactsList