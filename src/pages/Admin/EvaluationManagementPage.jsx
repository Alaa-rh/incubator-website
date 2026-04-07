import React, { useState } from "react";
import PageTabs from "../../components/Admin_Dashboard/PageTabs";
import EvalStatusTable from "../../components/Admin_Dashboard/Evaluation-management/EvalStatusTable";
import CriteriaManager from "../../components/Admin_Dashboard/Evaluation-management/CriteriaManager";
import ResultsTable from "../../components/Admin_Dashboard/Evaluation-management/ResultsTable";
import DistributionTable from "../../components/Admin_Dashboard/Evaluation-management/DistributionTable";
import Modal from "../../components/Modal";
import Select from "../../components/Select";
import Input from "../../components/Input";
import Button from "../../components/Button";
import AdminNavbar from "../../components/AdminNavbar";
const EvaluationManagementPage = ({ projects, assignedEvaluators, allAssignments }) => {
  const [activeTab, setActiveTab] = useState("tasks");
  const [open, setOpen] = useState(false);

  const tabs = [
    { id: "tasks", label: "توزيع المهام للجنة التحكيم" },
    { id: "criteria", label: "تعيين معايير التقييم" },
    { id: "schedule", label: "تحديد موعد اللجنة" },
    { id: "results", label: "متابعة التقييم والنتائج" },
  ];

  return (
    <>
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
    <div className="container p-6 mt-20" dir="rtl">

      {/* التبويبات */}
      <PageTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {/* المحتوى حسب التبويب */}
      <div className="mt-6">
        {activeTab === "tasks" && (
         <DistributionTable assignedEvaluators={assignedEvaluators} onSelectProject={setActiveTab} />
        )}

        {activeTab === "criteria" && <CriteriaManager />}

        {activeTab === "schedule" && <EvalStatusTable  projects={projects} 
            assignedEvaluators={assignedEvaluators} />}


        {activeTab === "results" && (
          <ResultsTable 
            projects={projects}
            allAssignments={allAssignments}
          />
        )}
      </div>
    </div>
    </>
  );
};

export default EvaluationManagementPage;
