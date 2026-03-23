import AdminSidebar from "../AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = ({adminName, email}) => {
  return (
    <div className="flex">

      {/* Sidebar */}
      <AdminSidebar adminName={adminName} email={email}/>
      
        <main className="flex-grow bg-white-color mr-40 w-full h-min-screen ">
        <Outlet context={{}} />
        </main>
      </div>
  );
};

export default AdminLayout;
