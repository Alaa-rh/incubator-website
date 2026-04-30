import { useParams } from "react-router-dom"
import WorkshopDetailsCard from "../../components/WorkshopDetailsCard"
import workshop1 from "../../assets/images/workShop1.png"
import workshop2 from "../../assets/images/workShop2.png"
// import { useGetWorkshopByIdQuery } from "../../api/endpoints/workshopsApi"; // TODO: اشتغل بعد الربط

const WorkshopDetailsPage = () => {
  const { id } = useParams()

  // const { data: workshop, isLoading, error } = useGetWorkshopByIdQuery(id);

  // بيانات ثابتة حالياً
  const fallbackWorkshops = [
    {
      id: "1",
      title: "دورة تدريب مدربين روبوت سبايك Spike TOT!",
      description: "هل ترغب في أن تكون جزءاً من المستقبل التكنولوجي؟ هل تحلم بأن تصبح محترفاً في مجال الروبوتات؟",
      date:  "8/11/2025",
      time_from: "09:00:00",
      time_to: "11:00:00",
      days: "الأحد- الخميس",
      target_audience: [
        "المعلمين الراغبين بتعليم التكنولوجيا للطلاب",
        "طلاب الجامعات والمدارس",
        "اليوتيوبرز المهتمين بالتعليم",
        "الأشخاص الذين يسعون لإضافة مهارات جديدة إلى سيرتهم الذاتية"
      ],
      image: workshop1,
      registrationLink: "#"
    },
    {
      id: "2",
      title: "دورة تدريب مدربين روبوت سبايك Spike TOT!",
      description: "هل ترغب في أن تكون جزءاً من المستقبل التكنولوجي؟ هل تحلم بأن تصبح محترفاً في مجال الروبوتات؟",
      date: "8/11/2025",
      time_from: "09:00:00",
      time_to: "11:00:00",
      days: "الأحد- الخميس",
      target_audience: [
        "المعلمين الراغبين بتعليم التكنولوجيا للطلاب",
        "طلاب الجامعات والمدارس",
        "اليوتيوبرز المهتمين بالتعليم",
        "الأشخاص الذين يسعون لإضافة مهارات جديدة إلى سيرتهم الذاتية"
      ],
      image: workshop2,
      registrationLink: "#"
    }
  ]

  // TODO: بعد الربط استخدمي workshop من API بدل هذا السطر
  const workshop = fallbackWorkshops.find(w => w.id === id)

  // if (isLoading) return <div>جاري التحميل...</div>
  // if (error) return <div>حدث خطأ</div>

  return (
    <div className="container mt-10">
      <h1 className="text-3xl font-bold mb-4 text-second-color">تفاصيل الورشة</h1>

      <div className="p-4">
        {workshop ? (
          <WorkshopDetailsCard workshop={workshop} />
        ) : (
          <p className="text-center text-gray-500">لم يتم العثور على الورشة المطلوبة</p>
        )}
      </div>
    </div>
  )
}

export default WorkshopDetailsPage