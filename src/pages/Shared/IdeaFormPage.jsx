import React from 'react'
import { useNavigate } from "react-router-dom"
import IdeaForm from '../../components/Forms/IdeaForm'
import Modal from '../../components/Modal'
import Button from '../../components/Button'
import { useUpgradeToIdeaOwnerMutation } from '../../api/endpoints/rolesApi'
import { useState } from 'react'

const IdeaFormPage = () => {
  const navigate = useNavigate()
  const [upgradeToIdeaOwner] = useUpgradeToIdeaOwnerMutation()
  const [showPendingModal, setShowPendingModal] = useState(false)

  const handleSubmit = async (formData) => {
    try {
      const res = await upgradeToIdeaOwner(formData).unwrap()

      if (res.status === "ideaOwner_pending") {
        setShowPendingModal(true)
      }
    } catch (error) {
      console.log("Error:", error)
    }
  }

  return (
    <div className='bg-white-color h-screen py-8 sm:w-full'>
      <div className='text-center mb-8'>
        <h1 className='text-2xl font-bold'>من الفكرة إلى الأثر</h1>
        <p className='text-gray-600'>املأ الاستمارة وخلي مشروعك بداية طريقك الريادي</p>
      </div>

      <IdeaForm onSubmit={handleSubmit} />

      <Modal
        isOpen={showPendingModal}
        onClose={() => setShowPendingModal(false)}
        title="تم إرسال الفكرة!"
        footer={
          <Button
            label="حسناً"
            onClick={() => navigate("/pending-review")}
            className="bg-main-color"
          />
        }
      >
        <p className="text-sm">شكراً لك! طلبك قيد المراجعة من قبل الإدارة.</p>
      </Modal>
    </div>
  )
}

export default IdeaFormPage