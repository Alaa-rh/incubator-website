import React from "react";
import logo from "../assets/images/logo.png";

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
            {/* اليسار: الصورة + الاسم + آخر رسالة */}
            <div className="flex items-center gap-4">
              <img src={logo} alt="logo" className="w-18 h-15" />

              <div className="flex flex-col">
                <span className="font-semibold">{contact.name}</span>
                <span className="text-xs text-gray-600">{contact.preview}</span>
              </div>
            </div>

            {/* اليمين: الوقت + عدد الرسائل غير المقروءة */}
            <div className="flex flex-col items-end gap-1">
              <p className="text-sm truncate text-gray-600">{contact.time}</p>

              {contact.unread > 0 && (
                <span className="bg-second-color text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {contact.unread}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;