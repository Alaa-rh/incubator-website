import React from 'react'
import AdminNavbar from '../../components/AdminNavbar'
import Modal from '../../components/Modal'
import Select from '../../components/Select'
import Button from '../../components/Button'
import Input from '../../components/Input'
import StatsCards from '../../components/Admin_Dashboard/StatsCards'
import { useState } from 'react'
import SectorAnalysisChart from '../../components/Admin_Dashboard/SectorAnalysisChart';
import ProjectLifecycleChart from '../../components/Admin_Dashboard/ProjectLifecycleChart';
import ExpertiseFieldsChart from '../../components/Admin_Dashboard/ExpertiseFieldsChart';
import IncubationSeasonsChart from '../../components/Admin_Dashboard/IncubationSeasonsChart';

const StatisticsPage = () => {
    const [open, setOpen] = useState(false);
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
        {/* العنوان */}
        <h1 className="text-3xl font-bold mt-0 mb-6">واجهة الاحصائيات التفصيلية</h1>

        {/* البيانات */}
        <StatsCards
            showIcons={false}
            stats={[
                { label: "عدد ساعات التطوع", value: 1000 },
                { label: "إجمالي المشاريع", value: 100 },
                { label: "مشاريع متخرجة", value: 50 },
                { label: "مشاريع محتضنة", value: 20 },
            ]}
        />
        <div className="flex justify-between items-center my-6">
        {/*تحليل القطاعات*/ }
        <SectorAnalysisChart />

        {/* دورة حياة المشاريع */}
        <ProjectLifecycleChart />
        </div>
        <div className="flex justiffy-between gap-15 mb-6">
            {/*مجالات الخبرة */}
            <ExpertiseFieldsChart />

            {/*مواسم الاحتضان */}
            <IncubationSeasonsChart />

        </div>
      </div>
    </div>
  )
}

export default StatisticsPage