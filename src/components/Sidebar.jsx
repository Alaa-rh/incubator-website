import { NavLink } from "react-router-dom"
import girl from "../assets/images/girl.jpg"
import { useLocation } from "react-router-dom"
import { RoleOptions } from "../config/RoleOptions"

const Sidebar = ({ roles = [], userName, email }) => {
  const location = useLocation()

  // دمج خيارات كل الأدوار
  const mergedOptions = roles.flatMap(r => RoleOptions[r] || [])

  // إزالة كل روابط "تعديل الملف الشخصي"
  const withoutProfile = mergedOptions.filter(
    opt => opt.label !== "تعديل الملف الشخصي"
  )

  // جلب رابط تعديل الملف الشخصي الخاص بالمتطوع من RoleOptions
  let profileLink = null
  if (roles.includes("volunteer")) {
    const volunteerProfile = (RoleOptions["volunteer"] || []).find(
      opt => opt.label === "تعديل الملف الشخصي"
    )
    profileLink = volunteerProfile || null
  }

  //إزالة التكرار حسب الرابط
  const cleanedOptions = Array.from(
    new Map(withoutProfile.map(opt => [opt.link, opt])).values()
  )

  //بناء القائمة النهائية
  const finalOptions = [
    profileLink,
    ...cleanedOptions
  ].filter(Boolean)

  return (
    <aside className="fixed top-0 right-0 h-screen w-90 bg-white shadow-md p-4">
      
      {/* معلومات المستخدم */}
      <div className="flex items-center gap-4 mb-8">
        <img src={girl} alt="avatar" className="w-16 h-16 rounded-full mb-2" />
        <div>
          <p className="font-semibold">{userName}</p>
          <p>{email}</p>
        </div>
      </div>

      {/* الروابط */}
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
  )
}

export default Sidebar
