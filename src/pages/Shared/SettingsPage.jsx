import React, { useState } from 'react'
import Button from '../../components/Button'
import NavLinkUniversal from '../../components/NavLinkUniversal'
import Modal from '../../components/Modal'

const SettingsPage = () => {

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const handleLogout = () => {
    console.log("تم تسجيل الخروج")
    setIsLogoutModalOpen(false)
  }

  const handleDeleteAccount = () => {
    console.log("تم حذف الحساب")
    setIsDeleteModalOpen(false)
  }

  return (
    <div>
      <div className='container'> 
        <h1 className='text-3xl font-bold text-second-color my-10'>
        اعدادات الحساب
      </h1>

        <div className='w-200 h-40 bg-white p-6 rounded-lg'>
          <h2 className='text-2xl font-bold mb-4'>الأمان وتسجيل الدخول</h2>

          <div className="flex justify-between items-center">
            <p className='text-lg'>هل تريد تغيير كلمة المرور؟</p>

            <NavLinkUniversal 
              to="/change-password" 
              label={<Button label="تغيير كلمة المرور" className='bg-main-color px-20 py-2' />} 
            />
          </div>
        </div>

        <div className="w-200 h-40 bg-white flex justify-between items-center p-4 rounded-lg mt-6">

          <Button 
            label="حذف الحساب" 
            className='bg-red-color px-20 py-2'
            onClick={() => setIsDeleteModalOpen(true)}
          />

          <Button 
            label="تسجيل الخروج" 
            className='bg-main-color px-20 py-2'
            onClick={() => setIsLogoutModalOpen(true)}
          />

        </div>
      </div>

      {/* مودال تسجيل الخروج */}
      <Modal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        title="هل أنت متأكد من تسجيل الخروج؟"
        footer={
          <div className="flex gap-4">
            <Button 
              label="نعم" 
              className="bg-main-color px-6"
              onClick={handleLogout}
            />
            <Button 
              label="لا" 
              className="bg-main-color px-6"
              onClick={() => setIsLogoutModalOpen(false)}
            />
          </div>
        }
      >
        <p>سيتم تسجيل خروجك من الحساب</p>
      </Modal>

      {/* مودال حذف الحساب */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="هل أنت متأكد؟"
        footer={
          <div className="flex gap-4">
            <Button 
              label="حذف الحساب" 
              className="bg-red-color px-6"
              onClick={handleDeleteAccount}
            />
            <Button 
              label="إلغاء" 
              className="bg-gray-600 px-6"
              onClick={() => setIsDeleteModalOpen(false)}
            />
          </div>
        }
      >
        <p>
          أنت على وشك حذف حسابك، لا يمكن التراجع عن هذا الإجراء وسيتم حذف جميع بياناتك بشكل دائم.
        </p>
      </Modal>

    </div>
  )
}

export default SettingsPage
