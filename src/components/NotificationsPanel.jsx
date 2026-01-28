import { useState } from "react"
import NotificationItem from "./NotificationItem"
import logo from "../assets/images/logo.png"

const initialNotifications = [
  {
    id: 1,
    image: logo,
    time: "2 دقيقة",
    status: "unread",
    message: "لديك رسالة جديدة",
    action: {
      label: "عرض الرسالة",
      link: "/messages/1"
    }
  },
  {
    id: 2,
    image: logo,
    time: "1 ساعة",
    status: "read",
    message: "تمت مشاهدة ملفك الشخصي",
    action: {
      label: "عرض الملف الشخصي",
      link: "/profile"
    }
  },
  {
    id: 3,
    image: logo,
    time: "1 ساعة",
    status: "unread",
    message: " بدء التسجيل في ورشة عمل أو دورة تدريبية (Soft Skills): ✨ ورشة عمل جديدة بعنوان: [عنوان الورشة]. سارع بالتسجيل المقاعد محدودة!",
    action: {
      label: "عرض الورشة",
      link: "/workshop/1"
    }
  }
]

const NotificationsPanel = () => {
  const [notifications, setNotifications] = useState(initialNotifications)

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id
          ? { ...notif, status: "read", read: true }
          : notif
      )
    )
  }

  return (
    <div className="container overflow-hidden py-4">

      {notifications.length === 0 && (
        <p className="text-gray-500 text-center mt-10">لا يوجد إشعارات حالياً</p>
      )}
      {notifications.map((notif) => (
        <div
          key={notif.id}
          onClick={() => markAsRead(notif.id)}
          className="mb-4 cursor-pointer"
        >
          <NotificationItem
            image={notif.image}
            time={notif.time}
            status={notif.status}
            read={notif.read}
          >
            <div className="flex items-center justify-between">
              <span>{notif.message}</span>

              {notif.action && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    window.location.href = notif.action.link
                  }}
                  className="bg-main-color text-white px-3 py-1 rounded text-sm"
                >
                  {notif.action.label}
                </button>
              )}
            </div>
          </NotificationItem>
        </div>
      ))}
    </div>
  )
}

export default NotificationsPanel