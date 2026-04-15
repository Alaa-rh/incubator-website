import { useState } from "react";
import Modal from "../../Modal";
import Button from "../../Button";
import girl from "../../../assets/images/girl.jpg";
import Checkbox from "../../CheckBox";
import Input from "../../Input";
import NavLinkUniversal from "../../NavLinkUniversal";

const UserHeaderActions = ({ user }) => {
  // حالات فتح/إغلاق المودالات
  const [freezeOpen, setFreezeOpen] = useState(false);
  const [activateOpen, setActivateOpen] = useState(false);
  const [editRoleOpen, setEditRoleOpen] = useState(false);
  const [notifyOpen, setNotifyOpen] = useState(false);

  return (
    <>
      <div className="mb-8">
        
        {/* معلومات المستخدم */}
        <div className="flex items-center gap-4 mb-2 py-4">
          <img
            src={girl}
            alt="avatar"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.role}</p>
          </div>
        </div>

        {/* الأزرار */}
        <div className="flex justify-between items-center">

          <Button label=" تعديل الدور" className="bg-main-color" onClick={() => setEditRoleOpen(true)}/>
           
          <Button label="ارسال اشعار" className="bg-main-color" onClick={() => setNotifyOpen(true)}/>

          <Button label="تفعيل الحساب" className="bg-green-color" onClick={() => setActivateOpen(true)}/>
          
          <Button label="تجميد الحساب" className="bg-red-color" onClick={() => setFreezeOpen(true)}/>

          {/* يظهر فقط للمتطوع */}
          {user.role === "متطوع" && (
           <NavLinkUniversal 
              label={<Button label="طلب التطوع" className="bg-main-color" />}
              to={`/admin/details/${user.id}?type="request"`}
            />
)}

        </div>
      </div>

      {/* مودال تجميد الحساب */}
      {/* ------------------------- */}
      <Modal
        isOpen={freezeOpen}
        onClose={() => setFreezeOpen(false)}
        title="هل أنت متأكد من تجميد الحساب؟"
        footer={
          <div className="flex gap-3">
            <Button label="تجميد" className="bg-red-color w-30"/>
            <button
              onClick={() => setFreezeOpen(false)}
              className="w-30 border border-second-color px-4 rounded"
            >
              إلغاء
            </button>
          </div>
        }
      >
        <p>سيتم تجميد حساب المستخدم ولن يتمكن من تسجيل الدخول.</p>
      </Modal>

      {/* مودال تفعيل الحساب */}
      {/* ------------------------- */}
      <Modal
        isOpen={activateOpen}
        onClose={() => setActivateOpen(false)}
        title="تفعيل الحساب"
        footer={
          <div className="flex gap-3">
            <Button label="تفعيل" className="bg-green-color w-30"/>
            <button
              onClick={() => setActivateOpen(false)}
              className="w-30 border border-second-color px-4 rounded"
            >
              إلغاء
            </button>
          </div>
        }
      >
        <p>سيتم تفعيل حساب المستخدم ويمكنه تسجيل الدخول.</p>
      </Modal>

      {/* مودال تعديل الدور */}
      {/* ------------------------- */}
      <Modal
        isOpen={editRoleOpen}
        onClose={() => setEditRoleOpen(false)}
        title="تعديل الدور"
        footer={
          <Button label="حفظ التعديلات" className="bg-main-color"/>
        }
      >
        <p className="mb-4 text-black font-medium">يرجى اختيار الدور الجديد للمستخدم {user.name} :</p>

        <div className="flex flex-col gap-2 text-right font-bold">
            <Checkbox label="مدير" name="manager" /> 
            <Checkbox label="زائر" name="visitor" /> 
            <Checkbox label="متطوع" name="volunteer" /> 
            <Checkbox label="صاحب الفكرة" name="ideaOwner" /> 
            <Checkbox label="محتضن" name="incubator" /> 

        </div>
      </Modal>

      {/* مودال إرسال إشعار */}
      {/* ------------------------- */}
      <Modal
        isOpen={notifyOpen}
        onClose={() => setNotifyOpen(false)}
        title="إرسال إشعار"
        footer={
          <Button label="إرسال" className="bg-main-color"/>
        }
      >
      <Input type="text" name="text" label="نص الإشعار" />
      </Modal>
    </>
  );
};

export default UserHeaderActions;
