import React from 'react'
import StageCard from '../StageCard';
import Boy from '../../assets/images/Boy.png';

const Stages = ({id}) => {
  return (
    <div className='mb-40' id={id}>
         <div className='container mx-auto md:mx-25'> 
         <h1 className='text-second-color font-semibold text-[40px] p-5 my-10'>مراحل الاحتضان</h1>
         <div className='flex flex-col-reverse md:flex-row gap-10 md:gap-5 px-5 md:px-0'>      
         <StageCard 
         title={"المرحلة الرابعة"}
         description={"المعرض السنوي لعرض المشاريع امام المستثمرين والشركات والجهات الداعمة"}
         className={"justify-start"} >
            <div className='text-[100px]'>🏆</div>
         </StageCard>
         <StageCard 
         title={"المرحلة الثالثة"}
         description={"التقييم الدوري يتم كل 3 اشهر لقياس تقدم المشروع وتحديد سيره بالشكل المطلوب"}
         className={"justify-center"} />
         <StageCard 
         title={"المرحلة الثانية"}
         description={"التقييم الأولي المرحلة التي يحسم فيها قرار قبول او رفض المشروع"}
         className={"justify-center"} >
            <img src={Boy} alt="boy" className='w-50 h-50 m-0 p-0' />
         </StageCard>
         <StageCard 
         title={"المرحلة الأولى"}
         description={"تحضير الفرق من خلال ورشات تدريبية،في المعسكر التدريبي"}
          className={"justify-end md:mt-100"}/>
         </div>
         </div>
    </div>
  )
}

export default Stages