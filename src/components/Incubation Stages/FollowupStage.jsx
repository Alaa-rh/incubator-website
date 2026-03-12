import { useEffect } from "react"
import ConsultationRequest from "../ConsultationRequest"
import AlertBox from "../AlertBox"
const FollowupStage = ({ onComplete, notes = [], allNotesResolved }) => {
  
  // allNotesResolved: true إذا المستخدم خلّص كل الملاحظات

  useEffect(() => {
    if (allNotesResolved) {
      onComplete()
    }
  }, [allNotesResolved, onComplete])

  return (
    <div className="p-6 space-y-8">

      {/* عنوان المرحلة */}
      <h2 className="text-2xl font-bold text-second-color">
        الاحتضان والمتابعة
      </h2>

      {/* تاريخ اللجنة القادمة */}
      <p className="font-bold">
        تاريخ جلسة اللجنة القادمة: 
        <span className="text-main-color"> 12/1/2025</span>
      </p>

      {/* تنبيه */}
      <AlertBox message="عدم معالجة الملاحظات المطلوبة قد يؤثر على استمرار المشروع في الحاضنة خلال المراجعات القادمة." />

      {/* التقييمات والملاحظات */}
      <div>
        <h3 className="text-xl font-bold text-second-color mb-3">
          التقييمات والملاحظات
        </h3>

        <p className="text-gray-600 mb-4">
          ستجد هنا جميع ملاحظات لجنة التقييم المتعلقة بعمل فريقك وتقدم المشروع خلال مراحل الاحتضان.
        </p>

        {notes.length === 0 ? (
          <p className="font-bold">
            لا توجد ملاحظات حالياً 🎉
          </p>
        ) : (
          <ul className="space-y-3">
            {notes.map((note, index) => (
              <li 
                key={index} 
                className="bg-white p-3 rounded-lg leading-relaxed"
              >
                {note}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* زر طلب الاستشارة */}
      <div className="flex justify-end">
        <ConsultationRequest />
      </div>

    </div>
  )
}

export default FollowupStage
