import React from 'react'
import SignupLink from './SignupLink'

const ProjectCard = ({project}) => {
  return (
    <div className='flex items-center gap-20 bg-white rounded shadow p-4'>
        <div className='relative w-[300px] h-[230px] rounded overflow-hidden'>
        <img src={project.image} alt={project.name} className="absolute w-full h-full object-cover" />
        </div>
        <div className='flex flex-col gap-2 mr-4'>
            <p><span className='text-xl font-bold'>اسم المشروع:</span>{project.name}</p>
            <p><span className='text-xl font-bold'>الفئة:</span>{project.category}</p>
            <p><span className='text-xl font-bold'>اسم الفريق:</span>{project.team}</p>
            <p><span className='text-xl font-bold'>أعضاء الفريق:</span>{project.members.join(", ")}</p>
            <SignupLink label="عرض التفاصيل" className="mt-6"/>
        </div>
    </div>
  )
}

export default ProjectCard