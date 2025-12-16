import React, { useState } from "react"
import Input from "../Input"
import Select from "../Select"
import Button from "../Button"
import LinearProgress from "../LinearProgress"
import Modal from "../Modal"
import Textarea from "../Textarea"
import AvailabilityScheduler from "../AvailabilityScheduler"

const VolunteerForm = ({ onCancel }) => {
  const [form, setForm] = useState({
    experienceYears: "",
    expertiseArea: "",
    employer: "",
    profileLink: "",
    consultationPreferences: "",
    location: "",
    expertition: "",
    volunteeringGoal: "",
    availability: Object.fromEntries(
      ["الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت","الأحد"].map(d => [d, { from: "", to: "", active: false }])
    )
  })

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
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleAvailabilityChange = (availability) => {
    setForm(prev => ({ ...prev, availability }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!form.experienceYears) newErrors.experienceYears = "يرجى إدخال عدد سنوات الخبرة"
    if (!form.expertiseArea) newErrors.expertiseArea = "يرجى اختيار مجال الخبرة"
    if (!form.employer) newErrors.employer = "يرجى إدخال جهة العمل الحالية"
    if (!form.consultationPreferences) newErrors.consultationPreferences = "يرجى إدخال تفضيلات الاستشارة"
    if (!form.location) newErrors.location = "يرجى إدخال السكن"
    if (!form.expertition) newErrors.expertition = "يرجى إدخال الاختصاص"
    if (!form.volunteeringGoal) newErrors.volunteeringGoal = "يرجى إدخال الهدف من التطوع"

    // ✅ تحقق من التوفر: لازم على الأقل يوم واحد فيه فترة مفعّلة وكاملة
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
        {/* خط التقدم */}
        <LinearProgress steps={3} current={step} className="mb-6" />

        {/* الخطوة 0 */}
        {step === 0 && (
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="عدد سنوات الخبرة"
              name="experienceYears"
              type="number"
              value={form.experienceYears}
              onChange={handleChange}
              error={errors.experienceYears}
            />
            <Select
              label="مجالات الخبرة"
              name="expertiseArea"
              value={form.expertiseArea}
              onChange={handleChange}
              options={expertiseOptions}
              error={errors.expertiseArea}
            />
            <Input
              label="جهة العمل الحالية"
              name="employer"
              value={form.employer}
              onChange={handleChange}
              error={errors.employer}
            />
            <Input
              label="رابط الملف المهني (اختياري)"
              type="url"
              name="profileLink"
              value={form.profileLink}
              onChange={handleChange}
            />
          </div>
        )}

        {/* الخطوة 1 */}
        {step === 1 && (
          <>
            <Input
              label="تفضيلات الاستشارة"
              name="consultationPreferences"
              value={form.consultationPreferences}
              onChange={handleChange}
              error={errors.consultationPreferences}
            />
            <Input
              label="السكن"
              name="location"
              value={form.location}
              onChange={handleChange}
              error={errors.location}
            />
            <Input
              label="الاختصاص"
              name="expertition"
              value={form.expertition}
              onChange={handleChange}
              error={errors.expertition}
            />
            <Textarea
              label="الهدف من التطوع"
              name="volunteeringGoal"
              value={form.volunteeringGoal}
              onChange={handleChange}
              error={errors.volunteeringGoal}
            />
          </>
        )}

        {/* الخطوة 2 */}
        {step === 2 && (
          <div>
            <AvailabilityScheduler
              value={form.availability}
              onChange={handleAvailabilityChange}
            />
            {errors.availability && (
              <p className="text-red-500 text-sm mt-2">{errors.availability}</p>
            )}
          </div>
        )}

        {/* أزرار التنقل */}
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

      {/* المودل بعد الإرسال */}
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