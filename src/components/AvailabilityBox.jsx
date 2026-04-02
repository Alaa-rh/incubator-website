const AvailabilityBox = ({ availability }) => {
  return (
    <div className="absolute top-60 right-120 bg-white rounded-xl p-4 shadow-lg flex flex-col gap-4">

      {/* عنوان أيام التفرغ */}
      <h3 className="font-bold text-lg">أيام التفرغ:</h3>

      {/* قائمة الأيام */}
      <ul className="flex flex-col gap-2 text-gray-700">
        {availability.days.map((day, index) => (
          <li key={index}>
            {day.name}: ({day.from}-{day.to}) {day.period}
          </li>
        ))}
      </ul>

      {/* الساعات الأسبوعية */}
      <div className="mt-4">
        <h3 className="font-bold text-lg">الساعات المتاحة أسبوعياً:</h3>
        <p className="text-gray-700">{availability.weeklyHours} ساعات</p>
      </div>

    </div>
  )
}

export default AvailabilityBox
