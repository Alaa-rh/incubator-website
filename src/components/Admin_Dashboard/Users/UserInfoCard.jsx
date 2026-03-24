const UserInfoCard = ({ user }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
 
      <div className="space-y-15">

        <div className="flex justify-between items-center">
        {/* البريد الإلكتروني */}
        <div>
          <p className="text-xl font-bold">البريد الإلكتروني</p>
          <p className="font-medium">{user.email}</p>
        </div>

        {/* الرقم */}
        <div>
          <p className="text-xl font-bold">الرقم</p>
          <p className="font-medium">{user.phone}</p>
        </div>

        {/* تاريخ الانضمام */}
        <div>
          <p className="text-xl font-bold">تاريخ الانضمام</p>
          <p className="font-medium">{user.joinedAt}</p>
        </div>
        </div>

        <div className="flex justify-between items-center">
        {/* الأدوار التي قام بها */}
        <div>
          <p className="text-xl font-bold">الأدوار التي قام بها</p>
          <p className="font-medium">{user.rolesHistory.join("، ")}</p>
        </div>

        {/* الموقع */}
        <div>
          <p className="text-xl font-bold">الموقع</p>
          <p className="font-medium">{user.location}</p>
        </div>

        {/* آخر نشاط */}
        <div>
          <p className="text-xl font-bold">آخر نشاط</p>
          <p className="font-medium">{user.lastActive}</p>
        </div>

        {/* حالة الحساب */}
        <div>
          <p className="text-xl font-bold">حالة الحساب</p>
          <p className="font-medium">{user.status}</p>
        </div>
        </div>

      </div>
    </div>
  );
};

export default UserInfoCard;
