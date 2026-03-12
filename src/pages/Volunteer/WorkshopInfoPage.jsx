import React from "react"
import { useParams } from "react-router-dom"
import WorkshopCard from "../../components/Workshop/WorkshopCard"

const WorkshopInfoPage = () => {

  const { id } = useParams()

  const workshops = [
    {
      id: 1,
      name: "روبوت سبايك",
      trainer: "إياد",
      date: "20/12/2025",
      endDate: "20/12/2025",
      days: "سبت وثلاثاء",
      time: "2-5",
      period: "ساعتين",
      sessions: 4,
      category: "إداري",
      status: "accepted",
      description:
        "هدف الورشة هو التركيز على المحتوى الخاص بالدورات التدريبية...",
      aim:" هدف الورشة هو التركيز على المحتوى الخاص بالدورات التدريبية...",
      managers: [
        { name: "فهد", email: "fahad@example.com" },
        { name: "سارة", email: "sara@example.com" }
      ]
    },
    {
      id: 2,
      name: "روبوت سبايك",
      trainer: "إياد",
      date: "20/12/2025",
      endDate: "20/12/2025",
      days: "سبت وثلاثاء",
      time: "2-5",
      period: "ساعتين",
      sessions: 4,
      category: "إداري",
      status: "rejected",
      description:
        "هدف الورشة هو التركيز على المحتوى الخاص بالدورات التدريبية...",
      aim:" هدف الورشة هو التركيز على المحتوى الخاص بالدورات التدريبية...",
      rejectionReason: "لم يتم استيفاء شروط الورشة المطلوبة."
    },
    {
      id: 3,
      name: "روبوت سبايك",
      trainer: "إياد",
      date: "20/12/2025",
      endDate: "20/12/2025",
      days: "سبت وثلاثاء",
      time: "2-5",
      period: "ساعتين",
      sessions: 4,
      category: "إداري",
      status: "pending",
      description:
        "هدف الورشة هو التركيز على المحتوى الخاص بالدورات التدريبية...",
       aim:" هدف الورشة هو التركيز على المحتوى الخاص بالدورات التدريبية...",
      managers: [
        { name: "فهد", email: "fahad@example.com" }
      ]
    }
  ]

  const workshop = workshops.find(w => w.id === Number(id))

  if (!workshop) {
    return (
      <p className="text-center text-gray-700 mt-20 text-xl font-bold">
        الورشة غير موجودة
      </p>
    )
  }

  return (
    <div className="bg-white-color min-h-screen bg-gray-50 p-8">
    <h2 className="text-second-color text-2xl font-bold m-6">تفاصيل الورشة</h2>
    <div className="container">
      <WorkshopCard 
        workshop={workshop}
        status={workshop.status}
      />
      </div>

    </div>
  )
}

export default WorkshopInfoPage
