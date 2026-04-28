import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdPeople } from "react-icons/md";
import { AiFillNotification } from "react-icons/ai";
// import { useEndCampMutation } from "../../api/endpoints/campApi";

const CampHeader = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [campStatus, setCampStatus] = useState("نشط"); // "نشط" أو "منتهي"
  const [error, setError] = useState("");

  //  بعد الربط 
  // const [endCamp, { isLoading: isApiLoading }] = useEndCampMutation();

  const handleEndCamp = async () => {
    // تأكيد قبل الإنهاء
    const confirmEnd = window.confirm("هل أنت متأكد من إنهاء المعسكر؟ سيتم إرسال إشعار لجميع المشاركين.");
    if (!confirmEnd) return;

    setIsLoading(true);
    setError("");

    // try {
    //   const response = await endCamp().unwrap();
    //   setCampStatus("منتهي");
    //   alert(response.message || "تم إنهاء المعسكر بنجاح وإرسال الإشعارات");
    // } catch (err) {
    //   console.error("Error ending camp:", err);
    //   setError(err?.data?.message || "حدث خطأ في إنهاء المعسكر");
    // } finally {
    //   setIsLoading(false);
    // }

    // حالياً: محاكاة للإرسال
    console.log("إعلان انتهاء المعسكر");
    setTimeout(() => {
      setCampStatus("منتهي");
      alert("تم إنهاء المعسكر بنجاح (محاكاة)");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-between my-6">
      {/* الأزرار */}
      <div className="flex gap-3">
        <button
          onClick={handleEndCamp}
          disabled={isLoading || campStatus === "منتهي"}
          className={`bg-main-color text-xl text-white px-4 py-2 rounded-md flex items-center gap-2 ${
            (isLoading || campStatus === "منتهي") ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "جاري الإنهاء..." : "إعلان انتهاء المعسكر"}
          <AiFillNotification className='inline-block' />
        </button>
        
        <button
          onClick={() => navigate("/admin/incubated")}
          className="bg-white text-xl border border-second-color px-4 py-2 rounded-md flex items-center gap-2"
        >
          المحتضنين <MdPeople className='inline-block' />
        </button>
      </div>
      
      {/* حالة المعسكر */}
      <div className="bg-white px-4 py-2 rounded-md flex items-center gap-2">
        <span className={`w-3 h-3 rounded-full ${campStatus === "نشط" ? "bg-green-color" : "bg-red-500"}`} />
        <span className="text-xl">حالة المعسكر : {campStatus}</span>
      </div>

      {/* عرض الخطأ */}
      {error && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-red-100 text-red-700 px-4 py-2 rounded shadow-lg">
          {error}
        </div>
      )}
    </div>
  );
};

export default CampHeader;