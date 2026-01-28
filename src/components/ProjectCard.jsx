import React from 'react'
import SignupLink from './SignupLink'
import { useFavorites } from '../hooks/useFavorites'
import NavLinkUniversal from './NavLinkUniversal';
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
const ProjectCard = ({project, showImage = true, showFavorites = false}) => {
   const { favorites, toggleFavorite } = useFavorites()
   const isFavorite = favorites.some((p) => p.id === project.id)

  return (
    <div className='flex items-center gap-20 bg-white rounded shadow p-4 border border-second-color'>
        {showImage && (
          <div className='relative w-[300px] h-[230px] rounded overflow-hidden'>
            <img src={project.image} alt={project.name} className="absolute w-full h-full object-cover" />
         
          </div>
        )}
        <div className='flex flex-col gap-2 mr-4'>
            <p><span className='text-xl font-bold'>اسم المشروع:</span>{project.name}</p>
            <p><span className='text-xl font-bold'>الفئة:</span>{project.category}</p>
            <p><span className='text-xl font-bold'>اسم الفريق:</span>{project.team}</p>
            <p><span className='text-xl font-bold'>أعضاء الفريق:</span>{project.members.join(", ")}</p>
            {showFavorites && (
              <div className='flex justify-between items-center mt-6'>
               <NavLinkUniversal to={`/project/${project.id}`} label="عرض التفاصيل" className="text-xl bg-main-color text-white rounded-xl"/> 
               <button
                  onClick={() => toggleFavorite(project)}
                  className= "text-2xl">
                  {isFavorite ? <IoIosHeart className='cursor-pointer text-red-color'/> : <FaRegHeart className='cursor-pointer text-red-color'/>}
               </button>
              </div>

            )}
           {showImage && <SignupLink label="عرض التفاصيل" className="mt-6"/>}
        </div>
    </div>
  )
}

export default ProjectCard