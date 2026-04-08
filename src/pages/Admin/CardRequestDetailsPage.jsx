import React, { useState } from "react";
import InfoRow from "../../components/InfoRow";
import Modal from "../../components/Modal";
import Textarea from "../../components/Textarea";
import { IoImageOutline } from "react-icons/io5";
import Input from "../../components/Input";

export default function CardRequestDetailsPage() {
  const [rejectModal, setRejectModal] = useState(false);
  const [acceptModal, setAcceptModal] = useState(false);

  const [rejectNotes, setRejectNotes] = useState("");
  const [acceptMessage, setAcceptMessage] = useState("");
   const data = {
  id: 1,
  title: "معرض خريجي دفعة 2024",
  date: "12/3/2024",
  projectsCount: 30,
  leader: "ريم العلي",
  productType: "منصة برمجية (SaaS)",
  ideaTitle: "منصة لعرض مشاريع التخرج",
  sector: "التقنية",
  description: "معرض سنوي لعرض مشاريع التخرج المتميزة.",
  problem: "لا يوجد مشكلة، هذا معرض عرض فقط",
  duration: "6 months",
  img: null,
};


  const handleReject = () => {
    console.log("Reject reason:", rejectNotes);
    setRejectModal(false);
  };

  const handleAccept = () => {
    console.log("Accept message:", acceptMessage);
    setAcceptModal(false);
  };

  return (
    <div className="p-6 bg-white-color w-full min-h-screen" dir="rtl">
    <div className="container">
      <h2 className="text-2xl font-bold mb-6 text-second-color">تفاصيل المشروع</h2>
      <div className="flex justify-between items-center">
      <div>
    
      </div>
      <div>
       <div className="bg-white p-6 rounded-lg shadow mb-6">
      <InfoRow label="اسم المشروع:">
        {data?.projectName}
      </InfoRow>

      <InfoRow label="مسؤول التعديل (القائد):">
        {data?.leader}
      </InfoRow>

      <InfoRow label="نوع المنتج:">
        {data?.productType}
      </InfoRow>
      </div>
      <hr className="my-6" />
      <div>
        <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h3 className="font-bold text-xl mb-4 border-b border-second-color">معلومات عن الفكرة</h3>

      <InfoRow label="عنوان الفكرة:">
        {data?.ideaTitle}
      </InfoRow>

      <InfoRow label="القطاع المستهدف:">
        {data?.sector}
      </InfoRow>

      <InfoRow label="وصف مختصر للفكرة:">
        {data?.description}
      </InfoRow>

      <InfoRow label="المشكلة التي يحلها:">
        {data?.problem}
      </InfoRow>

      <InfoRow label="الوقت المتوقع للإنجاز:">
        {data?.duration}
      </InfoRow>
      </div>

      {/* أزرار القبول والرفض */}
      <div className="flex gap-4 mt-10">
        <button
          onClick={() => setAcceptModal(true)}
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700"
        >
          قبول
        </button>

        <button
          onClick={() => setRejectModal(true)}
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700"
        >
          رفض
        </button>
      </div>
      </div> 
      </div>

     {/* الصورة */}
      <div className="flex items-center gap-4 mb-8">
        {data.img ? (
              <img
          src={data.img}
          alt= "project"
          className="object-cover"
        />
        ):
        <IoImageOutline className="text-8xl"/>
        }
      
      </div>
      {/* مودال الرفض */}
      <Modal
        isOpen={rejectModal}
        onClose={() => setRejectModal(false)}
        title="سبب الرفض"
        footer={
          <button
            onClick={handleReject}
            className="bg-main-color text-white px-6 py-2 rounded-lg font-bold"
          >
            إرسال إشعار الرفض
          </button>
        }
      >
        <Input
          placeholder="اكتب ما يجب تعديله في المشروع..."
          value={rejectNotes}
          onChange={(e) => setRejectNotes(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-right"
        />
      </Modal>

      {/* مودال القبول */}
      <Modal
        isOpen={acceptModal}
        onClose={() => setAcceptModal(false)}
        title="إشعار القبول"
        footer={
          <button
            onClick={handleAccept}
            className="bg-main-color text-white px-6 py-2 rounded-lg font-bold"
          >
            إرسال إشعار القبول
          </button>
        }
      >
        <Input
          placeholder="اكتب نص إشعار القبول..."
          value={acceptMessage}
          onChange={(e) => setAcceptMessage(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-right"
        />
      </Modal>
      </div>
      </div>
    </div>
  );
}
