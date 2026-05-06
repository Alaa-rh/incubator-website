import React, { useState, useEffect } from "react";
import Input from "../../Input";
import Textarea from "../../Textarea";
import Select from "../../Select";
import { useGetSeasonFormDesignQuery } from "../../../api/endpoints/formConfigApi";

const FormBuilder = ({ season }) => {
 
  const isOpen = season?.phase === "SUBMISSION";

  const { data: formConfig, isLoading } = useGetSeasonFormDesignQuery(season?.id);

  // -----------------------------
  // بيانات ثابتة (fallback) إلى حين الربط
  // -----------------------------
  const fallbackFields = [
    { name: "name", label: "الاسم", type: "text", required: true, placeholder: "اكتب اسمك الكامل" },
    { name: "phone", label: "رقم الهاتف", type: "text", required: true, placeholder: "09xxxxxxxx" },
    { name: "governorate", label: "المحافظة", type: "text", required: true, placeholder: "اختر المحافظة" },
    { name: "ideaTitle", label: "عنوان الفكرة", type: "text", required: true, placeholder: "اكتب عنوان الفكرة" },
    { name: "sector", label: "القطاع المستهدف", type: "select", required: true, placeholder: "اختر القطاع المستهدف", 
      options: [
        { label: "تعليمي", value: "educational" },
        { label: "طبي", value: "medical" },
        { label: "تجاري", value: "commercial" }
      ] 
    },
    { name: "ideaDescription", label: "وصف الفكرة", type: "textarea", required: true, rows: 4, placeholder: "اكتب وصفاً مختصراً عن فكرتك" },
  ];

  const formFields = formConfig?.fields || fallbackFields;
  const [formValues, setFormValues] = useState({});

  // تهيئة الفورم بالقيم الافتراضية
  useEffect(() => {
    const initialValues = {};
    formFields.forEach(field => {
      initialValues[field.name] = "";
    });
    //eslint-disable-next-line
    setFormValues(initialValues);
  }, [formFields]);

  const handleChange = (name, value) => {
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const renderField = (field) => {
    const commonProps = {
      key: field.name,
      label: field.label,
      name: field.name,
      value: formValues[field.name] || "",
      onChange: (e) => handleChange(field.name, e.target.value),
      placeholder: field.placeholder,
      required: field.required,
      disabled: !isOpen,
    };

    switch (field.type) {
      case "select":
        return <Select {...commonProps} options={field.options || []} />;
      case "textarea":
        return <Textarea {...commonProps} rows={field.rows || 4} />;
      default:
        return <Input {...commonProps} type={field.type || "text"} />;
    }
  };

  // حالة التحميل
  if (isLoading) {
    return (
      <div className="flex gap-6">
        <div className="flex-1 p-5">
          <div className="text-center py-10">
            <p className="text-gray-500">جاري تحميل النموذج...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-6">
      {/* العمود الأيمن */}
      <div className="flex-1 p-5">
        <h1 className="text-lg font-bold mb-6">
          {season?.title || season?.name}
          <span className="text-sm text-gray-500 mr-2">(تصميم النموذج)</span>
        </h1>

        {/* الحقول الديناميكية (نصية في عمودين) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {formFields.filter(f => f.type !== "textarea" && f.type !== "select").map(renderField)}
        </div>

        {/* حقول select و textarea */}
        <div className="space-y-4">
          {formFields.filter(f => f.type === "select").map(renderField)}
          {formFields.filter(f => f.type === "textarea").map(renderField)}
        </div>
      </div>

      {/* العمود الأيسر - إحصائيات */}
      <div className="w-64 h-fit border border-second-color bg-white rounded-lg shadow p-4 flex flex-col gap-2">
        <p className="text-sm">
          <span className="font-semibold">عدد الطلبات المستلمة: </span>
          {season?.ideas_count || 0}
        </p>

        {isOpen && (
          <p className="text-sm">
            <span className="font-semibold">المتبقي لإغلاق التقديم: </span>
            {season?.remaining_days || 0} أيام
          </p>
        )}
      </div>
    </div>
  );
};

export default FormBuilder;