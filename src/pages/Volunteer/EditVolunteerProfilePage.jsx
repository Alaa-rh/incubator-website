import React, { useReducer, useEffect } from "react"
import { profileReducer, initialProfileState } from "../../hooks/ProfileReducer"
import Input from "../../components/Input"
import Button from "../../components/Button"
import girl from "../../assets/images/girl.jpg"
import NavLinkUniversal from "../../components/NavLinkUniversal";

const EditVolunteerProfilePage = () => {

  const [state, dispatch] = useReducer(profileReducer, initialProfileState)

  useEffect(() => {
    const mock = {
      name: "مايا المحمد",
      email: "maya123@gmail.com",
      phone: "09...",
      city: "حمص",
      projectsCount: "5",
      experience: "5",
      volunteerType: "استشارة",
      collaborationType: "تعاون طويل",
      mainSkills: "UI UX",
      extraSkills: "UI UX",
      cv: null,
      link: "http://example.com"
    }

    dispatch({ type: "SET_ALL", payload: mock })
  }, [])

  const handleChange = (field) => (e) => {
    dispatch({ type: "SET_FIELD", field, value: e.target.value })
  }

  const handleFile = (e) => {
    dispatch({ type: "SET_FILE", file: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("بيانات الملف الشخصي:", state)
  }

  return (
    <div className="container mx-auto" dir="rtl"> 

    <div className="bg-white w-1/2 flex items-center gap-4 mt-4 mb-2 p-4 rounded-lg">
             <img src={girl} alt="avatar" className="w-16 h-16 rounded-full mb-2" />
                <div>
                 <p className="font-semibold">{state.name}</p>
                 <p>{state.email}</p>
                </div>
        </div>  

      <div className="bg-white-900 border border-second-color rounded-xl p-8 shadow-lg">

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">

          <Input label="الاسم" name="name" value={state.name} onChange={handleChange("name")} />
          <Input label="البريد الإلكتروني" name="email" type="email" value={state.email} onChange={handleChange("email")} />

          <Input label="الرقم" name="phone" value={state.phone} onChange={handleChange("phone")} />
          <Input label="تقيم في" name="city" value={state.city} onChange={handleChange("city")} />

          <Input label="عدد المشاريع التي ساعدت فيها" name="projectsCount" type="number" value={state.projectsCount > 0 ? state.projectsCount : ""} onChange={handleChange("projectsCount")} />
          <Input label="الخبرة (بالسنوات)" name="experience" type="number" value={state.experience > 0 ? state.experience : ""} onChange={handleChange("experience")} />

          <Input label="نوع التطوع" name="volunteerType" value={state.volunteerType} onChange={handleChange("volunteerType")} />
          <Input label="متاح لتعاون" name="collaborationType" value={state.collaborationType} onChange={handleChange("collaborationType")} />

          <Input label="المهارات الأساسية" name="mainSkills" value={state.mainSkills} onChange={handleChange("mainSkills")} />
          <Input label="المهارات الإضافية" name="extraSkills" value={state.extraSkills} onChange={handleChange("extraSkills")} />

          <Input label="إضافة رابط" name="link" value={state.link} onChange={handleChange("link")} />

          {/* رفع السيرة الذاتية */}
          <div className="col-span-2">
            <label className="font-bold mb-1 block">السيرة الذاتية</label>
            <input 
              type="file" 
              onChange={handleFile}
              className="border border-second-color rounded-md px-4 py-2 bg-white"
            />
          </div>

          {/* الأزرار */}
          <div className="col-span-2 flex justify-center gap-6 mt-4">
            <NavLinkUniversal label={ <Button  label="عرض كما يظهر للآخرين" className="bg-main-color"/>}
            to={"/profileinfo"}/>
           
            <Button 
              type="submit"
              label="حفظ التعديلات"
              className="bg-main-color h-11 mt-2"
            />
          </div>

        </form>
      </div>

    </div>
  )
}

export default EditVolunteerProfilePage
