import Input from "../../components/Input";
import Button from "../../components/Button";
import { GiBoltEye } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
import logIn from "../../assets/images/logIn.png"
import NavLinkUniversal from "../../components/NavLinkUniversal";
const LoginPage = (handleSave) => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full font-sans">
    

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-second-color mb-8 text-center">تسجيل الدخول</h1>

          <form className="space-y-4">
            <div className="flex flex-col">
              <Input 
              label="البريد الالكتروني"
                type="email" 
                className="border border-seond-color rounded-lg p-3 outline-none focus:border-[#2d4a77] transition"
              />
            </div>

            <div className="flex flex-col relative">
              <div className="relative">
                <Input 
                label="كلمة المرور"
                  type="password" 
                />
                <GiBoltEye
                 className='absolute top-1/2 left-3 translate-y-1/2 cursor-pointer'/>

              </div>
              <NavLinkUniversal label="هل نسيت كلمة المرور؟" to="/forgetpassword" className="font-bold text-third-color mt-2 hover:underline text-right" />
            </div>
            <Button label="تسجيل الدخول" onClick={handleSave} className=" flex justify-center max-w-[300px] bg-main-color mt-10 mx-auto w-full" />
            <NavLinkUniversal label="انشاء حساب" to="/signup" className=" flex justify-center max-w-[300px] bg-third-color font-bold py-2 px-4 rounded  mt-5 mx-auto w-full text-black hover:scale-105 transition" />
            <div className="flex items-center my-8">
              <div className="flex-grow border-t border-second-color"></div>
              <span className="px-4 font-bold text-black text-sm">او عن طريق</span>
              <div className="flex-grow border-t border-second-color"></div>
          </div>
          <div className="relative">
          <a href="https://google.com" className=" flex justify-center font-bold max-w-[800px]  border border-second-color px-10 py-2 rounded mt-5 mx-auto hover:bg-gray-50 ">  تسجيل الدخول باستخدام Google</a>
            <FcGoogle className='absolute w-5 h-5 ml-6 top-1/5 left-1/2 right-1/5 translate-y-1/8'/>
         </div>
            
          </form>
         
        </div>
      </div>
        <div className="hidden md:flex md:w-1/2 bg-main-color items-center justify-center ">
        <div className="relative w-3/4">
          <img 
            src={logIn}
            alt="Character with laptop" 
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage