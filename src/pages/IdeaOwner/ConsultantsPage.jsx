import CategoryGrid from "../../components/CategoryGrid"
import { GiInjustice } from "react-icons/gi";
import { RiBrushAiLine } from "react-icons/ri";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdWorkOutline } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
const ConsultantsPage = () => {
  const categories = [
    { id: "uiux", label: "UI UX", icon: <RiBrushAiLine /> },
    { id: "legal", label: "قانوني", icon: <GiInjustice /> },
    { id: "marketing", label: "تسويق", icon: <FaArrowTrendUp /> },
    { id: "business", label: "إدارة أعمال", icon: <MdWorkOutline /> },
    { id: "frontend", label: "Front End", icon: <FaLaptopCode /> },
    { id: "backend", label: "Back End", icon: <FaLaptopCode /> },
  ]

  return (
    <div className="container py-6">

      {/* عنوان الصفحة */}
      <h2 className="text-xl font-bold mb-4">اختر الاختصاص</h2>

      {/* مكوّن الفئات */}
      <CategoryGrid categories={categories} />

      {/* زر طلب مستشار آخر */}
      <div className="flex justify-center mt-6">
        <button className="bg-main-color text-white px-6 py-3 rounded-xl text-lg">
          طلب مستشار آخر
        </button>
      </div>
    </div>
  )
}

export default ConsultantsPage
