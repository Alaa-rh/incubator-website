import React, { useState } from "react";
import EvaluationDetails from "./EvaluationDetails";
import Modal from "../../Modal";
import DataTable from "../DataTable";
// import { useGetProjectsWithEvaluatorsQuery, useApproveProjectMutation, useRejectProjectMutation } from "../../api/endpoints/evaluationApi";
// import { useGetAssignedEvaluatorsQuery } from "../../api/endpoints/evaluationApi";

const ResultsTable = () => {
 
  const projectsData = [
    {
      idea_id: 1,
      project_name: "منصة إلكترونية",
      owner_email: "platform@app.com",
      sector: "الكترونيات",
      target_audience: "التجار",
      evaluation_status: "تم التقييم",
      evaluation_result: 88
    },
    {
      idea_id: 2,
      project_name: "تطبيق توصيل",
      owner_email: "delivery@app.com",
      sector: "خدمات",
      target_audience: "المستهلكين",
      evaluation_status: "يتم التقييم",
      evaluation_result: null
    }
  ];

  const getAssignedEvaluators = (idea_id) => {
    // هذه المحاكاة للبيانات الثابتة - تتحذف بعد الربط
    const allAssignmentsData = {
      1: [
        {
          evaluator_name: "أحمد المحمد",
          specialization: "UI/UX",
          evaluator_image: null,
          notes: "التصميم ممتاز لكن يحتاج تحسين في تجربة المستخدم."
        },
        {
          evaluator_name: "رانيا الأحمد",
          specialization: "تسويق رقمي",
          evaluator_image: null,
          notes: "الفكرة قوية ولها فرصة سوقية جيدة."
        }
      ],
      2: [
        {
          evaluator_name: "خالد حسن",
          specialization: "Mobile Apps",
          evaluator_image: null,
          notes: "التطبيق سريع ويحتاج تحسين في الواجهة."
        }
      ]
    };
    
    // const { data } = useGetAssignedEvaluatorsQuery(idea_id);
    // return data || [];
    
    return allAssignmentsData[idea_id] || [];
  };

  const projects = projectsData;

  const [view, setView] = useState("table");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleDropdown = (idea_id) => {
    setActiveDropdown(activeDropdown === idea_id ? null : idea_id);
  };

  const handleAccept = async () => {
    setIsSubmitting(true);

  
    // try {
    //   await approveProject(selectedProject.idea_id).unwrap();
    //   alert("تم قبول المشروع بنجاح. سيتم إرسال إشعار للمستخدم.");
    //   setIsAcceptModalOpen(false);
    // } catch (error) {
    //   console.error("Error accepting project:", error);
    //   alert(error?.data?.message || "حدث خطأ في قبول المشروع");
    // } finally {
    //   setIsSubmitting(false);
    // }

    console.log(" قبول المشروع:", selectedProject);
    setTimeout(() => {
      alert("تم قبول المشروع بنجاح (محاكاة)");
      setIsAcceptModalOpen(false);
      setIsSubmitting(false);
    }, 500);
  };

  const handleReject = async () => {
    setIsSubmitting(true);

    // try {
    //   await rejectProject(selectedProject.idea_id).unwrap();
    //   alert("تم رفض المشروع. سيتم إرسال إشعار للمستخدم.");
    //   setIsRejectModalOpen(false);
    // } catch (error) {
    //   console.error("Error rejecting project:", error);
    //   alert(error?.data?.message || "حدث خطأ في رفض المشروع");
    // } finally {
    //   setIsSubmitting(false);
    // }

    console.log(" رفض المشروع:", selectedProject);
    setTimeout(() => {
      alert("تم رفض المشروع بنجاح (محاكاة)");
      setIsRejectModalOpen(false);
      setIsSubmitting(false);
    }, 500);
  };

  //فتح صفحة التفاصيل استخدام دالة getAssignedEvaluators
  if (view === "details") {
    const evaluators = getAssignedEvaluators(selectedProject?.idea_id);
    return (
      <EvaluationDetails
        evaluators={evaluators}
        onBack={() => setView("table")}
      />
    );
  }

  const isEvaluationCompleted = (row) => {
    return row.evaluation_result !== null && row.evaluation_result !== undefined;
  };

  // أعمدة DataTable
  const columns = [
    {
      key: "actions",
      label: "الإجراءات",
      render: (row) => {
        const completed = isEvaluationCompleted(row);
        
        return (
          <div className="relative inline-block text-left">
            <button
              onClick={() => toggleDropdown(row.idea_id)}
              className="text-lg p-2 hover:text-blue-600"
            >
              ⋮
            </button>

            {activeDropdown === row.idea_id && (
              <div className="absolute right-0 top-full mt-1 w-44 bg-white shadow-2xl rounded-lg p-2 flex flex-col gap-2 z-50">
                {completed && (
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
                )}

                {completed && (
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
                )}

                {completed && (
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
                )}

                {!completed && (
                  <div className="text-center text-gray-500 text-sm py-2 px-4">
                    ينتظر اكتمال التقييم
                  </div>
                )}
              </div>
            )}
          </div>
        );
      },
    },
    {
      key: "owner_email",
      label: "البريد الإلكتروني",
      render: (row) => (
        <span className="underline text-blue-500">{row.owner_email}</span>
      ),
    },
    {
      key: "evaluation_status",
      label: "حالة التقييم",
      render: (row) => {
        const completed = isEvaluationCompleted(row);
        return (
          <span
            className={`px-2 py-1 rounded text-sm font-bold ${
              completed
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {completed ? "تم التقييم" : "يتم التقييم"}
          </span>
        );
      },
    },
    {
      key: "evaluation_result",
      label: "نتيجة التقييم",
      render: (row) => (
        <span className="font-semibold">
          {row.evaluation_result !== null && row.evaluation_result !== undefined
            ? row.evaluation_result
            : "-"}
        </span>
      ),
    },
    { 
      key: "target_audience",
      label: "الجمهور المستهدف",
      render: (row) => <span>{row.target_audience ?? "-"}</span>,
    },
    {
      key: "sector",
      label: "القطاع المستهدف",
    },
    {
      key: "project_name",
      label: "اسم المشروع",
    },
  ];

  return (
    <div className="p-4" dir="rtl">
      {/* مودال القبول */}
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

      {/* مودال الرفض */}
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