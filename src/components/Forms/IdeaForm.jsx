import React, { useState } from "react"
import Input from "../Input"
import Textarea from "../Textarea"
import Select from "../Select"
import Button from "../Button"
import Stepper from "../Stepper"
import Modal from "../Modal"
import RadioGroup from "../RadioGroup"

const IdeaForm = () => {
  const [form, setForm] = useState({
    name: "",
    tel: "",
    city: "",
    title: "",
    sector: "",
    description: "",
    productType: "",
    targetAudience: "",
    productProblem: "",
    teamMembers: "",
    teamEmails: "",
    hasTeam: "",
    projectDuration: "",
    agree: false
  })

  const [errors, setErrors] = useState({})
  const [step, setStep] = useState(0)
  const [showSuccess, setShowSuccess] = useState(false)

  const sectors = [
    { value: "agriculture", label: "الزراعة" },
    { value: "education", label: "التعليم" },
    { value: "health", label: "الصحة" },
    { value: "energy", label: "الطاقة" }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!form.title) newErrors.title = "العنوان مطلوب"
    if (!form.name) newErrors.name = "الاسم مطلوب"
    if (!form.city) newErrors.city = "المحافظة مطلوبة"
    if (!form.tel) newErrors.tel = "رقم الهاتف مطلوب"
    if (!form.sector) newErrors.sector = "القطاع مطلوب"
    if (!form.description) newErrors.description = "الوصف مطلوب"
    if (!form.productType) newErrors.productType = "نوع المنتج مطلوب"
    if (!form.targetAudience) newErrors.targetAudience = "الفئة المستهدفة مطلوبة"
    if (!form.productProblem) newErrors.productProblem = "المشكلة التي يحلها المنتج مطلوبة"

    if (form.hasTeam === "yes") {
      if (!form.teamMembers) newErrors.teamMembers = "أعضاء الفريق مطلوبون"
      if (!form.teamEmails) newErrors.teamEmails = "بريد الأعضاء الالكتروني مطلوب"
    }
    if (!form.projectDuration) newErrors.projectDuration = "المدة المتوقعة لانجاز المشروع مطلوبة"

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", form)
      setShowSuccess(true)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="container space-y-6">
        <Stepper steps={[1, 2, 3, 4]} current={step} />

        {step === 0 && (
          <>
            <h3 className="font-bold text-lg">المعلومات الشخصية</h3>
            <Input
              label="الاسم"
              placeholder="ما هو اسمك؟"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
            />
            <Input
              label="رقم الهاتف"
              placeholder="ما هو رقم هاتفك؟"
              type="tel"
              name="tel"
              value={form.tel}
              onChange={handleChange}
              error={errors.tel}
            />
            <Input
              label="المحافظة"
              placeholder="ما هي محافظتك؟"
              name="city"
              value={form.city}
              onChange={handleChange}
              error={errors.city}
            />
          </>
        )}

        {step === 1 && (
          <>
            <h3 className="font-bold text-lg">معلومات عن الفكرة</h3>
            <Input
              label="عنوان الفكرة"
              placeholder="ما هو عنوان فكرتك؟"
              name="title"
              value={form.title}
              onChange={handleChange}
              error={errors.title}
            />
            <Select
              label="القطاع"
              placeholder="اختر القطاع"
              name="sector"
              value={form.sector}
              onChange={handleChange}
              options={sectors}
              error={errors.sector}
            />
            <Textarea
              label="الوصف"
              placeholder="صف فكرتك بمزيد من التفاصيل..."
              name="description"
              value={form.description}
              onChange={handleChange}
              error={errors.description}
            />
          </>
        )}

        {step === 2 && (
          <>
            <h3 className="font-bold text-lg">تفاصيل اضافية</h3>
            <Input
              label="نوع المنتج"
              placeholder="تطبيق، موقع إلكتروني، جهاز..."
              name="productType"
              onChange={handleChange}
              error={errors.productType}
            />
            <Input
              label="الفئة المستهدفة"
              placeholder="من هم المستخدمون المستهدفون؟"
              name="targetAudience"
              onChange={handleChange}
              error={errors.targetAudience}
            />
            <Input
              label="المشكلة التي يحلها المنتج"
              placeholder="وصف لا تتجاوز 30 كلمة"
              name="productProblem"
              onChange={handleChange}
              error={errors.productProblem}
            />
          </>
        )}

        {step === 3 && (
          <>
            <h3 className="font-bold text-lg">معلومات الفريق</h3>
            <RadioGroup
              label="هل لديك فريق؟"
              name="hasTeam"
              value={form.hasTeam}
              onChange={handleChange}
              options={[
                { value: "yes", label: "نعم" },
                { value: "no", label: "لا" }
              ]}
            />

            {form.hasTeam === "yes" && (
              <>
                <Input
                  label="اعضاء الفريق"
                  placeholder="اكتب أسماء الأعضاء مفصولة بفواصل"
                  name="teamMembers"
                  onChange={handleChange}
                  error={errors.teamMembers}
                />
                <Input
                  label="بريدهم الالكتروني"
                  placeholder="اكتب بريد الأعضاء الالكتروني مفصولة بفواصل"
                  type="email"
                  name="teamEmails"
                  onChange={handleChange}
                  error={errors.teamEmails}
                />
              </>
            )}

            <Input
              label="المدة المتوقعة لانجاز المشروع"
              placeholder="المدة المتوقعة لانجاز المشروع بالأشهر"
              type="number"
              name="projectDuration"
              onChange={handleChange}
              error={errors.projectDuration}
            />
          </>
        )}

        <div className="flex gap-4">
          {step < 3  && (
            <Button
              label="التالي"
              type="button"
              onClick={() => setStep(step + 1)}
              className="bg-main-color text-white px-4 py-2 rounded"
            />
          )}
          {step > 0 && (
            <Button
              label="رجوع"
              type="button"
              onClick={() => setStep(step - 1)}
              className="bg-main-color px-4 py-2 rounded"
            />
          )}
          {step === 3 && (
            <Button
              label="إرسال"
              type="submit"
              className="bg-main-color text-white px-4 py-2 rounded"
              onClick={handleSubmit}
            />
          )}
        </div>
      </form>

      {/* المودل */}
      <Modal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="تم إرسال الفكرة بنجاح!"
        footer={
          <button
            onClick={() => setShowSuccess(false)}
            className="bg-main-color text-white px-4 py-2 rounded"
          >
            حسناً
          </button>
        }
      >
        <p className="text-sm">شكراً لمشاركتك! سيتم مراجعة فكرتك قريباً.</p>
      </Modal>
    </>
  )
}

export default IdeaForm