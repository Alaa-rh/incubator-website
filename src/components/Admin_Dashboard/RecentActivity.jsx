const RecentActivity = () => {
  const items = [
    { text: "إرسال إشعار للمتقدمين للمعسكر", time: "منذ ساعتين" },
    { text: "انضمام عضو جديد: سارة العلي", time: "منذ ساعتين" },
    { text: "انضمام عضو جديد: سارة العلي", time: "منذ ساعتين" },
  ];

  return (
    <div className="bg-white p-6 w-120 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">النشاط الأخير</h2>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-2 justify-between border-b pb-2">
            <p className="text-xl">🟢 {item.text}</p>
            <span className="text-gray-500 text-sm">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
