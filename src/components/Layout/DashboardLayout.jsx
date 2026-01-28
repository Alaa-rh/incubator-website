import Sidebar from "../components/Sidebar"

const DashboardLayout = ({ role, userName }) => {
  return (
    <div className="flex">
      <Sidebar role={role} username={userName} />
      <main className="ml-64 p-6 w-full">
        <Outlet /> 
      </main>
    </div>
  )
}
export default DashboardLayout