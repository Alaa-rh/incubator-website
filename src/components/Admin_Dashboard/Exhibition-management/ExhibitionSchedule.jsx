import React, { useState } from "react";
import Input from "../../Input";
import Button from "../../Button";
import { showSuccess, showError } from "../../../Utils/toast";

// import { useSetExhibitionDateMutation } from "../../api/endpoints/exhibitionApi";

export default function ExhibitionSchedule() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const [setExhibitionDate, { isLoading }] = useSetExhibitionDateMutation();

  const handleSendNotification = async () => {
    if (!date || !time) {
      showError("يرجى إدخال تاريخ ووقت المعرض");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      exhibitionDate: date,
      exhibitionTime: time,
    };

    console.log("Payload to backend:", payload);

    try {
      // await setExhibitionDate(payload).unwrap();
      // محاكاة نجاح العملية (تتحذف عند الربط الحقيقي)
      await new Promise(resolve => setTimeout(resolve, 500));

      showSuccess("تم إرسال موعد المعرض لجميع المستخدمين بنجاح.");
      // إعادة تعيين الحقول بعد النجاح
      setDate("");
      setTime("");
    } catch (error) {
      console.error("Error setting exhibition date:", error);
      showError(error?.data?.message || "حدث خطأ في تحديد موعد المعرض");
    } finally {
      setIsSubmitting(false);
    }
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
    </div>
  );
}