import React from 'react'
import Input from '../../components/Input';
import Button from '../../components/Button';
import NavLinkUniversal from '../../components/NavLinkUniversal';
const ChangePasswordPage = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold text-second-color pt-10 mr-30 mb-20'>تغيير كلمة المرور</h1>
            <div className="container">
                <form className="flex flex-col  gap-4">
                    <div>
                    <Input className='w-1/2 bg-white' label="كلمة المرور الحالية" type="password" placeholder="كلمة المرور الحالية" />
                    <NavLinkUniversal to="/forgetpassword" label="هل نسيت كلمة المرور؟" className=" hover:underline text-right" />
                    </div>
                    <Input className='w-1/2 bg-white' label="كلمة المرور الجديدة" type="password" placeholder="كلمة المرور الجديدة" />
                    <Input className='w-1/2 bg-white' label="تأكيد كلمة المرور الجديدة" type="password" placeholder="تأكيد كلمة المرور الجديدة" />
                    <Button label="تحديث" className='bg-main-color w-fit px-20 py-2' />
                </form>
            </div>

    </div>
  )
}

export default ChangePasswordPage