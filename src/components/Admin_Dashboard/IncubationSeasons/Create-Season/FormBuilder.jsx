import React, { useState } from "react";
import FieldTypesPanel from "./FieldTypesPanel";
import FormBuilderCanvas from "./FormBuilderCanvas";
import Button from "../../../Button";
import { useNavigate } from "react-router-dom";

const FormBuilder = () => {
  const navigate = useNavigate();

  const [fields, setFields] = useState([]);

  // إضافة حقل جديد
  const addField = (type) => {
    const newField = {
      id: crypto.randomUUID(),
      type,
      label: "",
      required: false,
      options:
        type === "select" || type === "radio" || type === "checkbox"
          ? []
          : null,
    };

    setFields((prev) => [...prev, newField]);
  };

  // تعديل حقل
  const updateField = (id, updatedData) => {
    setFields((prev) =>
      prev.map((field) =>
        field.id === id ? { ...field, ...updatedData } : field
      )
    );
  };

  // حذف حقل
  const deleteField = (id) => {
    setFields((prev) => prev.filter((field) => field.id !== id));
  };

  // نشر النموذج (لاحقاً نربطه مع API)
  const publishForm = () => {
    console.log("Form Published:", fields);
  };

  // الانتقال لصفحة المعاينة
  const goToPreview = () => {
    navigate("/admin/preview-form", { state: { fields } });
  };

  return (
    <div>
    <div className="flex gap-6">
      {/* مساحة بناء النموذج */}
      <div className="flex-1">
        <FormBuilderCanvas
          fields={fields}
          updateField={updateField}
          deleteField={deleteField}
        />
      </div> 

      {/* لوحة أنواع الحقول */}
      <FieldTypesPanel addField={addField} />
    </div>
    {/* أزرار التحكم بأسفل الصفحة */}
      <div className="flex justify-center items-center gap-8 mt-6">
        <Button
          label="معاينة النموذج"
          onClick={goToPreview}
          className="bg-main-color w-50"
        />

        <Button
          label="نشر"
          onClick={publishForm}
          className="bg-main-color w-50"
        />
      </div>
      </div>
  );
};

export default FormBuilder;
