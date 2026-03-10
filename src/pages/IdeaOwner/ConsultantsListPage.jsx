import React from "react"
import { useParams } from "react-router-dom"
import ConsultantsList from "../../components/ConsultantsList"
import avatar from "../../assets/images/avatar.jpg"

const ConsultantsListPage = () => {
  const { categoryId } = useParams()

  const consultants = [
    {
      id: 1,
      name: "رانيا الأحمد",
      specialty: "uiux",
      activeTime: "2:00pm إلى 4:00pm",
      image: avatar,
    },
    {
      id: 2,
      name: "محمد العلي",
      specialty: "legal",
      activeTime: "1:00pm إلى 3:00pm",
      image: avatar,
    },
    {
      id: 3,
      name: "سارة خالد",
      specialty: "marketing",
      activeTime: "11:00am إلى 1:00pm",
      image: avatar,
    },
  ]

  // تصفية المستشارين بحسب الاختصاص
  const filteredConsultants = consultants.filter(
    c => c.specialty === categoryId
  )

  return (
    <div className="container py-6">
      <h2 className="text-xl font-bold mb-4 text-second-color">
        المستشارون المتاحون في اختصاص: {categoryId}
      </h2>

      {filteredConsultants.length > 0 ? (
        <ConsultantsList consultants={filteredConsultants} />
      ) : (
        <p className="text-gray-500 font-semibold">
          لا يوجد مستشارون لهذا الاختصاص حالياً.
        </p>
      )}
    </div>
  )
}

export default ConsultantsListPage
