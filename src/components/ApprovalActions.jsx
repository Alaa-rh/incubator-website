import React, { useState } from "react"
import Button from "./Button"

const ApprovalActions = ({ onApprove, onReject }) => {
  const [status, setStatus] = useState("pending") 
  // pending | approved | rejected

  const handleApprove = async () => {
    if (onApprove) await onApprove()  
    setStatus("approved")
  }

  const handleReject = async () => {
    if (onReject) await onReject()
    setStatus("rejected")
  }

  return (
    <div className="mt-4">

      {status === "pending" && (
        <div className="flex flex-col items-center justify-between">
          <Button
            label="موافقة"
            onClick={handleApprove}
            className="bg-main-color w-70 mx-2"
          />

          <Button
            label="رفض"
            onClick={handleReject}
            className="bg-main-color w-70 mt-4 mx-2"
          />
        </div>
      )}

      {status === "approved" && (
        <div className="flex items-center justify-center">
          <Button label="تمت الموافقة" className="bg-green-color w-70 mx-2" />
        </div>
      )}

      {status === "rejected" && (
        <div className="flex items-center justify-center">
          <Button label="مرفوض" className="bg-red-color w-70 mx-2" />
        </div>
      )}

    </div>
  )
}

export default ApprovalActions
