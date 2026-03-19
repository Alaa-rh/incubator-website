import React, { useEffect, useState } from "react";
import ProjectEvaluationCard from "../../components/ProjectEvaluationCard";
import Button from "../../components/Button";
import NavLinkUniversal from "../../components/NavLinkUniversal";

const sampleProjects = [
  {
    id: 1,
    title: "اسم المشروع",
    productType: "منصة برمجية (SaaS) وتطبيق ويب",
    sector: "التقنية المالية (FinTech) والتجارة الإلكترونية",
  },
  {
    id: 2,
    title: "مشروع آخر",
    productType: "تطبيق جوال",
    sector: "الصحة الرقمية (HealthTech)",
  },
  {
    id: 3,
    title: "منصة تعليمية",
    productType: "منصة ويب",
    sector: "التعليم الإلكتروني (EdTech)",
  }
];

const EvaluationCenterPage = () => {

  const [projects, setProjects] = useState([]);


  useEffect(() => {
    // eslint-disable-next-line
    setProjects(sampleProjects);
  }, []);

  return (
    <div className="container py-6">

      <h1 className="text-3xl font-bold text-second-color mb-6">
        مركز التقييم
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {projects.map((project) => (
          <ProjectEvaluationCard
            key={project.id}
            project={project}
            onViewDetails={() => window.location.href = `/projectinfo/${project.id}`}
          />
        ))}
      </div>
      <div className="flex justify-start">
        <NavLinkUniversal label={<Button label={"نموذج التقييم"} className="bg-main-color"/>} to={"/evaluationform"}/>
      </div>

    </div>
  );
};

export default EvaluationCenterPage;
