import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import NavLinkUniversal from "../../components/NavLinkUniversal";

const ChangePasswordPage = () => {
  const [form, setForm] = useState({
    old_password: "",
    new_password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

   
  // لاحقًا: استدعاء API تغيير كلمة المرور
  // const [changePassword] = useChangePasswordMutation();
   

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.old_password)
      newErrors.old_password = "الرجاء إدخال كلمة المرور الحالية";

    if (!form.new_password)
      newErrors.new_password = "الرجاء إدخال كلمة المرور الجديدة";

     
    if (form.new_password.length < 8)
      newErrors.new_password = "كلمة المرور يجب أن تكون 8 أحرف على الأقل";

    if (!/[A-Z]/.test(form.new_Password))
      newErrors.new_password = "كلمة المرور يجب أن تحتوي على حرف كبير واحد على الأقل";

    if (!/[0-9]/.test(form.new_password))
      newErrors.new_password = "كلمة المرور يجب أن تحتوي على رقم واحد على الأقل";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

     
    // لاحقًا: استدعاء API تغيير كلمة المرور
    // try {
    //   await changePassword({
    //     old_password: form.old_password,
    //     new_password: form.new_password,
    //   }).unwrap();
    //
    //   setSuccessMsg("تم تحديث كلمة المرور بنجاح");
    // } catch (err) {
    //   setErrors({ old_password: "كلمة المرور الحالية غير صحيحة" });
    // }
     

    console.log("بيانات تغيير كلمة المرور:", form);
    setSuccessMsg("تم تحديث كلمة المرور (محاكاة)");
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
              name="old_password"
              type="password"
              placeholder="كلمة المرور الحالية"
              value={form.old_password}
              onChange={handleChange}
              error={errors.old_password}
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
            name="new_password"
            type="password"
            placeholder="كلمة المرور الجديدة"
            value={form.new_password}
            onChange={handleChange}
            error={errors.new_password}
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
