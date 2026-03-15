import React from 'react'
import NavLinkUniversal from '../../components/NavLinkUniversal';
import Button from '../../components/Button';
import LastExhibition from '../../components/LastExhibition';
import LastWorkshops from '../../components/LastWorkshops';
import NearestWorkshopCard from '../../components/Workshop/NearestWorkshopCard';

const VolunteerMainPage = () => {
  return (
    <div className='bg-white-color min-h-screen py-8'>
        <div className="container">
         <div className="max-w-[50%] mb-8">
            <h1 className="text-3xl font-bold">انقل فكرتك من <span className="text-second-color"> الحلم</span> إلى <span className="text-second-color">الحقيقة</span>...</h1>
            <p className='mt-4 text-xl'>تبدأ فترة الاحتضان من 15 الشهر الجاري وحتى نهايته قدم فكرتك الآن واجعلنا نحتضن نجاحك</p>
            <NavLinkUniversal to="/ideaform" label={<Button className="mt-4 text-xl bg-main-color hover:scale-105 transition" label="قدم فكرتك الآن"/>} />
         </div>  
         <NearestWorkshopCard />
         <LastWorkshops />
         <LastExhibition/>
        </div>
    </div>
  )
}

export default VolunteerMainPage