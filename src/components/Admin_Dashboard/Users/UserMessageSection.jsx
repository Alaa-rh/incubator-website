import Button from "../../Button";
const UserMessagesSection = ({ user }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      
      <h3 className="text-2xl font-bold mb-4">المراسلات</h3>

      
      <p className="text-lg text-gray-500 mb-2">:آخر رسالة</p>

      {/* صندوق الرسالة */}
      <div className="bg-gray-100 p-4 rounded-md mb-4 text-right">
        <p className="text-gray-800 leading-relaxed">
          {user.lastMessage || "لا توجد رسائل بعد."}
        </p>
      </div>

      <Button label="مراسلة" className="bg-main-color" />
    </div>
  );
};

export default UserMessagesSection;
