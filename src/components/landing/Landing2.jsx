import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Header from "../Layout/Header";
import About from "./About";
import Partners from "./Partners";
import Services from "./Services";
import Stages from "./Stages";
import Exhibition from "./Exhibition";
import Activities from "./Activities";
import Footer from "../Layout/Footer";

const navLinkOptions = [
  { label: "من نحن", to: "/about", scrollId: "about" },
  { label: "المعرض", to: "/about", scrollId: "exhibition" },
  { label: "النشاطات", to: "/about", scrollId: "activities" },
  { label: "كن شريك نجاحنا", to: "/about", scrollId: "partners" },
  { label: "الخدمات", to: "/about", scrollId: "services" },
  { label: "مراحل الاحتضان", to: "/about", scrollId: "stages" },

]

const Landing2 = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "")
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
  }, [location])
return (
   <div className="w-full overflow-x-hidden"> 

    <MainLayout header={<Header navOptions={navLinkOptions} />} footer={<Footer />}>
      <About id="about" />
      <Exhibition id="exhibition" />
      <Activities id="activities" />
      <Partners id="partners" />
      <Services id="services" />
      <Stages id="stages" />

    </MainLayout>
    </div>
  )
}

export default Landing2