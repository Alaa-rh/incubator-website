import React, { useState } from "react";
import DataTable from "../DataTable";
import Checkbox from "../../CheckBox";
import Select from "../../Select";
import Modal from "../../Modal";
import Input from "../../Input";
import EvaluatorsModal from "./EvaluatorsModal";

// import { useGetProjectsForEvaluationQuery, useGetAssignedEvaluatorsQuery } from "../../api/endpoints/evaluationApi";

export default function EvalStatusTable() {


  const projectsData = [
    {
      id: 1,
      name: "منصة إلكترونية",
      sector: "الكترونيات",
      target: "التجار",
      email: "project1@example.com",
      score: 85
    },
    {
      id: 2,
      name: "تطبيق توصيل",
      sector: "خدمات",
      target: "الأفراد",
      email: "delivery@app.com",
      score: 92
    }
  ];

  const assignedEvaluatorsData = {
    1: [
      { name: "أحمد المحمد", spec: "UI/UX" },
      { name: "رانيا الأحمد", spec: "تسويق رقمي" },
    ],
    2: [
      { name: "خالد حسن", spec: "Mobile Apps" },
    ]
  };

 
  // const { data: projectsFromApi, isLoading, error, refetch } = useGetProjectsForEvaluationQuery();
  // const { data: evaluatorsFromApi } = useGetAssignedEvaluatorsQuery();

  // استخدام البيانات الثابتة حالياً
  const projects = projectsData;
  const assignedEvaluators = assignedEvaluatorsData;
  // const isLoading = false;
  // const error = null;

  const [sel, setSel] = useState([]);
  const [action, setAction] = useState("");
  const [modals, setModals] = useState({
    evals: false,
    schedule: false,
    data: []
  });
  const [schedule, setSchedule] = useState(null);

  // معالجة شكل البيانات إذا كانت من API
  let projectsList = Array.isArray(projects) ? projects : [];
  if (projects?.results && Array.isArray(projects.results)) {
    projectsList = projects.results;
  }
  if (projects?.data && Array.isArray(projects.data)) {
    projectsList = projects.data;
  }

  const toggle = (id) => {
    setSel((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const openEvaluators = (projectId) => {
    const evaluators = assignedEvaluators[projectId] || [];
    setModals({
      ...modals,
      evals: true,
      data: evaluators
    });
  };

  const handleAction = (e) => {
    const actionValue = e.target.value;

    if (actionValue === "all") {
      setSel(projectsList.map((p) => p.id));
    }

    if (actionValue === "none") {
      setSel([]);
    }

    if (actionValue === "schedule") {
      setModals({ ...modals, schedule: true });
    }
  };

  const handleScheduleConfirm = () => {
    // TODO: بعد الربط إرسال الموعد للباك للمشاريع المحددة
    console.log("تعيين موعد للمشاريع:", sel, schedule);
    setSel([]);
    setModals({ ...modals, schedule: false });
    setSchedule(null);
    alert("تم تعيين موعد اللجنة بنجاح (محاكاة)");
  };

  const columns = [
    {
      key: "actions",
      label: "الإجراءات",
      render: (row) => (
        <Checkbox
          checked={sel.includes(row.id)}
          onChange={() => toggle(row.id)}
        />
      ),
    },
    { key: "sector", label: "القطاع" },
    {
      key: "target",
      label: "الفئة",
      render: (row) => row.target,
    },
    {
      key: "evaluators",
      label: "المقيمون",
      render: (row) => (
        <span
          className="text-blue-600 underline cursor-pointer hover:text-blue-800"
          onClick={() => openEvaluators(row.id)}
        >
          عرض ({assignedEvaluators[row.id]?.length || 0})
        </span>
      ),
    },
    {
      key: "name",
      label: "اسم المشروع",
      render: (row) => (
        <span className="font-bold text-right block">{row.name}</span>
      ),
    },
  ];

  // if (isLoading) {
  //   return (
  //     <div className="p-4">
  //       <div className="space-y-4">
  //         {[1, 2].map((i) => (
  //           <div key={i} className="h-16 bg-gray-100 rounded animate-pulse"></div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="p-4 text-center">
  //       <p className="text-red-500 mb-3">حدث خطأ في تحميل البيانات</p>
  //       <button
  //         onClick={refetch}
  //         className="bg-main-color text-white px-4 py-2 rounded"
  //       >
  //         إعادة المحاولة
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <div className="p-4">
      <div className="w-60 mb-4">
        <Select
          label="إجراء"
          placeholder="اختر إجراء"
          value={action}
          onChange={(e) => {
            setAction(e.target.value);
            handleAction(e);
          }}
          options={[
            { value: "all", label: "تحديد الكل" },
            { value: "none", label: "إلغاء التحديد" },
            { value: "schedule", label: "تعيين موعد التقييم" },
          ]}
        />
      </div>

      {/* الجدول */}
      <div className="mt-4">
        {projectsList.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            لا توجد مشاريع متاحة للتقييم
          </div>
        ) : (
          <DataTable columns={columns} data={projectsList} />
        )}
      </div>

      {/* مودال عرض المقيمين */}
      <EvaluatorsModal
        isOpen={modals.evals}
        onClose={() => setModals({ ...modals, evals: false })}
        evaluators={modals.data}
      />

      {/* مودال تحديد الموعد */}
      <Modal
        isOpen={modals.schedule}
        onClose={() => setModals({ ...modals, schedule: false })}
        title="تعيين موعد اللجنة"
        footer={
          <button
            onClick={handleScheduleConfirm}
            className="bg-main-color text-white px-6 py-2 rounded-md"
          >
            تأكيد
          </button>
        }
      >
        <Input
          label="تاريخ و وقت اللجنة"
          type="datetime-local"
          onChange={(e) => setSchedule(e.target.value)}
          value={schedule || ""}
        />
      </Modal>
    </div>
  );
}