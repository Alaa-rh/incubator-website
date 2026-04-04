import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import DataTable from "../../components/Admin_Dashboard/DataTable";
import Button from "../../components/Button";

const IncubatedPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // بيانات تجريبية
  const incubated = [
    {
      id: 1,
      projectName: "منصة تعليمية",
      owner: "أحمدالمحمد (قائد الفريق)",
      commitment: "80%",
      decision: "مقبول",
    },
    {
      id: 2,
      projectName: "منصة تعليمية",
      owner: "أحمدالمحمد (قائد الفريق)",
      commitment: "80%",
      decision: "مقبول",
    },
    {
      id: 3,
      projectName: "منصة تعليمية",
      owner: "أحمدالمحمد (قائد الفريق)",
      commitment: "80%",
      decision: "مقبول",
    },
  ];

  const filtered = incubated.filter((i) =>
    i.projectName.includes(searchTerm)
  );

  const columns = [ 
    {
      key: "actions",
      label: "الإجراءات",
      render: () => (
        <Button
          label="مراسلة"
          className="bg-main-color"
        />
      ),
    },
    
    { key: "commitment", label: "نسبة الالتزام" },
    { key: "decision", label: "القرار الإداري" },
    { key: "owner", label: "صاحب الفكرة" },
    { key: "projectName", label: "اسم المشروع" },
   
  ];

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
      <DataTable columns={columns} data={filtered} />
    </div>
  );
};

export default IncubatedPage;
