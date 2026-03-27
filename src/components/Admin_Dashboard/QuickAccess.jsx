import { MdWork, MdPeople, MdSchool, MdPersonAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";

const QuickAccess = () => {
  const items = [
    { label: "طلبات المشاريع", link: "/admin/project-requests", icon: <MdWork /> },
    { label: "طلبات التطوع", link: "/admin/volunteer-requests", icon: <MdPeople /> },
    { label: "طلبات الورشات", link: "/admin/workshop-requests", icon: <MdSchool /> },
    { label: "إضافة مستخدم", link: "/admin/add-user", icon: <MdPersonAdd /> },
  ];

  return (
    <div className=" mt-8">
      <h2 className="text-xl font-bold mb-4">الوصول السريع :</h2>

      <div className="grid grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.link}
            className="bg-main-color text-white p-4 rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-all duration-200"
          >
            <span className="text-3xl">{item.icon}</span>
            <span className="text-lg">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default QuickAccess;
