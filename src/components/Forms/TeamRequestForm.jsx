import { useState } from "react"
import Button from "../Button"
import Input from "../Input"
import Select from "../Select"
import Modal from "../Modal";
const TeamRequestForm = () => {
  const [title, setTitle] = useState("")
  const [skill, setSkill] = useState("")
  const [count, setCount] = useState("")
  const [errors, setErrors] = useState({})
  const [description, setDescription] = useState("")
  const [showSuccess, setShowSuccess ] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      title,
      skill,
      count,
      description,
    }
    const newErrors = {}
    Object.keys(formData).forEach(element => {
      if(!formData[element]) newErrors[element] = "هذا الحقل مطلوب"
    });
    setErrors(newErrors)

    if(Object.keys(newErrors).length !== 0) {
      return
    }
    setShowSuccess(true)

    console.log("Form Data to backend:", formData)

  }

  return (
    <>
    <form 
      onSubmit={handleSubmit} 
      className="flex flex-col gap-6 p-6 w-1/2"
    >
      <Input
        label="عنوان الفكرة"
        placeholder="عنوان الفكرة"
        value={title}
        error={errors.title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Select
        label="نوع المهارة المطلوبة"
        placeholder="اختر المهارة"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        error={errors.skill}
        options={[
          { label: "UI UX", value: "uiux" },
          { label: "Back End", value: "backend" },
          { label: "Front End", value: "frontend" },
          { label: "Marketing", value: "marketing" },
          { label: "Legal", value: "legal" },
        ]}
      />

      <Input
        label="عدد المتطوعين المطلوبين"
        type="number"
        placeholder="4 على الأكثر"
        value={count > 0 && count <= 4 ? count : ""}
        onChange={(e) => setCount(e.target.value)}
        error={errors.count}
      />

      <Input
        label="شرح مختصر عن الفكرة"
        placeholder="وصف الفكرة"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        error={errors.description}
      />

      <Button 
        label="إرسال الطلب" 
        className="bg-main-color w-full"
        type="submit"
      />
    </form>
    <Modal
    isOpen={showSuccess}
    onClose={() => setShowSuccess(false)}
    title= "طلبك قيد المعالجة من قبل الادارة سيتم اعلامك عند موافقة اي متطوع"
     footer={
          <Button
            label="حسناً"
            onClick={() => setShowSuccess(false)}
            className="bg-main-color"
          />
        }   
    >
    </Modal>
 </>
  )
}

export default TeamRequestForm
