import React, { useState, /*useEffect */} from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

// import { useGetAvailableTrainersQuery } from "../../api/endpoints/admin/trainersApi";
// import { useAddSessionMutation } from "../../api/endpoints/admin/sessionsApi";

const AddSessionPage = () => {
  const navigate = useNavigate();
  // const { data: trainersData, isLoading: isLoadingTrainers } = useGetAvailableTrainersQuery();
  // const [addSession, { isLoading: isSubmitting }] = useAddSessionMutation();

  const [session, setSession] = useState({
    title: "",
    trainer: "",
    tasks: "",
    location: "",
    time: "",
    date: "",
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  // بيانات ثابتة (fallback) إلى حين الربط
  const fallbackTrainers = [
    { value: "1", label: "أحمد محمد" },
    { value: "2", label: "سارة خالد" },
    { value: "3", label: "محمد علي" },
    { value: "4", label: "نورا حسن" },
  ];

  const trainers = /*trainersData?.trainers ||*/ fallbackTrainers;

  const handleChange = (field, value) => {
    setSession({ ...session, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!session.title) newErrors.title = "عنوان الجلسة مطلوب";
    if (!session.trainer) newErrors.trainer = "يرجى اختيار المدرب";
    if (!session.location) newErrors.location = "موقع المعسكر مطلوب";
    if (!session.time) newErrors.time = "وقت الجلسة مطلوب";
    if (!session.date) newErrors.date = "تاريخ الجلسة مطلوب";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    setSubmitError("");
    setSubmitSuccess("");

    if (!validate()) return;

    // TODO: بعد الربط استخدمي هذا الكود
    // try {
    //   await addSession(session).unwrap();
    //   setSubmitSuccess("تم إضافة الجلسة بنجاح. سيتم إرسال الإشعارات للمشاركين.");
    //   setSession({
    //     title: "",
    //     trainer: "",
    //     tasks: "",
    //     location: "",
    //     time: "",
    //     date: "",
    //   });
    //   setTimeout(() => {
    //     navigate(-1);
    //   }, 2000);
    // } catch (error) {
    //   console.error("Error adding session:", error);
    //   setSubmitError(error?.data?.message || "حدث خطأ في إضافة الجلسة");
    // }

    // حالياً: محاكاة
    console.log("New session:", session);
    setSubmitSuccess("تم إضافة الجلسة بنجاح (محاكاة)");
    setTimeout(() => {
      navigate(-1);
    }, 1500);
  };

  return (
    <div className="container px-6 py-20">
      <h2 className="text-2xl text-second-color font-bold mb-8">إضافة جلسة</h2>

      {/* رسائل النجاح والخطأ */}
      {submitError && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
          {submitError}
        </div>
      )}
      {submitSuccess && (
        <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
          {submitSuccess}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          label="وقت الجلسة"
          value={session.time}
          onChange={(e) => handleChange("time", e.target.value)}
          error={errors.time}
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
          label={/*isSubmitting ? "جاري الإرسال..." : */  "إرسال الإشعار بالموعد"}
          onClick={handleSubmit}
          // disabled={isSubmitting}
          className="bg-main-color w-50"
        />
      </div>
    </div>
  );
};

export default AddSessionPage;