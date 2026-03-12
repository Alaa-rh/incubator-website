import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import VolunteerRequestDetails from "../../components/VolunteerRequestDetails"
const VolunteerRequestDetailsPage = () => {
  const { id } = useParams()
  const [request, setRequest] = useState(null)

  useEffect(() => {
    const fetchRequest = () => {
      const dummy = {
        id,
        name: "مايا المحمد",
        email: "maya123@gmail.com",
        skill: "UI / UX",
        targetGroup: "الطلاب",
        projectTitle: "اسم المشروع",
        tasks: "شرح بسيط من صاحب الطلب عن ماذا يريد",
        ideaSummary: "شرح مختصر عن الفكرة",
        problem: "المشكلة التي يحلها المشروع",
      }
      setRequest(dummy)
    }

    fetchRequest()
  }, [id])

  // دوال مؤقتة (بدون باك)
  const approveVolunteer = async () => {
    console.log("تمت الموافقة على طلب التطوع", id)
  }

  const rejectVolunteer = async () => {
    console.log("تم رفض طلب التطوع", id)
  }

  if (!request) return <p>جاري التحميل...</p>

  return (
    <div className="bg-white-color h-screen p-6">
      <h1 className="text-3xl text-second-color font-bold mb-6">تفاصيل طلب التطوع</h1>
      <div className="container">
        <VolunteerRequestDetails
          request={request}
          onApprove={approveVolunteer}
          onReject={rejectVolunteer}
        />
      </div>
    </div>
  )
}

export default VolunteerRequestDetailsPage
