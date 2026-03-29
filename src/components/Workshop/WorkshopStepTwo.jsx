import React from "react"
import Input from "../Input"
import Button from "../Button"
const WorkshopStepTwo = ({
  formData,
  setFormData,
  onBack,
  error,
  onSubmit
}) => {

  return (
    <div className="flex flex-col gap-6 w-full">
      <div>
        <label className="font-bold">عنوان الدورة</label>
        <Input
          type="text"
          value={formData.title}
          error={error.title} 
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full"
        />
      </div>

      <div>
        <label className="font-bold">المجال</label>
        <Input
          type="text"
          value={formData.category}
          error={error.category}  
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full"
        />
      </div>

      <div>
        <label className="font-bold">تاريخ بدء الدورة</label>
        <Input
          type="date"
          value={formData.startDate}
          error={error.startDate}
          onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
          className="w-full"
        />
      </div>

      <div>
        <label className="font-bold">أيام الدورة</label>
        <Input
          type="text"
          value={formData.days}
          error={error.days}  
          onChange={(e) => setFormData({ ...formData, days: e.target.value })}
          className="w-full"
        />
      </div>

      <div>
        <label className="font-bold">تاريخ انتهاء الدورة</label>
        <Input
          type="date"
          value={formData.endDate}
          error={error.endDate}
          onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
          className="w-full"
        />
      </div>

      <div className="flex gap-6">
        <Button
          label="عودة" 
          onClick={onBack}
          className="bg-main-color px-10 py-2"
        />

        <Button 
          label="التالي"
          onClick={onSubmit}
          className="bg-main-color px-10 py-2"
        />
      </div>

    </div>
  )
}

export default WorkshopStepTwo
