import React, { useState } from "react";
import SearchBar from "../../SearchBar";
import DataTable from "../DataTable";

const AbsenceRequestsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const requests = [
    {
      id: 1,
      projectName: "منصة تعليمية",
      requester: "أحمد المحمد (قائد الفريق)",
      sessionDate: "12/2/2024",
      reason: "سبب الغياب",
    },
    // ... باقي البيانات
  ];

const approveRequest = (id) => {
  console.log(`تمت الموافقة على الطلب رقم ${id}`);
}

const sendAlert = (id) => {
  console.log(`تم إرسال تحذير للطلب رقم ${id}`);
}

  const filteredRequests = requests.filter((req) =>
    req.projectName.includes(searchTerm) ||
    req.requester.includes(searchTerm)
  );

  const columns = [
    {
      key: "actions",
      label: "الإجراءات",
      render: (row) => (
        <div className="flex flex-col gap-3">
          <button className="bg-green-color text-white rounded-md px-2 py-1 font-semibold" onClick={() => approveRequest(row.id)}>موافقة</button>
          <button className="bg-white border border-second-color px-2 py-1 rounded-md font-semibold" onClick={() => sendAlert(row.id)}>إرسال تحذير</button>
        </div>
      ),
    },
    { key: "sessionDate", label: "تاريخ الجلسة" },
    { key: "reason", label: "سبب الغياب" },
    { key: "requester", label: "مقدم الطلب" },
    { key: "projectName", label: "اسم المشروع" },
    
  ];

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-lg font-bold mb-4">قائمة طلبات الغياب</h2>

      <SearchBar
        placeholder="بحث باسم المشروع أو الطالب"
        onSearch={setSearchTerm}
      />

      <DataTable columns={columns} data={filteredRequests} />
    </div>
  );
};

export default AbsenceRequestsSection;
