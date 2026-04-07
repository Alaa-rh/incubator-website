import React, { useState } from 'react'
import Modal from "../../components/Modal";
import Select from "../../components/Select";
import Input from "../../components/Input";
import Button from "../../components/Button";
import AdminNavbar from "../../components/AdminNavbar";
import { useNavigate } from 'react-router-dom';
import ProjectsTable from '../../components/Admin_Dashboard/ProjectsTable';
const ProjectsManagementPage = () => {
    const [open, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [schedule, setSchedule] = useState("");
    const navigate = useNavigate();
  return (
    <div>
         <AdminNavbar 
        BtnLabel="إرسال إشعار"
        onBtnClick={() => setOpen(true)}
      />
       <Modal 
      isOpen={open}
      onClose={() => setOpen(false)}
      title=""
      className="h-80 py-10"
      footer={<Button label="إرسال" className="bg-main-color ml-2" />}>
        <form className="flex flex-col gap-4">
          <Select label="اختيار المستلمين"
            options={[
              { value: "الكل", label: "الكل" },
              { value: "المتطوعين", label: "المتطوعين" },
              { value: "المحتضنين", label: "المحتضنين" },
              { value: "لجنة التقييم", label: "لجنة التقييم" },
            ]}
            />
          <Input label="محتوى الإشعار" type="text" placeholder="محتوى الإشعار" />
        </form>
      </Modal>
      <div className="container mt-30">
        <div className="flex justify-between items-center mb-6">
            <Button label="تحديد تاريخ جلسة التقييم" className="bg-main-color" onClick={() => setModalOpen(true)} />
            <Button
            label="تعيين المقيمين"
            onClick={() => navigate (`/admin/assign-evaluators/id`)}
            className="bg-main-color"
          />  
        </div>
        <ProjectsTable />

      </div>
       {/* مودال تحديد الموعد */}
            <Modal
              isOpen= {modalOpen}
              onClose={() => setModalOpen(false)}
              title="تعيين موعد اللجنة"
              footer={
                <Button
                  label="تأكيد"
                  onClick={() => {}}
                  className="bg-main-color"
                />
              }
            >
              <Input
                label="تاريخ و وقت اللجنة"
                type="datetime-local"
                onChange={(e) => setSchedule(e.target.value)}
                value={schedule}
              />
            </Modal>
    </div>
  )
}

export default ProjectsManagementPage