import { useParams } from "react-router-dom";
import UserHeaderActions from "../../components/Admin_Dashboard/Users/UserHeaderActions";
import UserInfoCard from "../../components/Admin_Dashboard/Users/UserInfoCard";
import UserMessagesSection from "../../components/Admin_Dashboard/Users/UserMessageSection";
import VolunteerWorkshopsSection from "../../components/Admin_Dashboard/Users/VolunteerWorkshopSection";
import EvaluationSection from "../../components/Admin_Dashboard/Users/EvaluationSection";

const UserDetailsPage = () => {
  const { id } = useParams();
  //   بيانات تجريبية
  const user = {
    id,
    name: "مايا المحمد",
    role: "مختضن", //"متطوع" - "صاحب فكرة" - "زائر" - "متخرج"
    email: "ahmadalmo12@gmail.com",
    phone: "093883273883",
    joinedAt: "12/3/2025",
    rolesHistory: ["متطوع", "مختص"],
    location: "حمص",
    lastActive: "الأمس",
    status: "نشط",

    // المراسلات
    lastMessage: "هنا يكتب رسالة المستخدم والتفاصيل تكتب هنا",

    // المتطوع
    workshops: [
      {
        taskName: "روبوت سابك",
        type: "ورشة عمل",
        assignedAt: "12/2/2024",
        status: "قيد المراجعة",
      },
      {
        taskName: "روبوت سابك",
        type: "ورشة عمل",
        assignedAt: "12/2/2024",
        status: "مرفوضة",
      },
      {
        taskName: "روبوت سابك",
        type: "ورشة عمل",
        assignedAt: "12/2/2024",
        status: "مقبولة",
      },
    ],

    // المحتضن + صاحب فكرة
    evaluations: [
      { evaluator: "سهيل أحمد", score: 40, note: "جيد جداً" },
      { evaluator: "سهيل أحمد", score: 40, note: "جيد جداً" },
      { evaluator: "سهيل أحمد", score: 40, note: "جيد جداً" },
    ],

    // المحتضن فقط
    notes: [
      "تكتب هنا الملاحظة الأولى",
      "تكتب هنا الملاحظة الأولى",
      "تكتب هنا الملاحظة الأولى",
    ],

    // صاحب فكرة فقط
    attendanceRate: 75,

    // مشروع مشترك بين المحتضن وصاحب الفكرة
    project: { id: 22 },
  };

  return (
    <div className="bg-white-color min-h-screen pb-6">
    <div className="container">

      {/* الهيدر */}
      <UserHeaderActions user={user} />

      {/* معلومات الحساب */}
      <UserInfoCard user={user} />

      {/* المراسلات */}
      <UserMessagesSection user={user} />

      {/* حسب الدور */}
      {user.role === "متطوع" && (
        <VolunteerWorkshopsSection workshops={user.workshops} />
      )}

      {user.role === "محتضن" && (
        <EvaluationSection
          evaluations={user.evaluations}
          notes={user.notes}
          project={user.project}
        />
      )}

      {user.role === "صاحب فكرة" && (
        <EvaluationSection
          evaluations={user.evaluations}
          attendanceRate={user.attendanceRate}
          project={user.project}
        />
      )}
    </div>
    </div>
  );
};

export default UserDetailsPage;
