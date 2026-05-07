import React, { useState } from 'react'
import Button from '../../components/Button'
import NavLinkUniversal from '../../components/NavLinkUniversal'
import Modal from '../../components/Modal'

const SettingsPage = () => {

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  // لاحقًا: استدعاء API تسجيل الخروج
  // const [logout] = useLogoutMutation();
  //
  //لاحقًا: استدعاء API حذف الحساب
  // const [deleteAccount] = useDeleteAccountMutation();

  const handleLogout = async () => {

    // لاحقًا: استدعاء API تسجيل الخروج
    // await logout().unwrap();

    console.log("تم تسجيل الخروج")
    setIsLogoutModalOpen(false)
  }

  const handleDeleteAccount = async () => {

    // لاحقًا: استدعاء API حذف الحساب
    // await deleteAccount().unwrap();
   

    console.log("تم حذف الحساب")
    setIsDeleteModalOpen(false)
  }

  return (
    <div className='px-4 pb-10'>
      <div className='container mx-auto'> 
        <h1 className='text-2xl md:text-3xl font-bold text-second-color my-10'>
          اعدادات الحساب
        </h1>

        <div className='max-w-[800px] w-full min-h-40 bg-white p-6 rounded-lg shadow-sm'>
        <h2 className='text-xl md:text-2xl font-bold mb-6'>الأمان وتسجيل الدخول</h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className='text-base md:text-lg'>هل تريد تغيير كلمة المرور؟</p>

            <NavLinkUniversal 
              to="/change-password" 
              label={<Button label="تغيير كلمة المرور" className='bg-main-color px-15 md:px-20 py-2' />} 
            />
          </div>
        </div>

      <div className="max-w-[800px] w-full min-h-40 bg-white flex flex-col md:flex-row justify-between items-center p-6 rounded-lg mt-6 gap-4">

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
            <button
              className="border border-second-color px-4 rounded"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              إلغاء
            </button>
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
