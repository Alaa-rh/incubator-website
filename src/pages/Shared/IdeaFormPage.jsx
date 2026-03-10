import React from 'react'
import { useNavigate } from "react-router-dom"
import IdeaForm from '../../components/Forms/IdeaForm'

const IdeaFormPage = () => {
  const navigate = useNavigate()

  const handleSubmit = (formData) => {
    console.log("Idea submitted :", formData)

    // لاحقًا: إرسال البيانات للباك

    // الانتقال لصفحة مراحل الاحتضان مع تخطي مرحلة تقديم الطلب
    navigate("/incubation", { state: { requestSubmitted: true } })
  }

  return (
    <div className='bg-white-color h-screen py-8'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>من الفكرة إلى الأثر</h1>
        <p className='text-gray-600'>املأ الاستمارة وخلي مشروعك بداية طريقك الريادي</p>
      </div>

      <IdeaForm onSubmit={handleSubmit} />
    </div>
  )
}

export default IdeaFormPage
