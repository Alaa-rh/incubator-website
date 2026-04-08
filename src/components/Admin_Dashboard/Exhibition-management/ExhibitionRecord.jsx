import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Button";

export default function ExhibitionRecord() {
  const navigate = useNavigate();

  // بيانات تجريبية
  const exhibitions = [
    {
      id: 1,
      title: "معرض خريجي دفعة 2024",
      date: "12/3/2024",
      projectsCount: 30,
      year: 2024,
    },
    {
      id: 2,
      title: "معرض خريجي دفعة 2023",
      date: "10/3/2023",
      projectsCount: 28,
      year: 2023,
    },
    {
      id: 3,
      title: "معرض خريجي دفعة 2022",
      date: "15/3/2022",
      projectsCount: 25,
      year: 2022,
    },
    {
      id: 4,
      title: "معرض خريجي دفعة 2021",
      date: "20/3/2021",
      projectsCount: 22,
      year: 2021,
    },
  ];

  const openDetails = (ex) => {
    navigate("/projectspage", { state: { year: ex.year } });
  };

  return (
    <div className="p-6" dir="rtl">
      <h2 className="text-xl font-bold mb-6 text-main-color">سجل المعارض</h2>

      <div className="flex flex-col gap-4">

        {exhibitions.map((ex) => (
          <div
            key={ex.id}
            className="bg-teal-100 shadow-md rounded-xl px-4 py-6 border-dotted border-2 border-main-color flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="font-bold text-lg">{ex.title}</p>
              <p className="mt-1">
                تاريخ الانعقاد: <span className="font-semibold">{ex.date}</span>
              </p>
              <p className="mt-1">
                عدد المشاريع المخرجة:{" "}
                <span className="font-semibold">{ex.projectsCount}</span>
              </p>
            </div>

            <Button
              label="عرض التفاصيل"
              onClick={() => openDetails(ex)}
              className="mt-4 md:mt-0 bg-main-color"
            />
          </div>
        ))}

      </div>
    </div>
  );
}
