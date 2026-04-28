import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import DataTable from "../../components/Admin_Dashboard/DataTable";
import Button from "../../components/Button";
// import { useGetIncubatedQuery } from "../../api/endpoints/incubationApi";

const IncubatedPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // بعد الربط هذا السطر بدل البيانات الثابتة
  // const { data: incubatedFromApi, isLoading, error, refetch } = useGetIncubatedQuery();

  const incubatedData = [
    {
      id: 1,
      projectName: "منصة تعليمية",
      owner: "أحمد المحمد (قائد الفريق)",
      commitment: "80%",
      decision: "مقبول",
    },
    {
      id: 2,
      projectName: "منصة ريادية",
      owner: "سارة خالد",
      commitment: "90%",
      decision: "مقبول",
    },
    {
      id: 3,
      projectName: "تطبيق صحي",
      owner: "محمد علي",
      commitment: "75%",
      decision: "مقبول",
    },
  ];

  // استخدام البيانات من API إذا وجدت، وإلا استخدام الثابتة
  const incubated = /*incubatedFromApi ||*/ incubatedData;
  // const isLoading = false;
  // const error = null;

  // معالجة شكل البيانات إذا كانت من API
  let incubatedList = Array.isArray(incubated) ? incubated : [];
  if (incubated?.results && Array.isArray(incubated.results)) {
    incubatedList = incubated.results;
  }
  if (incubated?.data && Array.isArray(incubated.data)) {
    incubatedList = incubated.data;
  }

  // فلترة البيانات
  const filtered = incubatedList.filter((i) =>
    i.projectName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // دالة مراسلة (لإرسال إشعار)
  const handleMessage = (id) => {
    // TODO: بعد الربط  هذا الكود
    // await sendMessageToIncubated(id);
    console.log(`مراسلة المحتضن رقم ${id}`);
    alert(`تم إرسال رسالة للمحتضن (محاكاة)`);
  };

  const columns = [
    {
      key: "actions",
      label: "الإجراءات",
      render: (row) => (
        <Button
          label="مراسلة"
          className="bg-main-color"
          onClick={() => handleMessage(row.id)}
        />
      ),
    },
    { key: "commitment", label: "نسبة الالتزام" },
    { key: "decision", label: "القرار الإداري" },
    { key: "owner", label: "صاحب الفكرة" },
    { key: "projectName", label: "اسم المشروع" },
  ];

  // if (isLoading) {
  //   return (
  //     <div className="container p-6 my-10">
  //       <div className="flex items-center justify-between mb-4">
  //         <h2 className="text-lg font-bold">قائمة المحتضنين</h2>
  //         <span className="bg-white rounded-md px-4 py-2 text-gray-500">جاري التحميل...</span>
  //       </div>
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
  //     <div className="container p-6 my-10">
  //       <div className="text-center py-10">
  //         <p className="text-red-500 mb-3">حدث خطأ في تحميل البيانات</p>
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
    <div className="container p-6 my-10">
      {/* العنوان + عدد المقبولين */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">قائمة المحتضنين</h2>
        <span className="bg-white rounded-md px-4 py-2 text-green-color font-semibold">
          عدد المقبولين {filtered.length}
        </span>
      </div>

      {/* البحث */}
      <SearchBar
        placeholder="بحث باسم المشروع"
        onSearch={setSearchTerm}
      />

      {/* الجدول */}
      {filtered.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          لا يوجد محتضنين حالياً
        </div>
      ) : (
        <DataTable columns={columns} data={filtered} />
      )}
    </div>
  );
};

export default IncubatedPage;