import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "./DataTable";
import EvaluatorsModal from "./Evaluation-management/EvaluatorsModal";

export default function ProjectsTable() {

  const navigate = useNavigate();

  // بيانات تجريبية للمشاريع المسندة
  const projects = [
    {
      id: 1,
      name: "منصة إلكترونية",
      nextEvalDate: "12/4/2026",
      status: "جيد جداً",
    },
    {
      id: 2,
      name: "تطبيق توصيل",
      nextEvalDate: "15/4/2026",
      status: "ممتاز",
    }
  ];

  // بيانات المقيمين
  const assignedEvaluators = {
    1: [
      { name: "أحمد المحمد", spec: "UI/UX" },
      { name: "رانيا الأحمد", spec: "تسويق رقمي" },
    ],
    2: [
      { name: "خالد حسن", spec: "Mobile Apps" },
    ]
  };

  const [modals, setModals] = useState({
    evals: false,
    data: []
  });

  const openEvaluators = (projectId) => {
    setModals({
      evals: true,
      data: assignedEvaluators[projectId] || []
    });
  };

  const openProjectDetails = (projectId) => {
    navigate(`/projectinfo/${projectId}`);
  };

  // أعمدة الجدول
  const columns = [

    {
      key: "actions",
      label: "الإجراءات",
      render: (row) => (
        <button
          onClick={() => openProjectDetails(row.id)}
          className="bg-main-color text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1e3356]"
        >
          عرض التفاصيل
        </button>
      ),
    }, 
    {
      key: "status",
      label: "الوضع الحالي للمشروع",
      render: (row) => (
        <span className="font-bold text-green-700">{row.status}</span>
      ),
    },
    {
      key: "evaluators",
      label: "المقيمون الحاليون",
      render: (row) => (
        <span
          className="text-blue-600 underline cursor-pointer"
          onClick={() => openEvaluators(row.id)}
        >
          عرض ({assignedEvaluators[row.id]?.length || 0})
        </span>
      ),
    },
    {
      key: "nextEvalDate",
      label: "تاريخ التقييم القادم",
    },
   
    
    {
      key: "name",
      label: "اسم المشروع",
    },
  ];

  return (
    <div className="p-4" dir="rtl">

      <div className="">
        <DataTable columns={columns} data={projects} />
      </div>

      {/* مودال المقيمين */}
      <EvaluatorsModal
        isOpen={modals.evals}
        onClose={() => setModals({ ...modals, evals: false })}
        evaluators={modals.data}
      />
    </div>
  );
}
