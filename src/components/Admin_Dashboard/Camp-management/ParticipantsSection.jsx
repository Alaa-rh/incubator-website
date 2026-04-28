import React, { useState } from "react";
import SearchBar from "../../SearchBar";
import DataTable from "../DataTable";
import Modal from "../../Modal";
import Button from "../../Button";
// import { useApproveParticipantMutation, useRejectParticipantMutation } from "../../api/endpoints/admin/participantsApi";

const ParticipantsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // حالة المودال
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState(null); // "accept" | "reject"
  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const [approveParticipant, { isLoading: isApproving }] = useApproveParticipantMutation();
  // const [rejectParticipant, { isLoading: isRejecting }] = useRejectParticipantMutation();

  // بيانات ثابتة حالياً
  const participants = [
    { id: 1, projectName: "منصة تعليمية", status: "ملتزم", absenceRate: "75%" },
    { id: 2, projectName: "منصة تعليمية", status: "ملتزم", absenceRate: "75%" },
    { id: 3, projectName: "منصة تعليمية", status: "ملتزم", absenceRate: "75%" },
  ];

  const filtered = participants.filter((p) =>
    p.projectName.includes(searchTerm)
  );

  const openModal = (type, participant) => {
    setActionType(type);
    setSelectedParticipant(participant);
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    setIsSubmitting(true);

    // try {
    //   if (actionType === "accept") {
    //     await approveParticipant(selectedParticipant.id).unwrap();
    //     alert("تم قبول المشارك بنجاح. سيتم إرسال الإشعار.");
    //   } else {
    //     await rejectParticipant(selectedParticipant.id).unwrap();
    //     alert("تم رفض المشارك. سيتم إرسال الإشعار.");
    //   }
    //   setIsModalOpen(false);
    // } catch (error) {
    //   console.error("Error:", error);
    //   alert(error?.data?.message || "حدث خطأ في العملية");
    // } finally {
    //   setIsSubmitting(false);
    // }

    // حالياً: محاكاة للإرسال
    console.log(`Action: ${actionType} for participant:`, selectedParticipant);
    setTimeout(() => {
      alert(`تم ${actionType === "accept" ? "قبول" : "رفض"} المشارك بنجاح (محاكاة)`);
      setIsModalOpen(false);
      setIsSubmitting(false);
    }, 500);
  };

  const columns = [
    {
      key: "actions",
      label: "الإجراءات",
      render: (_, participant) => (
        <div className="flex justify-center gap-3">
          <Button
            label="رفض"
            className="bg-red-color"
            onClick={() => openModal("reject", participant)}
          /> 
          <Button
            label="موافقة"
            className="bg-green-color"
            onClick={() => openModal("accept", participant)}
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

      {/* المودال - فقط تأكيد بدون إدخال نص */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={actionType === "accept" ? "تأكيد القبول" : "تأكيد الرفض"}
        footer={
          <div className="flex gap-3 justify-end">
            <Button
              label={isSubmitting ? "جاري المعالجة..." : "تأكيد"}
              onClick={handleConfirm}
              disabled={isSubmitting}
              className={`${actionType === "accept" ? "bg-green-color" : "bg-red-color"} text-white px-4 py-2 rounded`}
            /> 
            <button
              onClick={() => setIsModalOpen(false)}
              className="border border-second-color px-4 py-2 rounded"
            >
              إلغاء
              </button>
          </div>
        }
      >
        <p className="text-center text-lg py-4">
          {actionType === "accept" 
            ? "هل أنت متأكد من قبول هذا المشارك؟" 
            : "هل أنت متأكد من رفض هذا المشارك؟"}
        </p>
        <p className="text-center text-gray-500 text-sm">
          {actionType === "accept" 
            ? "سيتم إرسال إشعار قبول للمشارك." 
            : "سيتم إرسال إشعار رفض للمشارك."}
        </p>
      </Modal>
    </div>
  );
};

export default ParticipantsSection;