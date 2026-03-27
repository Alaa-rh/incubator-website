import React, { useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Entercode from "../../assets/images/PIN.png";

const VerificationPage = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && e.target.nextElementSibling) {
      e.target.nextElementSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && e.target.previousElementSibling) {
      e.target.previousElementSibling.focus();
    }
  };

  const handlePaste = (e) => e.preventDefault();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp.some((digit) => digit === "")) {
      setError("الرجاء إدخال الرمز الكامل");
      return;
    }

    setError("");

    // const code = otp.join("");

    // await api.verifyOtp({ code });

    navigate("/new-password");
  };

  return (
    <div className="flex h-screen w-full font-sans antialiased bg-white">
      <div className="hidden md:flex w-1/2 bg-main-color items-center justify-center p-12">
        <img src={Entercode} alt="OTP Illustration" className="h-full w-full" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 lg:p-24" dir="rtl">
        <div className="w-full max-w-sm text-center">
          <h1 className="text-3xl font-bold text-second-color mb-16">ادخال الرمز</h1>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-between gap-3 mb-6" dir="ltr">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={handlePaste}
                  onFocus={(e) => e.target.select()}
                  className="w-16 h-16 border-2 border-second-color rounded-xl text-center text-2xl font-bold text-third-color focus:border-[#00a8a8] focus:outline-none"
                />
              ))}
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <Button
              label="تأكيد"
              type="submit"
              className="flex justify-center max-w-[300px] bg-main-color mt-10 mx-auto w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
