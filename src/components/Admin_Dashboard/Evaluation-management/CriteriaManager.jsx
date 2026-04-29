import React, { useState } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import EvaluationRow from './EvaluationRaw';
import ExportReview from './ExportReview';

// import { useGetCriteriaQuery, useSaveCriteriaMutation } from '../../api/endpoints/evaluationApi';

const CriteriaManager = () => {

  // const { data: criteriaFromApi, isLoading, error, refetch } = useGetCriteriaQuery();
  // const [saveCriteria, { isLoading: isSaving }] = useSaveCriteriaMutation();

  const [showPreview, setShowPreview] = useState(false);
  
  const [criteria, setCriteria] = useState([
    { id: 1, title: 'وضوح الفرصة السوقية', max_score: 5, is_active: true },
    { id: 2, title: 'كفاءة الفريق المؤسس', max_score: 5, is_active: true },
    { id: 3, title: 'ابتكار الفكرة', max_score: 5, is_active: true },
    { id: 4, title: 'قابلية التطبيق', max_score: 5, is_active: true },
  ]);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  // تحديث معيار
  const updateCriterion = (id, field, val) => {
    const targetCriterion = criteria.find(c => c.id === id);
    if (targetCriterion && !targetCriterion.is_active) {
      setSubmitError("لا يمكن تعديل المعايير بعد النشر");
      setTimeout(() => setSubmitError(""), 3000);
      return;
    }
    setCriteria(criteria.map(c => c.id === id ? { ...c, [field]: val } : c));
  };

  // حذف معيار
  const deleteCriterion = (id) => {
    const targetCriterion = criteria.find(c => c.id === id);
    if (targetCriterion && !targetCriterion.is_active) {
      setSubmitError("لا يمكن حذف المعايير بعد النشر");
      setTimeout(() => setSubmitError(""), 3000);
      return;
    }
    setCriteria(criteria.filter(c => c.id !== id));
  };

  // إضافة معيار جديد
  const addCriterion = () => {
    const hasInactive = criteria.some(c => !c.is_active);
    if (hasInactive) {
      setSubmitError("لا يمكن إضافة معايير جديدة بعد النشر");
      setTimeout(() => setSubmitError(""), 3000);
      return;
    }
    
    const newId = Math.max(...criteria.map(c => c.id), 0) + 1;
    setCriteria([
      ...criteria,
      { id: newId, title: '', max_score: 0, is_active: true }
    ]);
  };

  // حساب المجموع الكلي للدرجات القصوى
  const total = criteria.reduce((sum, c) => sum + (Number(c.max_score) || 0), 0);

  // نشر المعايير
  const handlePublish = async () => {
    if (criteria.length === 0) {
      setSubmitError("لا يوجد معايير للنشر");
      return;
    }

    const emptyTitle = criteria.find(c => !c.title || !c.title.trim());
    if (emptyTitle) {
      setSubmitError("يرجى إدخال عنوان لكل معيار");
      return;
    }

    const invalidScore = criteria.find(c => !c.max_score || c.max_score <= 0);
    if (invalidScore) {
      setSubmitError("يرجى إدخال درجة قصوى أكبر من صفر لكل معيار");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess("");

    // try {
    //   await saveCriteria(criteria).unwrap();
    //   setCriteria(criteria.map(c => ({ ...c, is_active: false })));
    //   setSubmitSuccess("تم نشر المعايير بنجاح");
    //   setTimeout(() => setSubmitSuccess(""), 3000);
    // } catch (err) {
    //   console.error("Error saving criteria:", err);
    //   setSubmitError(err?.data?.message || "حدث خطأ في نشر المعايير");
    // } finally {
    //   setIsSubmitting(false);
    // }

    // حالياً: محاكاة للإرسال
    console.log("نشر المعايير:", criteria);
    setTimeout(() => {
      setCriteria(criteria.map(c => ({ ...c, is_active: false })));
      setSubmitSuccess("تم نشر المعايير بنجاح (محاكاة)");
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(""), 3000);
    }, 500);
  };

  if (showPreview) {
    return <ExportReview criteria={criteria} onBack={() => setShowPreview(false)} />;
  }

  const isPublished = criteria.length > 0 && criteria.every(c => !c.is_active);

  return (
    <div className="max-w-6xl mx-auto my-6 px-4" dir="rtl">
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

      {isPublished && (
        <div className="bg-blue-100 text-blue-700 p-3 rounded mb-4 text-center">
          تم نشر المعايير مسبقاً. لا يمكن تعديلها.
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-bold text-black">بناء معايير التقييم</h2>

        <button 
          onClick={addCriterion}
          disabled={isPublished}
          className={`flex items-center gap-2 text-main-color font-bold hover:opacity-80 transition text-base ${
            isPublished ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <BiPlusCircle size={22} />
          إضافة معيار جديد
        </button>
      </div>

      <div className="space-y-3">
        {criteria.map(item => (
          <EvaluationRow 
            key={item.id}
            {...item}
            onUpdate={updateCriterion}
            onDelete={deleteCriterion}
            isPublished={isPublished}
          />
        ))}
      </div>

      {criteria.length > 0 && (
        <div className="mt-8 py-6 border-t border-gray-100 text-center">
          <p className="text-main-color font-bold flex flex-col sm:flex-row justify-center items-center gap-2">
            <span className="text-xl">المجموع الكلي للدرجات القصوى :</span>
            <span className="text-xl font-black">{total}</span>
          </p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full max-w-sm mx-auto">
        <button 
          onClick={handlePublish}
          disabled={isSubmitting || isPublished}
          className={`flex-1 bg-main-color text-white py-2 px-4 rounded-lg font-bold hover:scale-105 transition-all text-xl whitespace-nowrap ${
            (isSubmitting || isPublished) ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "جاري النشر..." : "نشر الى اللجنة"}
        </button>

        <button 
          onClick={() => setShowPreview(true)}
          className="flex-1 border border-second-color text-black py-2 px-4 rounded-lg font-bold hover:scale-105 transition-all text-xl whitespace-nowrap"
        >
          معاينة النموذج
        </button>
      </div>
    </div>
  );
};

export default CriteriaManager;