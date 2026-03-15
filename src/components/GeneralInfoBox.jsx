const GeneralInfoBox = ({ info }) => {
  return (
    <div className="absolute top-40 left-70 bg-white border rounded-xl p-4 shadow flex gap-5">
     <div>
        <h3 className="font-bold text-lg mb-2">المهارات الإضافية:</h3>
        <ul className="flex flex-col gap-1 text-gray-700">
          {info.Skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <h3 className="font-bold text-lg mb-2">متاح لـ</h3>
        <ul className="flex flex-col gap-1 text-gray-700">
          {info.Collaboration.map((type, index) => (
            <li key={index}>{type}</li>
          ))}
        </ul>
      </div>
    <div>
        <h3 className="font-bold text-lg mb-2">الخبرة العامة</h3>
        <p className="text-gray-700">{info.experience}</p>

        <h3 className="font-bold text-lg mt-4">عدد المشاريع التي ساعد فيها بالحاضنة</h3>
        <p className="text-gray-700">{info.projectsCount} مشاريع</p>

        <h3 className="font-bold text-lg mt-4">المهارات الأساسية</h3>
        <p className="text-gray-700">{info.mainSkills.join(" - ")}</p>

        <h3 className="font-bold text-lg mt-4">نوع التطوع</h3>
        <ul className="list-disc pr-5 text-gray-700">
            {info.volunteerTypes.map((type, index) => (
            <li key={index}>{type}</li>
            ))}
        </ul>
      </div>
     

    </div>
  )
}

export default GeneralInfoBox
