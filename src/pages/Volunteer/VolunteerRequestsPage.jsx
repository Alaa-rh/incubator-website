import React, { useState } from "react";
import CategoryFilterBar from "../../components/CategoryFilterBar";
import { LuFileStack } from "react-icons/lu";
import ConsultationRequestCard from "../../components/ConsultationRequestCard";
import VolunteerRequestCard from "../../components/VolunteerRequestCard";
import { FaRegHandshake } from "react-icons/fa";
import { MdOutlinePersonSearch } from "react-icons/md";
// import { useGetAllRequestsQuery } from "../../api/endpoints/requestsApi";
// import { useApproveMutation, useRejectMutation } from "../../api/endpoints/approvalApi";

const categories = [ 
  { id: "all", label: "الكل", icon: <LuFileStack /> },
  { id: "consultations", label: "طلبات الاستشارة", icon: <MdOutlinePersonSearch /> },
  { id: "volunteers", label: "طلبات التطوع", icon: <FaRegHandshake /> },
];

const VolunteerRequestsPage = () => {
  const [selected, setSelected] = useState("all");

  // TODO: بعد الربط هذا السطر بدل البيانات الثابتة
  // const { data: requestsData, isLoading, error, refetch } = useGetAllRequestsQuery();
  // const [approveRequest] = useApproveMutation();
  // const [rejectRequest] = useRejectMutation();

  // -----------------------------
  // بيانات ثابتة حالياً 
  // -----------------------------
  const consultationRequests = [
    {
      id: 1,
      requester_name: "مايا المحمد",
      requester_email: "maya123@gmail.com",
      required_skill: "UI UX",
      idea_title: "باسم المشروع",
      help_type: "متابعة دورية",
      description: "شرح بسيط من صاحب الطلب عن ماذا يريد",
      status: "consultation",
    },
    {
      id: 2,
      requester_name: "مايا المحمد",
      requester_email: "maya123@gmail.com",
      required_skill: "UI UX",
      idea_title: "باسم المشروع",
      help_type: "متابعة دورية",
      description: "شرح بسيط من صاحب الطلب عن ماذا يريد",
      status: "consultation",
    },
  ];

  const volunteerRequests = [
    {
      id: 3,
      name: "مايا المحمد",
      email: "maya123@gmail.com",
      skill: "UI UX",
      projectTitle: "باسم المشروع",
      description: "شرح بسيط من صاحب الطلب عن ماذا يريد",
      type: "volunteer",
    },
    {
      id: 4,
      name: "مايا المحمد",
      email: "maya123@gmail.com",
      skill: "UI UX",
      projectTitle: "باسم المشروع",
      description: "شرح بسيط من صاحب الطلب عن ماذا يريد",
      type: "volunteer",
    },
  ];

  // TODO: بعد الربط هذا الكود واستبدلي البيانات الثابتة
  // const consultationRequests = requestsData?.consultations || [];
  // const volunteerRequests = requestsData?.volunteers || [];

  // دوال الموافقة والرفض
  const handleApprove = async (id, status) => {
    // TODO: بعد الربط هذا الكود
    // try {
    //   await approveRequest({ status, id }).unwrap();
    //   alert(`تم قبول ${status === "consultation" ? "طلب الاستشارة" : "طلب التطوع"} بنجاح`);
    // } catch (error) {
    //   console.error("Error approving request:", error);
    //   alert("حدث خطأ في قبول الطلب");
    // }

    console.log("approve", id, status);
  };

  const handleReject = async (id, status) => {
    // TODO: بعد الربط هذا الكود
    // const reasonText = prompt("الرجاء إدخال سبب الرفض:");
    // if (!reasonText) return;
    // try {
    //   await rejectRequest({ status, id, reason: reasonText }).unwrap();
    //   alert(`تم رفض ${status === "consultation" ? "طلب الاستشارة" : "طلب التطوع"}`);
    // } catch (error) {
    //   console.error("Error rejecting request:", error);
    //   alert("حدث خطأ في رفض الطلب");
    // }

    console.log("reject", id, status);
  };

  // TODO: بعد الربط شغلي حالة التحميل والخطأ
  // if (isLoading) {
  //   return (
  //     <div className="bg-white-color h-screen p-6">
  //       <div className="container text-center">
  //         <p className="text-gray-500 mt-20">جاري تحميل الطلبات...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="bg-white-color h-screen p-6">
  //       <div className="container text-center">
  //         <p className="text-red-500 mt-20">حدث خطأ في تحميل الطلبات</p>
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

     return (  <div className=" min-h-screen bg-gray-100 p-6">
      <div className="container ">

        {/* شريط الفئات */}
        <CategoryFilterBar
          categories={categories}
          selected={selected}
          onSelect={setSelected}
          className="bg-white-color"
        />

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* طلبات الاستشارة */}
          {selected === "consultations" &&
            consultationRequests.map((req) => (
              <ConsultationRequestCard
                key={req.id}
                request={req}
                onApprove={() => handleApprove(req.id, "consultation")}
                onReject={() => handleReject(req.id, "consultation")}
                mode="request"
              />
            ))}

          {/* طلبات التطوع */}
          {selected === "volunteers" &&
            volunteerRequests.map((req) => (
              <VolunteerRequestCard 
                key={req.id} 
                request={req}
                onApprove={() => handleApprove(req.id, "volunteer")}
                onReject={() => handleReject(req.id, "volunteer")}
              />
            ))}

          {/* الكل */}
          {selected === "all" && (
            <>
              {consultationRequests.map((req) => (
                <ConsultationRequestCard
                  key={req.id}
                  request={req}
                  onApprove={() => handleApprove(req.id, "consultation")}
                  onReject={() => handleReject(req.id, "consultation")}
                  mode="request"
                />
              ))}

              {volunteerRequests.map((req) => (
                <VolunteerRequestCard 
                  key={req.id} 
                  request={req}
                  onApprove={() => handleApprove(req.id, "volunteer")}
                  onReject={() => handleReject(req.id, "volunteer")}
                />
              ))}
            </>
          )}
        </div>

        {/* في حال عدم وجود طلبات */}
        {selected === "all" && 
          consultationRequests.length === 0 && 
          volunteerRequests.length === 0 && (
            <p className="text-center text-gray-500 mt-20">لا توجد طلبات حالياً</p>
          )}
        
        {selected === "consultations" && consultationRequests.length === 0 && (
          <p className="text-center text-gray-500 mt-20">لا توجد طلبات استشارة حالياً</p>
        )}
        
        {selected === "volunteers" && volunteerRequests.length === 0 && (
          <p className="text-center text-gray-500 mt-20">لا توجد طلبات تطوع حالياً</p>
        )}
      </div>
    </div>
  ); 
};

export default VolunteerRequestsPage;