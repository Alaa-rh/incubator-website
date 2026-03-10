import React, { useReducer, useState } from "react"
import Button from "../Button"
import Stepper from "../Stepper"
import Modal from "../Modal"
import StepPersonalInfo from "./StepPersonalInfo"
import StepIdeaInfo from "./StepIdeaInfo"
import StepExtraDetails from "./StepExtraDetails"
import StepTeamInfo from "./StepTeamInfo"
import { initialForm, ideaReducer } from "../../hooks/useIdeaReducer"

const IdeaForm = ({ onSubmit }) => {
  const [form, dispatch] = useReducer(ideaReducer, initialForm)
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
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    // الحقول المطلوبة
    const requiredFields = [
      "title",
      "name",
      "city",
      "tel",
      "sector",
      "description",
      "productType",
      "targetAudience",
      "productProblem",
      "projectDuration"
    ]

    requiredFields.forEach((field) => {
      if (!form[field]) newErrors[field] = "هذا الحقل مطلوب"
    })

    // شروط الفريق
    if (form.hasTeam === "yes") {
      if (!form.teamMembers) newErrors.teamMembers = "أعضاء الفريق مطلوبون"
      if (!form.teamEmails) newErrors.teamEmails = "بريد الأعضاء الالكتروني مطلوب"
    }

    setErrors(newErrors)

    // إذا ما في أخطاء
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", form)

      // — استدعاء onSubmit المرسلة من الصفحة الأم
      if (onSubmit) {
        onSubmit(form)
      }

      setShowSuccess(true)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="container space-y-6">
        
        {/* الخطوات */}
        <Stepper steps={[1, 2, 3, 4]} current={step} />

        {/* الخطوة 1 */}
        {step === 0 && (
          <StepPersonalInfo 
            form={form} 
            errors={errors} 
            handleChange={handleChange} 
          />
        )}

        {/* الخطوة 2 */}
        {step === 1 && (
          <StepIdeaInfo 
            form={form} 
            errors={errors} 
            handleChange={handleChange} 
            sectors={sectors} 
          />
        )}

        {/* الخطوة 3 */}
        {step === 2 && (
          <StepExtraDetails 
            form={form} 
            errors={errors} 
            handleChange={handleChange} 
          />
        )}

        {/* الخطوة 4 */}
        {step === 3 && (
          <StepTeamInfo 
            form={form} 
            errors={errors} 
            handleChange={handleChange} 
          />
        )}

        {/* أزرار التنقل */}
        <div className="flex gap-4">
          {step < 3 && (
            <Button
              label="التالي"
              type="button"
              onClick={() => setStep(step + 1)}
              className="w-50 bg-main-color text-white px-4 py-2 rounded"
            />
          )}

          {step > 0 && (
            <Button
              label="رجوع"
              type="button"
              onClick={() => setStep(step - 1)}
              className="w-50 bg-main-color px-4 py-2 rounded"
            />
          )}

          {step === 3 && (
            <Button
              label="إرسال"
              type="submit"
              className="w-50 bg-main-color text-white px-4 py-2 rounded"
            />
          )}
        </div>
      </form>

      {/* نافذة النجاح */}
      <Modal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="تم إرسال الفكرة بنجاح!"
        footer={
          <Button
            label="حسناً"
            onClick={() => setShowSuccess(false)}
            className="bg-main-color"
          />
        }
      >
        <p className="text-sm">شكراً لمشاركتك! سيتم مراجعة فكرتك قريباً.</p>
      </Modal>
    </>
  )
}

export default IdeaForm
