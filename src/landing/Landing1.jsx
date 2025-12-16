import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import Header from "../components/Layout/Header";

const navLinkOptions = [
  { label: "الصفحة الرئيسية", to: "/", scrollId: "home" },
  { label: "من نحن", to: "/about", scrollId: "about" },
  { label: "الأهداف", to: "/", scrollId: "goals" },
  { label: "أدوار الحاضنة", to: "/", scrollId: "roles" },
  { label: "الأسئلة الشائعة", to: "/", scrollId: "faq" },
  { label: "الشروط والأحكام", to: "/", scrollId: "terms" },
]

const Landing1 = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "")
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
  }, [location])

  return (
    <>
      <Layout header={<Header navOptions={navLinkOptions} />}>
     
    </Layout>
    </>
  )
}

export default Landing1