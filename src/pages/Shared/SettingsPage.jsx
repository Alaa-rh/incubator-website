import React from 'react'
import Button from '../../components/Button';
import NavLinkUniversal from '../../components/NavLinkUniversal';

const SettingsPage = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold text-second-color pt-10 mr-25 mb-20'>  اعدادات الحساب </h1>
        <div className='container'>
            <div className='w-200 h-40 bg-white p-6 rounded'>
                <h2 className='text-2xl font-bold mb-4'>الأمان وتسجيل الدخول</h2>
                <div className="flex justify-between items-center ">
                    <p className='text-lg'>هل تريد تغيير كلمة المرور؟</p>
                   <NavLinkUniversal to="/change-password" label={<Button label="تغيير كلمة المرور" className='bg-main-color px-20 py-2' />} />
                </div>
                </div>
                <div className="w-200 h-40 bg-white flex justify-between items-center p-4 rounded mt-6">
                    <Button label="حذف الحساب" className='bg-red-color px-20 py-2' />
                    <Button label="تسجيل الخروج" className='bg-main-color px-20 py-2' />
                </div>
        </div>
    </div>
  )
}

export default SettingsPage