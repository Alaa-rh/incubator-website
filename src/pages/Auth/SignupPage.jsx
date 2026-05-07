import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import signUp from "../../assets/images/signUp.png";
import NavLinkUniversal from "../../components/NavLinkUniversal";
import { useRegisterMutation } from "../../api/endpoints/authApi";
import { setCredentials } from "../../redux/authSlice";
import { getMainPageByRole } from "../../Utils/getMainPageByRole";

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.full_name.trim()) newErrors.full_name = "الاسم مطلوب";
    if (!form.email.trim()) newErrors.email = "البريد الإلكتروني مطلوب";

    if (!form.password) newErrors.password = "كلمة المرور مطلوبة";
    if (form.password.length < 8)
      newErrors.password = "كلمة المرور يجب أن تكون 8 أحرف على الأقل";
    if (!/[A-Z]/.test(form.password))
      newErrors.password = "كلمة المرور يجب أن تحتوي على حرف كبير واحد على الأقل";
    if (!/[0-9]/.test(form.password))
      newErrors.password = "كلمة المرور يجب أن تحتوي على رقم واحد على الأقل";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await register({
        full_name: form.full_name,
        email: form.email,
        password: form.password,
      }).unwrap();
      
      // حفظ بيانات المستخدم في Redux
      dispatch(setCredentials({
        user: response.user,
        token: response.token,
        userId: response.user?.id,
      }));
      
      // الحصول على المسار الرئيسي حسب أولوية الأدوار
      const userRoles = response.user?.roles || ["visitor"];
      const mainPage = getMainPageByRole(userRoles);
      
      // التوجيه إلى الصفحة الرئيسية حسب الدور
      navigate(mainPage);
      
    } catch (error) {
      console.error("Signup error:", error);
      setErrors({ general: "فشل إنشاء الحساب. حاول مرة أخرى" });
    }
  };

 
return (
    <div className="flex h-screen w-full overflow-hidden font-sans">
      {/* تم تغيير العرض هنا ليكون كاملاً في الموبايل ونصفاً في الشاشات الأكبر */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-second-color mb-10 text-center">
            انشاء حساب
          </h1>

          {/* عرض خطأ عام */}
          {errors.general && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
              {errors.general}
            </div>
          )}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <Input
              label="الاسم"
              placeholder="ادخل اسمك الكامل"
              name="name"
              type="text"
              value={form.full_name}
              onChange={handleChange}
              error={errors.full_name}
            />
            <Input
              label="البريد الالكتروني"
              placeholder="ادخل بريدك الالكتروني"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />

            <div className="relative">
              <Input
                label="كلمة المرور"
                placeholder="ادخل كلمة المرور"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                error={errors.password}
              />
            </div>
            <Button
              label={isLoading ? "جاري إنشاء الحساب..." : "التالي"}
              type="submit"
              disabled={isLoading}
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
      <div className="hidden md:flex md:w-1/2 bg-main-color relative items-end justify-center">
        <div className="absolute right-0 bottom-0 w-0 h-0 border-t-[100vh] border-t-transparent border-r-[15vw] border-r-black/10"></div>
        <img src={signUp} alt="Character" className="h-full w-full" />
      </div>
    </div>
  ); 
};

export default SignupPage;