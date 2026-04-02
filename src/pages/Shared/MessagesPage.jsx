import { useState } from "react";
import Chat from "../../components/Chat";
import ContactsList from "../../components/ContactsList";

const MessagesPage = () => {
  const [contacts, setContacts] = useState([
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
  ]);

  const [selectedId, setSelectedId] = useState(contacts[0].id);

  const selectedContact = contacts.find((c) => c.id === selectedId);

  // عند اختيار محادثة → تصفير unread
  const handleSelect = (id) => {
    setContacts((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, unread: 0 } : c
      )
    );
    setSelectedId(id);
  };

  // تحديث preview عند إرسال رسالة جديدة
  const handleSendMessage = (text) => {
    setContacts((prev) =>
      prev.map((c) =>
        c.id === selectedId
          ? { ...c, preview: text, time: "الآن" }
          : c
      )
    );
  };

  return (
    <div className="container flex justify-center h-screen">
      <ContactsList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={handleSelect}
      />

      <div className="flex-grow p-4">
        <Chat
          contactName={selectedContact.name}
          role={selectedContact.role}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default MessagesPage;