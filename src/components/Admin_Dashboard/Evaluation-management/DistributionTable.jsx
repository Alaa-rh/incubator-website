import React from "react";
import DataTable from "../DataTable";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";

const projects = [  
    { id: 1,
      name: "منصة الكترونية", 
      sector: "الالكترونيات", 
      targetGroup: "التجار", 
      email: "Ayahalaboud021@gmail.com", 
      score : "30" },
    { id: 2, 
      name: "تطبيق موبايل", 
      sector: "البرمجيات", 
      targetGroup: "الشباب", 
      email: "Ayahalaboud021@gmail.com",
      score : "30"  },
  ];

const DistributionTable = ({assignedEvaluators}) => {
  const navigate = useNavigate();
  const columns = [ 
    {
      key: "actions",
      label: "الإجراءات",
      render: (row) => (
        <div className="text-center">
          <Button
            label="تعيين المقيمين"
            onClick={() => navigate (`/admin/assign-evaluators/${row.id}`)}
            className="bg-main-color text-white px-4 py-2 rounded-md text-xs md:text-sm"
          />
        </div>
      ),
    },
    

    {
      key: "sector",
      label: "القطاع المستهدف",
      render: (row) => (
        <span className="text-center block">{row.sector}</span>
      ),
    },

    {
      key: "targetGroup",
      label: "الفئة المستهدفة",
      render: (row) => (
        <span className="text-center block">{row.targetGroup}</span>
      ),
    },

    {
      key: "evaluators",
      label: "المقيمون الحاليون",
      render: (row) => {
        const evaluators = assignedEvaluators?.[row.id] || [];

        if (evaluators.length === 0) {
          return (
            <span className="text-gray-400 italic text-xs">
              لم يتم التعيين بعد
            </span>
          );
        }

        return (
          <div className="flex flex-wrap gap-1 max-w-[200px]">
            {evaluators.map((ev, idx) => (
              <span
                key={idx}
                className="bg-blue-50 text-blue-800 px-2 py-1 rounded text-[10px] md:text-xs border border-blue-200 whitespace-nowrap"
              >
                {ev.name}
              </span>
            ))}
          </div>
        );
      },
    },
    { key: "name", label: "اسم المشروع" },
   
  ];

  return (
    <div className="p-4">
      <DataTable columns={columns} data={projects} />
    </div>
  );
};

export default DistributionTable;
