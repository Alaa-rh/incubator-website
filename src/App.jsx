import AppRoutes from "./components/AppRoutes";
import { FavoritesProvider } from "./Context/FavoritesContext";
import { RoleProvider } from "./Context/RoleContext";
import store from "./Redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setNotifications } from "./Redux/notificationsSlice";
import logo from "./assets/images/logo.png";

function NotificationsLoader({ children }) {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications.items);

  useEffect(() => {
    async function loadNotifications() {
      // -----------------------------------------
      // مثال جاهز للربط الحقيقي:
      //
      // const res = await fetch("https://api.example.com/notifications", {
      //   headers: { Authorization: `Bearer ${token}` }
      // });
      // const data = await res.json();
      // dispatch(setNotifications(data));
      //
      // -----------------------------------------

      if (notifications.length === 0) {
        const initialNotifications = [
          {
            id: 1,
            image: logo,
            time: "2 دقيقة",
            status: "unread",
            category: "general",
            message: "لديك رسالة جديدة",
            action: { label: "عرض الرسالة", link: "/messagespage" },
          },
          {
            id: 2,
            image: logo,
            time: "1 ساعة",
            status: "unread",
            category: "general",
            message: "تمت مشاهدة ملفك الشخصي",
            action: { label: "عرض الملف الشخصي", link: "/profileinfo" },
          },
          {
            id: 10,
            image: logo,
            time: "10 دقائق",
            status: "unread",
            category: "incubation",
            message: "تم تحديث حالة مشروعك",
            action: { label: "عرض المرحلة", link: "/incubation-stages" },
          },
          {
            id: 11,
            image: logo,
            time: "20 دقيقة",
            status: "unread",
            category: "evaluation",
            message: "لديك تقييم جديد",
            action: { label: "عرض التقييم", link: "/evaluation-center" },
          },
        ];

        dispatch(setNotifications(initialNotifications));
      }
    }

    loadNotifications();
  }, [dispatch, notifications.length]);

  return children;
}

function App() {
  return (
    <Provider store={store}>
      <RoleProvider>
        <FavoritesProvider>
          <NotificationsLoader>
            <AppRoutes />
          </NotificationsLoader>
        </FavoritesProvider>
      </RoleProvider>
    </Provider>
  );
}

export default App;
