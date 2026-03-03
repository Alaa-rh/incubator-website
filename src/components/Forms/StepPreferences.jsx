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
  )
}

export default StepPreferences
