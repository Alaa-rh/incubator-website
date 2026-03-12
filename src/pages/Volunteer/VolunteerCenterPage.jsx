import React from 'react'
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GrGroup } from "react-icons/gr";
import CategoryGrid from '../../components/CategoryGrid';
import { GrSchedules } from "react-icons/gr";
import { CgFileDocument } from "react-icons/cg";
const VolunteerCenterPage = () => {
    const categories = [
        {id:"orders" , label:"الطلبات", icon:<HiOutlineClipboardDocumentList/>, link:"/requests-page"},
        {id:"schedule" , label:"إدارة الجدولة", icon:<GrSchedules/>, link:"/schedule-page"},
        {id:"projects" , label:"المشاريع المسندة", icon:<CgFileDocument/>, link:"/assigned-projects-page"},
        {id:"workshops" , label:"ورش العمل", icon:<GrGroup/>, link:"/workshop-page"},
    ]
  return (
    <div>
        <h1 className='text-3xl font-bold text-second-color pt-10 mr-25 mb-20'>  مركز التطوع </h1>
        <div className="container">
            <CategoryGrid items={categories} className="grid-cols-2" />
        </div>
    </div>
  )
}

export default VolunteerCenterPage