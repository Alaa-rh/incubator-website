import { BsPersonFillGear, BsPersonCircle, BsPersonWorkspace} from "react-icons/bs";  
import { IoCall } from "react-icons/io5"; 
import { GrGroup } from "react-icons/gr";
import { MdOutlineHomeWork } from "react-icons/md";
 export const RoleOptions ={
 visitor: [
    { label: "تعديل الملف الشخصي", link: "/profile", icon: <BsPersonCircle /> },
    { label: "تواصل معنا", link: "/contact", icon: <IoCall /> },
    { label: "إعدادات الحساب", link: "/settings", icon: <BsPersonFillGear /> },
  ],
ideaOwner: [
    { label: "تعديل الملف الشخصي", link: "/profile", icon: <BsPersonCircle /> },
    { label: "تواصل معنا", link: "/contact", icon: <IoCall /> },
    { label: "إعدادات الحساب", link: "/settings", icon: <BsPersonFillGear /> },
    {label: "المستشارين", link: "/consultants", icon: <BsPersonWorkspace />},
    {label:"الفريق", link: "/team", icon: <GrGroup />}
  ],
volunteer: [
    { label: "تعديل الملف الشخصي", link: "/profile", icon: <BsPersonCircle /> },
    { label: "تواصل معنا", link: "/contact", icon: <IoCall /> },
    { label: "مركز التطوع", link: "/volunteer-center", icon: <MdOutlineHomeWork /> },
    { label: "إعدادات الحساب", link: "/settings", icon: <BsPersonFillGear /> },
  ],
}