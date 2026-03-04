import React from 'react'
import VolunteerForm from '../../components/Forms/VolunteerForm';

const VolunteerFormPage = () => {
  return (
    <div className='bg-white-color h-screen w-full'>
    <div className='container py-20'>
        <div className=''>
            <h1 className='text-2xl font-bold'>أهلا بك كمتطوع! أكمل بياناتك للمراجعة</h1>
            <p className='text-gray-600'>للمساهمة بفاعلية في دعم المشاريع يرجى تزويدنا بالتفاصيل المهنية.
                     جميع المعلومات تخضع لمراجعة الادارة والموافقة عليها</p>
        </div>
        <VolunteerForm />
    </div>
    </div>
  )
}

export default VolunteerFormPage