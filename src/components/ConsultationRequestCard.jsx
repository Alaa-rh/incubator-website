import React from "react"
import ApprovalActions from "./ApprovalActions"
import Button from "./Button"

const ConsultationRequestCard = ({ request, onApprove, onReject, mode }) => {
  return (
    <div className="bg-white w-120 border border-second-color rounded-xl p-6 shadow flex flex-col gap-6">

      <p><span className="font-bold text-xl">الاسم: </span>{request.name}</p>
      <p><span className="font-bold text-xl">البريد الإلكتروني: </span>{request.email}</p>
      <p><span className="font-bold text-xl">نوع الاستشارة: </span>{request.consultationType}</p>
      <p><span className="font-bold text-xl">عنوان المشروع: </span>{request.projectTitle}</p>
      <p><span className="font-bold text-xl">نوع المساعدة: </span>{request.helpType}</p>
      <p><span className="font-bold text-xl">شرح: </span>{request.description}</p>

      {mode === "request" && (
        <ApprovalActions
          onApprove={() => onApprove && onApprove(request.id)}
          onReject={() => onReject && onReject(request.id)}
        />
      )}

      {mode === "followup" && (
        <Button 
          label="مراسلة" 
          className="bg-main-color w-full"
          onClick={""}
        />
      )}

    </div>
  )
}

export default ConsultationRequestCard
