import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotificationItem from "./NotificationItem";
import CategoryFilterBar from "./CategoryFilterBar";
import { useRole } from "../hooks/useRole";
import { markAsRead } from "../redux/notificationsSlice";

// ============= WebSocket =============
import { connectWebSocket, subscribeToNotifications } from "../api/websocket";
// ============= REST API (للإشعارات القديمة) =============
// import { useGetNotificationsQuery, useMarkNotificationAsReadMutation } from "../api/endpoints/notificationsApi";

const NotificationsPanel = () => {
  const dispatch = useDispatch();
  const { roles, token } = useRole();

  // ============= REST API: جلب الإشعارات القديمة =============
  // const { data: oldNotifications, refetch } = useGetNotificationsQuery(undefined, {
  //   skip: !token,
  // });

  // ============= WebSocket: استقبال الإشعارات الجديدة =============
  useEffect(() => {
    if (!token) return;

    // تشغيل WebSocket
    connectWebSocket(token);

    // الاشتراك في الإشعارات الجديدة
    const unsubscribe = subscribeToNotifications((newNotification) => {
      // addNotification موجود مسبقاً في الـ slice
      // store.dispatch(addNotification(newNotification));
      console.log("إشعار جديد من WebSocket:", newNotification);
    });

    // تنظيف عند إغلاق المكون
    return unsubscribe;
  }, [token]);

  // ============= تحميل الإشعارات القديمة عند أول تحميل =============
  // useEffect(() => {
  //   if (oldNotifications) {
  //     // setNotifications موجود مسبقاً في الـ slice
  //     // store.dispatch(setNotifications(oldNotifications));
  //   }
  // }, [oldNotifications, dispatch]);

  // ============= بيانات الإشعارات من Redux =============
  const notifications = useSelector((state) => state.notifications.items);

  const [filter, setFilter] = useState("all");

  // ============= الفئات حسب الدور =============
  const roleCategories = new Set(["general"]);

  if (roles.includes("ideaOwner")) roleCategories.add("incubation");
  if (roles.includes("volunteer")) roleCategories.add("volunteer");
  if (roles.includes("volunteer_evaluator")) roleCategories.add("evaluation");
  if (roles.includes("volunteer_incubated")) roleCategories.add("incubation");

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

  // ============= معالجة الضغط على الإشعار =============
  const handleNotificationClick = async (notif) => {
    // تحديث Redux محلياً
    dispatch(markAsRead(notif.id));

    // await markAsReadAPI(notif.id);

    // التوجيه إذا موجود رابط
    if (notif.action?.link) {
      //eslint-disable-next-line
      window.location.href = notif.action.link;
    }
  };

  // ============= حالات التحميل والخطأ (للـ REST API) =============
  // if (isLoading) return <div className="text-center p-4">جاري تحميل الإشعارات...</div>
  // if (error) return <div className="text-center p-4 text-red-500">حدث خطأ في تحميل الإشعارات</div>

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
            <span className={notif.status === "unread" ? "font-semibold" : ""}>
              {notif.message}
            </span>

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