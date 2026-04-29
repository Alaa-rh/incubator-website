import React, { useState } from "react";
import DataTable from "../DataTable";
import Checkbox from "../../CheckBox";
import Select from "../../Select";
import Modal from "../../Modal";
import Input from "../../Input";
import EvaluatorsModal from "./EvaluatorsModal";

// TODO: بعد الربط استخدمي هذه الـ hooks
// import { useGetProjectsWithMeetingsQuery, useGetEvaluatorsForMeetingQuery, useSetMeetingDateMutation } from "../../api/endpoints/evaluationApi";

export default function EvalStatusTable() {
  // ✅ إضافة meeting_date لكل مشروع
  const [projectsData, setProjectsData] = useState([
    {
      id: 1,
      title: "منصة إلكترونية",
      sector: "الكترونيات",
      target_audience: "التجار",
      has_evaluators: true,
      meeting_date: "2025-05-20T14:00"
    },
    {
      id: 2,
      title: "تطبيق توصيل",
      sector: "خدمات",
      target_audience: "الأفراد",
      has_evaluators: true,
      meeting_date: null
    },
    {
      id: 3,
      title: "منصة تعليمية",
      sector: "تعليم",
      target_audience: "الطلاب",
      has_evaluators: false,
      meeting_date: "2025-05-22T10:00"
    }
  ]);

  const assignedEvaluatorsData = {
    1: [
      {id: 1, name: "أحمد المحمد", specialization: "UI/UX", image: null },
      {id: 2, name: "رانيا الأحمد", specialization: "تسويق رقمي", image: null },
    ],
    2: [
      {id: 3, name: "خالد حسن", specialization: "Mobile Apps", image: null },
    ],
    3: []
  };

  // const { data: projectsFromApi, isLoading, error, refetch } = useGetProjectsWithMeetingsQuery();
  // const [setMeetingDate, { isLoading: isSettingMeeting }] = useSetMeetingDateMutation();

  const assignedEvaluators = assignedEvaluatorsData;
  const [sel, setSel] = useState([]);
  const [action, setAction] = useState("");
  const [modals, setModals] = useState({
    evals: false,
    schedule: false,
    data: []
  });
  const [schedule, setSchedule] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  let projectsList = Array.isArray(projectsData) ? projectsData : [];
  if (projectsData?.results && Array.isArray(projectsData.results)) {
    projectsList = projectsData.results;
  }
  if (projectsData?.data && Array.isArray(projectsData.data)) {
    projectsList = projectsData.data;
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
  };

  // ✅ دالة لفتح مودال تعيين موعد لمشروع واحد
  const openScheduleModal = (project) => {
    setSelectedProject(project);
    setSchedule(project.meeting_date || "");
    setModals({ ...modals, schedule: true });
  };

  // ✅ دالة تعيين موعد لمشروع واحد مع تحديث الجدول
  const handleSetMeeting = async () => {
    if (!schedule) {
      alert("الرجاء تحديد تاريخ ووقت");
      return;
    }

    setIsSubmitting(true);

    // TODO: بعد الربط استخدمي هذا الكود
    // try {
    //   await setMeetingDate({
    //     idea_id: selectedProject.id,
    //     meetingDate: schedule
    //   }).unwrap();
    //   
    //   // ✅ تحديث الموعد في الـ state بعد نجاح العملية
    //   setProjectsData(prev =>
    //     prev.map(p =>
    //       p.id === selectedProject.id
    //         ? { ...p, meeting_date: schedule }
    //         : p
    //     )
    //   );
    //   
    //   alert("تم تعيين موعد التقييم بنجاح. سيتم إرسال إشعار للمستخدم.");
    //   setModals({ ...modals, schedule: false });
    //   setSelectedProject(null);
    //   setSchedule(null);
    // } catch (error) {
    //   console.error("Error setting meeting date:", error);
    //   alert(error?.data?.message || "حدث خطأ في تعيين الموعد");
    // } finally {
    //   setIsSubmitting(false);
    // }

    // ✅ حالياً: محاكاة مع تحديث الجدول
    console.log("📅 تعيين موعد للمشروع:", { projectId: selectedProject?.id, meetingDate: schedule });
    
    // ✅ تحديث الموعد في الـ state
    setProjectsData(prev =>
      prev.map(p =>
        p.id === selectedProject?.id
          ? { ...p, meeting_date: schedule }
          : p
      )
    );
    
    setTimeout(() => {
      alert("تم تعيين موعد التقييم بنجاح (محاكاة)");
      setModals({ ...modals, schedule: false });
      setSelectedProject(null);
      setSchedule(null);
      setIsSubmitting(false);
    }, 500);
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
    {
      key: "meeting_action",
      label: "تعيين موعد",
      render: (row) => (
        <button
          onClick={() => openScheduleModal(row)}
          className="bg-main-color text-white px-3 py-1 rounded-md text-sm hover:bg-[#1e3356] transition"
        >
          {row.meeting_date ? "تعديل الموعد" : "تعيين موعد"}
        </button>
      ),
    },
    {
      key: "meeting_date",
      label: "موعد التقييم",
      render: (row) => (
        <span className="text-sm">
          {row.meeting_date ? new Date(row.meeting_date).toLocaleString("ar-SA") : "—"}
        </span>
      ),
    },
    { key: "sector", label: "القطاع" },
    {
      key: "target_audience",
      label: "الفئة",
      render: (row) => row.target_audience,
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
      key: "title",
      label: "اسم المشروع",
      render: (row) => (
        <span className="font-bold text-right block">{row.title}</span>
      ),
    },
  ];

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

      {/* ✅ مودال تعيين موعد لمشروع واحد */}
      <Modal
        isOpen={modals.schedule}
        onClose={() => {
          setModals({ ...modals, schedule: false });
          setSelectedProject(null);
          setSchedule(null);
        }}
        title={`تعيين موعد التقييم - ${selectedProject?.title || ""}`}
        footer={
          <button
            onClick={handleSetMeeting}
            disabled={isSubmitting}
            className="bg-main-color text-white px-6 py-2 rounded-md hover:bg-[#1e3356] disabled:opacity-50"
          >
            {isSubmitting ? "جاري التعيين..." : "تأكيد"}
          </button>
        }
      >
        <Input
          label="تاريخ و وقت اللجنة"
          type="datetime-local"
          onChange={(e) => setSchedule(e.target.value)}
          value={schedule || ""}
        />
        <p className="text-sm text-gray-500 text-right mt-2">
          سيتم إرسال إشعار للمستخدم بتعيين الموعد
        </p>
      </Modal>
    </div>
  );
}