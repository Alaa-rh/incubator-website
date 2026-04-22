import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VolunteerRequestDetails from "../../components/VolunteerRequestDetails";
// import { useGetVolunteerRequestByIdQuery } from "../../api/endpoints/requestsApi";
// import { useApproveMutation, useRejectMutation } from "../../api/endpoints/approvalApi";

const VolunteerRequestDetailsPage = () => {
  const { id } = useParams();

  // TODO: بعد الربط  هذا السطر بدل البيانات الثابتة
  // const { data: request, isLoading, error, refetch } = useGetVolunteerRequestByIdQuery(id);
  // const [approveRequest] = useApproveMutation();
  // const [rejectRequest] = useRejectMutation();

  const [request, setRequest] = useState(null);

  // -----------------------------
  // بيانات ثابتة حالياً 
  // -----------------------------
  useEffect(() => {
    const fetchRequest = () => {
      const dummy = {
        id,
        name: "مايا المحمد",
        email: "maya123@gmail.com",
        skill: "UI / UX",
        targetGroup: "الطلاب",
        projectTitle: "اسم المشروع",
        tasks: "شرح بسيط من صاحب الطلب عن ماذا يريد",
        ideaSummary: "شرح مختصر عن الفكرة",
        problem: "المشكلة التي يحلها المشروع",
      };
      setRequest(dummy);
    };

    fetchRequest();
  }, [id]);

  // -----------------------------
  // دوال الموافقة والرفض
  // -----------------------------
  const approveVolunteer = async () => {
    // TODO: بعد الربط استخدمي هذا الكود
    // try {
    //   await approveRequest({ type: "volunteer", id }).unwrap();
    //   alert("تم قبول طلب التطوع بنجاح");
    // } catch (error) {
    //   console.error("Error approving request:", error);
    //   alert("حدث خطأ في قبول الطلب");
    // }

    console.log("تمت الموافقة على طلب التطوع", id);
  };

  const rejectVolunteer = async () => {
    // TODO: بعد الربط استخدمي هذا الكود
    // const reasonText = prompt("الرجاء إدخال سبب الرفض:");
    // if (!reasonText) return;
    // try {
    //   await rejectRequest({ type: "volunteer", id, reason: reasonText }).unwrap();
    //   alert("تم رفض طلب التطوع");
    // } catch (error) {
    //   console.error("Error rejecting request:", error);
    //   alert("حدث خطأ في رفض الطلب");
    // }

    console.log("تم رفض طلب التطوع", id);
  };

  // TODO: بعد الربط شغلي حالة التحميل والخطأ
  // if (isLoading) {
  //   return (
  //     <div className="bg-white-color h-screen p-6">
  //       <div className="container text-center">
  //         <p className="text-gray-500 mt-20">جاري تحميل بيانات الطلب...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="bg-white-color h-screen p-6">
  //       <div className="container text-center">
  //         <p className="text-red-500 mt-20">حدث خطأ في تحميل بيانات الطلب</p>
  //         <button 
  //           onClick={refetch}
  //           className="bg-main-color text-white px-4 py-2 rounded mt-4"
  //         >
  //           إعادة المحاولة
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  if (!request) return <p className="text-center text-gray-500 mt-20">جاري التحميل...</p>;

  return (
    <div className="bg-white-color min-h-screen p-6">
      <div className="container">
        <h1 className="text-3xl text-second-color font-bold mb-6">تفاصيل طلب التطوع</h1>
        <VolunteerRequestDetails
          request={request}
          onApprove={approveVolunteer}
          onReject={rejectVolunteer}
        />
      </div>
    </div>
  );
};

export default VolunteerRequestDetailsPage;