import DataTable from "../DataTable";
import UserRowActions from "./UserRowActions";

const UsersTable = ({ roleFilter, users = [] }) => {

  // فلترة حسب الدور
  const filtered =
    roleFilter === "all"
      ? users
      : users.filter((u) => u.role === roleFilter);

  const columns = [
    {
      key: "actions",
      label: "الإجراءات",
      render: (user) => <UserRowActions user={user} />,
    },
    { key: "status", label: "حالة الحساب" },
    { key: "role", label: "الدور الحالي" },
    { key: "joinedAt", label: "تاريخ الانضمام" },
    { key: "email", label: "البريد الإلكتروني" },
    { key: "name", label: "الاسم" },
  ];

  return <DataTable columns={columns} data={filtered} />;
};

export default UsersTable;
