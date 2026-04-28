import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewSeasonSettings from "../../components/Admin_Dashboard/IncubationSeasons/Create-Season/NewSeasonSettings";
import FormBuilder from "../../components/Admin_Dashboard/IncubationSeasons/Create-Season/FormBuilder";
import NavLinkUniversal from "../../components/NavLinkUniversal";

// import { useCreateIncubationSeasonMutation } from "../../api/endpoints/seasonsApi";

const CreateSeasonPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("settings");
  const [seasonData, setSeasonData] = useState(null);
  //eslint-disable-next-line
  const [formConfig, setFormConfig] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");


  // const [createSeason, { isLoading }] = useCreateIncubationSeasonMutation();

  // استقبال بيانات الإعدادات من NewSeasonSettings
  const handleSettingsSubmit = (data) => {
    console.log("Settings:", data);
    setSeasonData(data);
    setActiveTab("form");
  };

  // استقبال تصميم النموذج من FormBuilder
  const handleFormConfigSubmit = async (config) => {
    console.log("Form Config:", config);
    setFormConfig(config);
    
    // تجهيز البيانات النهائية للإرسال
    // const finalData = {
    //   ...seasonData,
    //   formConfig: config,
    // };
    
    setIsSubmitting(true);
    setError("");

    // try {
    //   await createSeason(finalData).unwrap();
    //   alert("تم إنشاء الموسم بنجاح");
    //   navigate("/admin/incubation-seasons");
    // } catch (err) {
    //   console.error("Error creating season:", err);
    //   setError(err?.data?.message || "حدث خطأ في إنشاء الموسم");
    // } finally {
    //   setIsSubmitting(false);
    // }

    // حالياً: محاكاة للإرسال
    setTimeout(() => {
      alert("تم إنشاء الموسم بنجاح (محاكاة)");
      navigate("/admin/incubation-seasons");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-white-color min-h-screen w-full p-10">
      <div className="flex justify-end">
        <NavLinkUniversal 
          to="/admin/camp-management" 
          label="إدارة المعسكر" 
          className="bg-main-color text-white rounded px-3 py-1" 
        />
      </div>
      
      <div className="container">
        {/* عرض الخطأ */}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
            {error}
          </div>
        )}

        {/* التبويبات */}
        <div className="flex gap-4 mb-6 border-b pb-2">
          <button
            onClick={() => setActiveTab("settings")}
            disabled={isSubmitting}
            className={`px-4 py-2 font-semibold transition ${
              activeTab === "settings"
                ? "bg-main-color text-white rounded"
                : "border border-second-color rounded hover:bg-gray-50"
            }`}
          >
            الإعدادات
          </button>

          <button
            onClick={() => setActiveTab("form")}
            disabled={isSubmitting || !seasonData}
            className={`px-4 py-2 font-semibold transition ${
              activeTab === "form"
                ? "bg-main-color text-white rounded"
                : "border border-second-color rounded hover:bg-gray-50"
            } ${!seasonData ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            تصميم النموذج
          </button>
        </div>

        {/* محتوى التبويبات */}
        {activeTab === "settings" && (
          <>
          <p className="text-2xl font-bold mb-4">املأ الاعدادت اولا للانتقال لتصميم النموذج :</p>
          <NewSeasonSettings 
            onSubmit={handleSettingsSubmit} 
            isSubmitting={isSubmitting}
          />
          </>
        )}

        {activeTab === "form" && seasonData && (
          <FormBuilder 
            onSubmit={handleFormConfigSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      </div>
    </div>
  );
};

export default CreateSeasonPage;