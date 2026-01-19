import Input from '../components/Input';
import Button from '../components/Button';
import '../index.css'
import forgetPassword from '../assets/images/forgetPassword.png'

const ForgotPasswordPage = (handleSave) => {
  return (
    <div className="flex h-screen w-full font-sans antialiased" dir='ltr'>
      <div className="hidden md:flex w-1/2 bg-main-color items-center justify-center p-12" >
        <div className="relative">
          <img 
            src={forgetPassword}
            alt="Illustration" 
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center p-8 lg:p-24">
        <div className="w-full max-w-md" dir="rtl">
          <h1 className="text-3xl font-bold text-second-color mb-12 text-center">
            هل نسيت كلمة المرور؟
          </h1>

          <form className="space-y-6">
            <div>
             
              <Input
                type="email"
                label="البريد الالكتروني"
                
              />
            </div>
             <Button label="تسجيل الدخول" onClick={handleSave} className=" flex justify-center max-w-[300px] bg-main-color mt-10 mx-auto w-full" />

          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;