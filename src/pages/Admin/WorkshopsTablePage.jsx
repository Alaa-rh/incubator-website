import React, { useState } from "react";
import DataTable from "../../components/Admin_Dashboard/DataTable";
import Button from "../../components/Button";
import Select from "../../components/Select";
import AdminNavbar from "../../components/AdminNavbar";
import { useNavigate } from "react-router-dom";

const WorkshopsTablePage = () => {
  const navigate = useNavigate();

  const [statusFilter, setStatusFilter] = useState("");

  const workshops = [
    { id: 1, title: "تدريب ذكاء", startDate: "12/4/2025", volunteer: "احمد الحسن", status: "مقبول" },
    { id: 2, title: "تدريب ذكاء", startDate: "12/4/2025", volunteer: "احمد الحسن", status: "مرفوض" },
    { id: 3, title: "تدريب ذكاء", startDate: "12/4/2025", volunteer: "احمد الحسن", status: "بانتظار الموافقة" },
    { id: 4, title: "تدريب ذكاء", startDate: "12/4/2025", volunteer: "احمد الحسن", status: "مقبول" },
  ];

  const filtered = workshops.filter((w) =>
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


  return (
    <>
      <AdminNavbar
    BtnLabel={"إضافة موسم"}
    onBtnClick={createSeason}
    />
    <div className="container mt-30">

      {/* العنوان */}
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
      <DataTable columns={columns} data={filtered} />
    </div>
    </>
  );
};

export default WorkshopsTablePage;
