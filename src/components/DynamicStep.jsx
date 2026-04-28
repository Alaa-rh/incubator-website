// src/components/Forms/DynamicStep.js
import React from "react";
import Input from "./Input";
import Select from "./Select";

const DynamicStep = ({ stepName, fields, form, errors, handleChange, sectors = [] }) => {
  
  // دالة لعرض الحقل حسب نوعه
  const renderField = (field) => {
    const fieldName = field.name;
    const value = form[fieldName];
    const error = errors[fieldName];
    const fieldConfig = field;

    // حقول خاصة (تختلف عن الـ Input العادي)
    switch (fieldName) {
      case "sector": {
        return (
          <Select
            key={fieldName}
            label={fieldConfig.label || "القطاع"}
            name={fieldName}
            value={value || ""}
            onChange={(e) => handleChange(fieldName, e.target.value)}
            error={error}
            options={sectors}
            placeholder={fieldConfig.placeholder || "اختر القطاع"}
            required={fieldConfig.required}
          />
        );
      }
      
      case "hasTeam": {
        return (
          <div key={fieldName} className="space-y-2">
            <label className="font-bold block">
              {fieldConfig.label || "هل لديك فريق؟"}
              {fieldConfig.required && <span className="text-red-500 mr-1">*</span>}
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name={fieldName}
                  value="yes"
                  checked={value === "yes"}
                  onChange={(e) => handleChange(fieldName, e.target.value)}
                />
                نعم
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name={fieldName}
                  value="no"
                  checked={value === "no"}
                  onChange={(e) => handleChange(fieldName, e.target.value)}
                />
                لا
              </label>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
        );
      }
      
      case "teamMembers":
      case "teamEmails": {
        // تظهر فقط إذا hasTeam = yes
        if (form.hasTeam !== "yes") return null;
        
        const labels = {
          teamMembers: "أعضاء الفريق",
          teamEmails: "البريد الإلكتروني لكل عضو"
        };
        
        const placeholders = {
          teamMembers: "أسماء الأعضاء مفصولة بفواصل",
          teamEmails: "example@email.com, another@email.com"
        };
        
        return (
          <Input
            key={fieldName}
            label={fieldConfig.label || labels[fieldName]}
            name={fieldName}
            value={value || ""}
            onChange={(e) => handleChange(fieldName, e.target.value)}
            error={error}
            placeholder={fieldConfig.placeholder || placeholders[fieldName]}
            required={fieldConfig.required}
          />
        );
      }
      
      case "image": {
        return (
          <Input
            key={fieldName}
            label={fieldConfig.label || "رفع صورة"}
            name={fieldName}
            type="file"
            accept="image/*"
            onChange={(e) => handleChange(fieldName, e.target.files[0])}
            error={error}
            required={fieldConfig.required}
          />
        );
      }
      
      default: {
        // الحقول العادية حسب نوعها
        const inputType = fieldConfig.type === "email" ? "email" : 
                          fieldConfig.type === "number" ? { type: "number", inputMode: "numeric" } : fieldConfig.type === "text" ? "text" : "text";
        
        return (
          <Input
            key={fieldName}
            label={fieldConfig.label || fieldName}
            name={fieldName}
            type={inputType}
            value={value || ""}
            onChange={(e) => handleChange(fieldName, e.target.value)}
            error={error}
            placeholder={fieldConfig.placeholder}
            required={fieldConfig.required}
          />
        );
      }
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-second-color mb-4">{stepName}</h2>
      <div className="space-y-4">
        {fields.map(field => renderField(field))}
      </div>
    </div>
  );
};

export default DynamicStep;