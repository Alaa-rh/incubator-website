import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import NavLinkUniversal from "../../components/NavLinkUniversal";
import Modal from "../../components/Modal";
import AdminNavbar from "../../components/AdminNavbar";

const AdminSettingsPage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [openLogout, setOpenLogout] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name) newErrors.name = "الرجاء إدخال الاسم";
    if (!form.phone) newErrors.phone = "الرجاء إدخال رقم الهاتف";
    if (!form.email) newErrors.email = "الرجاء إدخال البريد الإلكتروني";
    if (!form.password) newErrors.password = "الرجاء إدخال كلمة المرور";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    console.log(" بيانات تحديث الإعدادات:", form);

  };

  const handleLogout = () => {
    console.log("تسجيل خروج الأدمن");

  };

  return (
    <div>
        <AdminNavbar/>

      <div className="container mt-30"> 
        <h1 className="text-3xl font-bold mb-10">
        الإعدادات
      </h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-10">
          <div className="w-full grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-20">
            <div>
            <Input
              label="الاسم"
              name="name"
              type="text"
              placeholder="الاسم"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
            /> 
            <Input
            label="رقم الهاتف"
            name="phone"
            type="text"
            placeholder="رقم الهاتف"
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
          />
          </div>
          <div>
          <Input
            label="البريد الإلكتروني"
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            label="كلمة المرور"
            type="password"
            name="password"
            placeholder="كلمة المرور"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
          />
            <NavLinkUniversal
              to="/change-password"
              label="اضغط هنا لتغيير كلمة المرور"
              className="hover:underline"
            />
          </div>
          </div>

          <div className="flex flex-col gap-4 mt-4 w-[50%]">
            <Button
              label="حفظ التعديلات"
              type="submit"
              className="bg-main-color px-10"
            />

            <Button
              label="تسجيل الخروج"
              onClick={() => setOpenLogout(true)}
              className="bg-red-color px-10"
            />
          </div>
          <Modal
            isOpen={openLogout}
            onClose={() => setOpenLogout(false)}
            title="تأكيد تسجيل الخروج"
            footer={
                <div className="flex justify-center gap-4">
                <Button label="تأكيد" onClick={handleLogout} className="bg-main-color" />
                <Button label="إلغاء" onClick={() => setOpenLogout(false)} className="bg-gray-600" />
                </div>
            }
          >
            هل أنت متأكد أنك تريد تسجيل الخروج؟
            </Modal>

        </form>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
