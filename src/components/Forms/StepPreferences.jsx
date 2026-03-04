import Input from "../Input"
import Textarea from "../Textarea"

const StepPreferences = ({ form, errors, handleChange }) => {
  return (
    <>
      <Input
        label="تفضيلات الاستشارة"
        name="consultationPreferences"
        value={form.consultationPreferences}
        onChange={handleChange}
        error={errors.consultationPreferences}
        className="bg-white"
      />

      <Input
        label="السكن"
        name="location"
        value={form.location}
        onChange={handleChange}
        error={errors.location}
        className="bg-white"
      />

      <Input
        label="الاختصاص"
        name="expertition"
        value={form.expertition}
        onChange={handleChange}
        error={errors.expertition}
        className="bg-white"
      />

      <Textarea
        label="الهدف من التطوع"
        name="volunteeringGoal"
        value={form.volunteeringGoal}
        onChange={handleChange}
        error={errors.volunteeringGoal}
        className="bg-white"
      />
    </>
  )
}

export default StepPreferences
