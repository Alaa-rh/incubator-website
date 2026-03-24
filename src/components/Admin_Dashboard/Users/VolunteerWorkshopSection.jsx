import { useNavigate } from "react-router-dom";
import DataTable from "../DataTable";
import Button from "../../Button";

const VolunteerWorkshopsSection = ({ workshops }) => {
  const navigate = useNavigate();

  const columns = [
    {
      key: "actions",
      label: "الإجراءات",
      render: (row) => (
        <Button
          label="تفاصيل المهمة"
          className="bg-main-color"
          onClick={() => navigate(`/admin/tasks/${row.id}`)}
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
