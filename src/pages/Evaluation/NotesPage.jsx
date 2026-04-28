import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
// import { useGetNotesQuery, useAddNoteMutation } from '../../api/endpoints/evaluationApi';
// import { useParams } from 'react-router-dom';

const NotesPage = () => {
  // TODO: بعد الربط هذا السطر لجلب projectId
  // const { projectId } = useParams();
  // const userId = useSelector((state) => state.auth.userId);
  // const { data: notesFromApi, isLoading, error, refetch } = useGetNotesQuery(projectId);
  // const [addNote, { isLoading: isSending }] = useAddNoteMutation();

  const [note, setNote] = useState("");
  const [sentNotes, setSentNotes] = useState([
    "التركيز كله على التسويق الرقمي. يجب إضافة استراتيجيات الشراكة مع المؤتمرات والفعاليات التعليمية للوصول المباشر للجهات التدريبية والمدربين، لتقليل تكلفة الاكتساب الأولية."
  ]);

  // TODO: بعد الربط استخدمي هذا الـ useEffect لتحميل البيانات
  // useEffect(() => {
  //   if (notesFromApi) {
  //     setSentNotes(notesFromApi);
  //   }
  // }, [notesFromApi]);

  const handleSend = async () => {
    if (note.trim() === "") return;

    // TODO: بعد الربط هذا الكود
    // try {
    //   await addNote({
    //     projectId: projectId,
    //     userId: userId,
    //     note: note
    //   }).unwrap();
    //   setSentNotes([note, ...sentNotes]);
    //   setNote("");
    // } catch (error) {
    //   console.error("Error adding note:", error);
    //   alert("حدث خطأ في إرسال الملاحظة");
    // }

    // حالياً: محاكاة للإرسال
    setSentNotes([note, ...sentNotes]);
    setNote("");
  };

  // TODO: بعد الربط شغلي حالة التحميل
  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen bg-white-color md:p-15 flex flex-col">
  //       <div className="container text-center">
  //         <p className="text-gray-500">جاري تحميل الملاحظات...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="min-h-screen bg-white-color md:p-15 flex flex-col">
  //       <div className="container text-center">
  //         <p className="text-red-500">حدث خطأ في تحميل الملاحظات</p>
  //         <button 
  //           onClick={refetch}
  //           className="bg-main-color text-white px-4 py-2 rounded mt-4"
  //         >
  //           إعادة المحاولة
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-white-color md:p-15 flex flex-col">
      <div className="container">
        <h2 className="text-second-color text-2xl font-bold my-10">الملاحظات</h2>

        <div className="mb-12">
          <label className="block text-black font-semibold mb-3 text-lg text-right">
            اكتب الملاحظة هنا :
          </label>
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="mb-6 w-100"
            rows={4}
            placeholder="اكتب ملاحظتك هنا..."
          />
          <Button
            label="ارسال"
            onClick={handleSend}
            className="bg-main-color"
          />
        </div>

        <div className="w-200 bg-white shadow-md rounded-lg overflow-hidden">
          <h3 className="text-black text-lg font-bold p-5 text-right border-b border-second-color">
            الملاحظات المرسلة
          </h3>

          <div className="space-y-4 p-4">
            {sentNotes.length === 0 ? (
              <p className="text-gray-500 text-center py-6">
                لا توجد ملاحظات مرسلة بعد
              </p>
            ) : (
              sentNotes.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                  <p className="text-black text-right leading-relaxed">
                    {item}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesPage;