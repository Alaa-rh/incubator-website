import React, { useState } from 'react'
import girl from "../../assets/images/girl.jpg"
import Input from '../../components/Input';
import Button from '../../components/Button';
//import { useGetCurrentUserQuery, useUpdateUserMutation } from '../../api/endpoints/userApi';
const ProfilePage = ({ userName, email }) => {

  // لاحقًا:
  // const { data: user, isLoading } = useGetCurrentUserQuery();
  // const [updateUser] = useUpdateUserMutation();

  // fallback data
  const fallbackUser = {
    full_name: userName,
    email: email,
    avatar: girl
  };

  // const currentUser = user || fallbackUser;
  const currentUser = fallbackUser;

  const [form, setForm] = useState({
    full_name: currentUser.full_name,
    email: currentUser.email
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // updateUser(form);
    console.log("Updated:", form);
  };

  return (
    <div>
      <div className="container">
        <h1 className='text-3xl font-bold text-second-color pt-10 mb-20'>
          تعديل الملف الشخصي
        </h1>

        <div className="bg-white flex items-center gap-4 mb-8 p-4 rounded w-full md:w-[600px]">
          <img src={currentUser.avatar} alt="avatar" className="w-16 h-16 rounded-full mb-2" />
          <div>
            <p className="font-semibold">{currentUser.full_name}</p>
            <p>{currentUser.email}</p>
          </div>
        </div>

        <div className="w-1/2 bg-white p-6 rounded w-full md:w-[600px]">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              label="الاسم الكامل"
              type="text"
              name="name"
              value={form.full_name}
              onChange={handleChange}
            />

            <Input
              label="البريد الإلكتروني"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <Button
              label="تحديث"
              className='bg-main-color w-fit px-20 py-2'
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage