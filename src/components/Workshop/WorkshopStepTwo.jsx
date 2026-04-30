import React from "react"
import Input from "../Input"
import Button from "../Button"
import Textarea from "../Textarea"
const WorkshopStepTwo = ({
  formData,
  setFormData,
  onBack,
  error,
  onSubmit
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
            error={error.time_from}
            value={formData.time_from}
            onChange={(e) => setFormData({ ...formData, time_from: e.target.value })}
            className="w-full"
          />
        </div>

        <div>
          <Input 
          label={"إلى"}
            type="time"
            error={error.time_to}
            value={formData.time_to}
            onChange={(e) => setFormData({ ...formData, time_to: e.target.value })}
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
          error={error.target_audience}
          value={formData.target_audience}
          onChange={(e) => setFormData({ ...formData, target_audience: e.target.value })}
          className="w-full"
        />
      </div>
      <div>
          <label className="font-bold">الأهداف</label>
          <Textarea
            value={formData.objectives}
            error={error.objectives}
            onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
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
