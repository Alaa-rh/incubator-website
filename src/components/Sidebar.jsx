import { NavLink } from "react-router-dom"
import girl from "../assets/images/girl.jpg"
import { useLocation } from "react-router-dom"
import {BuildDashboardOptions } from "../Utils/BuildDashboardOptions";

const Sidebar = ({ roles = [], userName, email }) => {
  const location = useLocation();

  const finalOptions = BuildDashboardOptions(roles);

  return (
    <aside className="fixed top-0 right-0 h-screen w-90 bg-white shadow-md p-4">
    
      <div className="flex items-center gap-4 mb-8">
        <img src={girl} alt="avatar" className="w-16 h-16 rounded-full mb-2" />
        <div>
          <p className="font-semibold">{userName}</p>
          <p>{email}</p>
        </div>
      </div>
      
      <nav className="flex flex-col gap-3">
        {finalOptions.map((opt, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2 ${
              location.pathname === opt.link
                ? "bg-main-color text-white rounded"
                : ""
            }`}
          >
            <span className="inline-block text-2xl pr-2">{opt.icon}</span>

            <NavLink to={opt.link} className="py-4 px-3">
              {opt.label}
            </NavLink>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar

