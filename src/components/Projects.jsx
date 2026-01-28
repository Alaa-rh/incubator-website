import React from 'react'
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
  return (
    <div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} showImage={false} showFavorites={true} />
        ))}
        </div>
    </div>
  )
}

export default Projects