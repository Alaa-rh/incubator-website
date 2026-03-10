import { GrCubes } from "react-icons/gr";
import { SlScreenDesktop } from "react-icons/sl";
const ProjectsSection = ({ projects }) => {
  return (
    <div>

      {/* العنوان */}
      <div className="flex gap-3 font-bold mx-8">
      <SlScreenDesktop className="text-4xl text-second-color" />
      <h3 className="text-4xl">مشاريعي</h3>
      </div>

      {/* قائمة المشاريع */}
      <div className="flex items-center justify-center gap-10">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="w-40 h-40 border rounded-full p-3 bg-white shadow-xl flex flex-col items-center gap-3 cursor-pointer hover:scale-105 transition"
          >
            <GrCubes className="text-4xl text-second-color" />
            <p className="text-second-color">مشروع</p>
            <p className="font-bold text-second-color">{project.name}</p>
            
          </div>
        ))}
      </div>

    </div>
  )
}

export default ProjectsSection
