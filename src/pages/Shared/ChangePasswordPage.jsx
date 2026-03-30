import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import NavLinkUniversal from "../../components/NavLinkUniversal";

const ChangePasswordPage = () => {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.oldPassword)
      newErrors.oldPassword = "الرجاء إدخال كلمة المرور الحالية";

    if (!form.newPassword)
      newErrors.newPassword = "الرجاء إدخال كلمة المرور الجديدة";

    if (form.newPassword && form.newPassword.length < 6)
      newErrors.newPassword = "يجب أن تكون كلمة المرور 6 أحرف على الأقل";

    if (!form.confirmPassword)
      newErrors.confirmPassword = "الرجاء تأكيد كلمة المرور الجديدة";

    if (form.newPassword !== form.confirmPassword)
      newErrors.confirmPassword = "كلمتا المرور غير متطابقتين";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg("");

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    console.log(" بيانات تغيير كلمة المرور:", form);

    setSuccessMsg("تم تحديث كلمة المرور (محاكاة) ");
  };

  return (
    <div>
     

      <div className="container"> 
        
        <h1 className="text-3xl font-bold text-second-color pt-10 mb-20">
        تغيير كلمة المرور
      </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div>
            <Input
              className="w-1/2 bg-white"
              label="كلمة المرور الحالية"
              name="oldPassword"
              type="password"
              placeholder="كلمة المرور الحالية"
              value={form.oldPassword}
              onChange={handleChange}
              error={errors.oldPassword}
            />

            <NavLinkUniversal
              to="/forgetpassword"
              label="هل نسيت كلمة المرور؟"
              className="hover:underline text-right"
            />
          </div>

          <Input
            className="w-1/2 bg-white"
            label="كلمة المرور الجديدة"
            name="newPassword"
            type="password"
            placeholder="كلمة المرور الجديدة"
            value={form.newPassword}
            onChange={handleChange}
            error={errors.newPassword}
          />

          <Input
            className="w-1/2 bg-white"
            label="تأكيد كلمة المرور الجديدة"
            name="confirmPassword"
            type="password"
            placeholder="تأكيد كلمة المرور الجديدة"
            value={form.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />

          <Button
            label="تحديث"
            type="submit"
            className="bg-main-color w-fit px-20 py-2"
          />

          {successMsg && (
            <p className="text-green-600 font-semibold mt-2">{successMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
