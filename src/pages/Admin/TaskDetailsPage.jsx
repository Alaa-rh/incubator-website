import { useParams } from "react-router-dom";
import { useState } from "react";
import TaskDetailsInfo from "../../components/Admin_Dashboard/Users/TaskDetailsInfo";

import {
  useGetTaskByIdQuery,
} from "../../api/endpoints/admin/adminTasksApi";

import {
  useApproveMutation,
  useRejectMutation,
} from "../../api/endpoints/approvalApi";

const TaskDetailsPage = () => {
  const { taskId } = useParams();

  // ---------------------------------------------------------
  //   1) جلب بيانات المهمة
  const { data: task, isLoading, refetch } = useGetTaskByIdQuery(taskId);

  // fallback قبل الربط الكامل
  const fallbackTask = {
    id: taskId,
    description:
      "دورة تدريب مدربين روبوت سبايك Spike من ITOT. هل ترغب في أن تكون جزءاً من المستقبل التكنولوجي؟ هل تحلم أن تصبح مدرباً محترفاً في مجال الروبوتات؟",
    date: "السبت 8/11/2025",
    days: "السبت - الثلاثاء",
    time: "من الساعة 2 - 5",
    suitableFor: [
      "المعلمون الراغبون بتعليم التكنولوجيا للطلاب",
      "المعلمون الذين يرغبون في استخدام الروبوتات في التعليم",
      "الأشخاص الذين يسعون لإضافة مهارات جديدة إلى سيرتهم الذاتية",
    ],
    participants: [
      { name: "فهد الجاسم", email: "fahad@gmail.com" },
      { name: "فهد الجاسم", email: "fahad@gmail.com" },
      { name: "فهد الجاسم", email: "fahad@gmail.com" },
    ],
    status: "pending",
  };

  const finalTask = task || fallbackTask;
  const [status, setStatus] = useState(finalTask.status);
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  //   2) Mutations من approvalApi
  const [approve] = useApproveMutation();
  const [reject] = useRejectMutation();
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  //  3) Handlers
  const handleApprove = async () => {
    await approve({ type: "tasks", id: taskId });
    setStatus("approved");
    refetch();
  };

  const handleReject = async () => {
    await reject({ type: "tasks", id: taskId });
    setStatus("rejected");
    refetch();
  };
  // ---------------------------------------------------------

  if (isLoading) return <p className="text-center mt-10">جاري التحميل...</p>;

  return (
    <div className="bg-white-color h-screen pt-20">
      <div className="container">

        {/* معلومات المهمة + أزرار القبول/الرفض */}
        <TaskDetailsInfo
          task={finalTask}
          onApprove={handleApprove}
          onReject={handleReject}
        />

        {/* جدول المشاركين يظهر فقط بعد الموافقة */}
        {status === "approved" && (
          <div className="bg-main-color text-white p-4 mt-6 rounded-md">
            <h3 className="font-bold mb-2">المشاركين في الورشة:</h3>

            {finalTask.participants?.map((p, i) => (
              <p key={i}>
                {p.name}: {p.email}
              </p>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default TaskDetailsPage;
