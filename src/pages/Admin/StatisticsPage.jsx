import React, { useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Modal from '../../components/Modal';
import Select from '../../components/Select';
import Button from '../../components/Button';
import Input from '../../components/Input';
import StatsCards from '../../components/Admin_Dashboard/StatsCards';
import SectorAnalysisChart from '../../components/Admin_Dashboard/Charts/SectorAnalysisChart';
import ProjectLifecycleChart from '../../components/Admin_Dashboard/Charts/ProjectLifecycleChart';
import ExpertiseFieldsChart from '../../components/Admin_Dashboard/Charts/ExpertiseFieldsChart';
import IncubationSeasonsChart from '../../components/Admin_Dashboard/Charts/IncubationSeasonsChart';

const StatisticsPage = () => {
  const [open, setOpen] = useState(false);

  // ---------------------------------------------------------
  //   1) لاحقاً: جلب إحصائيات عامة من API
  // const { data: statsData } = useGetStatisticsStatsQuery();
  //
  //   fallback قبل الربط:
  const fallbackStats = [
    { label: "عدد ساعات التطوع", value: 1000 },
    { label: "إجمالي المشاريع", value: 100 },
    { label: "مشاريع متخرجة", value: 50 },
    { label: "مشاريع محتضنة", value: 20 },
  ];
  const stats = fallbackStats;
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  //   2) لاحقاً: جلب بيانات تحليل القطاعات من API
  // const { data: sectorData } = useGetSectorAnalysisQuery();
  //
  //   fallback: المكوّن فيه fallback داخلي
  const sector = null;
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  //   3) لاحقاً: جلب بيانات دورة حياة المشاريع من API
  // const { data: lifecycleData } = useGetProjectLifecycleQuery();
  const lifecycle = null;
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  //   4) لاحقاً: جلب بيانات مجالات الخبرة من API
  // const { data: expertiseData } = useGetExpertiseFieldsQuery();
  const expertise = null;
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  //   5) لاحقاً: جلب بيانات مواسم الاحتضان من API
  // const { data: seasonsData } = useGetIncubationSeasonsQuery();
  const seasons = null;
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  //   6) لاحقاً: إرسال إشعار عبر API
  // const [sendNotification] = useSendNotificationMutation();
  // const handleSendNotification = async () => { ... }
  // ---------------------------------------------------------

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
        footer={<Button label="إرسال" className="bg-main-color ml-2" />}
      >
        <form className="flex flex-col gap-4">
          <Select 
            label="اختيار المستلمين"
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
        <h1 className="text-3xl font-bold mt-0 mb-6">واجهة الاحصائيات التفصيلية</h1>

        {/*   إحصائيات عامة */}
        <StatsCards showIcons={false} stats={stats} />

        <div className="flex justify-between items-center my-6">
          {/*   تحليل القطاعات */}
          <SectorAnalysisChart data={sector} />

          {/*   دورة حياة المشاريع */}
          <ProjectLifecycleChart data={lifecycle} />
        </div>

        <div className="flex justiffy-between gap-15 mb-6">
          {/*  مجالات الخبرة */}
          <ExpertiseFieldsChart data={expertise} />

          {/* مواسم الاحتضان */}
          <IncubationSeasonsChart data={seasons} />
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;