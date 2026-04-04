import React, { useState } from "react";
import SearchBar from "../../SearchBar";
import DataTable from "../DataTable";
import Modal from "../../Modal";
import Input from "../../Input";
import Button from "../../Button";

const ParticipantsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // حالة المودال
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState(null); // "accept" | "reject"
  const [message, setMessage] = useState("");

  const participants = [
    { id: 1, projectName: "منصة تعليمية", status: "ملتزم", absenceRate: "75%" },
    { id: 2, projectName: "منصة تعليمية", status: "ملتزم", absenceRate: "75%" },
    { id: 3, projectName: "منصة تعليمية", status: "ملتزم", absenceRate: "75%" },
  ];

  const filtered = participants.filter((p) =>
    p.projectName.includes(searchTerm)
  );

  const openModal = (type) => {
    setActionType(type);
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    console.log("Action:", actionType, "Message:", message);
    // لاحقاً: API
    setMessage("");
    setIsModalOpen(false);
  };

  const columns = [
    {
      key: "actions",
      label: "الإجراءات",
      render: () => (
        <div className="flex justify-end gap-3">
          <Button
            label="رفض"
            className="bg-red-color"
            onClick={() => openModal("reject")}
          /> 
          <Button
            label="موافقة"
            className="bg-green-color"
            onClick={() => openModal("accept")}
          />
        </div>
      ),
    },
    
    { key: "absenceRate", label: "نسبة الغياب" }, 
    { key: "status", label: "الوضع الحالي" },
    { key: "projectName", label: "اسم المشروع" },
    
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">

      <h2 className="text-lg font-bold mb-4">قائمة المشاركين</h2>

      <SearchBar
        placeholder="بحث باسم المشروع أو الطالب"
        onSearch={setSearchTerm}
      />

      <DataTable columns={columns} data={filtered} />

      {/* المودال */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={actionType === "accept" ? "هل أنت متأكد من القبول؟" : "هل أنت متأكد من الرفض؟"}
        footer={
          <Button
            label="إرسال"
            onClick={handleSubmit}
            className="bg-main-color text-white px-4 py-2"
          />
        }
      >
        <Input
          label="كتابة نص الشعار"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="اكتب هنا..."
        />
      </Modal>
    </div>
  );
};

export default ParticipantsSection;
