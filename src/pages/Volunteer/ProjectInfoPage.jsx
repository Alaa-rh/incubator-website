import React, { useState } from 'react';
import InfoRow from '../../components/InfoRow';
const ProjectInfoPage = () => {
    // eslint-disable-next-line
  const [projectData, setProjectData] = useState({
    header: {
      projectName: "منصة الشراكة الرقمية (Digital Partnership Platform)",
      manager: "ريم العلي",
      productType: "منصة برمجية (SaaS) وتطبيق ويب."
    },
    personalInfo: {
      name: "ريم فهد العلي",
      phone: "0987123456",
      specialization: "هندسة برمجيات",
      email: "reem.alali@example.com"
    },
    ideaInfo: {
      title: "منصة لربط المشاريع الناشئة بالمستشارين والمتطوعين في مجال الذكاء الاصطناعي.",
      targetSector: "التقنية المالية (FinTech) والتجارة الإلكترونية.",
      description: "بناء منصة SaaS لتقديم خدمة مطابقة ذكية (Smart Matching) تربط الشركات الناشئة التي تحتاج إلى تطوير حلول الذكاء الاصطناعي (AI) بالخبراء المستعدين لتقديم خدماتهم بالساعة أو مقابل حصة بسيطة."
    },
    teamMembers: [
      "ريم العلي: قائد الفريق / مطور الواجهة الخلفية (Back-end) - (صاحب الفكرة الأصلي)",
      "أحمد محمد (أنت): خبير/مطور AI - (المتطوع المُضاف حديثاً)",
      "سارة محمود: مصمم UX/UI - (مرشح للانضمام بانتظار الموافقة)"
    ]
  });

  return (
    <div className="min-h-screen bg-white-color p-4">
      <div className="container"> 
        <h1 className="text-second-color text-2xl font-bold mb-2">تفاصيل المشروع</h1>
        <div className="bg-white p-8 rounded-sm shadow-md border border-gray-100 mb-6">
          <InfoRow label="اسم المشروع :">{projectData.header.projectName}</InfoRow>
          <InfoRow label="مسؤول التعديل (القائد) :">{projectData.header.manager}</InfoRow>
          <InfoRow label="نوع المنتج :">{projectData.header.productType}</InfoRow>
        </div>

        <div className="bg-white p-8 rounded-sm shadow-md border border-gray-100 mb-6">
          <h2 className="text-lg font-bold text-black mb-4 border-b border-second-color pb-2">1. معلومات شخصية وقيادية</h2>
          <InfoRow label="الاسم :" >{projectData.personalInfo.name}</InfoRow>
          <InfoRow label="رقم الهاتف :">{projectData.personalInfo.phone} </InfoRow>
          <InfoRow label="الاختصاص :">{projectData.personalInfo.specialization} </InfoRow>
          <InfoRow label="البريد الإلكتروني :">{projectData.personalInfo.email} </InfoRow>
        </div>
      <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 mb-6">
          <h2 className="text-lg font-bold text-black mb-4 border-b border-second-color pb-2">2. معلومات عن الفكرة</h2>
          <InfoRow label="عنوان الفكرة :">{projectData.ideaInfo.title}</InfoRow>
          <InfoRow label="القطاع المستهدف :" >{projectData.ideaInfo.targetSector}</InfoRow>
          <InfoRow label="وصف مختصر للفكرة :">{projectData.ideaInfo.description}</InfoRow>
        </div>
        <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-black mb-4 border-b border-second-color pb-2">3. أعضاء الفريق</h2>
          <div className="flex justify-between items-start text-right">
            <div className="flex-1 text-black space-y-3 order-2 pl-4">
              {projectData.teamMembers.map((member, index) => (
                <p key={index} className="leading-relaxed">- {member}</p>
              ))}
            </div>
            
          </div>
        </div>
        </div>

      </div>
  );
};

export default ProjectInfoPage;