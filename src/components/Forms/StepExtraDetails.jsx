import Input from "../Input"

const StepExtraDetails = ({ form, errors, handleChange }) => {
  return (
    <>
      <h3 className="font-bold text-lg">تفاصيل اضافية</h3>

      <Input
        label="نوع المنتج"
        placeholder="تطبيق، موقع إلكتروني، جهاز..."
        name="productType"
        value={form.productType}
        onChange={handleChange}
        error={errors.productType}
        className="w-1/2"
      />

      <Input
        label="الفئة المستهدفة"
        placeholder="من هم المستخدمون المستهدفون؟"
        name="targetAudience"
        value={form.targetAudience}
        onChange={handleChange}
        error={errors.targetAudience}
        className="w-1/2"
      />

      <Input
        label="المشكلة التي يحلها المنتج"
        placeholder="وصف لا تتجاوز 30 كلمة"
        name="productProblem"
        value={form.productProblem}
        onChange={handleChange}
        error={errors.productProblem}
        className="w-1/2"
      />
    </>
  )
}

export default StepExtraDetails
