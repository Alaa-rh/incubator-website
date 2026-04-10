import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import notificationsReducer from "./notificationsSlice";
import messagesReducer from "./MessagesSlice";

const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
    messages: messagesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
