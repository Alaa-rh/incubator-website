import Sidebar from "../Sidebar"
import { Outlet } from "react-router-dom"

const DashboardLayout = ({ role, userName, email }) => {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        <Sidebar role={role} userName={userName} email={email} />
      </div>

      {/* Page Content */}
      <main className="flex-grow bg-white-color mr-15 w-full h-screen ">
        <Outlet />
      </main>

    </div>
  )
}

export default DashboardLayout
