import React, { useState } from "react";
import SearchBar from "../../SearchBar";
import DataTable from "../DataTable";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";

const SessionsSection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const sessions = [
    {
      id: 1,
      title: "منصة تدريبية",
      trainer: "أحمد المحمد (قائد الفريق)",
      time: "2-5",
      date: "12/2/2024",
      tasks: "task",
      status: "منتهية",
    },
    // ...
  ];

  const filtered = sessions.filter(
    (s) =>
      s.title.includes(searchTerm) ||
      s.trainer.includes(searchTerm)
  );

  const columns = [
    { key: "date", label: "تاريخ الجلسة" },
    { key: "tasks", label: "المهام المطلوبة" },
    { key: "status", label: "الحالة" },
    { key: "time", label: "الوقت" }, 
    { key: "trainer", label: "المدرب" },
    { key: "title", label: "عنوان الجلسة" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">

      <h2 className="text-lg font-bold mb-4">قائمة الجلسات</h2>

      <SearchBar
        placeholder="بحث باسم المشروع أو الطالب"
        onSearch={setSearchTerm}
      />

      <DataTable columns={columns} data={filtered} />

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
