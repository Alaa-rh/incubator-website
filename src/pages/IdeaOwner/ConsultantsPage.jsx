import CategoryGrid from "../../components/CategoryGrid"
import { GiInjustice } from "react-icons/gi";
import { RiBrushAiLine } from "react-icons/ri";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdWorkOutline } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import Button from "../../components/Button";
const ConsultantsPage = () => {
  const categories = [
  { id: "uiux", label: "UI UX", icon: <RiBrushAiLine />, link: "/consultantslist/uiux" },
  { id: "legal", label: "قانوني", icon: <GiInjustice />, link: "/consultantslist/legal" },
  { id: "marketing", label: "تسويق", icon: <FaArrowTrendUp />, link: "/consultantslist/marketing" },
  { id: "business", label: "إدارة أعمال", icon: <MdWorkOutline />, link: "/consultantslist/business" },
  { id: "frontend", label: "Front End", icon: <FaLaptopCode />, link: "/consultantslist/frontend" },
  { id: "backend", label: "Back End", icon: <FaLaptopCode />, link: "/consultantslist/backend" },
]



  return (
    <div>
       {/* عنوان الصفحة */}
      <h1 className='text-3xl font-bold text-second-color pt-10 mr-25 mb-20'>اختر الاختصاص</h1>
      <div className="container">

      {/* مكوّن الفئات */}
      <CategoryGrid items={categories} />

      {/* زر طلب مستشار آخر */}
      <div className="flex justify-center mt-6">
        <Button label="طلب مستشار آخر" className="bg-main-color"/>
      </div>
    </div>    
  </div>
  )
}

export default ConsultantsPage
