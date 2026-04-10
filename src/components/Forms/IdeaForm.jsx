import React, { useReducer, useState } from "react"
import Button from "../Button"
import Stepper from "../Stepper"
import StepPersonalInfo from "./StepPersonalInfo"
import StepIdeaInfo from "./StepIdeaInfo"
import StepExtraDetails from "./StepExtraDetails"
import StepTeamInfo from "./StepTeamInfo"
import { initialForm, ideaReducer } from "../../hooks/useIdeaReducer"

const IdeaForm = ({ onSubmit }) => {
  const [form, dispatch] = useReducer(ideaReducer, initialForm)
  const [errors, setErrors] = useState({})
  const [step, setStep] = useState(0)

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

    if (form.hasTeam === "yes") {
      if (!form.teamMembers) newErrors.teamMembers = "أعضاء الفريق مطلوبون"
      if (!form.teamEmails) newErrors.teamEmails = "بريد الأعضاء الالكتروني مطلوب"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      onSubmit(form) // ← فقط نرسل البيانات للصفحة الأم
    }
  }

  return (
    <form onSubmit={handleSubmit} className="container space-y-6">
      <Stepper steps={[1, 2, 3, 4]} current={step} />

      {step === 0 && <StepPersonalInfo form={form} errors={errors} handleChange={handleChange} />}
      {step === 1 && <StepIdeaInfo form={form} errors={errors} handleChange={handleChange} sectors={sectors} />}
      {step === 2 && <StepExtraDetails form={form} errors={errors} handleChange={handleChange} />}
      {step === 3 && <StepTeamInfo form={form} errors={errors} handleChange={handleChange} />}

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
  )
}

export default IdeaForm
