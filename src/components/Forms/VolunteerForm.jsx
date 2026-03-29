import React, { useReducer, useState } from "react"
import Button from "../Button"
import LinearProgress from "../LinearProgress"
import Modal from "../Modal"
import StepExperience from "./StepExperience"
import StepPreferences from "./StepPreferences"
import StepAvailability from "./StepAvailability"
import { initialVolunteerForm, volunteerReducer } from "../../hooks/useVolunteerReducer";

const VolunteerForm = ({ onCancel }) => {
  const [form, dispatch] = useReducer(volunteerReducer, initialVolunteerForm)
  const [errors, setErrors] = useState({})
  const [step, setStep] = useState(0)
  const [showSuccess, setShowSuccess] = useState(false)

  const expertiseOptions = [
    { value: "ui ux", label: "تصميم واجهات وتجربة المستخدم" },
    { value: "development", label: "تطوير برمجيات" },
    { value: "marketing", label: "التسويق الرقمي" },
    { value: "training", label: "تقديم ورشات تدريبية" }
  ]

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value
    })
  }

  const handleAvailabilityChange = (availability) => {
    dispatch({
      type: "UPDATE_AVAILABILITY",
      value: availability
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    // الحقول المطلوبة
    const requiredFields = [
      "experienceYears",
      "expertiseArea",
      "employer",
      "consultationPreferences",
      "location",
      "expertition",
      "volunteeringGoal"
    ]

    requiredFields.forEach((field) => {
      if (!form[field]) newErrors[field] = "هذا الحقل مطلوب"
    })

    // التوفر
    const availabilityValues = Object.values(form.availability || {})
    const hasAvailability = availabilityValues.some(day =>
      day.from && day.to && day.active
    )
    if (!hasAvailability) newErrors.availability = "يرجى تحديد أوقات التوفر"

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log("تم إرسال البيانات:", form)
      setShowSuccess(true)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-4xl my-6 space-y-8">
        <LinearProgress steps={3} current={step} className="py-6" />

        
        {step === 0 && (
          <StepExperience
            form={form}
            errors={errors}
            handleChange={handleChange}
            expertiseOptions={expertiseOptions}
          />
        )}

        {step === 1 && (
          <StepPreferences
            form={form}
            errors={errors}
            handleChange={handleChange}
          />
        )}

        {step === 2 && (
          <StepAvailability
            form={form}
            errors={errors}
            handleAvailabilityChange={handleAvailabilityChange}
          />
        )}

        <div className="flex justify-between">
          <Button
            label="إلغاء"
            type="button"
            onClick={onCancel}
            className="w-50 bg-main-color text-white"
          />

          {step < 2 ? (
            <Button
              label="التالي"
              type="button"
              onClick={() => setStep(step + 1)}
              className="w-50 bg-main-color px-4 py-2"
            />
          ) : (
            <Button
              label="إرسال"
              type="submit"
              className="w-50 bg-main-color px-4 py-2"
            />
          )}
        </div>
      </form>

      <Modal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="تم إرسال البيانات بنجاح!"
        footer={
          <Button
            label="إغلاق"
            onClick={() => setShowSuccess(false)}
            className="bg-main-color"
          />
        }
      >
        <p className="text-sm text-gray-700">
          شكراً لمشاركتك! سيتم مراجعة بياناتك من قبل الإدارة قريباً.
        </p>
      </Modal>
    </div>
  )
}

export default VolunteerForm
