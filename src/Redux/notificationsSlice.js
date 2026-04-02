import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],        // جميع الإشعارات
  unreadCount: 0,   // عدد الإشعارات غير المقروءة
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    // تحميل الإشعارات (App.jsx)
    setNotifications: (state, action) => {
      state.items = action.payload;
      state.unreadCount = action.payload.filter(n => n.status === "unread").length;
    },

    // إضافة إشعار جديد (من الباك )
    addNotification: (state, action) => {
      state.items.unshift(action.payload);
      if (action.payload.status === "unread") {
        state.unreadCount += 1;
      }
    },

    // تعليم إشعار كمقروء
    markAsRead: (state, action) => {
      const id = action.payload;
      const notif = state.items.find(n => n.id === id);

      if (notif && notif.status === "unread") {
        notif.status = "read";
        state.unreadCount -= 1;
      }
    },

    // تعليم كل الإشعارات كمقروءة
    clearUnread: (state) => {
      state.items = state.items.map(n => ({ ...n, status: "read" }));
      state.unreadCount = 0;
    },
  },
});

export const {
  setNotifications,
  addNotification,
  markAsRead,
  clearUnread,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
