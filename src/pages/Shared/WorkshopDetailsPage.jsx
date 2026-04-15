import { useParams } from "react-router-dom"
import WorkshopDetailsCard from "../../components/WorkshopDetailsCard"
import workshop1 from "../../assets/images/workShop1.png"
import workshop2 from "../../assets/images/workShop2.png"

const WorkshopDetailsPage = () => {
  const { id } = useParams()

  // const { data: workshop, isLoading } = useGetWorkshopByIdQuery(id);

  // static مؤقتة
  const fallbackWorkshops = [
    {
      id: "1",
      title: "دورة تدريب مدربين روبوت سبايك Spike TOT!",
      description: "هل ترغب في أن تكون جزءاً من المستقبل التكنولوجي؟ هل تحلم بأن تصبح محترفاً في مجال الروبوتات؟",
      date: "السبت 8/11/2025",
      time: "من الساعة 2 - 5",
      location: "جامعة حمص - حاضنة ICT",
      audience: [
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
      date: "السبت 8/11/2025",
      time: "من الساعة 2 - 5",
      location: "جامعة حمص - حاضنة ICT",
      audience: [
        "المعلمين الراغبين بتعليم التكنولوجيا للطلاب",
        "طلاب الجامعات والمدارس",
        "اليوتيوبرز المهتمين بالتعليم",
        "الأشخاص الذين يسعون لإضافة مهارات جديدة إلى سيرتهم الذاتية"
      ],
      image: workshop2,
      registrationLink: "#"
    }
  ]

  // workshop = data
  const workshop = fallbackWorkshops.find(w => w.id === id)

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
