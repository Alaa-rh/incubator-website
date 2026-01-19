import React, { Children } from 'react'

const StageCard = ({title, description, className, index, children}) => {
  return (
    <div className={`flex flex-col ${className}`} key={index}>
        {children}
        <div className='border-t-35 border-l-35 border-main-color flex flex-col'>
         <h3 className="text-[28px] font-bold mb-2">{title}</h3>
         <p className='text-[25px] '>{description}</p>
        </div>

    </div>
  )
}

export default StageCard