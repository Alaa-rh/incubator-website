import React, { useState, /*useEffect*/ } from 'react';
import { useParams } from 'react-router-dom';
import { BiPlusCircle } from 'react-icons/bi';
import EvaluationRow from './EvaluationRaw';
import ExportReview from './ExportReview';

// import { useGetCriteriaQuery, useSaveCriteriaMutation } from '../../api/admin/endpoints/evaluationApi';

const CriteriaManager = () => {
  const { seasonId } = useParams();

  // const { data: criteriaFromApi, isLoading, error, refetch } = useGetCriteriaQuery(seasonId);
  // const [saveCriteria, { isLoading: isSaving }] = useSaveCriteriaMutation();

  const [showPreview, setShowPreview] = useState(false);
  const [criteria, setCriteria] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  // const fallbackCriteria = [
  //   { id: 1, name: 'وضوح الفرصة السوقية', value: 5 },
  //   { id: 2, name: 'كفاءة الفريق المؤسس', value: 5 }
  // ];

  // تحميل البيانات من API أو استخدام fallback
  // useEffect(() => {
  //   const criteriaData = criteriaFromApi || fallbackCriteria;
  //   setCriteria(criteriaData);
  // }, [criteriaFromApi]);

  const updateCriterion = (id, field, val) => {
    setCriteria(criteria.map(c => c.id === id ? { ...c, [field]: val } : c));
  };

  const deleteCriterion = (id) => {
    setCriteria(criteria.filter(c => c.id !== id));
  };

  const addCriterion = () => {
    setCriteria([
      ...criteria,
      { id: Date.now(), name: '', value: 0 }
    ]);
  };

  const total = criteria.reduce((sum, c) => sum + Number(c.value), 0);

  const handlePublish = async () => {
    // التحقق من وجود معايير
    if (criteria.length === 0) {
      setSubmitError("لا يوجد معايير للنشر");
      return;
    }

    // التحقق من أن جميع المعايير لها أسماء
    const emptyName = criteria.find(c => !c.name.trim());
    if (emptyName) {
      setSubmitError("يرجى إدخال اسم لكل معيار");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess("");

    // try {
    //   await saveCriteria({ seasonId, criteria }).unwrap();
    //   setSubmitSuccess("تم نشر المعايير بنجاح");
    //   setTimeout(() => setSubmitSuccess(""), 3000);
    // } catch (err) {
    //   console.error("Error saving criteria:", err);
    //   setSubmitError(err?.data?.message || "حدث خطأ في نشر المعايير");
    // } finally {
    //   setIsSubmitting(false);
    // }

    // حالياً: محاكاة للإرسال
    console.log("نشر المعايير:", { seasonId, criteria });
    setTimeout(() => {
      setSubmitSuccess("تم نشر المعايير بنجاح (محاكاة)");
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(""), 3000);
    }, 500);
  };

  // if (isLoading) {
  //   return (
  //     <div className="max-w-6xl mx-auto my-6 px-4 text-center">
  //       <p className="text-gray-500">جاري تحميل المعايير...</p>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="max-w-6xl mx-auto my-6 px-4 text-center">
  //       <p className="text-red-500 mb-3">حدث خطأ في تحميل المعايير</p>
  //       <button
  //         onClick={refetch}
  //         className="bg-main-color text-white px-4 py-2 rounded"
  //       >
  //         إعادة المحاولة
  //       </button>
  //     </div>
  //   );
  // }

  if (showPreview) {
    return <ExportReview criteria={criteria} onBack={() => setShowPreview(false)} />;
  }

  return (
    <div className="max-w-6xl mx-auto my-6 px-4" dir="rtl">

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

      {/* العنوان + زر إضافة معيار */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-bold text-black">بناء معايير التقييم</h2>

        <button 
          onClick={addCriterion}
          className="flex items-center gap-2 text-main-color font-bold hover:opacity-80 transition text-base"
        >
          <BiPlusCircle size={22} />
          إضافة معيار جديد
        </button>
      </div>

      {/* صفوف المعايير */}
      <div className="space-y-3">
        {criteria.map(item => (
          <EvaluationRow 
            key={item.id}
            {...item}
            onUpdate={updateCriterion}
            onDelete={deleteCriterion}
          />
        ))}
      </div>

      {/* المجموع */}
      <div className="mt-8 py-6 border-t border-gray-100 text-center">
        <p className="text-main-color font-bold flex flex-col sm:flex-row justify-center items-center gap-2">
          <span className="text-xl">المجموع الكلي للدرجات القصوى :</span>
          <span className="text-xl font-black">{total}</span>
        </p>
      </div>

      {/* الأزرار */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full max-w-sm mx-auto">
        <button 
          onClick={handlePublish}
          disabled={isSubmitting}
          className={`flex-1 bg-main-color text-white py-2 px-4 rounded-lg font-bold hover:scale-105 transition-all text-sm whitespace-nowrap ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "جاري النشر..." : "نشر وإرسال للجنة"}
        </button>

        <button 
          onClick={() => setShowPreview(true)}
          className="flex-1 border border-second-color text-black py-2 px-4 rounded-lg font-bold hover:scale-105 transition-all text-sm whitespace-nowrap"
        >
          معاينة النموذج
        </button>
      </div>
    </div>
  );
};

export default CriteriaManager;