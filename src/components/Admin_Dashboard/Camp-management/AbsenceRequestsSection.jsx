import React, { useState } from "react";
import SearchBar from "../../SearchBar";
import DataTable from "../DataTable";
import { showSuccess, /*showError*/ } from "../../../Utils/toast";
// import { useGetAbsenceRequestsQuery, useDecideAbsenceMutation } from "../../api/endpoints/admin/absenceApi";

const AbsenceRequestsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [localLoading, setLocalLoading] = useState(false);
  const [requests, setRequests] = useState([
    {
      id: 1,
      idea_title: "منصة تعليمية",
      applicant: "أحمد المحمد (قائد الفريق)",
      session_date: "12/2/2024",
      reason: "ظروف صحية طارئة",
      status: "pending",
    },
    {
      id: 2,
      idea_title: "روبوت سبايك",
      applicant: "سارة خالد",
      session_date: "15/2/2024",
      reason: "سفر مفاجئ",
      status: "pending",
    },
    {
      id: 3,
      idea_title: "تطوير واجهات",
      applicant: "محمد علي",
      session_date: "20/2/2024",
      reason: "ارتباطات عائلية",
      status: "pending",
    },
  ]);

  // const [decideAbsence] = useDecideAbsenceMutation();

  const approveRequest = async (id) => {
    setLocalLoading(true);
    // try {
    //   await decideAbsence({ requestId: id, action: "approve" }).unwrap();
    //   setRequests(prev => prev.map(req => req.id === id ? { ...req, status: "approved" } : req));
    //   showSuccess("تمت الموافقة على طلب الغياب");
    // } catch (err) {
    //   showError(err?.data?.message || "حدث خطأ");
    // } finally {
    //   setLocalLoading(false);
    // }

    // محاكاة (تتحذف بعد الربط)
    setTimeout(() => {
      setRequests(prev => prev.map(req => req.id === id ? { ...req, status: "approved" } : req));
      showSuccess(" تمت الموافقة على الطلب (محاكاة)");
      setLocalLoading(false);
    }, 500);
  };

  const sendAlert = async (id) => {
    setLocalLoading(true);
    // try {
    //   await decideAbsence({ requestId: id, action: "warn" }).unwrap();
    //   setRequests(prev => prev.map(req => req.id === id ? { ...req, status: "warned" } : req));
    //   showSuccess("تم إرسال التحذير");
    // } catch (err) {
    //   showError(err?.data?.message || "حدث خطأ");
    // } finally {
    //   setLocalLoading(false);
    // }

    // محاكاة
    setTimeout(() => {
      setRequests(prev => prev.map(req => req.id === id ? { ...req, status: "warned" } : req));
      showSuccess(" تم إرسال التحذير (محاكاة)");
      setLocalLoading(false);
    }, 500);
  };

  // فلترة الطلبات حسب البحث
  const filteredRequests = requests.filter(
    (req) =>
      req.idea_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.applicant.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // عرض شارة الحالة
  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">⏳ قيد الانتظار</span>;
      case "approved":
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">✅ تمت الموافقة</span>;
      case "warned":
        return <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">⚠️ تم إرسال تحذير</span>;
      default:
        return null;
    }
  };

  // أعمدة الجدول
  const columns = [
    {
      key: "actions",
      label: "الإجراءات",
      render: (row) => (
        <div className="flex flex-col gap-3">
          <button
            className={`bg-green-600 text-white rounded-md px-2 py-1 font-semibold hover:bg-green-700 transition ${
              row.status !== "pending" || localLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => approveRequest(row.id)}
            disabled={row.status !== "pending" || localLoading}
          >
            موافقة
          </button>
          <button
            className={`border border-second-color rounded-md px-2 py-1 font-semibold ${
              row.status !== "pending" || localLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => sendAlert(row.id)}
            disabled={row.status !== "pending" || localLoading}
          >
            إرسال تحذير
          </button>
        </div>
      ),
    },
    {
      key: "status",
      label: "الحالة",
      render: (row) => getStatusBadge(row.status),
    },
    { key: "session_date", label: "تاريخ الجلسة" },
    { key: "reason", label: "سبب الغياب" },
    { key: "applicant", label: "مقدم الطلب" },
    { key: "idea_title", label: "اسم المشروع" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-bold mb-4">قائمة طلبات الغياب</h2>

      <SearchBar
        placeholder="بحث باسم المشروع أو مقدم الطلب"
        onSearch={setSearchTerm}
      />

      {filteredRequests.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          🧾 لا توجد طلبات غياب حالياً
        </div>
      ) : (
        <DataTable columns={columns} data={filteredRequests} />
      )}
    </div>
  );
};

export default AbsenceRequestsSection;