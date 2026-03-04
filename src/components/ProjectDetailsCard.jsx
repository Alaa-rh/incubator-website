import React from "react"

const ProjectDetailsCard = ({ project }) => {
  return (
    <div className="container">
       <h2 className="text-2xl text-second-color font-bold mb-10">تفاصيل المشروع</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
         <div className="space-y-5 text-gray-700">
           <p><span className="font-bold">اسم المشروع:</span> {project.title}</p>
           <p><span className="font-bold">الفئة:</span> {project.category}</p>
           <p><span className="font-bold">اسم الفريق:</span> {project.teamName}</p>
        <div>
          <p className="font-bold">أعضاء الفريق:</p>
          <ul className="list-disc pr-6">
            {project.teamMembers.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
        
        <p>
          <span className="font-bold">هدف المشروع:</span> {project.goal}
        </p>

        <p>
          <span className="font-bold">المستهدف من المنتج:</span> {project.target}
        </p>

        <div>
          <p className="font-bold">خدمات المشروع:</p>
          <ul className="list-decimal pr-6">
            {project.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        {project.projectLink && (
          <p>
            <span className="font-bold">رابط المشروع:</span>{" "}
            <a href={project.projectLink} target="_blank" className="text-blue-600 underline">
              زيارة المشروع
            </a>
          </p>
        )}
      </div>
      
       {/* صورة المشروع */}
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-cover rounded-lg"
        />
      )}
      </div>
      <button className="bg-main-color text-white px-6 py-2 rounded-lg w-fit">
        تواصل معنا
      </button>
    </div>
  )
}

export default ProjectDetailsCard
