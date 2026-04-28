import React, { useState } from "react";
import DataTable from "../../components/Admin_Dashboard/DataTable";
import { useNavigate } from "react-router-dom";
import NavLinkUniversal from "../../components/NavLinkUniversal";
import Button from "../../components/Button";
import AdminNavbar from "../../components/AdminNavbar";
// import { useGetIncubationSeasonsQuery } from "../../api/endpoints/incubationApi";

const IncubationSeasonsPage = () => {
  const [year, setYear] = useState("2024");
  const navigate = useNavigate();

  // const { data: seasonsFromApi, isLoading, error, refetch } = useGetIncubationSeasonsQuery(year);

  const seasonsData = [
    {
      id: 1,
      season: "السادس",
      openDate: "12/4/2025",
      closeDate: "12/4/2025",
      applications: 30,
      status: "مفتوح",
      statusType: "open",
    },
    {
      id: 2,
      season: "السادس",
      openDate: "12/4/2025",
      closeDate: "12/4/2025",
      applications: 30,
      status: "مغلق - قيد التقييم",
      statusType: "evaluation",
    },
    {
      id: 3,
      season: "السادس",
      openDate: "12/4/2025",
      closeDate: "12/4/2025",
      applications: 30,
      status: "مغلق - مرحلة المعسكر",
      statusType: "camp",
    },
    {
      id: 4,
      season: "السادس",
      openDate: "12/4/2025",
      closeDate: "12/4/2025",
      applications: 30,
      status: "منتهي",
      statusType: "finished",
    },
  ];

  // استخدام البيانات من API إذا وجدت، وإلا استخدام الثابتة
  const seasons = /*seasonsFromApi ||*/ seasonsData;
  // const isLoading = false;
  // const error = null;

  // معالجة شكل البيانات إذا كانت من API
  let seasonsList = Array.isArray(seasons) ? seasons : [];
  if (seasons?.results && Array.isArray(seasons.results)) {
    seasonsList = seasons.results;
  }
  if (seasons?.data && Array.isArray(seasons.data)) {
    seasonsList = seasons.data;
  }

  const statusColors = {
    open: "bg-green-color text-white",
    evaluation: "bg-red-color text-white",
    camp: "bg-second-color text-white",
    finished: "bg-yellow-400 text-white",
  };

  const columns = [
    {
      key: "actions",
      label: "الإجراءات",
      render: (row) => (
        <NavLinkUniversal
          to={`/incubation-seasons/${row.id}`}
          label={<Button label="عرض التفاصيل" className="bg-main-color"/>}
        />
      ),
    },
    {
      key: "status",
      label: "الحالة الحالية",
      render: (row) => (
        <span
          className={`px-3 py-1 rounded-md text-sm ${statusColors[row.statusType]}`}
        >
          {row.status}
        </span>
      ),
    }, 
    { key: "openDate", label: "تاريخ فتح" }, 
    { key: "closeDate", label: "تاريخ إغلاق" }, 
    { key: "applications", label: "عدد الطلبات المستلمة" },
    { key: "season", label: "الموسم" }, 
  ];

  const createSeason = () => {
    navigate("/admin/create-season");
  };

  // if (isLoading) {
  //   return (
  //     <>
  //       <AdminNavbar BtnLabel="إضافة موسم" onBtnClick={createSeason} />
  //       <div className="container mt-30">
  //         <h1 className="text-xl font-bold">مواسم الاحتضان</h1>
  //         <div className="space-y-4 mt-4">
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
  //         <p className="text-red-500 mb-3">حدث خطأ في تحميل المواسم</p>
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
        <h1 className="text-xl font-bold">مواسم الاحتضان</h1>

        {/* فلتر السنة */}
        <div className="mb-4">
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md"
          >
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
        </div>

        {/* الجدول */}
        {seasonsList.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            لا توجد مواسم احتضان للسنة {year}
          </div>
        ) : (
          <DataTable columns={columns} data={seasonsList} />
        )}
      </div>
    </>
  );
};

export default IncubationSeasonsPage;