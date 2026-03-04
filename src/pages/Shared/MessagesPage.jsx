import { useState } from "react"
import Chat from "../../components/Chat"
import ContactsList from "../../components/ContactsList"

const contacts = [
  {
    id: 1,
    name: "green banda",
    role: "فريق",
    time: "م6:56",
    preview: "مرحباً، اطلعت على فكرتك وأعجبتني جداً..."
  },
  {
    id: 2,
    name: "سارة الأحمد",
    role: "متطوعة",
    time: "م5:20",
    preview: "هل يمكننا مناقشة فكرتك؟"
  },
  {
    id: 3,
    name: "علي العلي",
    role: "مطور",
    time: "م4:10",
    preview: "هل تحتاج دعم تقني؟"
  },
]

const MessagesPage = () => {
  const [selectedId, setSelectedId] = useState(contacts[0].id)

  const selectedContact = contacts.find((c) => c.id === selectedId)

  return (
    <div className="container flex justify-center h-screen">
      
      <ContactsList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />

      <div className="flex-grow p-4">
        <Chat
          contactName={selectedContact.name}
          role={selectedContact.role}
        />
      </div>

    </div>
  )
}

export default MessagesPage