import { useSearchParams } from "react-router-dom";
import InfoRow from "../../components/InfoRow";
import ApprovalActions from "../../components/ApprovalActions";
import Button from "../../components/Button";
import { useState } from "react";
import Input from "../../components/Input";
import Modal from "../../components/Modal";

const UserDetailsPage = () => {
  const [params] = useSearchParams();
  const type = params.get("type"); // volunteer | evaluator | request
  const [EvaluateOpen, setEvaluateOpen] = useState(false);
  const [RemoveEvaluatorOpen, setRemoveEvaluatorOpen] = useState(false);

  // بيانات تجريبية
  const request = {
    experienceFields: "التسويق الرقمي، إدارة المشاريع الصغيرة.",
    yearsOfExperience: "5 سنوات خبرة جيدة في مجاله.",
    currentJob: "وكالة إعلانات الرسم وهمياً بدل على خلفية عمل مستقرة.",
    certificates: "شهادة Google Ads، شهادة PMP أساسية.",
    portfolioLink: "https://behance.net/example",
    weeklyAvailability: "8 ساعات أسبوعياً (مساء الإثنين والأربعاء)",
    consultationDetails:
      "أستطيع تقديم استشارات بالرسائل على المنصة أو في الحاضنة",
    volunteerGoal: "المساهمة في دعم المشاريع الناشئة.",
    emergencyPhone: "05xxxxxxxx رقم احتياطي للتواصل السريع.",
    location: "حمص وادي الذهب.",
  };

  const handleApprove = async () => {
    console.log("تمت الموافقة على طلب التطوع");
  };

  const handleReject = async () => {
    console.log("تم رفض طلب التطوع");
  };

  return (
    <div className="p-6 bg-white-color min-h-screen">
     <div className="container">
      <h2 className="text-3xl font-bold text-second-color mb-6">
        {type === "request"
          ? "طلب التطوع"
          : type === "volunteer"
          ? "تفاصيل المتطوع"
          : type === "evaluator"
          ? "تفاصيل المقيم"
          : "طلب التطوع"}
      </h2>


        {/* القسم الأول */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
          <InfoRow label="مجالات الخبرة">
            {request.experienceFields}
          </InfoRow>

          <InfoRow label="عدد سنوات الخبرة">
            {request.yearsOfExperience}
          </InfoRow>

          <InfoRow label="جهة العمل الحالية">
            {request.currentJob}
          </InfoRow>

          <InfoRow label="الشهادات الحاصل عليها">
            {request.certificates}
          </InfoRow>
        </div>

        {/* القسم الثاني */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
          <InfoRow label="رابط الملف المهني">
            <a
              href={request.portfolioLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-main-color underline"
            >
              {request.portfolioLink}
            </a>
          </InfoRow>

          <InfoRow label="أوقات الإتاحة الأسبوعية">
            {request.weeklyAvailability}
          </InfoRow>

          <InfoRow label="تفاصيل الاستشارة">
            {request.consultationDetails}
          </InfoRow>
        </div>

        {/* القسم الثالث */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
          <InfoRow label="الهدف من التطوع">
            {request.volunteerGoal}
          </InfoRow>

          <InfoRow label="رقم التواصل العاجل">
            {request.emergencyPhone}
          </InfoRow>

          <InfoRow label="السكن">
            {request.location}
          </InfoRow>
        </div>

        {/* الأزرار حسب النوع */}
        {type === "request" && (
          <ApprovalActions
            onApprove={handleApprove}
            onReject={handleReject}
          />
        )}

        {type === "volunteer" && (
          <Button
            onClick={() => setEvaluateOpen(true)}
            label="طلب تقييم"
            className="bg-main-color"
          />
        )}

        {type === "evaluator" && (
          <Button
            onClick={() => setRemoveEvaluatorOpen(true)}
            label="إزالة تقييم"
            className="bg-main-color"
          />
        )}
      </div>
      <Modal isOpen={EvaluateOpen} 
      onClose={() => setEvaluateOpen(false)}
      title=" إرسال طلب للتقييم"
      footer={<Button label="ارسال" className="bg-main-color px-8" />}>
        <form action="" className="flex flex-col gap-4">
            <Input type= "text" label="وصف الطلب"/>
            <Input type= "date" label="تاريخ اللجنة"/>
            <Input type="text" label="المدة الزمنية المتوقعة"/>
            <Input type="text" label="المهمة المطلوبة"/>
        </form>
        </Modal>
        <Modal isOpen={RemoveEvaluatorOpen} 
        onClose={() => setRemoveEvaluatorOpen(false)}
        title="إزالة التقييم"
        footer={
          <>
        <Button label="ارسال" className="bg-main-color ml-4" />
        <Button label="إلغاء" className="bg-gray-600"/>
        </>
        
        }>
          <p>هل أنت متأكد من إزالة دور التقييم للمقيم ؟</p>
          </Modal>
    </div>
  );
};

export default UserDetailsPage;
