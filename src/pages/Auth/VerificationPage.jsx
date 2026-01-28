import Input from '../../components/Input';
import Button from '../../components/Button';
import Entercode from '../../assets/images/PIN.png'

import React, { useState} from 'react';

const VerificationPage = (handleSave) => {
  const [otp, setOtp] = useState(['', '', '', '']);

  
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    
    if (element.nextSibling && element.value !== '') {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="flex h-screen w-full font-sans antialiased bg-white">
      <div className="hidden md:flex w-1/2 bg-main-color items-center justify-center p-12">
        <img  
          src={Entercode}
          alt="OTP Illustration" 
          className="h-full w-full "
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 lg:p-24" dir="rtl">
        <div className="w-full max-w-sm text-center">
                    <h1 className="text-3xl font-bold text-second-color mb-16">
            ادخال الرمز
          </h1>

          <div className="flex justify-between gap-3 mb-12">
            {otp.map((data, index) => (
              <Input
                key={index}
                type="text"
                maxLength="1"
                className="w-16 h-16 border-2 border-second-color rounded-xl text-center text-2xl font-bold text-third-color focus:border-[#00a8a8] focus:outline-none transition-all"
                value={data}
                onChange={e => handleChange(e.target, index)}
                onFocus={e => e.target.select()}
              />
            ))}
          </div>
            <Button label="تسجيل الدخول" onClick={handleSave} className=" flex justify-center max-w-[300px] bg-main-color mt-10 mx-auto w-full" />

        </div>
      </div>
    </div>
  );
};

export default VerificationPage;