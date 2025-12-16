import React, { useEffect, useState } from "react"
import axios from "axios"
import NotificationItem from "./NotificationItem"
import LoadingOverlay from "./LoadingOverlay"

const NotificationsPanel = () => {
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("/api/notifications/")
      .then(res => {
        // نضيف خاصية read=false افتراضياً
        const data = res.data.map(n => ({ ...n, read: false }))
        setNotifications(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("فشل في جلب الإشعارات:", err)
        setLoading(false)
      })
  }, [])

  // دالة لتغيير حالة إشعار واحد إلى مقروء
  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    )
  }

  if (loading) {
    return (
      <LoadingOverlay>
        جاري تحميل الإشعارات...
      </LoadingOverlay>
    )
  }

  if (notifications.length === 0) {
    return <div className="text-center py-6 text-gray-500">لا توجد إشعارات حالياً</div>
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded shadow overflow-hidden">
      {notifications.map((notif) => (
        <div
          key={notif.id}
          onClick={() => markAsRead(notif.id)} // عند الضغط يتغير لحالة مقروء
          className="cursor-pointer"
        >
          <NotificationItem
            icon={notif.icon_url}
            time={notif.time}
            status={notif.status}
            read={notif.read}
          >
            <div className="flex items-center justify-between">
              <span>{notif.message}</span>
              {notif.action && (
                <button
                  onClick={(e) => {
                    e.stopPropagation() // منع تغيير الحالة عند الضغط على الزر
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