import React from 'react';
import Button from '../../components/Button';
import NavLinkUniversal from '../../components/NavLinkUniversal';
// import { useGetAllWorkshopsQuery } from '../../api/endpoints/workshopsApi';

const WorkshopsPage = () => {
  
  //  بعد الربط هذا السطر بدل البيانات الثابتة
  // const { data: workshopsFromApi = [], isLoading, error, refetch } = useGetAllWorkshopsQuery();
  
  // بيانات ثابتة حالياً
  const data = [
    { id: 1, name: "روبوت سبايك", start: "10/12/2025", end: "20/12/2025", sessions: "4 جلسات", days: "سبت وثلاثاء", time: "2-5", field: "اداري", status: "مقبولة" },
    { id: 2, name: "روبوت سبايك", start: "10/12/2025", end: "20/12/2025", sessions: "4 جلسات", days: "سبت وثلاثاء", time: "2-5", field: "اداري", status: "مرفوضة" },
    { id: 3, name: "روبوت سبايك", start: "10/12/2025", end: "20/12/2025", sessions: "4 جلسات", days: "سبت وثلاثاء", time: "2-5", field: "اداري", status: "قيد المراجعة" },
    { id: 4, name: "روبوت سبايك", start: "10/12/2025", end: "20/12/2025", sessions: "4 جلسات", days: "سبت وثلاثاء", time: "2-5", field: "اداري", status: "قيد المراجعة" },
  ];

  // const workshops = workshopsFromApi.length > 0 ? workshopsFromApi : data;
  const workshops = data;

  // if (isLoading) {
  //   return (
  //     <div className="bg-white-color min-h-screen bg-gray-50 p-8 flex justify-center items-start">
  //       <div className="w-full max-w-6xl text-center">
  //         <p>جاري تحميل الورشات...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="bg-white-color min-h-screen bg-gray-50 p-8 flex justify-center items-start">
  //       <div className="w-full max-w-6xl text-center">
  //         <p className="text-red-500">حدث خطأ في تحميل الورشات</p>
  //         <Button label="إعادة المحاولة" onClick={refetch} className="bg-main-color mt-4" />
  //       </div>
  //     </div>
  //   );
  // }

  // دالة لتحديد لون الحالة
  const getStatusColor = (status) => {
    switch (status) {
      case "مقبولة":
        return "text-green-600";
      case "مرفوضة":
        return "text-red-600";
      case "قيد المراجعة":
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="bg-white-color min-h-screen bg-gray-50 p-8 flex justify-center items-start">
      <div className="w-full max-w-6xl">
        <h2 className="text-second-color text-2xl font-bold m-6">ورش العمل</h2>

        <div className="bg-white rounded-lg shadow-lg shadow-gray-400 border border-gray-100 p-8" dir='rtl'>
          
          <h2 className="text-right text-xl font-bold mb-6 text-black">ورشاتي</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-second-color font-bold pb-4 px-2 whitespace-nowrap">
                  <th>اسم الورشة</th>
                  <th>البدء</th>
                  <th>الانتهاء</th>
                  <th>عدد الجلسات</th>
                  <th>الايام</th>
                  <th>الوقت</th>
                  <th>المجال</th>
                  <th>الحالة</th>
                  <th>الاجراء</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {workshops.map((item) => (
                  <tr key={item.id} className="text-md">
                    <td className="py-6 px-2">{item.name}</td>
                    <td className="py-6 px-2">{item.start}</td>
                    <td className="py-6 px-2">{item.end}</td>
                    <td className="py-6 px-2">{item.sessions}</td>
                    <td className="py-6 px-2 leading-relaxed">{item.days}</td>
                    <td className="py-6 px-2">{item.time}</td>
                    <td className="py-6 px-2">{item.field}</td>
                    <td className="py-6 px-2">
                      <span className={getStatusColor(item.status)}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <NavLinkUniversal 
                        label={<Button label="عرض التفاصيل" className="bg-main-color"/>}
                        to={`/workshopinfo/${item.id}`} 
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopsPage;