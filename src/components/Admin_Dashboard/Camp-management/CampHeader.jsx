import React from "react";
import { useNavigate } from "react-router-dom";
import { MdPeople } from "react-icons/md";
import { AiFillNotification } from "react-icons/ai";

const CampHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between my-6">

      {/* الأزرار */}
      <div className="flex gap-3">
        <button
          className="bg-main-color text-xl text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          إعلان انتهاء المعسكر {<AiFillNotification className='inline-block'/>}
        </button>
        <button
          onClick={() => navigate("/admin/incubated")}
          className="bg-white text-xl border border-second-color px-4 py-2 rounded-md flex items-center gap-2"
        >
          المحتضنين {<MdPeople className='inline-block' />}
        </button>
      </div>
      
      {/* حالة المعسكر */}
      <div className="bg-white px-4 py-2 rounded-md flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-green-color" />
        <span className="text-xl"> حالة المعسكر : نشط</span>
      </div>
    </div>
  );
};

export default CampHeader;
