import { useState } from "react";
import UserFilters from "../../components/Admin_Dashboard/Users/UserFilters";
import UsersTable from "../../components/Admin_Dashboard/Users/UsersTable";
import AdminNavbar from "../../components/AdminNavbar";
import Modal from "../../components/Modal";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Input from "../../components/Input";

const UsersPage = () => {
  const [roleFilter, setRoleFilter] = useState("all");
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white-color h-screen">
         <AdminNavbar 
        BtnLabel="إضافة مستخدم"
        onBtnClick={() => setOpen(true)}
      />
      <Modal 
      isOpen={open}
      onClose={() => setOpen(false)}
      title=""
      footer={<Button label="إضافة" className="bg-main-color ml-2" />}>
        <form className="flex flex-col gap-4">
            <Input label="اسم المستخدم الكامل" type="text" placeholder="اسم المستخدم" />
            <Input label="البريد الإلكتروني" type="email" placeholder="البريد الإلكتروني" />
            <Input label="كلمة المرور الأولية" type="password" placeholder="كلمة المرور" />
            <Select
            label="الدور"
            options={[
              { value: "زائر", label: "زائر" },
              { value: "متطوع", label: "متطوع" },
              { value: "محتضن", label: "محتضن" },
              { value: "مقيم", label: "مقيم" },
              { value: "صاحب فكرة", label: "صاحب فكرة" },
            ]}
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          />
        </form>
      </Modal>
    <div className="container mt-30">
      <h2 className="text-2xl font-semibold mb-6">إدارة المستخدمين والأدوار</h2>

      <UserFilters
        roleFilter={roleFilter}
        setRoleFilter={setRoleFilter}
      />

      <UsersTable
        roleFilter={roleFilter}
      />
    </div>
    </div>
  );
};

export default UsersPage;
