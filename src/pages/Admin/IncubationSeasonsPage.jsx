import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "../../components/Admin_Dashboard/DataTable";
import NavLinkUniversal from "../../components/NavLinkUniversal";
import Button from "../../components/Button";
import AdminNavbar from "../../components/AdminNavbar";
import Select from "../../components/Select";
// import { useGetIncubationSeasonsQuery } from "../../api/endpoints/seasonsApi";

const IncubationSeasonsPage = () => {
  const [year, setYear] = useState("2025");
  const navigate = useNavigate();

  // const { data: seasonsFromApi, isLoading, error, refetch } = useGetIncubationSeasonsQuery(year);

  const seasonsData = [
    {
      id: 1,
      year: 2025,
      name: "السادس",
      start_date: "12/4/2025",
      end_date: "12/4/2025",
      ideas_count: 30,
       
      status: {
        is_open: true,
        label: "مفتوح",
        phase: "EXHIBITION"
      },
    },
    {
      id: 2,
      year: 2025,
      name: "السادس",
      start_date: "12/4/2025",
      end_date: "12/4/2025",
      ideas_count: 30,
      status: {
        is_open: false,
        label: "مغلق - قيد التقييم",
        phase: "EVALUATION"
      },
    },
    {
      id: 3,
      year: 2025,
      name: "السادس",
      start_date: "12/4/2025",
      end_date: "12/4/2025",
      ideas_count: 30,
      status: {
        is_open: false,
        label: "مغلق - مرحلة المعسكر",
        phase: "BOOTCAMP"
      },
    },
    {
      id: 4,
      year: 2024,
      name: "الخامس",
      start_date: "10/3/2024",
      end_date: "10/4/2024",
      ideas_count: 25,
      status: {
        is_open: false,
        label: "محتضن",
        phase: "INCUBATION"
      },
    }
  ];

  // استخدام البيانات الثابتة حالياً
  const seasons = seasonsData;
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

  //  فلترة المواسم حسب السنة المختارة
  const filteredSeasons = seasonsList.filter((season) => season.year === parseInt(year));

  //  دالة تحديد لون الحالة
  const getStatusColor = (status) => {
    if (status.is_open) return "bg-green-color text-white";
    switch (status.phase) {
      case "EVALUATION":
        return "bg-red-color text-white";
      case "BOOTCAMP":
        return "bg-second-color text-white";
      case "INCUBATION":
        return "bg-blue-500 text-white";
      default:
        return "bg-yellow-400 text-white";
    }
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
        <span className={`px-3 py-1 rounded-md text-sm ${getStatusColor(row.status)}`}>
          {row.status.label}
        </span>
      ),
    }, 
    { key: "start_date", label: "تاريخ فتح التقديم" }, 
    { key: "end_date", label: "تاريخ إغلاق التقديم" }, 
    { key: "ideas_count", label: "عدد الطلبات المستلمة" },
    { key: "name", label: "الموسم" }, 
  ];

  const createSeason = () => {
    navigate("/admin/create-season");
  };

  // سنوات متاحة للفلتر (مستخرجة من البيانات)
  const availableYears = [...new Set(seasonsList.map(s => s.year))].sort((a, b) => b - a);

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
        <h1 className="text-xl font-bold mb-4">مواسم الاحتضان</h1>

     
        <div className="w-60 mb-4">
          <Select
            label="السنة"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            options={availableYears.map(y => ({ value: y.toString(), label: y.toString() }))}
            placeholder="اختر السنة"
          />
        </div>

        {/* الجدول */}
        {filteredSeasons.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            لا توجد مواسم احتضان للسنة {year}
          </div>
        ) : (
          <DataTable columns={columns} data={filteredSeasons} />
        )}
      </div>
    </>
  );
};

export default IncubationSeasonsPage;