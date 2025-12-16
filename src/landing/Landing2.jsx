import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import Header from "../components/Layout/Header";

const navLinkOptions = [
  { label: "من نحن", to: "/about", scrollId: "about" },
  { label: "المعرض", to: "/about", scrollId: "exhibition" },
  { label: "الخدمات", to: "/about", scrollId: "services" },
  { label: "مراحل الاحتضان", to: "/about", scrollId: "stages" },
  { label: "كن شريك نجاحنا", to: "/about", scrollId: "partners" },


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
    <Layout header={<Header navOptions={navLinkOptions} />}>
      
    </Layout>
  )
}

export default Landing2