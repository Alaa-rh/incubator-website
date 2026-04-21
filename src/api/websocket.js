// src/api/websocket.js
import store from "../redux/store.js";
import { addNotification } from "../redux/notificationsSlice";

let socket = null;
let listeners = [];
let reconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 5;

export const connectWebSocket = (token) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    return socket;
  }

  const wsUrl = import.meta.env.VITE_WS_URL || "ws://localhost:8000/ws/notifications/";

  socket = new WebSocket(`${wsUrl}?token=${token}`);

  socket.onopen = () => {
    console.log("WebSocket connected");
    reconnectAttempts = 0;
  };

  socket.onmessage = (event) => {
    const notification = JSON.parse(event.data);

    // إضافة الإشعار إلى Redux
    store.dispatch(addNotification(notification));

    // إعلام جميع المستمعين (للـ components)
    listeners.forEach((listener) => listener(notification));
  };

  socket.onerror = (error) => {
    console.error("WebSocket error:", error);
  };

  socket.onclose = () => {
    console.log("WebSocket disconnected");

    // محاولة إعادة الاتصال
    if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
      setTimeout(() => {
        reconnectAttempts++;
        connectWebSocket(token);
      }, 3000 * reconnectAttempts);
    }
  };

  return socket;
};

export const disconnectWebSocket = () => {
  if (socket) {
    socket.close();
    socket = null;
  }
  listeners = [];
};

export const subscribeToNotifications = (callback) => {
  listeners.push(callback);
  return () => {
    listeners = listeners.filter((l) => l !== callback);
  };
};

export const sendWebSocketMessage = (message) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(message));
  }
};