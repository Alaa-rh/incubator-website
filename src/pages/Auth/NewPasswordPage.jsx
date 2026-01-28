import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { LuEyeClosed } from "react-icons/lu";
import  newpassword  from '../../assets/images/newPassword.png'
const NewPasswordPage= (handleSave) => {
  return (
    <div className="flex h-screen w-full overflow-hidden font-sans">
      
      <div className="w-1/2 bg-white flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-second-color mb-10 text-center">
            إدخال كلمة مرور جديدة
          </h1>

          <form className="space-y-5">
           
            <div>
              <div className="relative">
                <Input 
                label="إدخال كلمة مرور جديدة"
                  type="password" 
                />
                <LuEyeClosed
                  className='absolute top-1/2 left-3 translate-y-1/2 cursor-pointer'/>
              </div>
            </div>

            <div>
              <div className="relative">
                <Input 
                label="تأكيد كلمة المرور الجديدة"
                  type="password" 
                />
                <LuEyeClosed
                className='absolute top-1/2 left-3 translate-y-1/2 cursor-pointer'/>
              </div>
            </div>

            <Button label="التالي" onClick={handleSave} className=" flex justify-center max-w-[300px] bg-main-color mt-10 mx-auto w-full" />

          </form>

          
        </div>
      </div>

      <div className="w-1/2 bg-main-color relative flex items-end justify-center">
        <img 
          src={newpassword} 
          alt="Character" 
          className="h-full w-full"
        />
      </div>

    </div>
  )
};

export default NewPasswordPage;