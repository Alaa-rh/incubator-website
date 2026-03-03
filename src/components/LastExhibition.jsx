import React from 'react'
import Exhibition1 from "../assets/images/Exhibition1.jpg"
import Exhibition2 from "../assets/images/exh2.jpg"
import Exhibition3 from "../assets/images/exh3.jpg"
import Exhibition4 from "../assets/images/exh4.jpg"
const LastExhibition = () => {
    const exhibitions = [
        { id: 1, image: Exhibition1 },
        { id: 2, image: Exhibition2 },
        { id: 3, image: Exhibition3 },
        { id: 4, image: Exhibition4 },
      ]
  return (
    <div>
         <h2 className='text-2xl font-bold mt-5'>آخر معرض "مشاريع رواد الأعمال" :</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
          {exhibitions.map((exhibition) => (
            <img key={exhibition.id} src={exhibition.image} alt={`exh${exhibition.id}`} className='h-[200px] object-cover rounded-md'/>
          ))}
        </div>
    </div>
  )
}

export default LastExhibition