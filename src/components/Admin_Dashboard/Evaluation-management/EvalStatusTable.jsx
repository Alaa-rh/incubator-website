import React, { useState } from "react";
import DataTable from "../DataTable";
import Checkbox from "../../CheckBox";
import Select from "../../Select";
import Modal from "../../Modal";
import Input from "../../Input";
import EvaluatorsModal from "./EvaluatorsModal"; 

export default function EvalStatusTable() {

  // بيانات تجريبية للمشاريع
  const projects = [
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

  // بيانات تجريبية للمقيمين
  const assignedEvaluators = {
    1: [
      { name: "أحمد المحمد", spec: "UI/UX"},
      { name: "رانيا الأحمد", spec: "تسويق رقمي"},
      { name: "رانيا الأحمد", spec: "تسويق رقمي"},
      { name: "رانيا الأحمد", spec: "تسويق رقمي"},
    ],
    2: [
      { name: "خالد حسن", spec: "Mobile Apps",  },
    ]
  };

  const [sel, setSel] = useState([]);
  const [action, setAction] = useState("");

  const [modals, setModals] = useState({
    evals: false,
    schedule: false,
    data: []
  });

  const toggle = (id) => {
    setSel((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const openEvaluators = (projectId) => {
    setModals({
      ...modals,
      evals: true,
      data: assignedEvaluators[projectId] || []
    });
  };

  const handleAction = (e) => {
  const action = e.target.value;

  if (action === "all") {
    setSel(projects.map((p) => p.id));
  }

  if (action === "none") {
    setSel([]);
  }

  if (action === "schedule") {
    setModals({ ...modals, schedule: true });
  }
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
          className="text-blue-600 underline cursor-pointer"
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

  const [schedule, setSchedule] = useState(null);

  return (
    <div className="p-4" dir="rtl">

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
        <DataTable columns={columns} data={projects} />
      </div>

      {/* مودال عرض المقيمين (الشكل الجديد) */}
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
            onClick={() => {
              setSel([]);
              setModals({ ...modals, schedule: false });
            }}
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
          value={schedule}
        />
      </Modal>
    </div>
  );
}
