import React, { useState } from "react"
import CategoryFilterBar from "../../components/CategoryFilterBar"
import { LuFileStack } from "react-icons/lu"
import ConsultationRequestCard from "../../components/ConsultationRequestCard"
import VolunteerRequestCard from "../../components/VolunteerRequestCard"
import { FaRegHandshake } from "react-icons/fa";
import { MdOutlinePersonSearch } from "react-icons/md";

const categories = [ 
  { id: "all", label: "الكل", icon: <LuFileStack /> },
  { id: "consultations", label: "طلبات الاستشارة", icon: <MdOutlinePersonSearch /> },
  { id: "volunteers", label: "طلبات التطوع", icon: <FaRegHandshake /> },
]

const VolunteerRequestsPage = () => {
  const [selected, setSelected] = useState("all")

  // بيانات تجريبية 
  const consultationRequests = [
    {
      id: 1,
      name: "مايا المحمد",
      email: "maya123@gmail.com",
      consultationType: "UI UX",
      projectTitle: "باسم المشروع",
      helpType: "متابعة دورية",
      description: "شرح بسيط من صاحب الطلب عن ماذا يريد",
    },
    {
      id: 2,
      name: "مايا المحمد",
      email: "maya123@gmail.com",
      consultationType: "UI UX",
      projectTitle: "باسم المشروع",
      helpType: "متابعة دورية",
      description: "شرح بسيط من صاحب الطلب عن ماذا يريد",
    },
  ]

  const volunteerRequests = [
    {
      id: 3,
      name: "مايا المحمد",
      email: "maya123@gmail.com",
      skill: "UI UX",
      projectTitle: "باسم المشروع",
      description: "شرح بسيط من صاحب الطلب عن ماذا يريد",
    },
    {
      id: 4,
      name: "مايا المحمد",
      email: "maya123@gmail.com",
      skill: "UI UX",
      projectTitle: "باسم المشروع",
      description: "شرح بسيط من صاحب الطلب عن ماذا يريد",
    },
  ]

  return (
    <div className="bg-white-color h-screen p-6">
      <div className="container">

      {/* شريط الفئات */}
      <CategoryFilterBar
        categories={categories}
        selected={selected}
        onSelect={setSelected}
        className="bg-white-color"
      />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* طلبات الاستشارة */}
        {selected === "consultations" &&
          consultationRequests.map((req) => (
            <ConsultationRequestCard
              key={req.id}
              request={req}
              onApprove={() => console.log("approve", req.id)}
              onReject={() => console.log("reject", req.id)}
            />
          ))}

        {/* طلبات التطوع */}
        {selected === "volunteers" &&
          volunteerRequests.map((req) => (
            <VolunteerRequestCard key={req.id} request={req} />
          ))}

        {/* الكل */}
        {selected === "all" && (
          <>
            {consultationRequests.map((req) => (
              <ConsultationRequestCard
                key={req.id}
                request={req}
                onApprove={() => console.log("approve", req.id)}
                onReject={() => console.log("reject", req.id)}
              />
            ))}

            {volunteerRequests.map((req) => (
              <VolunteerRequestCard key={req.id} request={req} />
            ))}
          </>
        )}

      </div>
    </div>
    </div>
  )
}

export default VolunteerRequestsPage
