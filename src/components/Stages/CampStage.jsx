import { useState, useEffect } from "react"
import Button from "../Button"
import Input from "../Input"
import ConsultationRequest from "../ConsultationRequest"
import AlertBox from "../AlertBox"
const CampStage = ({ onComplete }) => {
  const [absenceReason, setAbsenceReason] = useState("")
//   const [lastSessionAttended, setLastSessionAttended] = useState(false)
  const lastSessionAttended = false


  // بيانات الجلسة القادمة
  const nextSession = {
    title: "عنوان الجلسة القادمة",
    date: "السبت 15/7/2025",
    time: "2:00 - 5:00 pm",
    location: "قاعة خاصة خلف كلية العلوم",
    description: "وصف بسيط عن الجلسة"
  }

  // جدول الجلسات السابقة
  const sessions = [
    {
      title: "روبوت سيباك",
      date: "10/12/2025",
      trainer: "أحمد",
      tasks: "تجهيز أول صفحتين من العرض التقديمي",
      time: "2-5",
      status: "انتهت"
    },
    {
      title: "روبوت سيباك",
      date: "10/12/2025",
      trainer: "أحمد",
      tasks: "تجهيز أول صفحتين من العرض التقديمي",
      time: "2-5",
      status: "انتهت"
    }
  ]

  const handleAbsenceRequest = () => {
    console.log("سبب الغياب:", absenceReason)

    

    onComplete()
  }

  useEffect(() => {
  if (lastSessionAttended) {
    onComplete()
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [lastSessionAttended])


  return (
    <div className="p-6 space-y-8"> 

    {/*تنبيه*/}
    <AlertBox message="تأكد من حضور الجلسات بنسبة 75% وعدم تأخير تسليم المهام المطلوبة لتجنب التأثير على استمرارك في الحاضنة." />

      {/* معلومات الجلسة القادمة */}
      <div className="bg-white p-4 rounded-lg shadow-lg space-y-2 w-100">
        <p><span className="font-bold">الجلسة القادمة:</span> {nextSession.title}</p>
        <p><span className="font-bold">التاريخ:</span> {nextSession.date}</p>
        <p><span className="font-bold">الوقت:</span> {nextSession.time}</p>
        <p><span className="font-bold">الموقع:</span> {nextSession.location}</p>
        <p><span className="font-bold">وصف بسيط:</span> {nextSession.description}</p>
      </div>

     
      {/* طلب غياب */}
      <div className="space-y-3">
        <p className="font-bold">هل ستغيب عن الجلسة الحالية؟</p>

        <Input
          label="شرح"
          placeholder="اشرح بشكل مختصر سبب غيابك"
          value={absenceReason}
          onChange={(e) => setAbsenceReason(e.target.value)}
          className="w-80"
        />

        <Button
          label="طلب غياب"
          className="bg-main-color text-white"
          onClick={handleAbsenceRequest}
        />
      </div>

      {/* جدول الجلسات */}
      <div>
        <h3 className="text-xl font-bold text-second-color mb-3">جدول الجلسات</h3>

        <table className="w-full text-center bg-white rounded-lg">
          <thead className="">
            <tr>
              <th className="p-2">عنوان الجلسة</th>
              <th className="p-2">التاريخ</th>
              <th className="p-2">المدرب</th>
              <th className="p-2">المهام المطلوبة</th>
              <th className="p-2">الوقت</th>
              <th className="p-2">الحالة</th>
            </tr>
          </thead>

          <tbody>
            {sessions.map((s, i) => (
              <tr key={i} className="border-t border-second-color" >
                <td className="p-2">{s.title}</td>
                <td className="p-2">{s.date}</td>
                <td className="p-2">{s.trainer}</td>
                <td className="p-2">{s.tasks}</td>
                <td className="p-2">{s.time}</td>
                <td className="p-2">{s.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CampStage
