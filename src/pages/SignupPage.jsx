import Input from '../components/Input';
import Button from '../components/Button';
import { LuEyeClosed } from "react-icons/lu";
import '../index.css'
import  signUp  from '../assets/images/signUp.png'
import NavLinkUniversal from '../components/NavLinkUniversal';
import React from 'react';
const SignupPage = (handleSave) => {
  return (
    <div className="flex h-screen w-full overflow-hidden font-sans">
      
      <div className="w-1/2 bg-white flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-second-color mb-10 text-center">
            انشاء حساب
          </h1>

          <form className="space-y-5">
            <div>
              <Input 
              label  ="الاسم"
                type="text" 
              />
            </div>
            <div>
              <Input 
              label= "البريد الالكتروني"
                type="email" 
              />
            </div>
            <div>
              <div className="relative">
                <Input 
                label="كلمة المرور"
                  type="password" 
                />
                <LuEyeClosed
                  className='absolute top-1/2 left-3 translate-y-1/2 cursor-pointer'/>
              </div>
            </div>

            <div>
              <div className="relative">
                <Input 
                label="تأكيد كلمة المرور"
                  type="password" 
                />
                <LuEyeClosed
                className='absolute top-1/2 left-3 translate-y-1/2 cursor-pointer'/>
              </div>
            </div>

            <Button label="التالي" onClick={handleSave} className=" flex justify-center max-w-[300px] bg-main-color mt-10 mx-auto w-full" />

          </form>

          <p className="mt-8 text-center text-sm">
            <span className="text-third-color">هل لديك حساب؟ </span>
            <NavLinkUniversal label="تسجيل الدخول" to="/login" className="text-main-color hover:underline" />
          </p>
        </div>
      </div>

      <div className="w-1/2 bg-main-color relative flex items-end justify-center">
        <div 
          className="absolute right-0 bottom-0 w-0 h-0 border-t-[100vh] border-t-transparent border-r-[15vw] border-r-black/10"
        ></div>
        
        <img 
          src={signUp} 
          alt="Character" 
          className="h-full w-full"
        />
      </div>

    </div>
  );
};

export default SignupPage;