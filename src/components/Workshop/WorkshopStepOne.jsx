import React from "react"
import Input from "../Input"
import Textarea from "../Textarea"
import Button from "../Button"

const WorkshopStepOne = ({
  formData,
  setFormData,
  onNext
}) => {

  return (
    <div className="flex flex-col gap-6 w-full">

      {/* وقت الدورة */}
      <div className="flex gap-4">
        <div>
          <label className="font-bold">من</label>
          <Input 
            type="time"
            value={formData.startTime}
            onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
            className="w-full"
          />
        </div>

        <div>
          <label className="font-bold">إلى</label>
          <Input 
            type="time"
            value={formData.endTime}
            onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
            className="w-full"
          />
        </div>
      </div>

      {/* الوصف */}
      <div>
        <label className="font-bold">الوصف الذي يظهر للطالب</label>
        <Textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full"
        />
      </div>

      {/* الفئة المستهدفة */}
      <div>
        <label className="font-bold">حدد الأشخاص الذين تخصص لهم هذه الورشة</label>
        <Input
          type="text"
          value={formData.targetGroup}
          onChange={(e) => setFormData({ ...formData, targetGroup: e.target.value })}
          className="w-full"
        />
      </div>

      {/* زر التالي */}
      <Button
        label="التالي" 
        onClick={onNext}
        className="bg-main-color"
      />

    </div>
  )
}

export default WorkshopStepOne
