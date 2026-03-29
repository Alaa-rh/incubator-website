import React from "react"
import Input from "../Input"
import Textarea from "../Textarea"
import Button from "../Button"

const WorkshopStepOne = ({
  formData,
  setFormData,
  onNext,
  error
}) => {

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* صورة الدورة */}
      <div>
        <Input
          label="صورة للورشة (اختياري)"
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const imageURL = URL.createObjectURL(file);
              setFormData(prev => ({ ...prev, image: imageURL }));
            }
          }}
          className="w-full"
        />
      </div>

      {/* وقت الدورة */}
      <div className="flex gap-4">
        <div>
          <Input 
            label={"من"}
            type="time"
            error={error.startTime}
            value={formData.startTime}
            onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
            className="w-full"
          />
        </div>

        <div>
          <Input 
          label={"إلى"}
            type="time"
            error={error.endTime}
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
          error={error.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full"
        />
      </div>

      {/* الفئة المستهدفة */}
      <div>
        <label className="font-bold">حدد الأشخاص الذين تخصص لهم هذه الورشة</label>
        <Input
          type="text"
          error={error.targetGroup}
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
