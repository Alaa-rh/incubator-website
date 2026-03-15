import React from 'react'
import SignupLink from './SignupLink'
import { useFavorites } from '../hooks/useFavorites'
import NavLinkUniversal from './NavLinkUniversal';
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { useRole } from '../hooks/useRole';
import Button from './Button';

const ProjectCard = ({ project, ShowImage = false}) => {

  const { role } = useRole()

  const { favorites, toggleFavorite } = useFavorites()
  const isFavorite = favorites.some((p) => p.id === project.id)
  const showFavorites = role === "visitor"  

  return (
    <div className='flex items-center gap-20 bg-white-color rounded shadow p-4 border border-second-color'>
        
        {/* الصورة */}
        {ShowImage && (
          <>
          <div className='relative w-[300px] h-[240px] rounded overflow-hidden'>
            <img src={project.image} alt={project.name} className="absolute w-full h-full object-cover" />
          </div>
          </>
        )}

        <div className='flex flex-col gap-2 mr-4'>
            <p><span className='text-xl font-bold'>اسم المشروع:</span>{project.name}</p>
            <p><span className='text-xl font-bold'>الفئة:</span>{project.category}</p>
            <p><span className='text-xl font-bold'>اسم الفريق:</span>{project.team}</p>
            <p><span className='text-xl font-bold'>أعضاء الفريق:</span>{project.members.join(", ")}</p>

            {showFavorites && !ShowImage && (
              <div className='flex justify-between items-center mt-6'>
                <NavLinkUniversal
                  to={`/ProjectDetails/${project.id}`}
                  label="عرض التفاصيل"
                  className="bg-main-color text-white rounded-xl"
                />

                <button
                  onClick={() => toggleFavorite(project)}
                  className="text-2xl"
                >
                  {isFavorite
                    ? <IoIosHeart className='cursor-pointer text-red-color'/>
                    : <FaRegHeart className='cursor-pointer text-red-color'/>}
                </button>
              </div>
            )}
            {ShowImage &&
            <SignupLink label={"عرض التفاصيل"} className={"mt-4"}/>}
            :{!ShowImage && !showFavorites &&
              <NavLinkUniversal
                  to={`/ProjectDetails/${project.id}`}
                  label={<Button label={"عرض التفاصيل"} className="bg-main-color"/>}
                />
            }

        </div>
    </div>
  )
}

export default ProjectCard
