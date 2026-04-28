import React, { useState } from "react";
import EvaluationDetails from "./EvaluationDetails";
import Modal from "../../Modal";
import DataTable from "../DataTable";

// import { useGetProjectsResultsQuery, useApproveProjectMutation, useRejectProjectMutation } from "../../api/endpoints/evaluationApi";

const ResultsTable = () => {
  
  const projectsData = [
    {
      id: 1,
      name: "منصة إلكترونية",
      email: "platform@app.com",
      sector: "الكترونيات",
      score: 88
    },
    {
      id: 2,
      name: "تطبيق توصيل",
      email: "delivery@app.com",
      sector: "خدمات",
      score: 92
    }
  ];

  const allAssignmentsData = {
    1: [
      {
        name: "أحمد المحمد",
        spec: "UI/UX",
        notes: "التصميم ممتاز لكن يحتاج تحسين في تجربة المستخدم."
      },
      {
        name: "رانيا الأحمد",
        spec: "تسويق رقمي",
        notes: "الفكرة قوية ولها فرصة سوقية جيدة."
      }
    ],
    2: [
      {
        name: "خالد حسن",
        spec: "Mobile Apps",
        notes: "التطبيق سريع ويحتاج تحسين في الواجهة."
      }
    ]
  };

  // TODO: بعد الربط  هذا السطر بدل البيانات الثابتة
  // const { data: projectsFromApi, isLoading, error, refetch } = useGetProjectsResultsQuery();
  // const [approveProject, { isLoading: isApproving }] = useApproveProjectMutation();
  // const [rejectProject, { isLoading: isRejecting }] = useRejectProjectMutation();

  const projects = projectsData;
  const allAssignments = allAssignmentsData;

  const [view, setView] = useState("table");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const handleAccept = async () => {
    setIsSubmitting(true);

    // try {
    //   await approveProject(selectedProject.id).unwrap();
    //   alert("تم قبول المشروع بنجاح. سيتم إرسال إشعار للمستخدم.");
    //   setIsAcceptModalOpen(false);
    // } catch (error) {
    //   console.error("Error accepting project:", error);
    //   alert(error?.data?.message || "حدث خطأ في قبول المشروع");
    // } finally {
    //   setIsSubmitting(false);
    // }

    console.log("قبول المشروع:", selectedProject);
    setTimeout(() => {
      alert("تم قبول المشروع بنجاح (محاكاة)");
      setIsAcceptModalOpen(false);
      setIsSubmitting(false);
    }, 500);
  };

  const handleReject = async () => {
    setIsSubmitting(true);

    // try {
    //   await rejectProject(selectedProject.id).unwrap();
    //   alert("تم رفض المشروع. سيتم إرسال إشعار للمستخدم.");
    //   setIsRejectModalOpen(false);
    // } catch (error) {
    //   console.error("Error rejecting project:", error);
    //   alert(error?.data?.message || "حدث خطأ في رفض المشروع");
    // } finally {
    //   setIsSubmitting(false);
    // }

    console.log("رفض المشروع:", selectedProject);
    setTimeout(() => {
      alert("تم رفض المشروع بنجاح (محاكاة)");
      setIsRejectModalOpen(false);
      setIsSubmitting(false);
    }, 500);
  };

  // فتح صفحة التفاصيل
  if (view === "details") {
    return (
      <EvaluationDetails
        evaluators={allAssignments[selectedProject?.id] || []}
        onBack={() => setView("table")}
      />
    );
  }

  // أعمدة DataTable
  const columns = [
    {
      key: "actions",
      label: "الإجراءات",
      render: (row) => (
        <div className="relative inline-block text-left">
          <button
            onClick={() => toggleDropdown(row.id)}
            className="text-lg p-2 hover:text-blue-600"
          >
            ⋮
          </button>

          {activeDropdown === row.id && (
            <div className="absolute right-0 top-full mt-1 w-44 bg-white shadow-2xl rounded-lg p-2 flex flex-col gap-2 z-50">
              {/* تفاصيل التقييم */}
              <button
                onClick={() => {
                  setSelectedProject(row);
                  setView("details");
                  setActiveDropdown(null);
                }}
                className="bg-main-color text-white py-2 px-4 rounded-lg text-sm font-bold hover:bg-[#1e3356]"
              >
                تفاصيل التقييم
              </button>

              {/* قبول */}
              <button
                onClick={() => {
                  setSelectedProject(row);
                  setIsAcceptModalOpen(true);
                  setActiveDropdown(null);
                }}
                className="bg-green-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-green-700"
              >
                قبول
              </button>

              {/* رفض */}
              <button
                onClick={() => {
                  setSelectedProject(row);
                  setIsRejectModalOpen(true);
                  setActiveDropdown(null);
                }}
                className="bg-red-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-red-700"
              >
                رفض
              </button>
            </div>
          )}
        </div>
      ),
    },
    {
      key: "email",
      label: "البريد الإلكتروني",
      render: (row) => (
        <span className="underline text-blue-500">{row.email}</span>
      ),
    },
    {
      key: "status",
      label: "حالة التقييم",
      render: (row) => {
        const hasEvaluation = !!allAssignments[row.id];
        return (
          <span
            className={`px-2 py-1 rounded text-sm font-bold ${
              hasEvaluation
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {hasEvaluation ? "تم التقييم" : "يتم التقييم"}
          </span>
        );
      },
    },
    {
      key: "score",
      label: "نتيجة التقييم",
      render: (row) => <span className="font-semibold">{row.score ?? "-"}</span>,
    },
    {
      key: "sector",
      label: "القطاع المستهدف",
    },
    {
      key: "name",
      label: "اسم المشروع",
    },
  ];

  return (
    <div className="p-4" dir="rtl">
      {/* مودال القبول - فقط تأكيد */}
      <Modal
        isOpen={isAcceptModalOpen}
        onClose={() => setIsAcceptModalOpen(false)}
        title="تأكيد قبول المشروع"
        footer={
          <button
            onClick={handleAccept}
            disabled={isSubmitting}
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 disabled:opacity-50"
          >
            {isSubmitting ? "جاري المعالجة..." : "تأكيد"}
          </button>
        }
      >
        <p className="text-gray-700 text-center py-4">
          هل أنت متأكد من قبول هذا المشروع؟
          <br />
          <span className="text-sm text-gray-500">سيتم إرسال إشعار للمستخدم</span>
        </p>
      </Modal>

      {/* مودال الرفض - فقط تأكيد */}
      <Modal
        isOpen={isRejectModalOpen}
        onClose={() => setIsRejectModalOpen(false)}
        title="تأكيد رفض المشروع"
        footer={
          <button
            onClick={handleReject}
            disabled={isSubmitting}
            className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 disabled:opacity-50"
          >
            {isSubmitting ? "جاري المعالجة..." : "تأكيد"}
          </button>
        }
      >
        <p className="text-gray-700 text-center py-4">
          هل أنت متأكد من رفض هذا المشروع؟
          <br />
          <span className="text-sm text-gray-500">سيتم إرسال إشعار للمستخدم</span>
        </p>
      </Modal>

      {/* الجدول */}
      <div className="mt-4">
        <DataTable columns={columns} data={projects} />
      </div>
    </div>
  );
};

export default ResultsTable;