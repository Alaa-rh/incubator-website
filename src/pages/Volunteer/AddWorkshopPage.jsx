import React, { useState } from "react"
import WorkshopImage from "../../components/Workshop/WorkshopImage"
import WorkshopStepOne from "../../components/Workshop/WorkshopStepOne"
import WorkshopStepTwo from "../../components/Workshop/WorkshopStepTwo"

const AddWorkshopPage = () => {

  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState({
    startTime: "",
    endTime: "",
    description: "",
    targetGroup: "",
    title: "",
    category: "",
    startDate: "",
    endDate: "",
    days: "",
    image: null
  })

  const handleSubmit = () => {
    console.log("بيانات الورشة:", formData)
    alert("تم حفظ الورشة بنجاح")
  }

  return (
    <div className="bg-white-color h-screen p-10">
        <h1 className="text-3xl font-bold text-second-color">اضافة ورشة تدريبية</h1>
        <div className="container mt-40 flex justify-between items-center">

      <WorkshopImage image={formData.image} />

      
      <div className="w-[500px]">

        {step === 1 && (
          <WorkshopStepOne
            formData={formData}
            setFormData={setFormData}
            onNext={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <WorkshopStepTwo
            formData={formData}
            setFormData={setFormData}
            onBack={() => setStep(1)}
            onSubmit={handleSubmit}
          />
        )}

      </div>
    </div>
</div>
  )
}

export default AddWorkshopPage
