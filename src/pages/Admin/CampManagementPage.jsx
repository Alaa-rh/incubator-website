import React, { useState } from "react";
import CampHeader from "../../components/Admin_Dashboard/Camp-management/CampHeader";
import PageTabs from "../../components/Admin_Dashboard/PageTabs";
import AbsenceRequestsSection from "../../components/Admin_Dashboard/Camp-management/AbsenceRequestsSection";
import ParticipantsSection from "../../components/Admin_Dashboard/Camp-management/ParticipantsSection";
import SessionsSection from "../../components/Admin_Dashboard/Camp-management/SessionsSection";

const CampManagementPage = () => {
  const [activeTab, setActiveTab] = useState("absence");

  const tabs = [
    { id: "absence", label: "طلبات الغياب" },
    { id: "participants", label: "المشاركين" },
    { id: "sessions", label: "إدارة الجلسات" },
  ];

  return (
    <div className="container p-6">

      {/* الهيدر */}
      <CampHeader />

      {/* التبويبات */}
      <PageTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {/* محتوى التبويبات */}
      {activeTab === "absence" && <AbsenceRequestsSection />}
      {activeTab === "participants" && <ParticipantsSection />}
      {activeTab === "sessions" && <SessionsSection />}
    </div>
  );
};

export default CampManagementPage;
