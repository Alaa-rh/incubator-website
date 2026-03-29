import { useState } from "react"
import Input from "../Input"
import Button from "../Button"
import AlertBox from "../AlertBox";

const ExhibitionStage = ({ onComplete }) => {
  const [form, setForm] = useState({
    teamName: "",
    projectName: "",
    email: "",
    membersEmails: "",
    members: "",
    goal: "",
    projectLink: "",
    services: "",
    image: null
  })

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("Exhibition form submitted:", form)

    onComplete()
  }

  return (
    <div className="p-6 space-y-8 min-h-screen bg-white-color">
      {/* تاريخ المعرض */}
      <p className="font-bold">
        تاريخ المعرض:
        <span className="text-main-color"> 12/1/2025</span>
      </p>

      {/* تنبيه */}
     <AlertBox message={"املأ الحقول التي تريد اظهارها فقط في بطاقة المشروع."}/>

      {/* فورم المعرض */}
      <form onSubmit={handleSubmit} className="mx-auto space-y-8">
        <div className="flex items-center justify-center gap-8">
        <div className="w-[30%] space-y-6">
        {/* رفع صورة */}
          <Input
            label="ارفع صورة لتكون واجهة المشروع"
            value={form.image}
            type="file" 
            accept="image/*"
            onChange={(e) => handleChange("image", e.target.files[0])}
          />
        
        <Input 
          label="اسم الفريق إن وجد"
          value={form.teamName}
          onChange={(e) => handleChange("teamName", e.target.value)}
        />

        <Input 
          label="اسم المشروع"
          value={form.projectName}
          onChange={(e) => handleChange("projectName", e.target.value)}
        />

        <Input 
          label="بريد إلكتروني للتواصل"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <Input 
          label="البريد الإلكتروني لكل عضو"
          value={form.membersEmails}
          onChange={(e) => handleChange("membersEmails", e.target.value)}
        />
        </div>
        <div className="w-[30%] space-y-6">
        <Input 
          label="أعضاء الفريق"
          value={form.members}
          onChange={(e) => handleChange("members", e.target.value)}
        />

        <Input 
          label="هدف المشروع"
          value={form.goal}
          onChange={(e) => handleChange("goal", e.target.value)}
        />

        <Input 
          label="رابط المشروع إن وجد (يفضل)"
          value={form.projectLink}
          onChange={(e) => handleChange("projectLink", e.target.value)}
        />

        <Input 
          label="خدمات المشروع"
          value={form.services}
          onChange={(e) => handleChange("services", e.target.value)}
        />
        </div>
        </div>
        <div className="flex items-center justify-center mt-4">
         <Button 
          label="إرسال"
          className="bg-main-color px-8 py-2"
          type="submit"
        />
        </div>

      </form>

    </div>
  )
}

export default ExhibitionStage
