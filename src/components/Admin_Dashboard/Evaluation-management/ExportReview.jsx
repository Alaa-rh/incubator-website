import React, { useState, useEffect } from 'react';

const ExpertReview = ({ criteria, onBack }) => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    // تحويل المعايير الواردة إلى نفس الشكل المطلوب للتقييم
    if (criteria && criteria.length > 0) {
      const initialScores = criteria.map(item => ({
        id: item.id,
        name: item.name,
        value: item.value || 0
      }));
      //eslint-disable-next-line
      setScores(initialScores);
    }
  }, [criteria]);

  const handleScoreChange = (id, newVal) => {
    const val = parseInt(newVal) || 0;
    if (val <= 5) {
      setScores(scores.map(item => 
        item.id === id ? { ...item, value: val } : item
      ));
    }
  };

  const total = scores.reduce((sum, item) => sum + (Number(item.value) || 0), 0);

  const handlePublish = () => {
    console.log("نشر المعايير:", scores);
    // TODO: بعد الربط، إرسال البيانات للباك
    alert("تم نشر المعايير بنجاح (محاكاة)");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto font-sans" dir="ltr">
     

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-main-color text-white flex justify-between p-4 px-10">
          <span className="font-bold">الدرجة (الحد الأقصى 5)</span>
          <span className="font-bold">بند التقييم</span>
        </div>

        <div className="p-6 space-y-6">
          {scores.length === 0 ? (
            <p className="text-center text-gray-500 py-6">
              لا توجد معايير لعرضها
            </p>
          ) : (
            scores.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <input
                  type="number"
                  value={item.value}
                  onChange={(e) => handleScoreChange(item.id, e.target.value)}
                  className="w-24 border-2 border-second-color rounded-md p-2 text-center font-bold focus:outline-none focus:border-cyan-400"
                />
                <span className="text-black font-medium">{item.name}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mt-6 px-4">
        <div className="bg-main-color text-white w-24 py-2 text-center rounded-md font-bold text-xl shadow-md">
          {total}
        </div>
        <span className="text-xl font-bold">المجموع</span>
      </div>

      {/* Submit */}
      <div className="mt-10 flex justify-center items-center gap-4">
        <button
          onClick={handlePublish}
          className="bg-main-color text-white px-12 py-2 rounded-md font-bold text-lg hover:bg-[#2e4361] transition shadow-lg"
        >
          نشر وإرسال للجنة
        </button> 

        {/* زر رجوع */}
        <button
          onClick={onBack}
          className="bg-main-color text-white px-4 py-2 rounded-md font-bold text-lg hover:bg-[#2e4361] transition shadow-lg"
        >
           رجوع إلى التعديل
        </button>
      </div> 
     
    </div>
  );
};

export default ExpertReview;