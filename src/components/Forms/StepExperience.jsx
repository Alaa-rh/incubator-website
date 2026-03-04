import Input from "../Input"
import Select from "../Select"

const StepExperience = ({ form, errors, handleChange, expertiseOptions }) => {
  return (
    <div className="grid grid-cols-2 gap-15">
      <Input
        label="عدد سنوات الخبرة"
        name="experienceYears"
        type="number"
        value={form.experienceYears}
        onChange={handleChange}
        error={errors.experienceYears}
        className="bg-white"
      />

      <Select
        label="مجالات الخبرة"
        name="expertiseArea"
        value={form.expertiseArea}
        onChange={handleChange}
        options={expertiseOptions}
        error={errors.expertiseArea}
        className="bg-white"
      />

      <Input
        label="جهة العمل الحالية"
        name="employer"
        value={form.employer}
        onChange={handleChange}
        error={errors.employer}
        className="bg-white"  
      />

      <Input
        label="رابط الملف المهني (اختياري)"
        type="url"
        name="profileLink"
        value={form.profileLink}
        onChange={handleChange}
        className="bg-white"
      />
    </div>
  )
}

export default StepExperience
