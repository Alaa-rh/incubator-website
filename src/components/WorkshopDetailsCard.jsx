const WorkshopDetailsCard = ({ workshop }) => {
  return (
    <div className="container">
      <h1 className="text-2xl font-bold text-main-color">{workshop.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col items-start justify-center gap-6 text-xl"> 
          <p className="text-gray-700 mb-4">{workshop.description}</p>
          <p><span className="font-semibold">📅 التاريخ:</span> {workshop.date}</p>
          <p><span className="font-semibold">⏰ الوقت:</span> {workshop.time}</p>
          <p><span className="font-semibold">📍 المكان:</span> {workshop.location}</p>
        <div>
          <p><span className="font-semibold">📌 الفئة المستهدفة:</span></p>
          <ul className="list-disc list-inside text-xl text-gray-600">
            {workshop.audience.map((item, idx) => (
              <li key={idx} className="p-2">{item}</li>
            ))}
          </ul>
        </div>
        </div>
        <img src={workshop.image} alt={workshop.title} className="w-full object-cover rounded-md" />
      </div>

      <div className="text-center mt-6">
        <a
          href={workshop.registrationLink}
          className="bg-main-color text-2xl text-white px-6 py-2 rounded-md hover:scale-105 transition"
        >
          سجل الآن
        </a>
      </div>
    </div>
  )
}

export default WorkshopDetailsCard