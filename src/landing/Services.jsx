import React from 'react'
import ServiceCard from '../components/ServiceCard';

const Services = ({id}) => {
  return (
    <div className='services-bg w-full h-screen mb-40' id={id}>
        <div className='container mx-25 h-[50%] flex flex-col justify-start'> 
         <h1 className='text-second-color font-semibold text-[40px] p-5'>الخدمات</h1>
        <ServiceCard 
         icon={"🤝"}
         title={"خدمات التشبيك و الدعم القانوني"} 
         descriptions={[
                "تقديم دعم قانوني لحماية أصحاب الأفكار من الاستغلال",
                "إصدار كتب رسمية لتسهيل التعاون مع الجهات الخارجية"
            ]}
         className={"justify-start"}
         />
        <ServiceCard 
         icon={"👩‍💻"}
         title={"الخدمات اللوجستية و التقنية"} 
         descriptions={[
                "توفير مكتب مجهز بالكهرباء، الإنترنت، والتدفئة.",
                "تقديم استشارات تخصصية في عدة مجالات ",
                "ربط الفرق مع جهات داعمة"
            ]}
         className={"justify-end"}
         />
        <ServiceCard 
         icon={"🎓"}
         title={"خدمات المعرض و التخريج"} 
          descriptions={[
                "تنظيم معرض نهائي للمشاريع المحتضنة. ",
                "تمكين المستثمرين من التواصل المباشر مع أصحاب المشاريع"
            ]}
         className={"justify-start"}
         />
         </div>
    </div>
  )
}

export default Services