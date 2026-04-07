import { BiTrash } from "react-icons/bi";

const EvaluationRow = ({ id, name, value, onUpdate, onDelete }) => {
  return (
    <div 
      className="flex flex-col md:flex-row items-center gap-4 p-4 border border-gray-200 rounded-xl bg-white shadow-sm"
      dir="rtl"
    >
      {/* الحقول */}
      <div className="w-full flex flex-col md:flex-row flex-1 gap-6 items-end">

        {/* اسم المعيار */}
        <div className="w-full md:flex-1 flex flex-col items-start md:items-end" dir="rtl">
          <label className="text-sm pb-2 font-medium">اسم المعيار</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => onUpdate(id, 'name', e.target.value)}
            placeholder="أدخل المعيار..."
            className="w-full p-2 border border-second-color rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-teal-700 transition-colors"
          />
        </div>

        {/* الدرجة */}
        <div className="w-full md:w-40 flex flex-col items-start md:items-end">
          <label className="text-sm pb-2 font-medium">الدرجة</label>
          <input 
            type="number" 
            value={value} 
            onChange={(e) =>
              onUpdate(
                id,
                'value',
                Math.min(5, Math.max(0, parseInt(e.target.value) || 0))
              )
            }
            className="w-full md:w-24 p-2 border border-second-color rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-teal-700 transition-colors"
          />
        </div>
      </div>

      {/* زر الحذف */}
      <div className="w-full md:w-auto flex justify-end md:self-end">
        <button 
          onClick={() => onDelete(id)} 
          className="text-gray-700 hover:text-red-500 p-2 hover:bg-red-50 rounded-lg transition-all"
          title="حذف المعيار"
        >
          <BiTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default EvaluationRow;
