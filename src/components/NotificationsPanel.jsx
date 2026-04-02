import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotificationItem from "./NotificationItem";
import CategoryFilterBar from "./CategoryFilterBar";
import { useRole } from "../hooks/useRole";
import { markAsRead } from "../Redux/notificationsSlice";

const NotificationsPanel = () => {
  const dispatch = useDispatch();
  const { roles } = useRole();

  // الإشعارات تأتي الآن من App.jsx
  const notifications = useSelector((state) => state.notifications.items);

  const [filter, setFilter] = useState("all");

  // الفئات حسب الدور
  const roleCategories = new Set(["general"]);

  if (roles.includes("ideaOwner")) roleCategories.add("incubation");
  if (roles.includes("volunteer")) roleCategories.add("volunteer");
  if (roles.includes("volunteer_evaluator")) roleCategories.add("evaluation");
  if (roles.includes("volunteer_incubated")) roleCategories.add("incubation");

  // مؤقتًا: عرض كل الإشعارات حتى لا تختفي بعد القراءة
  const userNotifications = notifications;

  const basicRoles = ["ideaOwner", "visitor", "volunteer"];
  const shouldShowFilter =
    !(roles.length === 1 && basicRoles.includes(roles[0]));

  const categories = [
    { id: "all", label: "الكل" },
    roleCategories.has("incubation") && {
      id: "incubation",
      label: "إشعارات الاحتضان",
    },
    roleCategories.has("evaluation") && {
      id: "evaluation",
      label: "إشعارات التقييم",
    },
    roleCategories.has("volunteer") && {
      id: "volunteer",
      label: "إشعارات التطوع",
    },
  ].filter(Boolean);

  const filteredNotifications =
    filter === "all"
      ? userNotifications
      : userNotifications.filter((n) => n.category === filter);

  const handleNotificationClick = (notif) => {
    dispatch(markAsRead(notif.id));

    if (notif.action?.link) {
      //eslint-disable-next-line
      window.location.href = notif.action.link;
    }
  };

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
        <p className="text-gray-500 text-center mt-10">
          لا يوجد إشعارات حالياً
        </p>
      )}

      {filteredNotifications.map((notif) => (
        <NotificationItem
          key={notif.id}
          image={notif.image}
          time={notif.time}
          status={notif.status}
        >
          <div className="flex items-center justify-between">
            <span>{notif.message}</span>

            {notif.action && (
              <button
                onClick={() => handleNotificationClick(notif)}
                className="bg-main-color text-white px-3 py-1 rounded text-sm"
              >
                {notif.action.label}
              </button>
            )}
          </div>
        </NotificationItem>
      ))}
    </div>
  );
};

export default NotificationsPanel;
