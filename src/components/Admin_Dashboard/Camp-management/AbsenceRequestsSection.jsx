import React, { useState } from "react";
import SearchBar from "../../SearchBar";
import DataTable from "../DataTable";
// import { useApproveAbsenceMutation, useSendWarningMutation } from "../../api/endpoints/admin/absenceApi";

const AbsenceRequestsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // const [approveAbsence, { isLoading: isApproving }] = useApproveAbsenceMutation();
  // const [sendWarning, { isLoading: isSendingWarning }] = useSendWarningMutation();

  
  const requests = [
    {
      id: 1,
      projectName: "منصة تعليمية",
      requester: "أحمد المحمد (قائد الفريق)",
      sessionDate: "12/2/2024",
      reason: "ظروف صحية طارئة",
    },
    {
      id: 2,
      projectName: "روبوت سبايك",
      requester: "سارة خالد",
      sessionDate: "15/2/2024",
      reason: "سفر مفاجئ",
    },
    {
      id: 3,
      projectName: "تطوير واجهات",
      requester: "محمد علي",
      sessionDate: "20/2/2024",
      reason: "ارتباطات عائلية",
    },
  ];

  const approveRequest = async (id) => {
   
    // try {
    //   await approveAbsence(id).unwrap();
    //   alert("تمت الموافقة على طلب الغياب. سيتم إشعار المستخدم.");
    // } catch (error) {
    //   console.error("Error:", error);
    //   alert(error?.data?.message || "حدث خطأ في الموافقة");
    // }

    console.log(`تمت الموافقة على الطلب رقم ${id}`);
    alert(`تمت الموافقة على الطلب رقم ${id}`);
  };

  const sendAlert = async (id) => {
    
    // try {
    //   await sendWarning(id).unwrap();
    //   alert("تم إرسال التحذير. سيتم إشعار المستخدم.");
    // } catch (error) {
    //   console.error("Error:", error);
    //   alert(error?.data?.message || "حدث خطأ في إرسال التحذير");
    // }

    console.log(`تم إرسال تحذير للطلب رقم ${id}`);
    alert(`تم إرسال تحذير للطلب رقم ${id}`);
  };

  const filteredRequests = requests.filter((req) =>
    req.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    req.requester.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      key: "actions",
      label: "الإجراءات",
      render: (row) => (
        <div className="flex flex-col gap-3">
          <button 
            className="bg-green-color text-white rounded-md px-2 py-1 font-semibold hover:bg-green-700 transition"
            onClick={() => approveRequest(row.id)}
          >
            موافقة
          </button>
          <button 
            className="border border-second-color rounded-md px-2 py-1 font-semibold"
            onClick={() => sendAlert(row.id)}
          >
            إرسال تحذير
          </button>
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

      {filteredRequests.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          لا توجد طلبات غياب حالياً
        </div>
      ) : (
        <DataTable columns={columns} data={filteredRequests} />
      )}
    </div>
  );
};

export default AbsenceRequestsSection;