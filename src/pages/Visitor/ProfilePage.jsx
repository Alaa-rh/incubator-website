import React from 'react'
import girl from "../../assets/images/girl.jpg"
import Input from '../../components/Input';
import Button from '../../components/Button';

const ProfilePage = ({userName, email}) => {
  return (
    <div>
        <h1 className='text-3xl font-bold text-second-color pt-10 mr-25 mb-20'>تعديل الملف الشخصي</h1>
        <div className="container">
        <div className="bg-white w-1/2 flex items-center gap-4 mb-8 p-4 rounded">
                <img src={girl} alt="avatar" className="w-16 h-16 rounded-full mb-2" />
                <div>
                <p className="font-semibold">{userName}</p>
                <p>{email}</p>
                </div>
            </div>  
            <div className="w-1/2 bg-white p-6 rounded">
                <form className=" flex flex-col gap-4">
                    <Input label="الاسم الكامل" type="text" placeholder="user name" value={userName} onChange={() => {}} />
                    <Input label="البريد الإلكتروني" type="email" placeholder="user email" value={email} onChange={() => {}} />
                    <Button label="تحديث" className='bg-main-color w-fit px-20 py-2' />
                </form>
                </div>
            </div>
    </div>
  )
}

export default ProfilePage