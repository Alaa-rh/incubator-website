import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Button";
import avatar from "../../../assets/images/avatar.jpg";

export default function CardRequests() {
  const navigate = useNavigate();

  // بيانات تجريبية
  const requests = [
    {
      id: 1,
      name: "رانيا الأحمد",
      projectName: "منصة تعليمية",
      avatar: avatar,
    },
    {
      id: 2,
      name: "محمد السالم",
      projectName: "تطبيق توصيل",
      avatar: avatar,
    },
    {
      id: 3,
      name: "سارة خالد",
      projectName: "منصة إلكترونية",
      avatar: avatar,
    },
  ];

  const openDetails = (id) => {
    navigate(`/requests-details/${id}`);
  };

  return (
    <div className="p-6" dir="rtl">
      <h2 className="text-xl font-bold mb-6">طلبات البطاقات</h2>

      <div className="grid grid-cols-2 gap-4">

        {requests.map((req) => (
          <div
            key={req.id}
            className="shadow-md rounded border border-second-color p-4 flex items-center gap-4"
          >
            <img
              src={req.avatar}
              alt={req.name}
              className="w-20 h-20 rounded-full object-cover border border-second-color"
            />

            <div className="flex flex-col gap-4">
              <p className="font-bold text-lg">{req.name}</p>
              <p className="text-sm mt-1">
                اسم المشروع: <span className="font-semibold">{req.projectName}</span>
              </p>

              <Button
              label="عرض التفاصيل"
                onClick={() => openDetails(req.id)}
                className="bg-main-color"
              />
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
