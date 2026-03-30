import React, { useState } from "react";
import StatsCards from "../../components/Admin_Dashboard/StatsCards";
import ProjectsChart from "../../components/Admin_Dashboard/Charts/ProjectsChart";
import RecentActivity from "../../components/Admin_Dashboard/RecentActivity";
import QuickAccess from "../../components/Admin_Dashboard/QuickAccess"
import AdminNavbar from "../../components/AdminNavbar";
import Modal from "../../components/Modal";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Input from "../../components/Input";
const AdminMainPage = () => {  
    const [open, setOpen] = useState(false);
  return (
    <div className="bg-white-color h-screen">
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

      {/* العنوان */}
      <h1 className="text-3xl font-bold mb-4">لوحة التحكم الرئيسية</h1>

      {/* بطاقات الإحصائيات */}
      <StatsCards
        showIcons={true}
        stats={[
          { label: "المشاريع المنجزة", value: 32, icon: "🏆" },
          { label: "عدد المتطوعين", value: 32, icon: "🤝" },
          { label: "المتقدمين للموسم الحالي", value: 32, icon: "✍" },
          { label: "المشاريع المنجزة", value: 32, icon: "📝" },
        ]}
    />


      <div className="flex justify-between items-center gap-4 mt-4">
      {/* النشاط الأخير */}
      <RecentActivity />

      {/* الرسم البياني */}
      <ProjectsChart />
      </div>

      {/* الوصول السريع */}
      <QuickAccess />

    </div>
    </div>
  );
};

export default AdminMainPage;
