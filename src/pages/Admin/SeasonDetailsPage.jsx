import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import SeasonSettings from "../../components/Admin_Dashboard/IncubationSeasons/SeasonSettings";
import FormBuilder from "../../components/Admin_Dashboard/IncubationSeasons/FormBuilder";
import ApplicationsReview from "../../components/Admin_Dashboard/IncubationSeasons/ApplicationsReview";
import NavLinkUniversal from "../../components/NavLinkUniversal";
import { showSuccess, showError } from "../../Utils/toast";
// import { useGetSeasonDetailsQuery, useCloseSubmissionsMutation } from "../../api/endpoints/admin/seasonsApi";

const SeasonDetailsPage = () => {
  // const { id } = useParams();
  // const { data: season, isLoading, error, refetch } = useGetSeasonDetailsQuery(id);
  // const [closeSubmissions, { isLoading: isClosing }] = useCloseSubmissionsMutation();

  const seasonData = {
    id: 1,
    ideas_count: 30,
    remaining_days: 3,
    start_date: "2025/2/10",
    end_date: "2025/2/10",
    name: "الموسم الخامس",
    description: "يكتب هنا وصف الموسم",
    phase: "SUBMISSION",
    ideas: [
      { id: 1, project_name: "منصة تعليمية", submitted_by: "أحمد المحمد", submitted_at: "2024-02-12" },
      { id: 2, project_name: "تطبيق طبي", submitted_by: "سارة الأحمد", submitted_at: "2024-02-10" },
    ],
  };

  const season = seasonData;
  const [activeTab, setActiveTab] = useState("settings");

  const showSettings = season.phase !== "BOOTCAMP" && season.phase !== "FINISHED";
  const showForm = season.phase === "SUBMISSION";
  const showReview = season.phase !== "";

   const handleCloseSubmission = async (seasonId) => {
    try {
      // await closeSubmissions(seasonId).unwrap();
      console.log(`إغلاق التقديم للموسم ${seasonId}`);
      showSuccess("تم إغلاق التقديم بنجاح");
    } catch (err) {
      showError(err?.data?.message || "حدث خطأ أثناء إغلاق التقديم");
    }
  };

  return (
    <div className="w-full min-h-screen bg-white-color pt-10">
      <div className="container">
        <div className="flex justify-end">
          <NavLinkUniversal
            to="/admin/camp-management"
            label="إدارة المعسكر"
            className="bg-main-color text-white rounded px-3 py-1"
          />
        </div>

        <h1 className="text-xl font-bold mb-6">تفاصيل الموسم</h1>

        <div className="flex gap-4 mb-6 border-b pb-2">
          {showSettings && (
            <button
              onClick={() => setActiveTab("settings")}
              className={`px-4 py-2 font-semibold rounded ${
                activeTab === "settings" ? "bg-main-color text-white" : "bg-white border border-second-color"
              }`}
            >
              الإعدادات
            </button>
          )}
          {showForm && (
            <button
              onClick={() => setActiveTab("form")}
              className={`px-4 py-2 font-semibold rounded ${
                activeTab === "form" ? "bg-main-color text-white" : "bg-white border border-second-color"
              }`}
            >
              تصميم النموذج
            </button>
          )}
          {showReview && (
            <button
              onClick={() => setActiveTab("review")}
              className={`px-4 py-2 font-semibold rounded ${
                activeTab === "review" ? "bg-main-color text-white" : "bg-white border border-second-color"
              }`}
            >
              مراجعة الطلبات
            </button>
          )}
        </div>

        {activeTab === "settings" && showSettings && (
          <SeasonSettings
            season={season}
            onSave={(updated) => console.log("حفظ:", updated)}
            onCloseSubmission={handleCloseSubmission}
          />
        )}
        {activeTab === "form" && showForm && <FormBuilder season={season} />}
        {activeTab === "review" && showReview && (
          <ApplicationsReview season={season} applications={season.ideas || []} />
        )}
      </div>
    </div>
  );
};

export default SeasonDetailsPage;