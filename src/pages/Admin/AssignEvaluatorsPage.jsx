import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DataTable from "../../components/Admin_Dashboard/DataTable";
import Checkbox from "../../components/CheckBox";

// TODO: بعد الربط استخدمي هذه الـ hooks
// import { useGetAvailableEvaluatorsQuery, useAssignEvaluatorsMutation } from "../../api/endpoints/evaluationApi";

const AssignEvaluatorsPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // TODO: بعد الربط استخدمي هذه الـ hooks
  // const { data: evaluatorsFromApi, isLoading, error, refetch } = useGetAvailableEvaluatorsQuery();
  // const [assignEvaluators, { isLoading: isAssigning }] = useAssignEvaluatorsMutation();

  const [sel, setSel] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

 
  const evaluatorsData = [
    { 
      id: 1, 
      full_name: "أحمد المحمد", 
      specialization: "UI UX", 
      primary_skills: "UI/UX",
      additional_skills: ["تسويق رقمي", "تجارة إلكترونية"]
    },
    { 
      id: 2, 
      full_name: "أحمد العلي", 
      specialization: "Web Design", 
      primary_skills: "Web Design",
      additional_skills: ["تطوير مواقع", "تصميم"]
    },
    { 
      id: 3, 
      full_name: "خالد حسن", 
      specialization: "Mobile Apps", 
      primary_skills: "Mobile Development",
      additional_skills: ["Flutter", "React Native"]
    },
    { 
      id: 4, 
      full_name: "ياسين الكردي", 
      specialization: "SEO", 
      primary_skills: "SEO",
      additional_skills: ["أرشفة", "تحليل بيانات"]
    },
  ];

  // استخدام البيانات الثابتة حالياً
  const evaluators = evaluatorsData;

  // إضافة/إزالة مقيم
  const toggle = (id) => {
    setSel((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // زر التعيين
  const handleAssign = async () => {
    if (!sel.length) {
      setSubmitError("الرجاء اختيار مقيمين على الأقل");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess("");

    const selectedEvaluators = evaluators.filter((d) => sel.includes(d.id));

    // try {
    //   await assignEvaluators({
    //     projectId: projectId,
    //     evaluatorIds: sel
    //   }).unwrap();
    //   setSubmitSuccess("تم تعيين المقيمين بنجاح");
    //   setTimeout(() => {
    //     navigate("/admin/evaluation-status");
    //   }, 1500);
    // } catch (err) {
    //   console.error("Error assigning evaluators:", err);
    //   setSubmitError(err?.data?.message || "حدث خطأ في تعيين المقيمين");
    // } finally {
    //   setIsSubmitting(false);
    // }

    // حالياً: محاكاة للإرسال
    console.log("تعيين المقيمين للمشروع", projectId, selectedEvaluators);
    setTimeout(() => {
      setSubmitSuccess("تم تعيين المقيمين بنجاح (محاكاة)");
      setIsSubmitting(false);
      setTimeout(() => {
        navigate(-1);
      }, 1500);
    }, 500);
  };

  // TODO: بعد الربط شغلي حالة التحميل
  // if (isLoading) {
  //   return (
  //     <div className="container relative w-full p-6 text-center">
  //       <p className="text-gray-500">جاري تحميل قائمة المقيمين...</p>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="container relative w-full p-6 text-center">
  //       <p className="text-red-500 mb-3">حدث خطأ في تحميل المقيمين</p>
  //       <button
  //         onClick={refetch}
  //         className="bg-main-color text-white px-4 py-2 rounded"
  //       >
  //         إعادة المحاولة
  //       </button>
  //     </div>
  //   );
  // }

  const columns = [
    {
      key: "actions",
      label: "الإجراءات",
      render: (row) => (
        <Checkbox
          name={`ev-${row.id}`}
          checked={sel.includes(row.id)}
          onChange={() => toggle(row.id)}
        />
      ),
    },
    {
      key: "additional_skills",
      label: "المهارات الإضافية",
      render: (row) => row.additional_skills?.join(" - ") || "—",
    },
    { 
      key: "primary_skills", 
      label: "المهارات الأساسية",
      render: (row) => row.primary_skills || "—"
    },
    { 
      key: "specialization", 
      label: "التخصص",
      render: (row) => row.specialization || "—"
    },
     { 
      key: "full_name", 
      label: "الاسم",
      render: (row) => row.full_name 
    },
  ];

  return (
    <div className="container relative w-full p-6">
      {/* رسائل النجاح والخطأ */}
      {submitError && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
          {submitError}
        </div>
      )}
      {submitSuccess && (
        <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
          {submitSuccess}
        </div>
      )}

      {/* العنوان */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          تعيين المقيمين للمشروع #{projectId}
        </h2>

        {/* زر التعيين */}
        <button
          onClick={handleAssign}
          disabled={isSubmitting}
          className={`bg-main-color text-white px-6 py-2 rounded-md hover:bg-teal-700 transition ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "جاري التعيين..." : "تعيين"}
        </button>
      </div>

      {/* الجدول */}
      {evaluators.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          لا يوجد مقيمين متاحين للتعيين
        </div>
      ) : (
        <DataTable columns={columns} data={evaluators} />
      )}
    </div>
  );
};

export default AssignEvaluatorsPage;