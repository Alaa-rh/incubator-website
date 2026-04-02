const WorkshopCard = ({ workshop, status }) => {

  const statusStyles = {
    pending: "text-yellow-600",
    rejected: "text-red-color",
    accepted: "text-green-color"
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">

    <div className="flex items-center gap-40 p-10">
     <div className="space-y-10">
      <p><span className="font-bold px-2">اسم الورشة:</span> {workshop.name}</p>
      <p><span className="font-bold px-2">المدرب:</span> {workshop.trainer}</p>
      <p><span className="font-bold px-2">تاريخ الانعقاد:</span> {workshop.date}</p>
      </div>
      <div className="space-y-10">
      <p><span className="font-bold px-2">تاريخ الانتهاء:</span> {workshop.endDate}</p>
      <p><span className="font-bold px-2"> المدة:</span> {workshop.period}</p>
      {/* الحالة */} 
     
      <p className={`font-bold px-2 ${statusStyles[status]}`}> 
      <span className="font-bold text-black pl-2">حالة الورشة:</span>
        {status === "pending" && "قيد المراجعة"}
        {status === "rejected" && "مرفوضة"}
        {status === "accepted" && "مقبولة"}
      </p>
      </div>
      <div className="space-y-10">
      <p><span className="font-bold">أيام الانعقاد:</span> {workshop.days}</p>
      <p><span className="font-bold">الوقت:</span> {workshop.time}</p>
      <p><span className="font-bold">عددالجلسات</span> {workshop.sessions}</p>
     
      </div>
    </div>
      
      {/* الوصف */}
      <div className="mt-10">
        <h3 className="font-bold mb-2">الوصف التفصيلي:</h3>
        <p className="text-gray-700 leading-relaxed">{workshop.description}</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold mb-2">هدف الورشة:</h3>
        <p className="text-gray-700 leading-relaxed">{workshop.aim}</p>
      </div>

      {status === "rejected" && (
        <div className="bg-main-color text-white p-4 mt-4 rounded-md">
          <h3 className="font-bold mb-2">سبب الرفض:</h3>
          {workshop.rejectionReason}
        </div>
      )}

      {(status === "pending" || status === "accepted") && (
        <div className="bg-main-color text-white p-4 mt-6 rounded-md">
          <h3 className="font-bold mb-2">المسؤولين عن الورشة:</h3>
          {workshop.managers.map((m, i) => (
            <p key={i}>{m.name}: {m.email}</p>
          ))}
        </div>
      )}

    </div>
  )
}
export default WorkshopCard