import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "../../components/Admin_Dashboard/DataTable";
import Button from "../../components/Button";
import Select from "../../components/Select";
import AdminNavbar from "../../components/AdminNavbar";

// import { useGetWorkshopsQuery } from "../../api/endpoints/workshopsApi";

const WorkshopsTablePage = () => {
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState("");

  // const { data: workshopsFromApi, isLoading, error, refetch } = useGetWorkshopsQuery();

  
  const workshopsData = [
    { id: 1, title: "تدريب ذكاء اصطناعي", startDate: "12/4/2025", volunteer: "أحمد الحسن", status: "مقبول" },
    { id: 2, title: "تدريب تطوير برمجيات", startDate: "15/4/2025", volunteer: "سارة خالد", status: "مرفوض" },
    { id: 3, title: "تدريب قيادة فرق", startDate: "20/4/2025", volunteer: "محمد علي", status: "بانتظار الموافقة" },
    { id: 4, title: "تدريب تسويق رقمي", startDate: "25/4/2025", volunteer: "نورا حسن", status: "مقبول" },
  ];

  // استخدام البيانات من API إذا وجدت، وإلا استخدام الثابتة
  const workshops = workshopsData;
  // const isLoading = false;
  // const error = null;

  // معالجة شكل البيانات إذا كانت من API
  let workshopsList = Array.isArray(workshops) ? workshops : [];
  if (workshops?.results && Array.isArray(workshops.results)) {
    workshopsList = workshops.results;
  }
  if (workshops?.data && Array.isArray(workshops.data)) {
    workshopsList = workshops.data;
  }

  // فلترة البيانات حسب الحالة
  const filtered = workshopsList.filter((w) =>
    statusFilter === "" ? true : w.status === statusFilter
  );

  const columns = [
    {
      key: "actions",
      label: "الإجراءات",
      render: (row) => (
        <Button
          label="عرض التفاصيل"
          className="bg-main-color text-white px-3 py-1"
          onClick={() => navigate(`/workshops/${row.id}`)}
        />
      ),
    }, 
    {
      key: "status",
      label: "الحالة الحالية",
      render: (row) => {
        const color =
          row.status === "مقبول"
            ? "text-green-600"
            : row.status === "مرفوض"
            ? "text-red-600"
            : "text-yellow-600";

        return <span className={`font-semibold ${color}`}>{row.status}</span>;
      },
    },
    { key: "startDate", label: "تاريخ البدء" },
    { key: "volunteer", label: "اسم المتطوع" }, 
    { key: "title", label: "عنوان الدورة" },
  ];

  const createSeason = () => {
    navigate("/admin/create-season");
  };

  // if (isLoading) {
  //   return (
  //     <>
  //       <AdminNavbar BtnLabel="إضافة موسم" onBtnClick={createSeason} />
  //       <div className="container mt-30">
  //         <h2 className="text-xl font-bold mb-4">الورشات التدريبية</h2>
  //         <div className="space-y-4">
  //           {[1, 2, 3].map((i) => (
  //             <div key={i} className="h-16 bg-gray-100 rounded animate-pulse"></div>
  //           ))}
  //         </div>
  //       </div>
  //     </>
  //   );
  // }


  // if (error) {
  //   return (
  //     <>
  //       <AdminNavbar BtnLabel="إضافة موسم" onBtnClick={createSeason} />
  //       <div className="container mt-30 text-center py-10">
  //         <p className="text-red-500 mb-3">حدث خطأ في تحميل الورشات</p>
  //         <button
  //           onClick={refetch}
  //           className="bg-main-color text-white px-4 py-2 rounded"
  //         >
  //           إعادة المحاولة
  //         </button>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <AdminNavbar
        BtnLabel="إضافة موسم"
        onBtnClick={createSeason}
      />
      
      <div className="container mt-30">
        <h2 className="text-xl font-bold mb-4">الورشات التدريبية</h2>

        {/* الفلترة حسب الحالة */}
        <div className="w-60 mb-4">
          <Select
            label="حالة الورشة"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            placeholder="الكل"
            options={[
              { value: "", label: "الكل" },
              { value: "مقبول", label: "مقبول" },
              { value: "مرفوض", label: "مرفوض" },
              { value: "بانتظار الموافقة", label: "بانتظار الموافقة" },
            ]}
          />
        </div>

        {/* الجدول */}
        {filtered.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            لا توجد ورشات تدريبية
          </div>
        ) : (
          <DataTable columns={columns} data={filtered} />
        )}
      </div>
    </>
  );
};

export default WorkshopsTablePage;