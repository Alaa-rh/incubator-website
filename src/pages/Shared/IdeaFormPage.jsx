import React from 'react'
import IdeaForm from '../../components/Forms/IdeaForm'
const IdeaFormPage = () => {
  return (
    <div>
        <div className='text-center my-10'>
            <h1 className='text-2xl font-bold'> من الفكرة إلى الأثر</h1>
            <p className='text-gray-600'>املأ الاستمارة  وخلي مشروعك بداية طريقك الريادي</p>
        </div>
        <IdeaForm />
    </div>
  )
}

export default IdeaFormPage