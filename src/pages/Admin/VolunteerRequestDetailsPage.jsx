import InfoRow from "../../components/InfoRow";
import ApprovalActions from "../../components/ApprovalActions";

const VolunteerRequestDetailsPage = () => {

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
    location: "حصة وادي الذهب.",
  };

  const handleApprove = async () => {
    console.log("تمت الموافقة على طلب التطوع");
  };

  const handleReject = async () => {
    console.log("تم رفض طلب التطوع");
  };

  return (
    <div className="p-6 bg-white-color min-h-screen">

      <h2 className="text-3xl font-bold text-second-color mb-6">طلب التطوع</h2>
      <div className="container">
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

      {/* أزرار الموافقة والرفض */}
      <ApprovalActions
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
    </div>
  );
};

export default VolunteerRequestDetailsPage;
