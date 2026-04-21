import React, { useState } from "react";
import WorkshopImage from "../../components/Workshop/WorkshopImage";
import WorkshopStepOne from "../../components/Workshop/WorkshopStepOne";
import WorkshopStepTwo from "../../components/Workshop/WorkshopStepTwo";
// import { useAddWorkshopMutation } from "../../api/endpoints/workshopsApi";

const AddWorkshopPage = () => {
  const [step, setStep] = useState(1);
  const [error, setError] = useState({});

  // TODO: بعد الربط استخدمي هذا السطر
  // const [addWorkshop, { isLoading }] = useAddWorkshopMutation();

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
    image: null,
  });

  const handleSubmit = async () => {
    const newError = {};
    const requiredFields = [
      "startTime",
      "endTime",
      "description",
      "targetGroup",
      "title",
      "category",
      "startDate",
      "endDate",
      "days",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) newError[field] = "هذا الحقل مطلوب";
    });

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    // TODO: بعد الربط استخدمي هذا الكود بدل console.log
    // try {
    //   await addWorkshop(formData).unwrap();
    //   alert("تم حفظ الورشة بنجاح");
    //   // reset form
    // } catch (err) {
    //   alert("حدث خطأ في حفظ الورشة");
    // }

    console.log("بيانات الورشة:", formData);
    alert("تم حفظ الورشة بنجاح");
  };

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
              error={error}
            />
          )}

          {step === 2 && (
            <WorkshopStepTwo
              formData={formData}
              setFormData={setFormData}
              onBack={() => setStep(1)}
              onSubmit={handleSubmit}
              error={error}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddWorkshopPage;