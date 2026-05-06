import React, { useState } from "react";
import Input from "../../Input";
import Button from "../../Button";
import Modal from "../../Modal";

// import { useSetExhibitionDateMutation } from "../../api/endpoints/exhibitionApi";

export default function ExhibitionSchedule() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, /*setErrorMessage*/] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const [setExhibitionDate, { isLoading }] = useSetExhibitionDateMutation();

  const handleSendNotification = async () => {
    if (!date || !time) {
      alert("يرجى إدخال تاريخ ووقت المعرض");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      exhibitionDate: date,
      exhibitionTime: time,
    };

    console.log("Payload to backend:", payload);

    // try {
    //   await setExhibitionDate(payload).unwrap();
    //   setSuccessModal(true);
    // } catch (error) {
    //   console.error("Error setting exhibition date:", error);
    //   setErrorMessage(error?.data?.message || "حدث خطأ في تحديد موعد المعرض");
    //   setErrorModal(true);
    // } finally {
    //   setIsSubmitting(false);
    // }

    // حالياً: محاكاة للإرسال
    setTimeout(() => {
      setSuccessModal(true);
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm max-w-xl" dir="rtl">
      <h2 className="text-xl font-bold mb-6">تحديد موعد المعرض</h2>

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
          label={isSubmitting ? "جاري الإرسال..." : "إرسال إشعار"}
          onClick={handleSendNotification}
          disabled={isSubmitting}
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

      {/* مودال خطأ */}
      <Modal
        isOpen={errorModal}
        onClose={() => setErrorModal(false)}
        title="حدث خطأ"
        footer={
          <button
            onClick={() => setErrorModal(false)}
            className="bg-main-color text-white px-6 py-2 rounded-lg"
          >
            موافق
          </button>
        }
      >
        <p className="text-gray-700">{errorMessage}</p>
      </Modal>
    </div>
  );
}