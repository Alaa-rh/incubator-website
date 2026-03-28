import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import forgetPassword from "../../assets/images/forgetPassword.png";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    if (!email.trim()) {
      setError("البريد الإلكتروني مطلوب");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // await api.forgotPassword({ email });

    navigate("/verification");
  };

  return (
    <div className="flex h-screen w-full font-sans antialiased" dir="ltr">
      <div className="hidden md:flex w-1/2 bg-main-color items-center justify-center p-12">
        <img src={forgetPassword} alt="Illustration" className="w-full h-full" />
      </div>

      <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center p-8 lg:p-24">
        <div className="w-full max-w-md" dir="rtl">
          <h1 className="text-3xl font-bold text-second-color mb-12 text-center">
            هل نسيت كلمة المرور؟
          </h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              type="email"
              label="البريد الالكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error}
            />

            <Button
              label="إرسال رمز التحقق"
              type="submit"
              className="flex justify-center max-w-[300px] bg-main-color mt-10 mx-auto w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
