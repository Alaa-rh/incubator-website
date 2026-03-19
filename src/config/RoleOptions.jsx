import { BsPersonFillGear, BsPersonCircle, BsPersonWorkspace } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { MdOutlineHomeWork } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";

const baseRoles = {
  visitor: [
    { label: "تعديل الملف الشخصي", link: "/profile", icon: <BsPersonCircle /> },
    { label: "تواصل معنا", link: "/contact", icon: <IoCall /> },
    { label: "إعدادات الحساب", link: "/settings", icon: <BsPersonFillGear /> },
  ],

  ideaOwner: [
    { label: "تعديل الملف الشخصي", link: "/profile", icon: <BsPersonCircle /> },
    { label: "تواصل معنا", link: "/contact", icon: <IoCall /> },
    { label: "المستشارين", link: "/consultants", icon: <BsPersonWorkspace /> },
    { label: "الفريق", link: "/team", icon: <GrGroup /> },
    { label: "إعدادات الحساب", link: "/settings", icon: <BsPersonFillGear /> },
    
  ],

  volunteer: [
    { label: "تعديل الملف الشخصي", link: "/volunteer-profile", icon: <BsPersonCircle /> },
    { label: "تواصل معنا", link: "/contact", icon: <IoCall /> },
    { label: "مركز التطوع", link: "/volunteer-center", icon: <MdOutlineHomeWork /> },
    { label: "إعدادات الحساب", link: "/settings", icon: <BsPersonFillGear /> },
  ],
};

export const RoleOptions = {
  ...baseRoles,

  volunteer_incubated: [
    ...baseRoles.volunteer,
    { label: "المستشارين", link: "/consultants", icon: <BsPersonWorkspace /> },
    { label: "الفريق", link: "/team", icon: <GrGroup /> },
  ],

  volunteer_evaluator: [
    ...baseRoles.volunteer,
    { label: "مركز التقييم", link: "/evaluation-center", icon: <ImStatsDots /> },
  ],
};
