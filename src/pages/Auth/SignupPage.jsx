import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import signUp from "../../assets/images/signUp.png";
import NavLinkUniversal from "../../components/NavLinkUniversal";

const SignupPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "الاسم مطلوب";
    if (!form.email.trim()) newErrors.email = "البريد الإلكتروني مطلوب";

    if (!form.password) newErrors.password = "كلمة المرور مطلوبة";
    if (form.password.length < 6)
      newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";

    if (form.confirmPassword !== form.password)
      newErrors.confirmPassword = "كلمتا المرور غير متطابقتين";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // await api.signup(form)

    console.log("Form submitted:", form);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden font-sans">
      <div className="w-1/2 bg-white flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-second-color mb-10 text-center">
            انشاء حساب
          </h1>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <Input
              label="الاسم"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
            />

            <Input
              label="البريد الالكتروني"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />

            <div className="relative">
              <Input
                label="كلمة المرور"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                error={errors.password}
              />
            </div>

            <div className="relative">
              <Input
                label="تأكيد كلمة المرور"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
              />
            </div>

            <Button
              label="التالي"
              type="submit"
              className="flex justify-center max-w-[300px] bg-main-color mt-10 mx-auto w-full"
            />
          </form>

          <p className="mt-8 text-center text-sm">
            <span className="text-third-color">هل لديك حساب؟ </span>
            <NavLinkUniversal
              label="تسجيل الدخول"
              to="/login"
              className="text-main-color hover:underline"
            />
          </p>
        </div>
      </div>

      <div className="w-1/2 bg-main-color relative flex items-end justify-center">
        <div className="absolute right-0 bottom-0 w-0 h-0 border-t-[100vh] border-t-transparent border-r-[15vw] border-r-black/10"></div>

        <img src={signUp} alt="Character" className="h-full w-full" />
      </div>
    </div>
  );
};

export default SignupPage;
