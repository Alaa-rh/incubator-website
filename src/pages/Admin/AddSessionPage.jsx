import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const AddSessionPage = () => {
  const navigate = useNavigate();

  const [session, setSession] = useState({
    title: "",
    trainer: "",
    tasks: "",
    location: "",
    time: "",
    date: "",
  });

  const handleSubmit = () => {
    console.log("New session:", session);
    // لاحقاً: API
    navigate(-1); // رجوع لصفحة إدارة الجلسات
  };

  return (
    <div className="container px-6 py-20">
      <h2 className="text-2xl text-second-color font-bold mb-8">إضافة جلسة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <Input
          label="عنوان الجلسة"
          value={session.title}
          onChange={(e) =>
            setSession({ ...session, title: e.target.value })
          }
        />

        <Input
          label="تعيين المدرب"
          value={session.trainer}
          onChange={(e) =>
            setSession({ ...session, trainer: e.target.value })
          }
        />

        <Input
          label="المهام المطلوبة"
          value={session.tasks}
          onChange={(e) =>
            setSession({ ...session, assistant: e.target.value })
          }
        />

        <Input
          label="موقع المعسكر"
          value={session.location}
          onChange={(e) =>
            setSession({ ...session, location: e.target.value })
          }
        />

        <Input
          label="وقت الجلسة"
          value={session.time}
          onChange={(e) =>
            setSession({ ...session, time: e.target.value })
          }
        />

        <Input
          label="تاريخ الجلسة"
          type="date"
          value={session.date}
          onChange={(e) =>
          setSession({ ...session, date: e.target.value })
          }
        />
      </div>

      <div className="flex justify-center mt-6">
        <Button
          label="إرسال الإشعار بالموعد"
          onClick={handleSubmit}
          className="bg-main-color w-50"
        />
      </div>
    </div>
  );
};

export default AddSessionPage;
