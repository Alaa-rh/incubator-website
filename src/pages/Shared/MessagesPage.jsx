import { useSelector, useDispatch } from "react-redux";
import Chat from "../../components/Chat";
import ContactsList from "../../components/ContactsList";
import { selectContact, markAsRead, updatePreview } from "../../Redux/MessagesSlice";

const MessagesPage = () => {
  const dispatch = useDispatch();

  // جلب البيانات من Redux
  const contacts = useSelector((state) => state.messages.contacts);
  const selectedId = useSelector((state) => state.messages.selectedId);

  const selectedContact = contacts.find((c) => c.id === selectedId);

  // عند اختيار محادثة
  const handleSelect = (id) => {
    dispatch(markAsRead(id));      // تصفير unread
    dispatch(selectContact(id));   // تغيير المحادثة المفتوحة
  };

  const handleSendMessage = (text) => {
    dispatch(updatePreview({ id: selectedId, text }));
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
