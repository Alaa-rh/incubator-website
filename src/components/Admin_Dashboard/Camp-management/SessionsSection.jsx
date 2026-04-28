import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../SearchBar";
import DataTable from "../DataTable";
import Button from "../../Button";

// import { useGetSessionsQuery } from "../../../api/endpoints/admin/sessionsApi";


const FALLBACK_SESSIONS = [
  {
    id: 1,
    title: "منصة تدريبية",
    trainer: "أحمد المحمد",
    time: "2-5",
    date: "12/2/2024",
    tasks: "تجهيز العرض التقديمي",
    location: "الحاضنة",
  },
  {
    id: 2,
    title: "روبوت سبايك",
    trainer: "سارة خالد",
    time: "10-12",
    date: "15/2/2024",
    tasks: "برمجة الروبوت",
    location: "مختبر الروبوتات",
  },
  {
    id: 3,
    title: "تطوير واجهات",
    trainer: "محمد علي",
    time: "1-4",
    date: "20/2/2024",
    tasks: "تصميم UI/UX",
    location: "قاعة التدريب",
  },
];

const SessionsSection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // const { data: sessionsFromApi, isLoading, error, refetch } = useGetSessionsQuery();

  // حالياً: استخدام بيانات ثابتة
  const sessions = FALLBACK_SESSIONS;
  // const isLoading = false;
  // const error = null;

  // فلترة الجلسات حسب البحث
  const filtered = sessions.filter(
    (s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.trainer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { key: "date", label: "تاريخ الجلسة" },
    { key: "tasks", label: "المهام المطلوبة" },
    { key: "location", label: "موقع الجلسة" },
    { key: "time", label: "الوقت" },
    { key: "trainer", label: "المدرب" },
    { key: "title", label: "عنوان الجلسة" },
  ];

  // if (isLoading) {
  //   return (
  //     <div className="bg-white p-6 rounded-lg shadow">
  //       <h2 className="text-lg font-bold mb-4">قائمة الجلسات</h2>
  //       <div className="space-y-4">
  //         {[1, 2, 3].map((i) => (
  //           <div key={i} className="h-16 bg-gray-100 rounded animate-pulse"></div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="bg-white p-6 rounded-lg shadow">
  //       <h2 className="text-lg font-bold mb-4">قائمة الجلسات</h2>
  //       <div className="text-center py-6">
  //         <p className="text-red-500 mb-3">حدث خطأ في تحميل الجلسات</p>
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
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-bold mb-4">قائمة الجلسات</h2>

      <SearchBar
        placeholder="بحث باسم المشروع أو المدرب"
        onSearch={setSearchTerm}
      />

      {filtered.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          لا توجد جلسات حالياً
        </div>
      ) : (
        <DataTable columns={columns} data={filtered} />
      )}

      <div className="flex justify-center mt-4">
        <Button
          label="إضافة جلسة"
          onClick={() => navigate("/admin/add-session")}
          className="bg-main-color w-50"
        />
      </div>
    </div>
  );
};

export default SessionsSection;