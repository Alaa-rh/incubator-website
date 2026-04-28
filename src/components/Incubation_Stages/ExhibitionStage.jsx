// src/components/Incubation_Stages/ExhibitionStage.js
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DynamicStep from "../DynamicStep";
import Button from "../Button";
import AlertBox from "../AlertBox";
import { useGetExhibitionFormConfigQuery } from "../../api/endpoints/formConfigApi";
import { useSaveExhibitionDataMutation, useGetExhibitionDataQuery } from "../../api/endpoints/incubationApi";

// -----------------------------
// Fallback (في حالة عدم وجود API)
// -----------------------------
const FALLBACK_FIELDS = [
  { name: "teamName", label: "اسم الفريق إن وجد", type: "text", required: false },
  { name: "projectName", label: "اسم المشروع", type: "text", required: true },
  { name: "email", label: "بريد إلكتروني للتواصل", type: "email", required: true },
  { name: "membersEmails", label: "البريد الإلكتروني لكل عضو", type: "text", required: false, placeholder: "example@email.com, another@email.com" },
  { name: "members", label: "أعضاء الفريق", type: "text", required: false, placeholder: "أسماء الأعضاء مفصولة بفواصل" },
  { name: "goal", label: "هدف المشروع", type: "text", required: true },
  { name: "projectLink", label: "رابط المشروع إن وجد (يفضل)", type: "text", required: false, placeholder: "https://..." },
  { name: "services", label: "خدمات المشروع", type: "text", required: false },
  { name: "image", label: "ارفع صورة لتكون واجهة المشروع", type: "file", required: false }
];

const ExhibitionStage = ({ onComplete }) => {
  const userId = useSelector((state) => state.auth.userId);
  
  const { data: formConfigFromApi, isLoading: isConfigLoading } = useGetExhibitionFormConfigQuery();
  const { data: savedData, isLoading: isLoadingData } = useGetExhibitionDataQuery(userId, {
    skip: !userId,
  });
  const [saveExhibitionData, { isLoading: isSaving }] = useSaveExhibitionDataMutation();

  const steps = formConfigFromApi?.steps || [{ name: "بيانات المعرض", fields: FALLBACK_FIELDS }];
  const currentStepFields = steps[0]?.fields || FALLBACK_FIELDS;
  const stepName = steps[0]?.name || "بيانات المعرض";

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [isFormInitialized, setIsFormInitialized] = useState(false);

  const exhibitionDate = "12/1/2025";

  // ✅ دمج كلا الـ useEffect في واحد
  useEffect(() => {
    // إذا تم تهيئة الفورم مسبقاً، لا تعيدي التهيئة
    if (isFormInitialized) return;
    
    // إذا كانت البيانات لا تزال تحمل، انتظري
    if (isConfigLoading || isLoadingData) return;

    // إذا وجدت بيانات محفوظة من الباك
    if (savedData && Object.keys(savedData).length > 0) {
      const loadedForm = {};
      currentStepFields.forEach(field => {
        loadedForm[field.name] = savedData[field.name] || "";
      });
      //eslint-disable-next-line
      setForm(loadedForm);
      setIsFormInitialized(true);
    } 
    // إذا لم توجد بيانات محفوظة، ننشئ فورم فارغ
    else if (currentStepFields.length > 0 && !isFormInitialized) {
      const initialForm = {};
      currentStepFields.forEach(field => {
        initialForm[field.name] = "";
      });
      setForm(initialForm);
      setIsFormInitialized(true);
    }
  }, [savedData, currentStepFields, isConfigLoading, isLoadingData, isFormInitialized]);

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors(prev => ({ ...prev, [key]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    currentStepFields.forEach(field => {
      if (field.required && !form[field.name]) {
        newErrors[field.name] = `${field.label} مطلوب`;
      }
    });
    
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess("");

    if (!validate()) return;

    try {
      const formData = new FormData();
      Object.keys(form).forEach(key => {
        if (form[key] !== null && form[key] !== "") {
          formData.append(key, form[key]);
        }
      });
      formData.append("userId", userId);
      formData.append("exhibitionDate", exhibitionDate);
      
      await saveExhibitionData(formData).unwrap();
      setSubmitSuccess("تم حفظ بيانات المعرض بنجاح");
      setTimeout(() => {
        onComplete();
      }, 1500);
    } catch (error) {
      console.error("Error saving exhibition data:", error);
      setSubmitError(error?.data?.message || "حدث خطأ في حفظ البيانات");
    }
  };

  // حالة التحميل
  if (isConfigLoading || isLoadingData) {
    return (
      <div className="p-6 space-y-8 min-h-screen bg-white-color">
        <p className="text-center text-gray-500">جاري تحميل البيانات...</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8 min-h-screen bg-white-color">
       {stepName && (
        <h2 className="text-xl font-bold text-second-color mb-4">{stepName}</h2>
      )}
      <p className="font-bold">
        تاريخ المعرض:
        <span className="text-main-color mr-2"> {exhibitionDate}</span>
      </p>

      <AlertBox message="املأ الحقول التي تريد اظهارها فقط في بطاقة المشروع." />

      {submitError && (
        <div className="bg-red-100 text-red-700 p-3 rounded text-center">
          {submitError}
        </div>
      )}
      {submitSuccess && (
        <div className="bg-green-100 text-green-700 p-3 rounded text-center">
          {submitSuccess}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mx-auto space-y-8">
        <div className="flex items-start justify-center gap-8">
          <div className="w-[30%] space-y-6">
            {currentStepFields.filter((_, idx) => idx % 2 === 0).map(field => (
              <DynamicStep
                key={field.name}
                stepName=""
                fields={[field]}
                form={form}
                errors={errors}
                handleChange={handleChange}
              />
            ))}
          </div>
          <div className="w-[30%] space-y-6">
            {currentStepFields.filter((_, idx) => idx % 2 === 1).map(field => (
              <DynamicStep
                key={field.name}
                stepName=""
                fields={[field]}
                form={form}
                errors={errors}
                handleChange={handleChange}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center mt-4">
          <Button 
            label={isSaving ? "جاري الحفظ..." : "إرسال"}
            className="bg-main-color px-8 py-2"
            type="submit"
            disabled={isSaving}
          />
        </div>
      </form>
    </div>
  );
};

export default ExhibitionStage;