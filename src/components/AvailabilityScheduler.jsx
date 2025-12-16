import React from "react"
import Input from "./Input"
import CheckBox from "./CheckBox"
import Button from "./Button"

const daysOfWeek = ["الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"]

const AvailabilityScheduler = ({ value, onChange }) => {
  // إذا ما تم تمرير قيمة من الأب، نعمل قيمة افتراضية: فترة واحدة فارغة لكل يوم
  const availability = value && Object.keys(value).length
    ? value
    : Object.fromEntries(daysOfWeek.map(day => [day, { from: "", to: "", active: false }]))

  const handleChange = (day, field, val) => {
    const newAvailability = {
      ...availability,
      [day]: { ...availability[day], [field]: val }
    }
    onChange && onChange(newAvailability)
  }

  const handleToggle = (day) => {
    const newAvailability = {
      ...availability,
      [day]: { ...availability[day], active: !availability[day].active }
    }
    onChange && onChange(newAvailability)
  }

  const handleSave = () => {
    console.log("تم الحفظ:", availability)
    // إرسال لـ Django أو أي API هنا
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-xl font-bold mb-4">حدد توفرَك الأسبوعي</h1>
      <p className="text-sm text-gray-600 mb-6">
        اختر وقت بداية ونهاية لكل يوم تكون فيه متاحًا
      </p>

      {daysOfWeek.map((day) => (
        <div key={day} className="mb-6">
          <h2 className="text-md font-semibold mb-2">{day}</h2>
          <div className="flex items-center gap-2 mb-2">
            <Input
              type="time"
              value={availability[day].from}
              onChange={(e) => handleChange(day, "from", e.target.value)}
            />
            <span>إلى</span>
            <Input
              type="time"
              value={availability[day].to}
              onChange={(e) => handleChange(day, "to", e.target.value)}
            />
            <label className="flex items-center gap-1 text-sm">
              <CheckBox
                label={"مفعّل"}
                name={`${day}-active`}
                checked={availability[day].active}
                onChange={() => handleToggle(day)}
              />
            </label>
          </div>
        </div>
      ))}

      <div className="text-end mt-6">
        <Button label="حفظ التوفر" onClick={handleSave} className="bg-main-color" />
      </div>
    </div>
  )
}

export default AvailabilityScheduler