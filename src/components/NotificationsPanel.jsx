import { useState } from "react"
import NotificationItem from "./NotificationItem"
import CategoryFilterBar from "./CategoryFilterBar"
import logo from "../assets/images/logo.png"
import { useRole } from "../hooks/useRole"

const initialNotifications = [
  { id: 1, image: logo, time: "2 دقيقة", status: "unread", category: "general", message: "لديك رسالة جديدة", action: { label: "عرض الرسالة", link: "/messagespage" }},
  { id: 2, image: logo, time: "1 ساعة", status: "unread", category: "general", message: "تمت مشاهدة ملفك الشخصي", action: { label: "عرض الملف الشخصي", link: "/profileinfo" }},
  { id: 10, image: logo, time: "10 دقائق", status: "unread", category: "incubation", message: "تم تحديث حالة مشروعك", action: { label: "عرض المرحلة", link: "/incubation-stages" }},
  { id: 11, image: logo, time: "20 دقيقة", status: "unread", category: "evaluation", message: "لديك تقييم جديد", action: { label: "عرض التقييم", link: "/evaluation-center" }},
]

const NotificationsPanel = () => {
  const [filter, setFilter] = useState("all")
  const { roles } = useRole()

  //تحديد أنواع الإشعارات حسب الدور
  const roleCategories = new Set(["general"])

  if (roles.includes("ideaOwner")) roleCategories.add("incubation")
  if (roles.includes("volunteer")) roleCategories.add("volunteer")
  if (roles.includes("volunteer_evaluator")) roleCategories.add("evaluation")
  if (roles.includes("volunteer_incubated")) roleCategories.add("incubation")

  // الإشعارات التي تخص المستخدم فقط
  const userNotifications = initialNotifications.filter(n =>
    roleCategories.has(n.category)
  )

  //دور رئيسي ليس له فلترة
  const basicRoles = ["ideaOwner", "visitor", "volunteer"]

  const shouldShowFilter = !(
    roles.length === 1 && basicRoles.includes(roles[0])
  )

  // بناء قائمة الفئات حسب الدور
  const categories = [
    { id: "all", label: "الكل" },
    roleCategories.has("incubation") && { id: "incubation", label: "إشعارات الاحتضان" },
    roleCategories.has("evaluation") && { id: "evaluation", label: "إشعارات التقييم" },
    roleCategories.has("volunteer") && { id: "volunteer", label: "إشعارات التطوع" },
  ].filter(Boolean)

  //
  const filteredNotifications =
    filter === "all"
      ? userNotifications
      : userNotifications.filter(n => n.category === filter)

  return (
    <div className="overflow-hidden">

      {shouldShowFilter && (
        <CategoryFilterBar
          categories={categories}
          selected={filter}
          onSelect={setFilter}
          className="mb-4"
        />
      )}

      {filteredNotifications.length === 0 && (
        <p className="text-gray-500 text-center mt-10">لا يوجد إشعارات حالياً</p>
      )}

      {filteredNotifications.map((notif) => (
        <NotificationItem
          key={notif.id}
          image={notif.image}
          time={notif.time}
          status={notif.status}
          read={notif.read}
        >
          <div className="flex items-center justify-between">
            <span>{notif.message}</span>

            {notif.action && (
              <button
                onClick={() => (window.location.href = notif.action.link)}
                className="bg-main-color text-white px-3 py-1 rounded text-sm"
              >
                {notif.action.label}
              </button>
            )}
          </div>
        </NotificationItem>
      ))}
    </div>
  )
}

export default NotificationsPanel
