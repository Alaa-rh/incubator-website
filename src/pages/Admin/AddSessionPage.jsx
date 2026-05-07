import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import { showSuccess, showError } from "../../Utils/toast";

// import { useGetAvailableTrainersQuery } from "../../api/endpoints/admin/trainersApi";
// import { useAddSessionMutation } from "../../api/endpoints/admin/sessionsApi";

const AddSessionPage = () => {
  const { season_id } = useParams();
  const navigate = useNavigate();

  // const { data: trainersData, isLoading: isLoadingTrainers } = useGetAvailableTrainersQuery();
  // const [addSession, { isLoading: isSubmitting }] = useAddSessionMutation();

  const [session, setSession] = useState({
    title: "",
    trainer: "",
    tasks: "",
    location: "",
    start_time: "",
    end_time: "",
    date: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fallbackTrainers = [
    { value: "1", label: "أحمد محمد" },
    { value: "2", label: "سارة خالد" },
    { value: "3", label: "محمد علي" },
    { value: "4", label: "نورا حسن" },
  ];

  const trainers = fallbackTrainers;

  const handleChange = (field, value) => {
    setSession({ ...session, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!session.title) newErrors.title = "عنوان الجلسة مطلوب";
    if (!session.trainer) newErrors.trainer = "يرجى اختيار المدرب";
    if (!session.location) newErrors.location = "موقع المعسكر مطلوب";
    if (!session.start_time) newErrors.start_time = "وقت بدء الجلسة مطلوب";
    if (!session.end_time) newErrors.end_time = "وقت انتهاء الجلسة مطلوب";
    if (!session.date) newErrors.date = "تاريخ الجلسة مطلوب";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    if (!season_id) {
      showError("لا يمكن تحديد الموسم الحالي");
      return;
    }

    setIsSubmitting(true);

    try {
      // await addSession({ sessionData: session, season_id }).unwrap();
      await new Promise(resolve => setTimeout(resolve, 500)); // محاكاة
      showSuccess("تم إضافة الجلسة بنجاح. سيتم إرسال الإشعارات للمشاركين.");
      navigate(-1);
    } catch (err) {
      console.error(err);
      showError(err?.data?.message || "حدث خطأ في إضافة الجلسة");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container px-6 py-20">
      <h2 className="text-2xl text-second-color font-bold mb-8">إضافة جلسة</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
        <Input
          label="عنوان الجلسة"
          value={session.title}
          onChange={(e) => handleChange("title", e.target.value)}
          error={errors.title}
        />
        <Select
          label="تعيين المدرب"
          value={session.trainer}
          onChange={(e) => handleChange("trainer", e.target.value)}
          options={trainers}
          placeholder="اختر المدرب"
          error={errors.trainer}
        />
        <Input
          label="المهام المطلوبة"
          value={session.tasks}
          onChange={(e) => handleChange("tasks", e.target.value)}
        />
        <Input
          label="موقع المعسكر"
          value={session.location}
          onChange={(e) => handleChange("location", e.target.value)}
          error={errors.location}
        />
        <Input
          label="وقت بدء الجلسة"
          type="time"
          value={session.start_time}
          onChange={(e) => handleChange("start_time", e.target.value)}
          error={errors.start_time}
        />
        <Input
          label="وقت انتهاء الجلسة"
          type="time"
          value={session.end_time}
          onChange={(e) => handleChange("end_time", e.target.value)}
          error={errors.end_time}
        />
        <Input
          label="تاريخ الجلسة"
          type="date"
          value={session.date}
          onChange={(e) => handleChange("date", e.target.value)}
          error={errors.date}
        />
      </div>

      <div className="flex justify-center mt-6">
        <Button
          label={isSubmitting ? "جاري الإرسال..." : "إرسال الإشعار بالموعد"}
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="bg-main-color w-50"
        />
      </div>
    </div>
  );
};

export default AddSessionPage;