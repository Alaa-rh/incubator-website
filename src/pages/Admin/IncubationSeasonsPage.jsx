import React, { useState } from "react";
import DataTable from "../../components/Admin_Dashboard/DataTable"
import { Link } from "react-router-dom";
import NavLinkUniversal from "../../components/NavLinkUniversal";
import Button from "../../components/Button";
import AdminNavbar from "../../components/AdminNavbar";

const IncubationSeasonsPage = () => {
  const [year, setYear] = useState("2024");

  const seasons = [
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
            label={<Button label={"عرض التفاصيل"} className="bg-main-color"/>}

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

  return (
    <>
    <AdminNavbar
    BtnLabel={"إضافة موسم"}
    onBtnClick={() => console.log("Add season")}
    />

    <div className="container mt-30">
      {/* العنوان */}
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
        </select>
      </div>

      {/* الجدول */}
      <DataTable columns={columns} data={seasons} />
    </div>
    </>
  );
};

export default IncubationSeasonsPage;
