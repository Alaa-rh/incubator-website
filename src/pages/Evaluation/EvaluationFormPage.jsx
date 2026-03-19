import React, { useState } from 'react';
import { BiMinus,  BiPlus } from 'react-icons/bi';
import Button from '../../components/Button';
import NavLinkUniversal from '../../components/NavLinkUniversal';
const EvaluationFormPage = () => {
  const [scores, setScores] = useState([
    { id: 1, label: ' وضوح الفرصة السّوقية (MarketOpportunity)', value: 0 },
    { id: 2, label: ' وضوح مقترح القيمة (Value Proposition)', value: 0 },
    { id: 3, label: ' وضوح نموذج الأعمال (Business Model)', value: 0 },
    { id: 4, label: ' وضوح العتبة التنافسية (Competitive Advantage)', value: 0 },
    { id: 5, label: ' وضوح الترويج في السوق (Marketing)', value: 0 },
    { id: 6, label: ' وضوح آليات الوصول للزبائن (Sales)', value: 0 },
    { id: 7, label: ' اكتمال النموذج الأولي (Prototype/MVP)', value: 0 },
    { id: 8, label: 'اكتمال الشكل القانوني للشركة', value: 0 },
    { id: 9, label: 'تقييم الخطة والإنجاز والمخاطر', value: 0 },
    { id: 10, label: 'تقييم تجانس الفريق', value: 0 },
  ]);
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
  return (
   <div className=" bg-white-color p-4 flex flex-col items-center justify-center   ">
         <div className="container">
                  <h1 className="text-2xl font-bold text-second-color mb-10 text-right">
                    نموذج التقييم     </h1>
        <div className="p-6 md:p-8 bg-white font-bold text-2xl">
          <div className="flex justify-between mb-8 text-black  "dir='ltr'>
            <span className=" text-center ">الدرجة (الحد الأقصى 5)</span>
            <span className="text-center">بند التقييم</span>
          </div>
          <div className="space-y-4">
            {scores.map((item) => (
              <div key={item.id} className="flex items-center justify-between group "dir='ltr'>
                 <div className="flex items-center justify-between bg-gray-100 rounded-md px-3 py-1.5 w-50 ">
                <button 
                  onClick={() => updateScore(item.id, -1)}
                  className="text-black border-2 border-black rounded-full transition-colors"
                >
                  <BiMinus size={18}   />
                </button>
                <span className="text-main-color font-bold text-lg">{item.value}</span>
                <button 
                  onClick={() => updateScore(item.id, 1)}
                  className="text-black border-2 border-black rounded-full transition-colors"
                >
                  <BiPlus size={18} />
                </button>
              </div>
                <div className=" text-right text-xl  text-black font-medium" dir='rtl'>
                  {item.id}. {item.label}
                </div>
              </div>
            ))}
          </div>
          <div className='flex gap-2 justify-between pt-2'>
            <div className=" w-40 text-black   rounded-md font-bold text-center text-xl ">
               المجموع
                    </div>
 <div className="flex items-between justify-center mt-4 bg-main-color w-50 text-white py-1  rounded-sm font-bold text-center text-xl shadow-sm">
      {totalScore}
    </div>
    </div>
  </div>
       <div class="flex items-start gap-3 mt-6 text-xl">

  <NavLinkUniversal label={<Button label={"ارسال للادارة"} className='bg-main-color'/>} to="" />
  <NavLinkUniversal label={<Button label={"كتابة ملاحظات"} className='bg-main-color'/>}
 to="/notes"/>
</div>
</div>
  </div>
    
  );
};
export default EvaluationFormPage;