import React, { useReducer, useState } from "react"
import Button from "../Button"
import LinearProgress from "../LinearProgress"
import Modal from "../Modal"
import StepExperience from "./StepExperience"
import StepPreferences from "./StepPreferences"
import StepAvailability from "./StepAvailability"

// الحالة الابتدائية
const initialForm = {
  experienceYears: "",
  expertiseArea: "",
  employer: "",
  profileLink: "",
  consultationPreferences: "",
  location: "",
  expertition: "",
  volunteeringGoal: "",
  availability: Object.fromEntries(
    ["الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت","الأحد"]
      .map(d => [d, { from: "", to: "", active: false }])
  )
}

// ال reducer
function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value }

    case "UPDATE_AVAILABILITY":
      return { ...state, availability: action.value }

    case "RESET":
      return initialForm

    default:
      return state
  }
}

const VolunteerForm = ({ onCancel }) => {
  const [form, dispatch] = useReducer(formReducer, initialForm)
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
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto my-6 space-y-6">
        <LinearProgress steps={3} current={step} className="mb-6" />

        
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

        <div className="flex justify-between mt-6">
          <Button
            label="إلغاء"
            type="button"
            onClick={onCancel}
            className="bg-main-color text-white"
          />

          {step < 2 ? (
            <Button
              label="التالي"
              type="button"
              onClick={() => setStep(step + 1)}
              className="bg-main-color text-white px-4 py-2 rounded"
            />
          ) : (
            <Button
              label="إرسال"
              type="submit"
              className="bg-main-color text-white px-4 py-2 rounded"
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
            className="bg-main-color text-white"
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
