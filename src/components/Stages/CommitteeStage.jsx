import { useEffect } from "react"
import ConsultationRequest from "../ConsultationRequest"

const CommitteeStage = ({ onComplete, committeeResult }) => {
 
  useEffect(() => {
    if (committeeResult) {
      onComplete()
    }
  }, [committeeResult, onComplete])

  return (
    <div className="p-6 rounded-xl space-y-8">

      {/* عنوان المرحلة */}
      <h2 className="text-2xl font-bold text-second-color">
        تقييم اللجنة
      </h2>

      {/* معلومات الحالة */}
      <div className="space-y-3 bg-white p-4 rounded-lg shadow-lg w-100">
        <p>
          <span className="font-bold pl-2">الحالة:</span>
          {committeeResult ? "تم التقييم" : "بانتظار التقييم"}
        </p>

        <p>
          <span className="font-bold pl-2">تاريخ جلسة اللجنة:</span> 12/1/2025
        </p>

        <p>
          <span className="font-bold pl-2">ملاحظة:</span>
          {committeeResult ? "تم استلام نتيجة اللجنة" : "سيصلك إشعار بالنتيجة"}
        </p>
      </div>

      {/* زر طلب الاستشارة */}
      <div className="flex">
        <ConsultationRequest />
      </div>

    </div>
  )
}

export default CommitteeStage
