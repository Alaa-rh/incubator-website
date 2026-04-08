import React, { useState } from "react";
import Input from "../../Input";
import Button from "../../Button";
import Modal from "../../Modal";

export default function ExhibitionSchedule() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [successModal, setSuccessModal] = useState(false);

  const handleSendNotification = () => {
    if (!date || !time) {
      alert("يرجى إدخال تاريخ ووقت المعرض");
      return;
    }

    //  هذ سيتم إرساله للباك لاحقًا
    const payload = {
      exhibitionDate: date,
      exhibitionTime: time,
    };

    console.log("Payload to backend:", payload);

    // بعد نجاح الطلب من الباك
    setSuccessModal(true);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm max-w-xl" dir="rtl">
      <h2 className="text-xl font-bold  mb-6">
        تحديد موعد المعرض
      </h2>

      <div className="flex flex-col gap-4">
        <Input
          label="تاريخ المعرض"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <Input
          label="الوقت"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <Button
        label={"إرسال إشعار"}
          onClick={handleSendNotification}
          className="bg-main-color"
        />
      </div>

      {/* مودال نجاح */}
      <Modal
        isOpen={successModal}
        onClose={() => setSuccessModal(false)}
        title="تم إرسال الإشعار"
        footer={
          <button
            onClick={() => setSuccessModal(false)}
            className="bg-main-color text-white px-6 py-2 rounded-lg"
          >
            موافق
          </button>
        }
      >
        <p className="text-gray-700">
          تم إرسال موعد المعرض لجميع المستخدمين بنجاح.
        </p>
      </Modal>
    </div>
  );
}
