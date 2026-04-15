import Sidebar from "../Sidebar"
import { Outlet } from "react-router-dom"

const DashboardLayout = ({ roles, userName, email }) => {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="">
        <Sidebar roles={roles} userName={userName} email={email} />
      </div>

      {/* Page Content */}
      <main className="flex-grow bg-white-color lg:mr-15 w-full h-screen ">
        <Outlet />
      </main>

    </div>
  )
}

export default DashboardLayout
