import React, { useState } from "react";
import DataTable from "../../components/Admin_Dashboard/DataTable";
import Checkbox from "../../components/CheckBox";

const AssignEvaluatorsPage = ({  onAssign }) => {
  const [sel, setSel] = useState([]);

  const data = [
    { id: 1, name: "أحمد المحمد", spec: "UI UX", exp: ["تسويق رقمي", "تجارة إلكترونية"] },
    { id: 2, name: "أحمد العلي", spec: "Web Design", exp: ["تطوير مواقع", "تصميم"] },
    { id: 3, name: "خالد حسن", spec: "Mobile Apps", exp: ["Flutter", "React Native"] },
    { id: 4, name: "ياسين الكردي", spec: "SEO", exp: ["أرشفة", "تحليل بيانات"] },
  ];

  // إضافة/إزالة مقيم
  const toggle = (id) => {
    setSel((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // زر التعيين بالأعلى
  const handleAssign = () => {
    if (!sel.length) return;

    const selectedEvaluators = data.filter((d) => sel.includes(d.id));

    if (onAssign) {
      onAssign(selectedEvaluators);
    }
  };

  const columns = [
    {
      key: "actions",
      label: "الإجراءات",
      render: (row) => (
        <Checkbox
          name={`ev-${row.id}`}
          checked={sel.includes(row.id)}
          onChange={() => toggle(row.id)}
        />
      ),
    },
    { key: "spec", label: "التخصص" },
    {
      key: "exp",
      label: "مجالات الخبرة",
      render: (row) => row.exp.join(" - "),
    },
    { key: "name", label: "الاسم" },
  ];

  return (
    <div className="container relative w-full p-6">

      {/* العنوان */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          تعيين المقيمين
        </h2>

        {/* زر التعيين */}
        <button
          onClick={handleAssign}
          className="bg-main-color text-white px-6 py-2 rounded-md hover:bg-teal-700 transition"
        >
          تعيين
        </button>
      </div>

      {/* الجدول */}
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default AssignEvaluatorsPage;
