import Input from "../Input"
import Select from "../Select"

const StepExperience = ({ form, errors, handleChange, expertiseOptions }) => {
  return (
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
  )
}

export default StepExperience
