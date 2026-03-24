import DataTable from "../DataTable";
import UserRowActions from "./UserRowActions";

const UsersTable = ({ roleFilter }) => {
  const users = [
    {
      id: 1,
      name: "أحمد المحمد",
      email: "ahmadalmo12@gmail.com",
      joinedAt: "12/2/2024",
      status: "نشط",
      role: "محتضن",
    },
    {
      id: 2,
      name: "أحمد المحمد",
      email: "ahmadalmo12@gmail.com",
      joinedAt: "12/2/2024",
      status: "نشط",
      role: "متطوع",
    },
    {
      id: 3,
      name: "أحمد المحمد",
      email: "ahmadalmo12@gmail.com",
      joinedAt: "12/2/2024",
      status: "نشط",
      role: "زائر",
    },
    {
      id: 4,
      name: "أحمد المحمد",
      email: "ahmadalmo12@gmail.com",
      joinedAt: "12/2/2024",
      status: "نشط",
      role: "متخرج",
    },
    {
      id: 5,
      name: "أحمد المحمد",
      email: "ahmadalmo12@gmail.com",
      joinedAt: "12/2/2024",
      status: "نشط",
      role: "صاحب فكرة",
    },
  ];

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
