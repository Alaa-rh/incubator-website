import { useEffect } from "react";
// import { useSelector } from "react-redux";
import ConsultationRequestBtn from "../ConsultationRequestBtn";
import AlertBox from "../AlertBox";
// import { useGetFollowupDataQuery, useResolveNoteMutation } from "../../api/endpoints/incubationApi";

const FollowupStage = ({ onComplete, notes = [], allNotesResolved }) => {
  // جلب userId من Redux
  // const userId = useSelector((state) => state.auth.userId);

  // TODO: بعد الربط هذا السطر بدل props
  // const { data: followupData, isLoading, error, refetch } = useGetFollowupDataQuery(userId);
  // const [resolveNote, { isLoading: isResolving }] = useResolveNoteMutation();
  
  // const notes = followupData?.notes || [];
  // const allNotesResolved = followupData?.allNotesResolved || false;
  // const nextCommitteeDate = followupData?.nextCommitteeDate || "لم يتم تحديدها بعد";

  const nextCommitteeDate = "12/1/2025";

  // -----------------------------
  // الانتقال للمرحلة التالية عند حل جميع الملاحظات
  // -----------------------------
  useEffect(() => {
    if (allNotesResolved) {
      onComplete();
    }
  }, [allNotesResolved, onComplete]);

  // -----------------------------
  // دالة حل ملاحظة (إذا كان لكل ملاحظة زر حل)
  // -----------------------------
  const handleResolveNote = async (noteId) => {
    // TODO: بعد الربط استخدمي هذا الكود
    // try {
    //   await resolveNote({ userId, noteId }).unwrap();
    //   refetch(); // إعادة تحميل البيانات
    // } catch (error) {
    //   console.error("Error resolving note:", error);
    //   alert("حدث خطأ في حل الملاحظة");
    // }
    
    console.log("حل الملاحظة:", noteId);
  };

  // if (isLoading) {
  //   return (
  //     <div className="p-6 space-y-8 min-h-screen bg-white-color">
  //       <p className="text-center text-gray-500">جاري تحميل بيانات المتابعة...</p>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="p-6 space-y-8 min-h-screen bg-white-color">
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
    <div className="p-6 space-y-8 min-h-screen bg-white-color">
      {/* عنوان المرحلة */}
      <h2 className="text-2xl font-bold text-second-color">
        الاحتضان والمتابعة
      </h2>

      {/* تاريخ اللجنة القادمة */}
      <p className="font-bold">
        تاريخ جلسة اللجنة القادمة: 
        <span className="text-main-color mr-2"> {nextCommitteeDate}</span>
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
          <p className="font-bold text-green-600">
            🎉 لا توجد ملاحظات حالياً
          </p>
        ) : (
          <ul className="space-y-3">
            {notes.map((note, index) => (
              <li 
                key={note.id || index} 
                className="bg-white p-3 rounded-lg leading-relaxed flex justify-between items-center"
              >
                <span>{note.text || note}</span>
                {!note.resolved && (
                  <button
                    onClick={() => handleResolveNote(note.id || index)}
                    // disabled={isResolving}
                    className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
                  >
                    تم الحل
                  </button>
                )}
                {note.resolved && (
                  <span className="text-green-500 text-sm">✓ تم الحل</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* زر طلب الاستشارة */}
      <div className="flex justify-end">
        <ConsultationRequestBtn />
      </div>
    </div>
  );
};

export default FollowupStage;