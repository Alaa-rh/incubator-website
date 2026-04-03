import React, { useState } from "react";
import NewSeasonSettings from "../../components/Admin_Dashboard/IncubationSeasons/Create-Season/NewSeasonSettings";
import FormBuilder from "../../components/Admin_Dashboard/IncubationSeasons/Create-Season/FormBuilder";

const CreateSeasonPage = () => {
  const [activeTab, setActiveTab] = useState("settings");

  return (
    <div className="bg-white-color min-h-screen w-full p-10">
        <div className="container">
      {/* التبويبات */}
      <div className="flex gap-4 mb-6 border-b pb-2">
        <button
          onClick={() => setActiveTab("settings")}
          className={`px-4 py-2 font-semibold ${
            activeTab === "settings"
              ? "bg-main-color text-white rounded px-3 py-1"
              : "border border-second-color rounded"
          }`}
        >
          الإعدادات
        </button>

        <button
          onClick={() => setActiveTab("form")}
          className={`px-4 py-2 font-semibold ${
            activeTab === "form"
              ? "bg-main-color text-white rounded px-3 py-1"
              : "border border-second-color rounded"
          }`}
        >
          تصميم النموذج
        </button>
      </div>

      {/* محتوى التبويبات */}
      {activeTab === "settings" && (
        <NewSeasonSettings onSubmit={(data) => console.log("Settings:", data)} />
      )}

      {activeTab === "form" && <FormBuilder />}
    </div>
  </div>
    );
};

export default CreateSeasonPage;
