import { NavLink } from "react-router-dom";
import admin from "../config/RoleOptions";
import girl from "../assets/images/girl.jpg"

const AdminSidebar = ({adminName, email }) => {
  return (
    <aside className="fixed top-0 right-0 h-screen w-90 bg-white shadow-md p-4">

      {/* معلومات المستخدم */}
           <div className="flex items-center gap-4 mb-8 border-b">
             <img src={girl} alt="avatar" className="w-16 h-16 rounded-full mb-2" />
             <div>
               <p className="font-semibold">{adminName}</p>
               <p>{email}</p>
             </div>
           </div>

       {/*الروابط */}
      <nav className="flex flex-col gap-8">
        {admin.map((opt, idx) => (
          <div key={idx}>
          <NavLink
          
            to={opt.link}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-main-color text-white"
                  : "hover:bg-gray-100"
              }`
            }
          >
            <span className="text-2xl text-second-color">{opt.icon}</span>
            <span className="text-lg">{opt.label}</span>
          </NavLink>
          </div>
        ))}
      </nav>

    </aside>
  );
};

export default AdminSidebar;
