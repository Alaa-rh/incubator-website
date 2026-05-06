import React, { useState } from "react";
import SearchBar from "../../SearchBar";
import DataTable from "../DataTable";
import Modal from "../../Modal";
import Button from "../../Button";
import { showSuccess, showError } from "../../../Utils/toast";
// import { useDecideParticipantMutation } from "../../api/endpoints/admin/participantsApi";

const ParticipantsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState(null); // "accept" | "reject"
  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  //eslint-disable-next-line
  const [localLoading, setLocalLoading] = useState(false);

  // const [decideParticipant] = useDecideParticipantMutation();

  // بيانات ثابتة (تتحذف بعد الربط)
  const [participants, setParticipants] = useState([
    { idea_id: 1, idea_title: "منصة تعليمية", commitment_status: "ملتزم", absence_percentage: "75%", status: "pending" },
    { idea_id: 2, idea_title: "منصة تعليمية", commitment_status: "ملتزم", absence_percentage: "75%", status: "pending" },
    { idea_id: 3, idea_title: "منصة تعليمية", commitment_status: "ملتزم", absence_percentage: "75%", status: "pending" },
  ]);

  const openModal = (type, participant) => {
    setActionType(type);
    setSelectedParticipant(participant);
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    if (!selectedParticipant) return;
    setIsSubmitting(true);
    setLocalLoading(true);
    try {
      // await decideParticipant({
      //   idea_id: selectedParticipant.idea_id,
      //   action: actionType === "accept" ? "approve" : "reject"
      // }).unwrap();

      // محاكاة نجاح العملية
      await new Promise(resolve => setTimeout(resolve, 500));

      setParticipants(prev =>
        prev.map(p =>
          p.idea_id === selectedParticipant.idea_id
            ? { ...p, status: actionType === "accept" ? "approved" : "rejected" }
            : p
        )
      );

      const successMsg = actionType === "accept"
        ? " تم قبول المشارك بنجاح. سيتم إرسال الإشعار."
        : " تم رفض المشارك. سيتم إرسال الإشعار.";
      showSuccess(successMsg);
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      showError(error?.data?.message || "حدث خطأ في العملية");
    } finally {
      setIsSubmitting(false);
      setLocalLoading(false);
    }
  };

  const filtered = participants.filter((p) =>
    p.idea_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // عرض شارة الحالة (اختياري)
  const getStatusBadge = (status) => {
    if (!status || status === "pending") return null;
    if (status === "approved")
      return <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">✅ مقبول</span>;
    if (status === "rejected")
      return <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">❌ مرفوض</span>;
    return null;
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
            disabled={participant.status && participant.status !== "pending"}
          />
          <Button
            label="موافقة"
            className="bg-green-color"
            onClick={() => openModal("accept", participant)}
            disabled={participant.status && participant.status !== "pending"}
          />
        </div>
      ),
    },
    {
      key: "status_badge",
      label: "الحالة",
      render: (row) => getStatusBadge(row.status) || <span className="text-yellow-600">قيد الانتظار</span>,
    },
    { key: "absence_percentage", label: "نسبة الغياب" },
    { key: "commitment_status", label: "الوضع الحالي" },
    { key: "idea_title", label: "اسم المشروع" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-bold mb-4">قائمة المشاركين</h2>
      <SearchBar placeholder="بحث باسم المشروع" onSearch={setSearchTerm} />
      <DataTable columns={columns} data={filtered} />

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
              إلغاء
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