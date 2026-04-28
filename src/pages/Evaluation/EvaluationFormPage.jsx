import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BiMinus, BiPlus } from 'react-icons/bi';
import Button from '../../components/Button';
import NavLinkUniversal from '../../components/NavLinkUniversal';

// import { useGetCriteriaQuery } from '../../api/endpoints/evaluationApi';
// import { useSubmitEvaluationMutation } from '../../api/endpoints/evaluationApi';

const EvaluationFormPage = () => {
  // جلب projectId و seasonId من الرابط
  const { projectId, seasonId } = useParams();

  // const { data: criteriaFromApi, isLoading, error } = useGetCriteriaQuery(seasonId);
  // const [submitEvaluation, { isLoading: isSubmitting }] = useSubmitEvaluationMutation();

  const fallbackCriteria = [
    { id: 1, name: 'وضوح الفرصة السّوقية (Market Opportunity)' },
    { id: 2, name: 'وضوح مقترح القيمة (Value Proposition)' },
    { id: 3, name: 'وضوح نموذج الأعمال (Business Model)' },
    { id: 4, name: 'وضوح العتبة التنافسية (Competitive Advantage)' },
    { id: 5, name: 'وضوح الترويج في السوق (Marketing)' },
    { id: 6, name: 'وضوح آليات الوصول للزبائن (Sales)' },
    { id: 7, name: 'اكتمال النموذج الأولي (Prototype/MVP)' },
    { id: 8, name: 'اكتمال الشكل القانوني للشركة' },
    { id: 9, name: 'تقييم الخطة والإنجاز والمخاطر' },
    { id: 10, name: 'تقييم تجانس الفريق' },
  ];

  // تحويل المعايير الثابتة إلى الشكل المطلوب للتقييم
  const initialScores = fallbackCriteria.map((item, /*index*/) => ({
    id: item.id,
    label: item.name,
    value: 0
  }));

  const [scores, setScores] = useState(initialScores);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  // useEffect
  // useEffect(() => {
  //   if (criteriaFromApi) {
  //     const apiScores = criteriaFromApi.map((item) => ({
  //       id: item.id,
  //       label: item.name,
  //       value: 0
  //     }));
  //     setScores(apiScores);
  //   }
  // }, [criteriaFromApi]);

  const updateScore = (id, delta) => {
    setScores(prevScores =>
      prevScores.map(item => {
        if (item.id === id) {
          const newValue = item.value + delta;
          if (newValue >= 0 && newValue <= 5) {
            return { ...item, value: newValue };
          }
        }
        return item;
      })
    );
  };

  const totalScore = scores.reduce((sum, item) => sum + item.value, 0);

  const handleSubmit = async () => {
    setSubmitError('');
    setSubmitSuccess('');

    // try {
    //   const evaluationData = {
    //     projectId: projectId,
    //     seasonId: seasonId,
    //     scores: scores.map(s => ({ criteriaId: s.id, score: s.value })),
    //     totalScore: totalScore,
    //   };
    //   await submitEvaluation(evaluationData).unwrap();
    //   setSubmitSuccess('تم إرسال التقييم بنجاح');
    //   setTimeout(() => setSubmitSuccess(''), 3000);
    // } catch (error) {
    //   console.error('Error submitting evaluation:', error);
    //   setSubmitError(error?.data?.message || 'حدث خطأ في إرسال التقييم');
    // }

    console.log('Evaluation submitted:', { projectId, seasonId, scores, totalScore });
    setSubmitSuccess('تم إرسال التقييم بنجاح (محاكاة)');
    setTimeout(() => setSubmitSuccess(''), 3000);
  };

  // TODO: بعد الربط شغلي حالة التحميل
  // if (isLoading) {
  //   return (
  //     <div className="bg-white-color p-4 flex flex-col items-center justify-center">
  //       <div className="container text-center py-20">
  //         <p className="text-gray-500">جاري تحميل معايير التقييم...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="bg-white-color p-4 flex flex-col items-center justify-center">
  //       <div className="container text-center py-20">
  //         <p className="text-red-500 mb-3">حدث خطأ في تحميل معايير التقييم</p>
  //         <button
  //           onClick={() => window.location.reload()}
  //           className="bg-main-color text-white px-4 py-2 rounded"
  //         >
  //           إعادة المحاولة
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="bg-white-color p-4 flex flex-col items-center justify-center">
      <div className="container">
        <h1 className="text-2xl font-bold text-second-color mb-10 text-right">
          نموذج التقييم
        </h1>

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

        <div className="p-6 md:p-8 bg-white font-bold text-2xl">
          <div className="flex justify-between mb-8 text-black" dir='ltr'>
            <span className="text-center">الدرجة (الحد الأقصى 5)</span>
            <span className="text-center">بند التقييم</span>
          </div>

          <div className="space-y-4">
            {scores.map((item) => (
              <div key={item.id} className="flex items-center justify-between group" dir='ltr'>
                <div className="flex items-center justify-between bg-gray-100 rounded-md px-3 py-1.5 w-50">
                  <button 
                    onClick={() => updateScore(item.id, -1)}
                    className="text-black border-2 border-black rounded-full transition-colors hover:bg-gray-200 p-1"
                  >
                    <BiMinus size={18} />
                  </button>
                  <span className="text-main-color font-bold text-lg">{item.value}</span>
                  <button 
                    onClick={() => updateScore(item.id, 1)}
                    className="text-black border-2 border-black rounded-full transition-colors hover:bg-gray-200 p-1"
                  >
                    <BiPlus size={18} />
                  </button>
                </div>
                <div className="text-right text-xl text-black font-medium" dir='rtl'>
                  {item.id}. {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className='flex gap-2 justify-between pt-2'>
            <div className="w-40 text-black rounded-md font-bold text-center text-xl">
              المجموع
            </div>
            <div className="flex items-between justify-center mt-4 bg-main-color w-50 text-white py-1 rounded-sm font-bold text-center text-xl shadow-sm">
              {totalScore}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 mt-6 text-xl">
          <Button 
            label="ارسال للادارة" 
            className='bg-main-color'
            onClick={handleSubmit}
          />
          <NavLinkUniversal 
            label={<Button label="كتابة ملاحظات" className='bg-main-color'/>}
            to={`/notes/${projectId}`}
          />
        </div>
      </div>
    </div>
  );
};

export default EvaluationFormPage;