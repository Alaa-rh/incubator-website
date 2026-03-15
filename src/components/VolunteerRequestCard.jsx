import React from "react"
import NavLinkUniversal from "./NavLinkUniversal"
import Button from "./Button"

const VolunteerRequestCard = ({ request }) => {
  return (
    <div className="bg-white w-120 border border-second-color rounded-xl px-8 py-6 shadow flex flex-col gap-3">

      <p><span className="font-bold text-xl">الاسم: </span>{request.name}</p>
      <p><span className="font-bold text-xl">البريد الإلكتروني: </span>{request.email}</p>
      <p><span className="font-bold text-xl">نوع المهارة: </span>{request.skill}</p>
      <p><span className="font-bold text-xl">عنوان المشروع: </span>{request.projectTitle}</p>

      <div className="flex items-center justify-center mt-4">
        <NavLinkUniversal
          to={`/volunteer-request/${request.id}`}
          label={<Button label="عرض التفاصيل" className="bg-main-color w-70" />}
        />
      </div>
    </div>
  )
}

export default VolunteerRequestCard
