import React from "react"
import { useParams } from "react-router-dom"
import ProjectDetailsCard from "../../components/ProjectDetailsCard"
import project1 from "../../assets/images/project-det.jpg"
import project2 from "../../assets/images/project2.png"

const ProjectDetailsPage = () => {
  const { id } = useParams()

  // const { data: project, isLoading } = useGetProjectByIdQuery(id);

  //static مؤقتة
  const fallbackProjects = [
    {
      id: 1,
      image: project1,
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
    },
    {
      id: 2,
      image: project2,
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
  ]

  // project = data
  const project = fallbackProjects.find(p => p.id === Number(id))

  return (
    <div className="container py-10">
      {project ? (
        <ProjectDetailsCard project={project} />
      ) : (
        <p className="text-center text-gray-500">لم يتم العثور على المشروع المطلوب</p>
      )}
    </div>
  )
}

export default ProjectDetailsPage
