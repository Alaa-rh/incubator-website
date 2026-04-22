import { useState } from "react";
// import { useSelector } from "react-redux";
import Input from "../Input";
import Button from "../Button";
import AlertBox from "../AlertBox";
// import { useSaveExhibitionDataMutation, useGetExhibitionDataQuery } from "../../api/endpoints/incubationApi";

const ExhibitionStage = ({ onComplete }) => {
  // جلب userId من Redux
  // const userId = useSelector((state) => state.auth.userId);

  // TODO: بعد الربط  هذا السطر لجلب البيانات المحفوظة مسبقاً
  // const { data: savedData, isLoading } = useGetExhibitionDataQuery(userId);
  // const [saveExhibitionData, { isLoading: isSaving }] = useSaveExhibitionDataMutation();

  const [form, setForm] = useState({
    teamName: "",
    projectName: "",
    email: "",
    membersEmails: "",
    members: "",
    goal: "",
    projectLink: "",
    services: "",
    image: null
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  // TODO: بعد الربط هذا الـ useEffect لتحميل البيانات المحفوظة
  // useEffect(() => {
  //   if (savedData) {
  //     setForm({
  //       teamName: savedData.teamName || "",
  //       projectName: savedData.projectName || "",
  //       email: savedData.email || "",
  //       membersEmails: savedData.membersEmails || "",
  //       members: savedData.members || "",
  //       goal: savedData.goal || "",
  //       projectLink: savedData.projectLink || "",
  //       services: savedData.services || "",
  //       image: savedData.image || null
  //     });
  //   }
  // }, [savedData]);

  const exhibitionDate = "12/1/2025";

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
    // مسح الخطأ الخاص بالحقل عند التعديل
    if (errors[key]) {
      setErrors(prev => ({ ...prev, [key]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    // التحقق من الحقول المطلوبة (حسب متطلبات الباك)
    if (!form.projectName) newErrors.projectName = "اسم المشروع مطلوب";
    if (!form.email) newErrors.email = "البريد الإلكتروني مطلوب";
    if (!form.goal) newErrors.goal = "هدف المشروع مطلوب";
    
    // التحقق من صيغة البريد الإلكتروني
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

    // TODO: بعد الربط  هذا الكود بدل console.log
    // try {
    //   const formData = new FormData();
    //   Object.keys(form).forEach(key => {
    //     if (form[key] !== null && form[key] !== "") {
    //       formData.append(key, form[key]);
    //     }
    //   });
    //   formData.append("userId", userId);
    //   formData.append("exhibitionDate", exhibitionDate);
    //   
    //   await saveExhibitionData(formData).unwrap();
    //   setSubmitSuccess("تم حفظ بيانات المعرض بنجاح");
    //   setTimeout(() => {
    //     onComplete();
    //   }, 1500);
    // } catch (error) {
    //   console.error("Error saving exhibition data:", error);
    //   setSubmitError(error?.data?.message || "حدث خطأ في حفظ البيانات");
    // }

    // حالياً: محاكاة للإرسال
    console.log("Exhibition form submitted:", form);
    setSubmitSuccess("تم حفظ بيانات المعرض بنجاح");
    setTimeout(() => {
      onComplete();
    }, 1500);
  };
  
  // if (isLoading) {
  //   return (
  //     <div className="p-6 space-y-8 min-h-screen bg-white-color">
  //       <p className="text-center text-gray-500">جاري تحميل البيانات...</p>
  //     </div>
  //   );
  // }

  return (
    <div className="p-6 space-y-8 min-h-screen bg-white-color">
      {/* تاريخ المعرض */}
      <p className="font-bold">
        تاريخ المعرض:
        <span className="text-main-color mr-2"> {exhibitionDate}</span>
      </p>

      {/* تنبيه */}
      <AlertBox message="املأ الحقول التي تريد اظهارها فقط في بطاقة المشروع." />

      {/* رسائل النجاح والخطأ */}
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

      {/* فورم المعرض */}
      <form onSubmit={handleSubmit} className="mx-auto space-y-8">
        <div className="flex items-start justify-center gap-8">
          <div className="w-[30%] space-y-6">
            {/* رفع صورة */}
            <Input
              label="ارفع صورة لتكون واجهة المشروع"
              value={form.image}
              type="file" 
              accept="image/*"
              onChange={(e) => handleChange("image", e.target.files[0])}
            />
            
            <Input 
              label="اسم الفريق إن وجد"
              value={form.teamName}
              onChange={(e) => handleChange("teamName", e.target.value)}
              error={errors.teamName}
            />

            <Input 
              label="اسم المشروع"
              value={form.projectName}
              onChange={(e) => handleChange("projectName", e.target.value)}
              error={errors.projectName}
            />

            <Input 
              label="بريد إلكتروني للتواصل"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              error={errors.email}
            />

            <Input 
              label="البريد الإلكتروني لكل عضو"
              value={form.membersEmails}
              onChange={(e) => handleChange("membersEmails", e.target.value)}
              error={errors.membersEmails}
              placeholder="example@email.com, another@email.com"
            />
          </div>

          <div className="w-[30%] space-y-6">
            <Input 
              label="أعضاء الفريق"
              value={form.members}
              onChange={(e) => handleChange("members", e.target.value)}
              error={errors.members}
              placeholder="أسماء الأعضاء مفصولة بفواصل"
            />

            <Input 
              label="هدف المشروع"
              value={form.goal}
              onChange={(e) => handleChange("goal", e.target.value)}
              error={errors.goal}
            />

            <Input 
              label="رابط المشروع إن وجد (يفضل)"
              value={form.projectLink}
              onChange={(e) => handleChange("projectLink", e.target.value)}
              error={errors.projectLink}
              placeholder="https://..."
            />

            <Input 
              label="خدمات المشروع"
              value={form.services}
              onChange={(e) => handleChange("services", e.target.value)}
              error={errors.services}
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-4">
          <Button 
            // label={isSaving ? "جاري الحفظ..." : "إرسال"}
              label="إرسال"
            className="bg-main-color px-8 py-2"
            type="submit"
            // disabled={isSaving}
          />
        </div>
      </form>
    </div>
  );
};

export default ExhibitionStage;