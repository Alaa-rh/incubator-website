import Button from "../../Button";
import NavLinkUniversal from "../../NavLinkUniversal";

const EvaluationSection = ({ evaluations, notes = null, attendanceRate = null, project }) => {
  return (
    <div className="flex justify-between items-start">

      <div>
        {/* الملاحظات الدورية (تظهر فقط للمحتضن) */}
        {notes && (
          <div className="bg-white shadow rounded-lg p-4 space-y-3 mb-6">
            <h3 className="text-2xl font-bold mb-4">الملاحظات الدورية</h3>

            {notes.length > 0 ? (
              notes.map((note, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-3 rounded-md text-gray-700 leading-relaxed"
                >
                  {note}
                </div>
              ))
            ) : (
              <p className="text-gray-500">لا توجد ملاحظات بعد.</p>
            )}
          </div>
        )}
        {/* نسبة حضور المعسكر لصاحب الفكرة */}
        {attendanceRate !== null && (
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2">نسبة حضور المعسكر</h3>
            <p className="text-main-color font-bold text-2xl">{attendanceRate}%</p>
          </div>
        )}
        <NavLinkUniversal
          to={`/projectinfo/${project.id}`}
          label={
            <Button 
              label="عرض تفاصيل المشروع" 
              className="bg-main-color w-full"
            />
          }
        />
        </div>
       {/* التقييم الأولي */}
      <div className="overflow-x-auto mb-6 w-2/3">
        <h3 className="text-2xl font-bold mb-4">التقييم الأولي</h3>

        <table className="bg-white w-full text-right border-collapse border border-second-color">
          <thead>
            <tr className="border-b border-second-color text-gray-700">
              <th className="p-3">اسم المقيم</th>
              <th className="p-3">الدرجة</th>
              <th className="p-3">الملاحظة</th>
            </tr>
          </thead>

          <tbody>
            {evaluations.map((e, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-3 border-b border-second-color">{e.evaluator}</td>
                <td className="p-3 border-b border-second-color">{e.score}</td>
                <td className="p-3 border-b border-second-color">{e.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EvaluationSection;
