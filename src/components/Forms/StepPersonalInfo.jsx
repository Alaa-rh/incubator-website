import Input from "../Input"

const StepPersonalInfo = ({ form, errors, handleChange }) => {
  return (
    <>
      <h3 className="font-bold text-lg">المعلومات الشخصية</h3>

      <Input
        label="الاسم"
        placeholder="ما هو اسمك؟"
        name="name"
        value={form.name}
        onChange={handleChange}
        error={errors.name}
        className="w-1/2"
      />

      <Input
        label="رقم الهاتف"
        placeholder="ما هو رقم هاتفك؟"
        type="tel"
        name="tel"
        value={form.tel}
        onChange={handleChange}
        error={errors.tel}
        className="w-1/2 text-right"
      />

      <Input
        label="المحافظة"
        placeholder="ما هي محافظتك؟"
        name="city"
        value={form.city}
        onChange={handleChange}
        error={errors.city}
        className="w-1/2"
      />
    </>
  )
}

export default StepPersonalInfo
