import React, { useState } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import EvaluationRow from './EvaluationRaw';
import ExportReview from './ExportReview';

const CriteriaManager = () => {
  const [showPreview, setShowPreview] = useState(false);

  const [criteria, setCriteria] = useState([
    { id: 1, name: 'وضوح الفرصة السوقية', value: 5 },
    { id: 2, name: 'كفاءة الفريق المؤسس', value: 5 }
  ]);

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

  if (showPreview) {
    return <ExportReview criteria={criteria} onBack={() => setShowPreview(false)} />;
  }

  return (
    <div className="max-w-6xl mx-auto my-6 px-4" dir="rtl">

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

      {/* الأزرار (مباشرة داخل الصفحة) */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full max-w-sm mx-auto">

        {/* زر النشر */}
        <button 
          className="flex-1 bg-main-color text-white py-2 px-4 rounded-lg font-bold hover:scale-105 transition-all text-sm whitespace-nowrap"
        >
          نشر وإرسال للجنة
        </button>

        {/* زر المعاينة */}
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
