import ApprovalActions from "../../ApprovalActions";

const TaskDetailsInfo = ({ task, onApprove, onReject }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">

      <h2 className="text-2xl font-bold text-second-color mb-4">تفاصيل المهمة</h2>

      {/* وصف المهمة */}
      <div>
        <h3 className="text-xl font-semibold mb-2">وصف المهمة</h3>
        <p className="text-gray-700 leading-relaxed">{task.description}</p>
      </div>

      {/* معلومات الدورة */}
      <div className="space-y-2 text-gray-700">
        <p><span className="font-semibold">📅 تاريخ الدورة:</span> {task.date}</p>
        <p><span className="font-semibold">📆 أيام الدورة:</span> {task.days}</p>
        <p><span className="font-semibold">⏰ الوقت:</span> {task.time}</p>
      </div>

      {/* الفئة المناسبة */}
      <div>
        <h3 className="text-xl font-semibold mb-2">مناسب لـ:</h3>
        <ul className=" text-gray-700 space-y-1">
          {task.suitableFor.map((item, i) => (
            <li key={i}>📌 {item}</li>
          ))}
        </ul>
      </div>

      {/* أزرار القبول والرفض */}
      <ApprovalActions onApprove={onApprove} onReject={onReject} />
    </div>
  );
};

export default TaskDetailsInfo;
