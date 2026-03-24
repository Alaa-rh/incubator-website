import { useParams } from "react-router-dom";
import { useState } from "react";
import TaskDetailsInfo from "../../components/Admin_Dashboard/Users/TaskDetailsInfo";

const TaskDetailsPage = () => {
  const { taskId } = useParams();

  const [status, setStatus] = useState("pending");
  // pending | approved | rejected

  const task = {
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
  };

  const participants = [
    { name: "فهد الجاسم", email: "fahad@gmail.com" },
    { name: "فهد الجاسم", email: "fahad@gmail.com" },
    { name: "فهد الجاسم", email: "fahad@gmail.com" },
  ];

  const handleApprove = async () => {
    console.log("تمت الموافقة على المهمة:", taskId);
    setStatus("approved");
  };

  const handleReject = async () => {
    console.log("تم رفض المهمة:", taskId);
    setStatus("rejected");
  };

  return (
    <div className="bg-white-color h-screen pt-20">
        <div className="container">

      {/* معلومات المهمة + أزرار القبول/الرفض */}
      <TaskDetailsInfo
        task={task}
        onApprove={handleApprove}
        onReject={handleReject}
      />

      {/* جدول المشاركين يظهر فقط بعد الموافقة */}
      {status === "approved" && (
        <div className="bg-main-color text-white p-4 mt-6 rounded-md">
          <h3 className="font-bold mb-2">المشاركين في الورشة:</h3>
          {participants.map((p, i) => (
            <p key={i}>{p.name}: {p.email}</p>
          ))}
        </div>
      )}

    </div>
    </div>
  );
};

export default TaskDetailsPage;
