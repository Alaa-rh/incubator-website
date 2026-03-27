import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import newpassword from "../../assets/images/newPassword.png";

const NewPasswordPage = () => {
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

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

    // await api.resetPassword(form);

    navigate("/login");
  };

  return (
    <div className="flex h-screen w-full overflow-hidden font-sans">
      <div className="w-1/2 bg-white flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-second-color mb-10 text-center">
            إدخال كلمة مرور جديدة
          </h1>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="relative">
              <Input
                label="إدخال كلمة مرور جديدة"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                error={errors.password}
                inputClassName="pl-10"
              />

            </div>

            <div className="relative">
              <Input
                label="تأكيد كلمة المرور الجديدة"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                inputClassName="pl-10"
              />
            </div>

            <Button
              label="التالي"
              type="submit"
              className="flex justify-center max-w-[300px] bg-main-color mt-10 mx-auto w-full"
            />
          </form>
        </div>
      </div>

      <div className="w-1/2 bg-main-color relative flex items-end justify-center">
        <img src={newpassword} alt="Character" className="h-full w-full" />
      </div>
    </div>
  );
};

export default NewPasswordPage;
