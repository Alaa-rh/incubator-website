// src/components/Forms/IdeaForm.js
import React, { useReducer, useState } from "react";
import Button from "../Button";
import Stepper from "../Stepper";
import DynamicStep from "../DynamicStep";
import { initialForm, ideaReducer } from "../../hooks/useIdeaReducer";
import { useGetIdeaFormConfigQuery } from "../../api/endpoints/formConfigApi";

// -----------------------------
// Fallback (في حالة عدم وجود API)
// -----------------------------
const FALLBACK_SECTORS = [
  { value: "agriculture", label: "الزراعة" },
  { value: "education", label: "التعليم" },
  { value: "health", label: "الصحة" },
  { value: "energy", label: "الطاقة" }
];

const FALLBACK_STEPS = [
  { 
    name: "المعلومات الشخصية", 
    fields: [
      { name: "name", label: "الاسم", type: "text", required: true },
      { name: "city", label: "المدينة", type: "text", required: true },
      { name: "tel", label: "رقم الهاتف", type: "tel", required: true }
    ]
  },
  { 
    name: "معلومات الفكرة", 
    fields: [
      { name: "title", label: "عنوان الفكرة", type: "text", required: true },
      { name: "sector", label: "القطاع", type: "select", required: true },
      { name: "description", label: "وصف الفكرة", type: "text", required: true },
      { name: "productType", label: "نوع المنتج", type: "text", required: true }
    ]
  },
  { 
    name: "تفاصيل إضافية", 
    fields: [
      { name: "targetAudience", label: "الجمهور المستهدف", type: "text", required: true },
      { name: "productProblem", label: "المشكلة التي يحلها المنتج", type: "text", required: true },
      { name: "projectDuration", label: "مدة المشروع", type: "text", required: true }
    ]
  },
  { 
    name: "الفريق", 
    fields: [
      { name: "hasTeam", label: "هل لديك فريق؟", type: "radio", required: false },
      { name: "teamMembers", label: "أعضاء الفريق", type: "text", required: false },
      { name: "teamEmails", label: "البريد الإلكتروني لكل عضو", type: "text", required: false }
    ]
  }
];

const IdeaForm = ({ onSubmit }) => {
  const { data: formConfigFromApi, isLoading: isConfigLoading } = useGetIdeaFormConfigQuery();
  
  const [form, dispatch] = useReducer(ideaReducer, initialForm);
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  // استخدام الـ fallback إلى حين جلب البيانات من الباك
  const sectors = formConfigFromApi?.sectors || FALLBACK_SECTORS;
  const steps = formConfigFromApi?.steps || FALLBACK_STEPS;
  const requiredFields = formConfigFromApi?.requiredFields || [];

  // هل الفورم له خطوات متعددة؟
  const hasMultipleSteps = steps.length > 1;

  const handleChange = (field, value) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: field,
      value: value
    });
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateStep = () => {
    const currentStepFields = steps[currentStep]?.fields || [];
    const newErrors = {};
    
    currentStepFields.forEach(field => {
      // التحقق من الحقول المطلوبة
      if (field.required && !form[field.name]) {
        newErrors[field.name] = `${field.label || field.name} مطلوب`;
      }
      // التحقق من requiredFields القادمة من API
      if (requiredFields.includes(field.name) && !form[field.name]) {
        newErrors[field.name] = `${field.label || field.name} مطلوب`;
      }
    });
    
    // التحقق الخاص بحقل hasTeam
    if (form.hasTeam === "yes") {
      if (!form.teamMembers) newErrors.teamMembers = "أعضاء الفريق مطلوبون";
      if (!form.teamEmails) newErrors.teamEmails = "بريد الأعضاء الالكتروني مطلوب";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // إذا كان الفورم متعدد الخطوات، نتحقق من آخر خطوة
    if (hasMultipleSteps && !validateStep()) return;
    
    // إذا كان الفورم من خطوة واحدة، نتحقق من جميع الحقول المطلوبة
    if (!hasMultipleSteps) {
      const allFields = steps.flatMap(s => s.fields);
      const newErrors = {};
      allFields.forEach(field => {
        if ((field.required || requiredFields.includes(field.name)) && !form[field.name]) {
          newErrors[field.name] = `${field.label || field.name} مطلوب`;
        }
      });
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
    }
    
    onSubmit(form);
  };

  if (isConfigLoading) {
    return (
      <div className="container space-y-6">
        <p className="text-center text-gray-500 py-10">جاري تحميل الفورم...</p>
      </div>
    );
  }

  // عرض الفورم بدون Stepper (خطوة واحدة)
  if (!hasMultipleSteps) {
    const allFields = steps[0]?.fields || [];
    const stepName = steps[0]?.name || "نموذج التسجيل";
    
    return (
      <form onSubmit={handleSubmit} className="container space-y-6">
        <DynamicStep
          stepName={stepName}
          fields={allFields}
          form={form}
          errors={errors}
          handleChange={handleChange}
          sectors={sectors}
        />
        
        <div className="flex justify-center mt-4">
          <Button
            label="إرسال"
            type="submit"
            className="w-50 bg-main-color text-white px-4 py-2 rounded"
          />
        </div>
      </form>
    );
  }

  // عرض الفورم مع Stepper (خطوات متعددة)
  const currentStepFields = steps[currentStep]?.fields || [];
  const currentStepName = steps[currentStep]?.name || "";

  return (
    <form onSubmit={handleSubmit} className="container space-y-6">
      <Stepper steps={steps.map(s => s.name)} current={currentStep} />

      <DynamicStep
        stepName={currentStepName}
        fields={currentStepFields}
        form={form}
        errors={errors}
        handleChange={handleChange}
        sectors={sectors}
      />

      <div className="flex gap-4">
        {currentStep < steps.length - 1 && (
          <Button
            label="التالي"
            type="button"
            onClick={handleNext}
            className="w-50 bg-main-color text-white px-4 py-2 rounded"
          />
        )}

        {currentStep > 0 && (
          <Button
            label="رجوع"
            type="button"
            onClick={handlePrevious}
            className="w-50 bg-main-color px-4 py-2 rounded"
          />
        )}

        {currentStep === steps.length - 1 && (
          <Button
            label="إرسال"
            type="submit"
            className="w-50 bg-main-color text-white px-4 py-2 rounded"
          />
        )}
      </div>
    </form>
  );
};

export default IdeaForm;