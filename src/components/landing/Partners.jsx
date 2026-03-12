import React from 'react'
import partner from '../../assets/images/men.png'
import SignupLink from '../SignupLink';
const Partners = ({id}) => {
  return (
    <div className='partners-bg w-full h-screen mb-40' id={id}>
        <div className="container flex justify-between items-center gap-20 pt-55">
             <div className='w-[40%] h-[500px]'>
                 <img src={partner} alt="about us" className='w-full h-full object-cover' />
             </div>
             <div className="w-[50%]">
                <h1 className='text-second-color font-semibold text-[40px] mt-5'>كن شريك نجاحنا</h1>
                <p className='text-[25px] font-medium my-5'>نحن نؤمن بأن مفتاح نجاح أي مشروع ريادي هو قوة المعرفة المشتركة وتبادل الخبرات.
                ادعُ خبرتك لتكون جزءاً من قصة نجاحنا. يمكنك المساهمة بعدة طرق فعالة:
                في التدريب المباشر: شارك بتقديم ورشات العمل والجلسات التوجيهية في المعسكرات التدريبية المكثفة التي تسبق الاحتضان.
                كـ مرشد (Mentor): انضم لتوجيه الفرق والمشاريع المحتضنة بشكل فردي، وتقديم الاستشارات اللازمة خلال فترة الاحتضان التي تمتد لعام كامل.
                في التقييم: كن عضواً في لجان التقييم والتحكيم التي تدرس الأفكار وتختار المشاريع الأكثر استدامة وقابلية للتطبيق.
                شارك بوقتك ومعرفتك لتمكين رواد الأعمال وخلق مشاريع تكنولوجية مستدامة.</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
                <SignupLink label={"تطوع الآن!"} className={"px-5"} />
                </div>
    </div>
  )
}

export default Partners