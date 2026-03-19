import React from 'react'
import NearestWorkshopCard from '../../components/Workshop/NearestWorkshopCard';
import LastWorkshops from '../../components/LastWorkshops';
import LastExhibition from '../../components/LastExhibition';
import ConsultationRequest from '../../components/ConsultationRequest';

const IncubatedMainPage = () => {
  return (
    <div className='bg-white-color min-h-screen py-8'>
        <div className="container">
            <NearestWorkshopCard />
            <div className='bg-white p-6 rounded-lg flex justify-between items-center shadow-lg mb-8'>
         <div>
            <h3 className='font-bold text-2xl mb-2'>الخطوات القادمة</h3>
            <div className="flex justify-between items-center gap-x-15">
            <p className='font-medium'>ستبدأ مواعيد المتابعة كل 3 أشهر.
                يمكنك طلب استشارة من المتطوعين في أي وقت.
                الالتزام بإنجاز المهام ضروري للاستمرار في الاحتضان.<br/>
                في حال عدم إحراز تقدّم في المراجعة القادمة، قد يتم إلغاء الاحتضان.</p>
             <ConsultationRequest />   
        </div>
        </div>
        </div>
        <LastWorkshops />
        <LastExhibition/>
    </div>
</div>
  )
}

export default IncubatedMainPage