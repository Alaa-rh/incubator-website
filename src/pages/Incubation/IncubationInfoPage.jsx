import React, { useState, /*useEffect */} from 'react';
// import { useSelector } from 'react-redux';
import AlertBox from '../../components/AlertBox';
import ConsultationRequestBtn from '../../components/ConsultationRequestBtn';
// import { useGetIncubationInfoQuery } from '../../api/endpoints/incubationApi';

const IncubationInfoPage = () => {
  // جلب userId من Redux
  // const userId = useSelector((state) => state.auth.userId);

  // TODO: بعد الربط  هذا السطر بدل البيانات الثابتة
  // const { data: incubationData, isLoading, error, refetch } = useGetIncubationInfoQuery(userId);

  // -----------------------------
  //eslint-disable-next-line
  const [projectData, setProjectData] = useState({
    nextSessionDate: "12/1/2025",
    warningMessage: "عدم معالجة الملاحظات المطلوبة قد يؤثر على استمرار المشروع في الحاضنة خلال المراجعات القادمة.",
    evaluations: [
      {
        id: 1,
        text: "لم نَرَ حتى الآن أي تجارب حقيقية مع مستخدمين (User Testing). نوصي بإجراء جلسات تجربة مبكرة وجمع ملاحظات المستخدمين."
      },
      {
        id: 2,
        text: "تم إنجاز جزء من التطوير التقني، وهذا ممتاز لكن باقي الصفحات الأساسية ما زالت غير مكتملة"
      }
    ]
  });

  // TODO: بعد الربط استخدمي هذا الـ useEffect لتحميل البيانات من API
  // useEffect(() => {
  //   if (incubationData) {
  //     setProjectData({
  //       nextSessionDate: incubationData.nextSessionDate || "لم يتم تحديدها بعد",
  //       warningMessage: incubationData.warningMessage || projectData.warningMessage,
  //       evaluations: incubationData.evaluations || []
  //     });
  //   }
  // }, [incubationData]);

  // TODO: بعد الربط شغلي حالة التحميل والخطأ
  // if (isLoading) {
  //   return (
  //     <div className="bg-white-color min-h-screen flex flex-col items-center p-6">
  //       <div className="container text-center">
  //         <p className="text-gray-500 mt-20">جاري تحميل بيانات الاحتضان...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="bg-white-color min-h-screen flex flex-col items-center p-6">
  //       <div className="container text-center">
  //         <p className="text-red-500 mt-20">حدث خطأ في تحميل البيانات</p>
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
    <div className="bg-white-color min-h-screen flex flex-col items-center p-6">
      <div className="container">
        <h1 className="text-second-color text-3xl font-bold mb-10">مراحل الاحتضان</h1>
        
        <div className="font-bold mb-4">
          <span className="ml-2">تاريخ جلسة اللجنة القادمة:</span>
          <span className="text-main-color">{projectData.nextSessionDate}</span>
        </div>
        
        <AlertBox message={projectData.warningMessage} />
        
        <div className="my-6">
          <h2 className="text-2xl font-bold mb-2">التقييمات والملاحظات</h2>
          <p className="text-xl mb-6">
            ستجد هنا جميع ملاحظات لجنة التقييم المتعلقة بعمل فريقك وتقدم المشروع خلال مراحل الاحتضان.
          </p>

          <div className="space-y-4">
            {projectData.evaluations.length === 0 ? (
              <p className="text-gray-500 text-center py-8">🎉 لا توجد ملاحظات حالياً</p>
            ) : (
              projectData.evaluations.map((note) => (
                <div key={note.id} className="bg-white border border-gray-100 p-5 rounded-md shadow-md">
                  <p className="leading-7">{note.text}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="flex justify-start mt-12">
          <ConsultationRequestBtn />
        </div>
      </div>
    </div>
  );
};

export default IncubationInfoPage;