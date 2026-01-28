import React from 'react'
import NavLinkUniversal from '../../components/NavLinkUniversal';
import Button from '../../components/Button';
import workShop1 from "../../assets/images/workShop1.png"
import workShop2 from "../../assets/images/workShop2.png"
import workShop3 from "../../assets/images/workShop3.png"
import workShop4 from "../../assets/images/workShop4.png"
import Exhibition1 from "../../assets/images/Exhibition1.jpg"
import Exhibition2 from "../../assets/images/exh2.jpg"
import Exhibition3 from "../../assets/images/exh3.jpg"
import Exhibition4 from "../../assets/images/exh4.jpg"

const MainPage = () => {
  const workshops = [
  { id: 1, image: workShop1 },
  { id: 2, image: workShop2 },
  { id: 3, image: workShop3 },
  { id: 4, image: workShop4 },
]
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
      <h2 className='text-2xl font-bold'>آخر ورشات العمل و الفعاليات :</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
  {workshops.map((ws) => (
    <NavLinkUniversal
      key={ws.id}
      to={`/workshops/${ws.id}`}
      label={
        <img
          src={ws.image}
          alt="Workshop"
          className="h-[300px] object-cover rounded-md"
        />
      }
    />
  ))}
</div>
  <h2 className='text-2xl font-bold mt-5'>آخر معرض "مشاريع رواد الأعمال" :</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
  <img src={Exhibition1} alt="exh1" className='h-[200px] object-cover rounded-md'/>
  <img src={Exhibition2} alt="exh2" className='h-[200px] object-cover rounded-md'/>
  <img src={Exhibition3} alt="exh3" className='h-[200px] object-cover rounded-md'/>
  <img src={Exhibition4} alt="exh4" className='h-[200px] object-cover rounded-md'/>
</div>

    </div>
    </div>
    </div>
  )
}

export default MainPage