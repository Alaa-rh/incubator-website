import { useState } from "react";
import CategoryFilterBar from "../../components/CategoryFilterBar";
import ConsultantsList from "../../components/ConsultantsList";

const VolunteersPage = () => {
  const categories = [
    { id: "volunteers", label: "المتطوعين" },
    { id: "requests", label: "طلبات التطوع" },
    { id: "evaluators", label: "المقيمين" },
  ];

  const [selected, setSelected] = useState("volunteers");

  const volunteers = [
    {
      id: 1,
      name: "رانيا الأحمد",
      specialty: "UI/UX",
      activeTime: "2:00pm إلى 4:00pm",
      image:"/src/assets/images/avatar.jpg",
      type: "volunteer",
    },
  ];

  const requests = [
    {
      id: 10,
      name: "أحمد علي",
      specialty: "متقدم بطلب تطوع",
      activeTime: "—",
      image: "/images/user1.png",
      type: "request",
    },
  ];

  const evaluators = [
    {
      id: 20,
      name: "خالد يوسف",
      specialty: "مقيم مشاريع",
      activeTime: "—",
      image: "/images/user1.png",
      type: "evaluator",
    },
  ];

  return (
    <div className="container p-6">
      <h2 className="text-3xl font-bold mb-6">إدارة المتطوعين</h2>

      <CategoryFilterBar
        categories={categories}
        selected={selected}
        onSelect={setSelected}
        className="bg-white-color"
      />

      {selected === "volunteers" && (
        <ConsultantsList consultants={volunteers} role="admin" />
      )}

      {selected === "requests" && (
        <ConsultantsList consultants={requests} role="admin" />
      )}

      {selected === "evaluators" && (
        <ConsultantsList consultants={evaluators} role="admin" />
      )}
    </div>
  );
};

export default VolunteersPage;
