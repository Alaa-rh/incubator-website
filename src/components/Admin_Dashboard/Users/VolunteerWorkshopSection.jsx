import { useNavigate } from "react-router-dom";
import DataTable from "../DataTable";
import Button from "../../Button";

const VolunteerWorkshopsSection = ({ workshops, onTaskClick }) => {
  const navigate = useNavigate();

  const handleClick = (row) => {
    if (onTaskClick) {
      onTaskClick(row);
    } else {
      navigate(`/admin/tasks/${row.id}`);
    }
  };

  const columns = [
    {
      key: "actions",
      label: "الإجراءات",
      render: (row) => (
        <Button
          label="تفاصيل المهمة"
          className="bg-main-color"
          onClick={() => handleClick(row)}
        />
      ),
    },
    {
      key: "status",
      label: "حالة الإنجاز",
      render: (row) => (
        <span
          className={`
            px-3 py-1 rounded-md text-white text-sm
            ${
              row.status === "قيد المراجعة"
                ? "bg-yellow-500"
                : row.status === "مرفوضة"
                ? "bg-red-600"
                : "bg-green-600"
            }
          `}
        >
          {row.status}
        </span>
      ),
    },
    { key: "assignedAt", label: "تاريخ التعيين" },
    { key: "taskName", label: "اسم المهمة" },
    { key: "type", label: "معسكر/ورشة عمل" },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">الورشات</h3>
      <DataTable columns={columns} data={workshops} />
    </div>
  );
};

export default VolunteerWorkshopsSection;
