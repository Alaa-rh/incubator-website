import React, { useReducer, useEffect } from "react"
import { profileReducer, initialProfileState } from "../../hooks/ProfileReducer"
import Input from "../../components/Input"
import Textarea from "../../components/Textarea"
import Button from "../../components/Button"
import girl from "../../assets/images/girl.jpg"
import { useSelector } from "react-redux" 
import NavLinkUniversal from "../../components/NavLinkUniversal"
// import { useUpdateVolunteerProfileMutation, useGetVolunteerProfileQuery } from "../../api/endpoints/volunteerprofileApi"

const EditVolunteerProfilePage = () => {

  const [state, dispatch] = useReducer(profileReducer, initialProfileState)
  const userId = useSelector((state) => state.auth.userId)
  // const { data: profileData, isLoading } = useGetVolunteerProfileQuery()
  // const [updateProfile, { isLoading: isUpdating }] = useUpdateVolunteerProfileMutation()

  useEffect(() => {
    // TODO: بعد الربط  هذا الكود بدل الـ mock
    // if (profileData) {
    //   dispatch({ type: "SET_ALL", payload: profileData })
    // }

    // بيانات ثابتة حالياً
    const mock = {
      full_name: "مايا المحمد",
      email: "maya123@gmail.com",
      phone: "09...",
      residence: "حمص",
      projects_count: "5",
      years_of_experience: "5",
      volunteer_type: "استشارة",
      availability_type: "تعاون طويل",
      primary_Skills: "UI UX",
      additional_Skills: "UI UX",
      bio: "bla bla bla",
    }

    dispatch({ type: "SET_ALL", payload: mock })
  }, []) // TODO: بعد الربط أضيفي profileData إلى الـ dependencies

  const handleChange = (field) => (e) => {
    dispatch({ type: "SET_FIELD", field, value: e.target.value })
  }

  const handleFile = (e) => {
    dispatch({ type: "SET_FILE", file: e.target.files[0] })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // TODO: بعد الربط استخدمي هذا الكود بدل console.log
    // try {
    //   const formData = new FormData()
    //   Object.keys(state).forEach(key => {
    //     if (state[key] !== null && key !== 'cv') {
    //       formData.append(key, state[key])
    //     }
    //   })
    
    //   await updateProfile(formData).unwrap()
    //   alert("تم حفظ التعديلات بنجاح")
    // } catch (error) {
    //   console.error("خطأ في حفظ التعديلات:", error)
    //   alert("حدث خطأ في حفظ التعديلات")
    // }

    console.log("بيانات الملف الشخصي:", state)
  }

  // if (isLoading) return <div className="container mx-auto text-center mt-20">جاري تحميل البيانات...</div>

   return (
    <div className="container mx-auto bg-gray-100" dir="rtl"> 

      <div className="bg-white w-full md:w-1/2 flex items-center gap-4 mt-4 mb-2 p-4 rounded-lg">
        <img src={girl} alt="avatar" className="w-16 h-16 rounded-full" />
        <div>
          <p className="font-semibold">{state.full_name}</p>
          <p>{state.email}</p>
        </div>
      </div>  

      <div className="bg-white-900 h-full border border-second-color rounded-xl px-8 py-2 shadow-lg">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">

          <Input label="الاسم" name="full_name" value={state.full_name} onChange={handleChange("full_name")} />
          <Input label="البريد الإلكتروني" name="email" type="email" value={state.email} onChange={handleChange("email")} />

          <Input label="الرقم" name="phone" value={state.phone} onChange={handleChange("phone")} />
          <Input label="تقيم في" name="residence" value={state.residence} onChange={handleChange("residence")} />

          <Input label="عدد المشاريع التي ساعدت فيها" name="projects_count" type="number" value={state.projects_count > 0 ? state.projects_count : ""} onChange={handleChange("projects_count")} />
          <Input label="الخبرة (بالسنوات)" name="years_of_experience" type="number" value={state.years_of_experience > 0 ? state.years_of_experience : ""} onChange={handleChange("years_of_experience")} />

          <Input label="نوع التطوع" name="volunteer_type" value={state.volunteer_type} onChange={handleChange("volunteer_type")} />
          <Input label="متاح لتعاون" name="availability_type" value={state.availability_type} onChange={handleChange("availability_type")} />

          <Input label="المهارات الأساسية" name="primary_Skills" value={state.primary_Skills} onChange={handleChange("primary_Skills")} />
          <Input label="المهارات الإضافية" name="additional_Skills" value={state.additional_Skills} onChange={handleChange("additional_Skills")} />
            <Textarea 
              label="السيرة الذاتية"
              name="bio"
              value={state.bio ? state.bio : ""}
              placeholder="اكتب سيرتك الذاتية"
              onChange={handleFile}
              className="border border-second-color rounded-md px-4 py-2 bg-white"
            />
          {/* الأزرار */}
          <div className="col-span-2 flex justify-center gap-6 mt-4">
           <NavLinkUniversal 
            label={<Button label="عرض كما يظهر للآخرين" className="bg-main-color"/>}
            to={`/profileinfo/${userId}`}  // يوجه إلى صفحة الملف الشخصي مع id المستخدم
           />
            
            <Button 
              type="submit"
              label="حفظ التعديلات"
              className="bg-main-color h-18 md:h-10 mt-2"
            />
          </div>

        </form>
      </div>
    </div>
  )
}

export default EditVolunteerProfilePage