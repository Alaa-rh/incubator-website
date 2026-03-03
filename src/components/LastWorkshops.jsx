import React from 'react'
import workShop1 from "../assets/images/workShop1.png"
import workShop2 from "../assets/images/workShop2.png"
import workShop3 from "../assets/images/workShop3.png"
import workShop4 from "../assets/images/workShop4.png"
import NavLinkUniversal from './NavLinkUniversal';
const LastWorkshops = () => {
    const workshops = [
        { id: 1, image: workShop1 },
        { id: 2, image: workShop2 },
        { id: 3, image: workShop3 },
        { id: 4, image: workShop4 },
      ] 
  return (
    <div>
        <h2 className='text-2xl font-bold'>آخر ورشات العمل و الفعاليات :</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
  {workshops.map((ws) => (
    <NavLinkUniversal
      key={ws.id}
      to={`/workshops/${ws.id}`}
      label={
        <img
          src={ws.image}
          alt="Workshop"
          className="h-[300px] object-cover rounded-md"
        />
      }
    />
  ))}
</div>


    </div>
  )
}

export default LastWorkshops