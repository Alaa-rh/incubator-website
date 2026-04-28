import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import SeasonSettings from "../../components/Admin_Dashboard/IncubationSeasons/SeasonSettings";
import FormBuilder from "../../components/Admin_Dashboard/IncubationSeasons/FormBuilder";
import ApplicationsReview from "../../components/Admin_Dashboard/IncubationSeasons/ApplicationsReview";
import NavLinkUniversal from "../../components/NavLinkUniversal";
// import { useGetSeasonDetailsQuery } from "../../api/endpoints/admin/seasonsApi";

const SeasonDetailsPage = () => {
  // const { id } = useParams();

  // const { data: season, isLoading, error, refetch } = useGetSeasonDetailsQuery(id);

  const seasonData = {
    id: 1,
    title: "الموسم السادس للتكنولوجيا",
    statusType: "open",
    applications: 30,
    remainingDays: 3,
    startDate: "2025/2/10",
    endDate: "2025/2/10",
    name: "الخامس",
    description: "يكتب هنا وصف الموسم",
    successMessage: "يكتب هنا الرسالة",
    applicationsList: [
      {
        id: 1,
        projectName: "منصة تعليمية",
        applicant: "أحمد المحمد",
        date: "2024-02-12",
      },
      {
        id: 2,
        projectName: "تطبيق طبي",
        applicant: "سارة الأحمد",
        date: "2024-02-10",
      },
    ],
  };

  // استخدام البيانات من API إذا وجدت، وإلا استخدام الثابتة
  const season = seasonData;
  // const isLoading = false;
  // const error = null;

  // التبويب الحالي
  const [activeTab, setActiveTab] = useState("settings");

  // منطق إظهار التبويبات حسب حالة الموسم
  const showSettings = season.statusType !== "camp" && season.statusType !== "finished";
  const showForm = season.statusType === "open";
  const showReview = season.statusType !== "finished";

  // if (isLoading) {
  //   return (
  //     <div className="w-full min-h-screen bg-white-color pt-10">
  //       <div className="container text-center py-20">
  //         <p className="text-gray-500">جاري تحميل تفاصيل الموسم...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="w-full min-h-screen bg-white-color pt-10">
  //       <div className="container text-center py-20">
  //         <p className="text-red-500 mb-3">حدث خطأ في تحميل تفاصيل الموسم</p>
  //         <button
  //           onClick={refetch}
  //           className="bg-main-color text-white px-4 py-2 rounded"
  //         >
  //           إعادة المحاولة
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

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

        {/* التبويبات */}
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

        {/* محتوى التبويبات */}
        {activeTab === "settings" && showSettings && (
          <SeasonSettings
            season={season}
            onSave={(updated) => console.log("حفظ:", updated)}
            onCloseSubmission={(id) => console.log("إغلاق التقديم:", id)}
          />
        )}

        {activeTab === "form" && showForm && (
          <FormBuilder season={season} />
        )}

        {activeTab === "review" && showReview && (
          <ApplicationsReview 
            season={season} 
            applications={season.applicationsList || []} 
          />
        )}
      </div>
    </div>
  );
};

export default SeasonDetailsPage;