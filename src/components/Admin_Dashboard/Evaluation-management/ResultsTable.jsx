import React, { useState } from "react";
import EvaluationDetails from "./EvaluationDetails";
import Modal from "../../Modal";
import Textarea from "../../Textarea";
import DataTable from "../DataTable";

const ResultsTable = () => {

  // بيانات تجريبية للمشاريع
  const projects = [
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

  // بيانات تجريبية للمقيمين
  const allAssignments = {
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

  const [view, setView] = useState("table");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // فتح صفحة التفاصيل
  if (view === "details") {
    return (
      <EvaluationDetails
        evaluators={allAssignments[selectedProject.id] || []}
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

      {/* مودال القبول */}
      <Modal
        isOpen={isAcceptModalOpen}
        onClose={() => setIsAcceptModalOpen(false)}
        title="تأكيد قبول التقييم"
        footer={
          <button
            onClick={() => setIsAcceptModalOpen(false)}
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold"
          >
            تأكيد
          </button>
        }
      >
        <p className="text-gray-700">هل تريد قبول نتيجة التقييم لهذا المشروع؟</p>
      </Modal>

      {/* مودال الرفض */}
      <Modal
        isOpen={isRejectModalOpen}
        onClose={() => setIsRejectModalOpen(false)}
        title="سبب الرفض"
        footer={
          <button
            onClick={() => setIsRejectModalOpen(false)}
            className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold"
          >
            إرسال
          </button>
        }
      >
        <Textarea
          placeholder="اكتب سبب الرفض..."
          className="w-full border border-gray-300 rounded-lg p-3 text-right"
        />
      </Modal>

      {/* الجدول */}
      <div className="mt-4 ">
        <DataTable columns={columns} data={projects} />
      </div>
    </div>
  );
};

export default ResultsTable;
