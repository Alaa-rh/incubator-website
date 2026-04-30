import React, { useState } from "react";
import { useRole } from "../hooks/useRole";
import Modal from "./Modal";
import Input from "./Input";
import Button from "./Button";

const WorkshopDetailsCard = ({ workshop }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState(null); // "accept" | "reject"
  const [message, setMessage] = useState("");
  const { roles } = useRole();
  const adminRole= roles.includes("admin");

  const openModal = (type) => {
    setActionType(type);
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    console.log("Action:", actionType, "Message:", message);
    // لاحقاً: API
    setMessage("");
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold text-main-color">{workshop.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col items-start justify-center gap-6 text-xl">
          <p className="text-gray-700 mb-4">{workshop.description}</p>
          <p><span className="font-semibold">📅 التاريخ:</span> {workshop.date}</p>
          <p><span className="font-semibold">⏰ الوقت:</span> {workshop.time_from} - {workshop.time_to}</p>
          <p><span className="font-semibold">📍 الأيام:</span> {workshop.days}</p>

          <div>
            <p><span className="font-semibold">📌 الفئة المستهدفة:</span></p>
            <ul className="list-disc list-inside text-xl text-gray-600">
              {workshop.target_audience.map((item, idx) => (
                <li key={idx} className="p-2">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <img
          src={workshop.image}
          alt={workshop.title}
          className="w-full object-cover rounded-md"
        />
      </div>

      {/* الأزرار حسب الدور */}
      <div className="text-center mt-6">
        {adminRole && (
          <div className="flex justify-center gap-4">
            <Button
              label="موافقة"
              onClick={() => openModal("accept")}
              className="bg-green-600 text-white px-6 py-2"
            />

            <Button
              label="رفض"
              onClick={() => openModal("reject")}
              className="bg-red-600 text-white px-6 py-2"
            />
          </div>
        )}
        {!adminRole && 
          <a
            href={workshop.registrationLink}
            className="bg-main-color text-2xl text-white px-6 py-2 rounded-md hover:scale-105 transition"
          >
            سجل الآن
          </a>
        } 

      </div>

      {/* المودال */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={actionType === "accept" ? "هل أنت متأكد من القبول؟" : "هل أنت متأكد من الرفض؟"}
        footer={
          <Button
            label="إرسال"
            onClick={handleSubmit}
            className="bg-main-color text-white px-4 py-2"
          />
        }
      >
        <Input
          label={actionType === "reject" ? "سبب الرفض" : "تحديد عدد الطلاب"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="اكتب هنا..."
        />
      </Modal>
    </div>
  );
};

export default WorkshopDetailsCard;
