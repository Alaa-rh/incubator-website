import React, { useState } from 'react'
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdOutlinePersonSearch } from "react-icons/md";
import { RiFilePaper2Line } from "react-icons/ri";
import CategoryFilterBar from "../../components/CategoryFilterBar"
import ConsultationRequestCard from "../../components/ConsultationRequestCard";
import AssignedProjectsCard from '../../components/AssignedProjectsCard';
import NavLinkUniversal from '../../components/NavLinkUniversal';

const AssignedProjectsPage = () => {

  const categories = [ 
    { id: "tracking", label: "متابعة مستمرة", icon: <BsFillPersonLinesFill /> },
    { id: "consultations", label: "طلبات الاستشارة", icon: <MdOutlinePersonSearch /> },
    { id: "assigned", label: "مشاريع تم الانضمام لها", icon: <RiFilePaper2Line /> },
  ]

  const [selected, setSelected] = useState("tracking")

  const consultationRequests = [
    {
      id: 1,
      name: "مايا المحمد",
      email: "maya123@gmail.com",
      consultationType: "UI UX",
      projectTitle: "باسم المشروع",
      helpType: "استشارة لمرة واحدة",
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

  const projects = [
    {
      id: 1,
      name: "مايا المحمد",
      email: "maya123@gmail.com",
      projectTitle: "Green Panda",
    },
  ]

  return (
    <div className='bg-white-color min-h-screen p-8'>
    <div className="container">

      <CategoryFilterBar 
        categories={categories}
        selected={selected}
        onSelect={setSelected}
        className="bg-white-color"
      />

      <div className="mt-10 flex justify-between items-center">
        {selected === "tracking" && (
          consultationRequests
            .filter(req => req.helpType !== "استشارة لمرة واحدة")
            .map(req => (
              <ConsultationRequestCard 
                key={req.id}
                request={req}
                mode="followup"
              />
            ))
        )}

        {selected === "consultations" && (
          consultationRequests
            .filter(req => req.helpType === "استشارة لمرة واحدة")
            .map(req => (
              <ConsultationRequestCard 
                key={req.id}
                request={req}
                mode="request"
                onApprove={(id) => console.log("Approve", id)}
                onReject={(id) => console.log("Reject", id)}
              />
            ))
        )}
      {selected === "assigned" && (
        projects.length > 0 ? (
          <>
            {projects.map(project => (
              <AssignedProjectsCard key={project.id} project={project} />
            ))}
            <NavLinkUniversal 
            label="انتقل لمراحل الاحتضان" 
            to="/incubationinfo" 
            className='bg-main-color w-fit text-white rounded-xl px-6 py-3 font-bold'/>
          </>
        ) : (
          <div className='mx-auto my-30'>
          <p className='text-2xl font-bold'>لا يوجد مشاريع تم الانضمام لها.</p>
          </div>
        )
      )}
      </div>
    </div>
    </div>
  )
}

export default AssignedProjectsPage
