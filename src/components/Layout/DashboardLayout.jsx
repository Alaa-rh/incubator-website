import { useEffect, useState } from "react"
import axios from "axios"
import Sidebar from "../Sidebar"
import LoadingOverlay from "../LoadingOverlay"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  const [role, setRole] = useState(null)
  const [userName, setUserName] = useState(null)
  const [email, setEmail] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("/api/me").then(res => {
      setRole(res.data.role)
      setUserName(res.data.name)
      setEmail(res.data.email)
      setLoading(false)
    })
  }, [])
  return (
    <div className="flex min-h-screen">

      {/* Sidebar ثابت دائماً */}
      <div className="w-64 bg-white shadow-sm">
        {loading ? <LoadingOverlay /> : <Sidebar role={role} userName={userName} email={email} />}
      </div>

      {/* محتوى الصفحات */}
      <main className="flex-grow bg-white-color mr-15 w-full h-screen ">
        <Outlet />
      </main>

    </div>
  )
}

export default DashboardLayout