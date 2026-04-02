import { useSelector } from "react-redux";
import { IoIosNotificationsOutline } from "react-icons/io";
import NavLinkUniversal from "../components/NavLinkUniversal";

const NotificationsIcon = () => {
  const unreadCount = useSelector((state) => state.notifications.unreadCount);

  return (
    <div className="relative">
      <NavLinkUniversal
        label={<IoIosNotificationsOutline size={30} />}
        to="/notificationspage"
        className="font-bold hover:scale-105 transition"
      />

      {unreadCount > 0 && (
        <span
          className="
            absolute -top-0 -right-0
            bg-red-600 text-white
            w-4 h-4 rounded-full
            flex items-center justify-center
            text-sm
          "
        >
          {unreadCount}
        </span>
      )}
    </div>
  );
};

export default NotificationsIcon;
