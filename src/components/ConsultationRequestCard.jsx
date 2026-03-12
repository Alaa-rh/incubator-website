import React from "react"
import ApprovalActions from "./ApprovalActions"

const ConsultationRequestCard = ({ request, onApprove, onReject }) => {
  return (
    <div className="bg-white border border-second-color rounded-xl p-6 shadow flex flex-col gap-6">

      <p><span className="font-bold text-xl">الاسم: </span>{request.name}</p>
      <p><span className="font-bold text-xl">البريد الإلكتروني: </span>{request.email}</p>
      <p><span className="font-bold text-xl">نوع الاستشارة: </span>{request.consultationType}</p>
      <p><span className="font-bold text-xl">عنوان المشروع: </span>{request.projectTitle}</p>
      <p><span className="font-bold text-xl">نوع المساعدة: </span>{request.helpType}</p>
      <p><span className="font-bold text-xl">شرح: </span>{request.description}</p>

      <ApprovalActions
        onApprove={() => onApprove && onApprove(request.id)}
        onReject={() => onReject && onReject(request.id)}
      />

    </div>
  )
}

export default ConsultationRequestCard
