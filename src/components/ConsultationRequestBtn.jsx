import { useState } from "react"
import Button from "./Button"
import Modal from "./Modal"
import Select from "./Select"
import Input from "./Input"

const ConsultationRequestBtn = ({ consultant }) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <>
      <Button
        label="طلب استشارة"
        className="bg-main-color text-white"
        onClick={open}
      />

      <Modal
        isOpen={isOpen}
        onClose={close}
        title="يرجى تحديد نوع الاستشارة وشرح ما تحتاجه"
        footer={
          <>
            <Button label="إرسال الطلب" className="bg-main-color ml-2" />
            <Button label="إلغاء" className="bg-gray-400" onClick={close} />
          </>
        }
      >
        <form className="flex flex-col gap-4">

          {consultant && (
            <p className="font-bold text-second-color">
              المستشار: {consultant.name}
            </p>
          )}

          <Select
            placeholder="اختر نوع الاستشارة"
            label="نوع الاستشارة"
            options={[
              { label: "استشارة", value: "استشارة" },
              { label: "متابعة دورية", value: "متابعة دورية" }
            ]}
          />

          <Input
            type="text"
            label="شرح مختصر"
            placeholder="شرح ما تحتاجه"
          />

        </form>
      </Modal>
    </>
  )
}

export default ConsultationRequestBtn
