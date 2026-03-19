import React, { useState } from 'react';
import InfoRow from '../../components/InfoRow';
const ExhibitionCardPage = () => {
  const [data] = useState({
    exhibitionDate: "12/1/2025",
    projectName: "منصة الشراكة الرقمية (Digital Partnership Platform)",
    teamName: "Team Synergy (فريق التآزر)",
    contactEmail: "team.synergy@project.com",
    projectGoal: "الوصول إلى 100 خبير معتمد و 50 مشروعاً ناشئاً مسجلاً في الربع الأول من الإطلاق.",
    members: [
      { name: "سارة أحمد", role: "قائد الفريق والمؤسس." },
      { name: "علي محمد (أنت)", role: "مطور AI وشريك مؤسس." },
      { name: "ليلى سعيد", role: "مصمم UX/UI." }
    ],
    emails: [
      { label: "سارة", address: "sara.ahmed@team.com" },
      { label: "علي", address: "ali.mohammad@team.com" },
      { label: "ليلى", address: "layla.saeed@team.com" }
    ],
    figmaLink: "https://www.figma.com/file/ProjectSynergyDesign-MVP",
    services: [
      "مطابقة خبراء AI مع المشاريع الناشئة.",
      "تقديم استشارات تقنية بالساعة.",
      "توفير نماذج عقود عمل مرنة."
    ]
  });
  return (
    <div className="min-h-screen bg-white-color p-8 ">
      <div>
        <h1 className="text-second-color text-3xl font-bold mb-2 mt-2">بطاقة المعرض</h1>
        <p className="font-bold text-lg">تاريخ المعرض: {data.exhibitionDate}</p>
      </div>
      <div className="container bg-white shadow-md border border-gray-100 p-6 rounded-sm">
        <InfoRow label="اسم المشروع :">{data.projectName}</InfoRow>
        <InfoRow label="اسم الفريق :">{data.teamName}</InfoRow>
        <InfoRow label="بريد للتواصل (للفريق) :">
          <span className=" px-2 py-1 rounded">{data.contactEmail}</span>
        </InfoRow>
        <InfoRow label="هدف المشروع :">{data.projectGoal}</InfoRow>

        <hr className="my-10 border-second-color" />

        <InfoRow label="أعضاء الفريق:">
          <div className="space-y-2">
            {data.members.map((m, i) => (
              <p key={i}><span >{m.name}</span>: {m.role}</p>
            ))}
          </div>
        </InfoRow>

        <div className="mt-10">
          <InfoRow label="بريد لكل عضو :">
            <div className="space-y-2 ">
              {data.emails.map((e, i) => (
                <p key={i} className="flex gap-2">
                   <span>{e.label}:</span>
                   <span >{e.address}</span>
                </p>
              ))}
            </div>
          </InfoRow>
        </div>

        <hr className="my-10 border-second-color" />

        <InfoRow label=  "رابط المشروع (فيغما مثلاً) : ">
          <a href={data.figmaLink} className="hover:underline break-all">
            {data.figmaLink}
          </a>
        </InfoRow>

        <div className="mt-10">
          <InfoRow label="خدمات المشروع الأساسية">
            <div className="space-y-2 text-black">
              {data.services.map((s, i) => (
                <p key={i}>• {s}</p>
              ))}
            </div>
          </InfoRow>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionCardPage;