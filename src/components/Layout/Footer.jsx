import React from "react"
import NavLinksGroup from "../NavLinksGroup"
import logo from "../../assets/images/logo.png"
import Facebook from "../../assets/images/Facebook.png"
import Google from "../../assets/images/Google.jpeg"
import Instagram from "../../assets/images/Instagram.jpeg"
const quickLinks = [
  { label: "الصفحة الرئيسية", to: "/", scrollId: "home" },
  { label: "من نحن", to: "/about", scrollId: "about" },
  { label: "الأهداف", to: "/", scrollId: "goals" },
  { label: "أدوار الحاضنة", to: "/", scrollId: "roles" },
  { label: "كن شريكاً بنجاحنا", to: "/", scrollId: "partners" },
  { label: "المعرض", to: "/about", scrollId: "exhibition" },
  { label: "مراحل الاحتضان", to: "/", scrollId: "stages" },
  { label: "الخدمات", to: "/about", scrollId: "services" },
  { label: "الشروط والأحكام", to: "/", scrollId: "terms" },
  { label: "الأسئلة الشائعة", to: "/", scrollId: "faq" }
]

const joinLinks = [
  { label: "تسجيل الدخول", to: "/login" },
  { label: "أنشئ حسابك الآن", to: "/signup" },
  { label: "تطوع الآن", to: "/volunteer" },
  { label: "قدم فكرتك", to: "/submit-idea" }
]

const Footer = () => {
  return (
    <footer className="bg-main-color text-white py-10 px-6 font-bold">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
         {/*اللوغو و التواصل*/}
        <div>
            <img src={logo} alt="Logo" className="w-45 h-35 mb-6" />
            <p> تواصل معنا على الرقم : <br /> 0989838930</p>
            <div className="flex gap-3 mt-10">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={Facebook} alt="faceBook-Logo" className="w-10 h-10" />
              </a>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <img src={Google} alt="Google-Logo"  className="w-10 h-10"/>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram-Logo"  className="w-12 h-12"/>
              </a>
            </div>
        </div> 
        {/* انضم إلينا */}
        <div>
          <h3 className="text-second-color text-[30px] text-center text-lg font-bold mb-2">انضم إلينا</h3>
          <NavLinksGroup options={joinLinks} className="flex flex-col items-center gap-2" />
        </div> 
        {/* الوصول السريع */}
        <div>
          <h3 className="text-second-color text-[30px] text-center text-lg font-bold mb-2">الوصول السريع</h3>
          <NavLinksGroup options={quickLinks} className="flex flex-col items-center gap-2" />
        </div>
        {/* العنوان */}
        <div className="text-center">
          <h3 className="text-second-color text-[30px] font-bold mb-2">العنوان</h3>
          <p>سوريا، جامعة حمص<br />خلف كلية العلوم</p>
        </div>
      
        </div>
    </footer>
  )
}

export default Footer