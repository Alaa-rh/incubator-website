import React, { useState } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import EvaluationRow from './EvaluationRaw';
import ExportReview from './ExportReview';
import { showSuccess, showError, /*showInfo*/ } from '../../../Utils/toast';

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

  const updateCriterion = (id, field, val) => {
    const targetCriterion = criteria.find(c => c.id === id);
    if (targetCriterion && !targetCriterion.is_active) {
      showError("لا يمكن تعديل المعايير بعد النشر");
      return;
    }
    setCriteria(criteria.map(c => c.id === id ? { ...c, [field]: val } : c));
  };

  const deleteCriterion = (id) => {
    const targetCriterion = criteria.find(c => c.id === id);
    if (targetCriterion && !targetCriterion.is_active) {
      showError("لا يمكن حذف المعايير بعد النشر");
      return;
    }
    setCriteria(criteria.filter(c => c.id !== id));
  };

  const addCriterion = () => {
    const hasInactive = criteria.some(c => !c.is_active);
    if (hasInactive) {
      showError("لا يمكن إضافة معايير جديدة بعد النشر");
      return;
    }
    const newId = Math.max(...criteria.map(c => c.id), 0) + 1;
    setCriteria([...criteria, { id: newId, title: '', max_score: 0, is_active: true }]);
  };

  const total = criteria.reduce((sum, c) => sum + (Number(c.max_score) || 0), 0);

  const handlePublish = async () => {
    if (criteria.length === 0) {
      showError("لا يوجد معايير للنشر");
      return;
    }

    const emptyTitle = criteria.find(c => !c.title || !c.title.trim());
    if (emptyTitle) {
      showError("يرجى إدخال عنوان لكل معيار");
      return;
    }

    const invalidScore = criteria.find(c => !c.max_score || c.max_score <= 0);
    if (invalidScore) {
      showError("يرجى إدخال درجة قصوى أكبر من صفر لكل معيار");
      return;
    }

    setIsSubmitting(true);

    try {
      // await saveCriteria(criteria).unwrap();
      // محاكاة النجاح
      await new Promise((resolve) => setTimeout(resolve, 500));
      setCriteria(criteria.map(c => ({ ...c, is_active: false })));
      showSuccess("تم نشر المعايير بنجاح");
    } catch (err) {
      console.error(err);
      showError(err?.data?.message || "حدث خطأ في نشر المعايير");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showPreview) {
    return <ExportReview criteria={criteria} onBack={() => setShowPreview(false)} />;
  }

  const isPublished = criteria.length > 0 && criteria.every(c => !c.is_active);

  return (
    <div className="max-w-6xl mx-auto my-6 px-4" dir="rtl">
      {isPublished && (
        <div className="bg-blue-100 text-blue-700 p-3 rounded mb-4 text-center">
         ℹ تم نشر المعايير مسبقاً. لا يمكن تعديلها.
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
          {isSubmitting ? "جاري النشر..." : "نشر إلى اللجنة"}
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