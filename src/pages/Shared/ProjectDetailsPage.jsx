import React from "react";
import { useParams } from "react-router-dom";
import ProjectDetailsCard from "../../components/ProjectDetailsCard";
import { useGetPublicProjectByIdQuery } from "../../api/endpoints/publicProjectsApi";

const ProjectDetailsPage = () => {
  const { id } = useParams();

  // 1) جلب بيانات المشروع من API
  const { data: project, isLoading } = useGetPublicProjectByIdQuery(id);

  // 2) fallback مؤقت
  const fallbackProjects = [
    {
      id: 1,
      image: "/images/project-det.jpg",
      title: "موقع للتواصل الاجتماعي",
      category: "تكنولوجيا",
      teamName: "Green Panda",
      teamMembers: ["ينصح شاهين", "ضياء الدين الصافي"],
      goal: "الهدف من المشروع هو الهدف من...",
      target: "الهدف من المستهدف من المشاهدة...",
      services: [
        "خدمة المشروع رقم واحد",
        "خدمة المشروع رقم ٢",
        "خدمة المشروع رقم ٣"
      ],
      projectLink: "https://youtu.be/Vq4C2hv3YiC?si=ajBgnYDy-lpr_lO"
    }
  ];

  const finalProject =
    project || fallbackProjects.find((p) => p.id === Number(id));

  if (isLoading) return <p className="text-center mt-10">جاري التحميل...</p>;

  return (
    <div className="container py-10">
      {finalProject ? (
        <ProjectDetailsCard project={finalProject} />
      ) : (
        <p className="text-center text-gray-500">
          لم يتم العثور على المشروع المطلوب
        </p>
      )}
    </div>
  );
};

export default ProjectDetailsPage;
