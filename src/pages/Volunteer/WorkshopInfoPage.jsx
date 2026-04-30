import React from "react";
import { useParams } from "react-router-dom";
import WorkshopCard from "../../components/Workshop/WorkshopCard";

// TODO: بعد الربط استخدمي هذا الـ hook
// import { useGetWorkshopInfoByIdQuery } from "../../api/endpoints/workshopInfoApi";

const WorkshopInfoPage = () => {
  const { id } = useParams();

  // TODO: بعد الربط استخدمي هذا السطر بدل البيانات الثابتة
  // const { data: workshop, isLoading, error, refetch } = useGetWorkshopInfoByIdQuery(id);

  // بيانات ثابتة حالياً (نفس ما هي)
  const workshops = [
    {
      id: 1,
      title: "روبوت سبايك",
      start_date: "20/12/2025",
      end_date: "20/12/2025",
      days: "سبت وثلاثاء",
      time_from: "09:00:00",
      time_to: "11:00:00",
      sessions: 4,
      category: "إداري",
      status: "accepted",
      description: "هدف الورشة هو التركيز على المحتوى الخاص بالدورات التدريبية...",
      objectives: "هدف الورشة هو التركيز على المحتوى الخاص بالدورات التدريبية...",
      registrations: [
        { name: "فهد", email: "fahad@example.com" },
        { name: "سارة", email: "sara@example.com" },
      ],
    },
    {
      id: 2,
      title: "روبوت سبايك",
      start_date: "20/12/2025",
      end_date: "20/12/2025",
      days: "سبت وثلاثاء",
      time_from: "09:00:00",
      time_to: "11:00:00",
      sessions: 4,
      category: "إداري",
      status: "rejected",
      description: "هدف الورشة هو التركيز على المحتوى الخاص بالدورات التدريبية...",
      objectives: "هدف الورشة هو التركيز على المحتوى الخاص بالدورات التدريبية...",
      rejection_reason: "لم يتم استيفاء شروط الورشة المطلوبة.",
    },
    {
      id: 3,
      title: "روبوت سبايك",
      start_date: "20/12/2025",
      end_date: "20/12/2025",
      days: "سبت وثلاثاء",
      time_from: "09:00:00",
      time_to: "11:00:00",
      sessions: 4,
      category: "إداري",
      status: "pending",
      description: "هدف الورشة هو التركيز على المحتوى الخاص بالدورات التدريبية...",
      objectives: "هدف الورشة هو التركيز على المحتوى الخاص بالدورات التدريبية...",
    },
  ];

  const workshop = workshops.find((w) => w.id === Number(id));

  // TODO: بعد الربط شغلي حالة التحميل والخطأ
  // if (isLoading) return <div>جاري التحميل...</div>
  // if (error) return <div>حدث خطأ</div>

  if (!workshop) {
    return (
      <div className="bg-white-color min-h-screen bg-gray-50 p-8">
        <div className="container text-center">
          <p className="text-gray-700 mt-20 text-xl font-bold">الورشة غير موجودة</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white-color min-h-screen bg-gray-50 p-8">
      <div className="container">
        <h2 className="text-second-color text-2xl font-bold m-6">تفاصيل الورشة</h2>
        <WorkshopCard workshop={workshop} status={workshop.status} />
      </div>
    </div>
  );
};

export default WorkshopInfoPage;