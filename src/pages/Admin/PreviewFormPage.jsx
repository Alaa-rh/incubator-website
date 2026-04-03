import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FormPreview from "../../components/Admin_Dashboard/IncubationSeasons/Create-Season/FormPreview";
import Button from "../../components/Button";

const PreviewFormPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // الحقول القادمة من FormBuilder
  const fields = location.state?.fields || [];

  return (
    <div className="container p-6">

      {/* عنوان الصفحة */}
      <h1 className="text-xl font-bold mb-6">معاينة النموذج</h1>

      {/* عرض النموذج */}
      <FormPreview fields={fields} />

      {/* زر الرجوع */}
      <div className="flex justify-center items-center gap-8 mt-6">
        <Button
          label="العودة للتعديل"
          onClick={() => navigate(-1)}
          className="bg-main-color w-50"
        />
        <Button
        label={"نشر"}
        onClick={() => alert("تم نشر النموذج بنجاح!")}
        className="bg-main-color w-50"
      />
      </div>
    </div>
  );
};

export default PreviewFormPage;
