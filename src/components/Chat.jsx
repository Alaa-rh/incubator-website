import React, { useState } from "react"
import Input from "./Input"
import Button from "./Button"
const Chat = ({ contactName = "green banda", role = "فريق" }) => {
  const [messages, setMessages] = useState([
    { from: "other", text: "مرحباً، اطلعت على فكرتك وأعجبتني جداً..." },
    { from: "me", text: "أهلاً وسهلاً يسعدني إن الفكرة نالت إعجابك!" },
    { from: "other", text: "بفكر ندخل بتعاون جزئي، شو رأيك؟" },
    { from: "me", text: "ممتاز جداً، عندي تصور أولي للهيكل الفني..." }
  ])
  const [newMessage, setNewMessage] = useState("")

  const sendMessage = () => {
    if (newMessage.trim() === "") return
    setMessages([...messages, { from: "me", text: newMessage }])
    setNewMessage("")
  }

  return (
    <div className="container max-w-2xl mx-auto bg-white shadow rounded-lg p-4">
      {/* رأس المحادثة */}
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <div>
          <h2 className="text-lg font-bold">تواصل مع {role}</h2>
          <p className="text-sm text-gray-500">{contactName} - آخر ظهور</p>
        </div>
      </div>

      {/* الرسائل */}
      <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-xs p-3 rounded-lg text-sm ${
              msg.from === "me" ? "bg-main-color text-white text-right" : "bg-white border border-second-color text-right"
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* إدخال رسالة جديدة */}
      <div className="flex items-center gap-2">
        <Input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="اكتب رسالتك هنا..."
          className="flex-grow border rounded px-3 py-2 text-sm"
        />
        <Button label="إرسال" onClick={sendMessage} className="bg-main-color text-white px-4 py-2 rounded text-sm" />
      </div>
    </div>
  )
}

export default Chat