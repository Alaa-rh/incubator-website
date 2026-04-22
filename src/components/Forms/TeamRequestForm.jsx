import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import Modal from "../Modal";
import { useSelector } from "react-redux";

// TODO: بعد الربط استخدمي هذا الـ hook
// import { useSendTeamRequestMutation } from "../api/endpoints/teamApi";

const TeamRequestForm = () => {
  const [title, setTitle] = useState("");
  const [skill, setSkill] = useState("");
  const [count, setCount] = useState("");
  const [errors, setErrors] = useState({});
  const [description, setDescription] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [apiError, setApiError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // جلب userId من Redux
  const userId = useSelector((state) => state.auth.userId);

  // const [sendTeamRequest, { isLoading }] = useSendTeamRequestMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      skill,
      count,
      description,
    };

    // التحقق من الحقول
    const newErrors = {};
    Object.keys(formData).forEach((element) => {
      if (!formData[element]) newErrors[element] = "هذا الحقل مطلوب";
    });

    // التحقق من عدد المتطوعين
    if (count && (count < 1 || count > 4)) {
      newErrors.count = "عدد المتطوعين يجب أن يكون بين 1 و 4";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length !== 0) {
      return;
    }

    setIsSubmitting(true);
    setApiError("");

    // TODO: بعد الربط هذا الكود بدل console.log
    // try {
    //   await sendTeamRequest({
    //     userId: userId,
    //     title: title,
    //     skill: skill,
    //     requiredCount: count,
    //     description: description,
    //   }).unwrap();
    //   setShowSuccess(true);
    //   // تفريغ النموذج
    //   setTitle("");
    //   setSkill("");
    //   setCount("");
    //   setDescription("");
    // } catch (error) {
    //   console.error("Error sending team request:", error);
    //   setApiError(error?.data?.message || "حدث خطأ في إرسال الطلب");
    // } finally {
    //   setIsSubmitting(false);
    // }

    // حالياً: محاكاة للإرسال
    console.log("Form Data to backend:", {
      userId,
      title,
      skill,
      requiredCount: count,
      description,
    });
    setShowSuccess(true);
    setTitle("");
    setSkill("");
    setCount("");
    setDescription("");
    setIsSubmitting(false);
  };

  const handleCloseModal = () => {
    setShowSuccess(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 w-1/2">
        {/* عرض خطأ API */}
        {apiError && (
          <div className="bg-red-100 text-red-700 p-3 rounded text-center">
            {apiError}
          </div>
        )}

        <Input
          label="عنوان الفكرة"
          placeholder="عنوان الفكرة"
          value={title}
          error={errors.title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Select
          label="نوع المهارة المطلوبة"
          placeholder="اختر المهارة"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          error={errors.skill}
          options={[
            { label: "UI UX", value: "uiux" },
            { label: "Back End", value: "backend" },
            { label: "Front End", value: "frontend" },
            { label: "Marketing", value: "marketing" },
            { label: "Legal", value: "legal" },
          ]}
        />

        <Input
          label="عدد المتطوعين المطلوبين"
          type="number"
          placeholder="4 على الأكثر"
          value={count > 0 && count <= 4 ? count : ""}
          onChange={(e) => setCount(e.target.value)}
          error={errors.count}
        />

        <Input
          label="شرح مختصر عن الفكرة"
          placeholder="وصف الفكرة"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          error={errors.description}
        />

        <Button
          label={isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
          className="bg-main-color w-full"
          type="submit"
          disabled={isSubmitting}
        />
      </form>

      <Modal
        isOpen={showSuccess}
        onClose={handleCloseModal}
        title="طلبك قيد المعالجة من قبل الإدارة سيتم إعلامك عند موافقة أي متطوع"
        footer={
          <Button
            label="حسناً"
            onClick={handleCloseModal}
            className="bg-main-color"
          />
        }
      >
      </Modal>
    </>
  );
};

export default TeamRequestForm;