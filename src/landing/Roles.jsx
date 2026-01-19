import React from 'react'
import RoleCard from '../components/RoleCard';
import { FaRegCircleCheck } from "react-icons/fa6";

const Roles = ({ id }) => {
    const roles = [
        { 
          title: "الدعم",
          description: "توفر الحاضنة منظومة دعم متكاملة ترافق رواد الاعمال منذ اللحظة الاولى لولادة الفكرة يشمل هذا الدعم الارشاد التقني والاداري وتقييم الجاهزية  وتوجيه المشروع  نحو افضل مسارات النمو تعمل على تهيئة البيئة المناسبة لتحويل الافكار الى نماذج اولية ومشاريع قادرة على المنافسة مع توفير متابعة مستمرة لضمان اكتمال المشروع بشكل صحيح " },
         {
           title: "المساعدة",
           description: "نساعد الفرق الريادية على تجاوز التحديات التي قد تواجهها خلال مراحل العمل المختلفة، سواء كانت تقنية، أو مالية، أو تشغيلية. نقدّم جلسات استشارية، وتدريبات متخصصة، وفرصًا لاكتساب المهارات العملية، مع تمكين المشاريع من الوصول إلى الأدوات والموارد اللازمة لتطوير منتجاتها وخدماتها بكفاءة واحترافية.  "
         },
         {
            title: "الربط",
            description: "نعمل على ربط المشاريع الريادية بشبكة واسعة من الخبراء، والشركات، والشركاء المحتملين، والمستثمرين. هذا الربط يفتح أمام رواد الأعمال فرصًا للتعاون، وتبادل الخبرات، والوصول إلى الأسواق،و تعزيز حضورهم داخل منظومة الابتكار محليًا وإقليميًا. هدفنا خلق جسور فعّالة تساعد المشاريع على التوسع وتحقيق الاستدامة."

         }

    ]
  return (
    <div className='container bg-main-color rounded-xl p-10 mt-20 mb-20' id={id}>
        <h2 className='text-white text-[40px] text-center font-bold mb-5'>أدوار حاضنة ICT INCUBATOR</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {roles.map((role, index) => (
                <div key={index} className='h-full flex items-center p-5 rounded-lg'>
                    <RoleCard  title={role.title} description={role.description}>
                        <div className='flex justify-center'>
                            <FaRegCircleCheck className='block text-[60px] text-second-color mb-2' />
                        </div>
                    </RoleCard>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Roles