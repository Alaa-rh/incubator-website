import React from 'react'
import  NavLinkUniversal from '../NavLinkUniversal'
import Button from '../Button'    
const NearestWorkshopCard = () => {
    const workshop =
        {
            title:"روبوت سبايك",
            date:"15/4/2026",
            time:"2-5",
        }
  return (
    <div className='bg-white p-6 rounded-lg flex justify-between items-center shadow-lg mb-8'>
         <div>
            <h3 className='font-bold text-2xl mb-2'>أقرب ورشة عمل إليك</h3>
            <p className='font-medium'><span className='font-bold text-xl pl-4'>اسم الورشة :</span>{workshop.title}</p>
            <p className='font-medium'><span className='font-bold text-xl pl-4'>تبدأ بتاريخ :</span>{workshop.date}</p>
            <p className='font-medium'><span className='font-bold text-xl pl-4'>الوقت:</span>{workshop.time}</p>
            </div>
            <NavLinkUniversal 
            label={<Button label={"إضافة ورشة"} className='bg-main-color'/>}
            to={"/AddworkshopPage"} />
    </div>
  )
}

export default NearestWorkshopCard