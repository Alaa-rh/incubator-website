import { useState, useEffect } from "react";
import Button from "../Button";
import Input from "../Input";
import AlertBox from "../AlertBox";
// import { useSelector } from "react-redux";
// import { useGetCampDataQuery, useRequestAbsenceMutation, useUpdateAttendanceMutation } from "../../api/endpoints/incubationApi";

const CampStage = ({ onComplete }) => {
  const [absenceReason, setAbsenceReason] = useState("");
  const [absenceError, setAbsenceError] = useState("");
  const [absenceSuccess, setAbsenceSuccess] = useState("");

  // جلب userId من Redux
  // const userId = useSelector((state) => state.auth.userId);

  // TODO: بعد الربط  هذا السطر بدل البيانات الثابتة
  // const { data: campData, isLoading, error, refetch } = useGetCampDataQuery(userId);
  // const [requestAbsence, { isLoading: isRequestingAbsence }] = useRequestAbsenceMutation();
  // const [updateAttendance] = useUpdateAttendanceMutation();

  const totalSessions = 8;
  const attendedSessions = 2;
  const attendanceRate = (attendedSessions / totalSessions) * 100;

  const nextSession = {
    title: "عنوان الجلسة القادمة",
    date: "السبت 15/7/2025",
    time: "2:00 - 5:00 pm",
    location: "قاعة خاصة خلف كلية العلوم",
    description: "وصف بسيط عن الجلسة"
  };

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
  ];

  // TODO: بعد الربط هذا الكود لاستخراج البيانات من API
  // const totalSessions = campData?.totalSessions || 0;
  // const attendedSessions = campData?.attendedSessions || 0;
  // const attendanceRate = totalSessions > 0 ? (attendedSessions / totalSessions) * 100 : 0;
  // const nextSession = campData?.nextSession || {};
  // const sessions = campData?.sessions || [];

  // -----------------------------
  // طلب الغياب
  // -----------------------------
  const handleAbsenceRequest = async () => {
    if (!absenceReason.trim()) {
      setAbsenceError("الرجاء إدخال سبب الغياب");
      return;
    }

    setAbsenceError("");
    setAbsenceSuccess("");

    // TODO: بعد الربط هذا الكود
    // try {
    //   await requestAbsence({
    //     userId: userId,
    //     reason: absenceReason,
    //     sessionId: nextSession?.id
    //   }).unwrap();
    //   setAbsenceSuccess("تم إرسال طلب الغياب بنجاح");
    //   setAbsenceReason("");
    //   setTimeout(() => setAbsenceSuccess(""), 3000);
    // } catch (error) {
    //   console.error("Error requesting absence:", error);
    //   setAbsenceError(error?.data?.message || "حدث خطأ في إرسال طلب الغياب");
    // }

    // حالياً: محاكاة للإرسال
    console.log("سبب الغياب:", absenceReason);
    setAbsenceSuccess("تم إرسال طلب الغياب بنجاح");
    setAbsenceReason("");
    setTimeout(() => setAbsenceSuccess(""), 3000);
  };

  // -----------------------------
  // التحقق من نسبة الحضور لإكمال المرحلة
  // -----------------------------
  useEffect(() => {
    if (attendanceRate >= 75) {
      onComplete();
    }
  }, [attendanceRate, onComplete]);

  // if (isLoading) {
  //   return (
  //     <div className="p-6 space-y-8 min-h-screen">
  //       <p className="text-center text-gray-500">جاري تحميل بيانات المعسكر...</p>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="p-6 space-y-8 min-h-screen">
  //       <p className="text-center text-red-500">حدث خطأ في تحميل البيانات</p>
  //       <button 
  //         onClick={refetch}
  //         className="bg-main-color text-white px-4 py-2 rounded mt-4 mx-auto block"
  //       >
  //         إعادة المحاولة
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <div className="p-6 space-y-8 min-h-screen">
      <AlertBox message="تأكد من حضور الجلسات بنسبة 75% وعدم تأخير تسليم المهام المطلوبة لتجنب التأثير على استمرارك في الحاضنة." />

      {/* نسبة الحضور */}
      <div className="bg-white p-4 rounded-lg w-fit shadow-lg">
        <p className="font-bold">نسبة الحضور: {attendanceRate.toFixed(1)}%</p>
        <p>الجلسات الحاضرة: {attendedSessions} من {totalSessions}</p>
      </div>

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

        {absenceError && <p className="text-red-500 text-sm">{absenceError}</p>}
        {absenceSuccess && <p className="text-green-500 text-sm">{absenceSuccess}</p>}

        <Input
          label="شرح"
          placeholder="اشرح بشكل مختصر سبب غيابك"
          value={absenceReason}
          onChange={(e) => {
            setAbsenceReason(e.target.value);
            setAbsenceError("");
          }}
          className="w-80"
        />

        <Button
          label="طلب غياب"
          className="bg-main-color text-white"
          onClick={handleAbsenceRequest}
          // disabled={isRequestingAbsence}
        />
      </div>

      {/* جدول الجلسات */}
      <div>
        <h3 className="text-xl font-bold text-second-color mb-3">جدول الجلسات</h3>

        <table className="w-full text-center bg-white rounded-lg border-collapse border border-second-color shadow-lg">
          <thead>
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
              <tr key={i} className="border-t border-second-color">
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
  );
};

export default CampStage;