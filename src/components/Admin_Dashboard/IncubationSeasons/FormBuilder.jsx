import React, { useState, useEffect } from "react";
import Input from "../../Input";
import Textarea from "../../Textarea";
import Select from "../../Select";
import { useGetIdeaFormConfigQuery } from "../../../api/endpoints/formConfigApi";

const FormBuilder = ({ season }) => {
  const isOpen = season.statusType === "open";

  // جلب هيكل الفورم من API
  const { data: formConfig, isLoading } = useGetIdeaFormConfigQuery();

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

  // استخدام البيانات من API إذا وجدت، وإلا استخدام fallback
  const formFields = formConfig?.fields || fallbackFields;
  const [formValues, setFormValues] = useState({});

  // تحميل هيكل الفورم من الباك أو استخدام fallback
  useEffect(() => {
    // تهيئة الفورم بالقيم الافتراضية
    const initialValues = {};
    formFields.forEach(field => {
      initialValues[field.name] = "";
    });
    // setFormValues(initialValues);
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
        return (
          <Select
            {...commonProps}
            options={field.options || []}
          />
        );
      case "textarea":
        return (
          <Textarea
            {...commonProps}
            rows={field.rows || 4}
          />
        );
      default:
        return (
          <Input
            {...commonProps}
            type={field.type || "text"}
          />
        );
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
        {/* عنوان */}
        <h1 className="text-lg font-bold mb-6">
          {season.title}
          <span className="text-sm text-gray-500 mr-2">(تصميم النموذج)</span>
        </h1>

        {/* الحقول الديناميكية */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {formFields.filter(f => f.type !== "textarea" && f.type !== "select").map(renderField)}
        </div>

        {/* حقول الـ select و textarea في عمود منفصل */}
        <div className="space-y-4">
          {formFields.filter(f => f.type === "select").map(renderField)}
          {formFields.filter(f => f.type === "textarea").map(renderField)}
        </div>
      </div>

      {/* العمود الأيسر */}
      <div className="w-64 h-fit border border-second-color bg-white rounded-lg shadow p-4 flex flex-col gap-2">
        <p className="text-sm">
          <span className="font-semibold">عدد الطلبات المستلمة: </span>
          {season.applications}
        </p>

        {isOpen && (
          <p className="text-sm">
            <span className="font-semibold">المتبقي لإغلاق التقديم: </span>
            {season.remainingDays} أيام
          </p>
        )}
      </div>
    </div>
  );
};

export default FormBuilder;