import React, { useState } from 'react'
import { useUpgradeToVolunteerMutation } from "../../api/endpoints/rolesApi"
import { useNavigate } from "react-router-dom"
import Modal from "../../components/Modal"
import Button from "../../components/Button"
import VolunteerForm from '../../components/Forms/VolunteerForm';

const VolunteerFormPage = () => {
  const navigate = useNavigate()
  const [upgradeToVolunteer] = useUpgradeToVolunteerMutation()
  const [showPendingModal, setShowPendingModal] = useState(false)

  const handleSubmit = async (formData) => {
    try {
      const res = await upgradeToVolunteer(formData).unwrap()

      if (res.status === "volunteer_pending") {
        setShowPendingModal(true)
      }
    } catch (error) {
      console.log("Error submitting volunteer form:", error)
    }
  }

  return (
    <div className='bg-white-color min-h-screen w-full'>
      <div className='container pt-10'>
        <h1 className='text-2xl font-bold'>أهلا بك كمتطوع!</h1>
        <p className='text-gray-600'>
          أكمل بياناتك للمراجعة من قبل الإدارة.
        </p>

        <VolunteerForm onSubmit={handleSubmit} onCancel={() => navigate(-1)} />

        <Modal
          isOpen={showPendingModal}
          onClose={() => setShowPendingModal(false)}
          title="تم إرسال البيانات!"
          footer={
            <Button
              label="حسناً"
              onClick={() => navigate("/pending-review")}
              className="bg-main-color"
            />
          }
        >
          <p className="text-sm text-gray-700">
            شكراً لك! سيتم مراجعة طلبك من قبل الإدارة قريباً.
          </p>
        </Modal>
      </div>
    </div>
  )
}

export default VolunteerFormPage
