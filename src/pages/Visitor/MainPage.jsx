import React from 'react'
import Button from '../../components/Button';
import LastExhibition from '../../components/LastExhibition';
import LastWorkshops from '../../components/LastWorkshops';

const MainPage = () => {
  
  return (
    <div className='pt-[10px]'>
     <div className="container">
      <div className="max-w-[50%]">
      <h1 className="text-3xl font-bold mt-10">انقل فكرتك من <span className="text-second-color"> الحلم</span> إلى <span className="text-second-color">الحقيقة</span>...</h1>
      <p className='mt-4 text-xl'>تبدأ فترة الاحتضان من 15 الشهر الجاري وحتى نهايته قدم فكرتك الآن واجعلنا نحتضن نجاحك</p>
      <Button label="قدم فكرتك الآن" className="mt-4 text-xl bg-main-color hover:scale-105 transition"/>
      </div>  
      <div className="mt-10 max-w-[50%]">
        <h1 className='text-3xl font-bold'>أثر المستقبل ... <span className='text-second-color'>بخبرتك</span></h1>
        <p className='mt-4 text-xl'>كن جزءا من فريق الخبراء والمقيمين لدعم الابتكار في حاضنتنا</p>
        <Button label="تطوع الآن" className="mt-4 bg-main-color text-xl hover:scale-105 transition"/>
    </div>
    <div className='mt-10 mb-10'>
      <LastWorkshops />
      <LastExhibition />

    </div>
  </div>
</div>
  )
}

export default MainPage