import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "green banda",
      role: "فريق",
      time: "م6:56",
      preview: "مرحباً، اطلعت على فكرتك وأعجبتني جداً...",
      unread: 3,
    },
    {
      id: 2,
      name: "سارة الأحمد",
      role: "متطوعة",
      time: "م5:20",
      preview: "هل يمكننا مناقشة فكرتك؟",
      unread: 1,
    },
    {
      id: 3,
      name: "علي العلي",
      role: "مطور",
      time: "م4:10",
      preview: "هل تحتاج دعم تقني؟",
      unread: 0,
    },
  ],

  selectedId: 1,

  //  سجل الرسائل لكل محادثة
  messages: {
    1: [
      { from: "other", text: "مرحباً، اطلعت على فكرتك وأعجبتني جداً..." },
      { from: "me", text: "أهلاً وسهلاً يسعدني إن الفكرة نالت إعجابك!" },
      { from: "other", text: "بفكر ندخل بتعاون جزئي، شو رأيك؟" },
      { from: "me", text: "ممتاز جداً، عندي تصور أولي للهيكل الفني..." }
    ],
    2: [
      { from: "other", text: "هل يمكننا مناقشة فكرتك؟" }
    ],
    3: [
      { from: "other", text: "هل تحتاج دعم تقني؟" }
    ],
  },
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    selectContact: (state, action) => {
      state.selectedId = action.payload;
    },

    markAsRead: (state, action) => {
      const contact = state.contacts.find((c) => c.id === action.payload);
      if (contact) contact.unread = 0;
    },

    updatePreview: (state, action) => {
      const { id, text } = action.payload;
      const contact = state.contacts.find((c) => c.id === id);
      if (contact) {
        contact.preview = text;
        contact.time = "الآن";
      }
    },

    // 🟦 NEW: إضافة رسالة جديدة للـ history
    addMessage: (state, action) => {
      const { id, message } = action.payload;
      state.messages[id].push(message);
    },
    addMessageFromServer: (state, action) => {
  const { id, message } = action.payload;

  // 1) إضافة الرسالة للـ history
  state.messages[id].push(message);

  // 2) تحديث preview
  const contact = state.contacts.find((c) => c.id === id);
  if (contact) {
    contact.preview = message.text;
    contact.time = "الآن";
  }

  // 3) إذا المحادثة مو مفتوحة → زيد unread
  if (state.selectedId !== id) {
    if (contact) contact.unread += 1;
  }
},

  },
});

export const { selectContact, markAsRead, updatePreview, addMessage } =
  messagesSlice.actions;

export default messagesSlice.reducer;
