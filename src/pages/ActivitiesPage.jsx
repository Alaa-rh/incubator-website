import React, { useState } from 'react'
import AllActivities from '../components/AllActivities';
import SearchBar from '../components/SearchBar';
import NavLinkUniversal from '../components/NavLinkUniversal';
import activity1 from '../assets/images/activity-1.jpg';
import activity2 from '../assets/images/activity-2.jpg';
import activity3 from '../assets/images/activity-3.png';
import { LuFileStack } from "react-icons/lu";
import { RxCountdownTimer } from "react-icons/rx";
import CategoryFilterBar from '../components/CategoryFilterBar';
import { IoRocketOutline } from "react-icons/io5";
import { MdDoneAll } from "react-icons/md";
const ActivitiesPage = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const status=[
    { id: "all", label: "الكل", icon: <LuFileStack /> },
    { id: "منتهية", label: "منتهية", icon: <MdDoneAll /> },
    { id: "لم تبدأ بعد", label: "لم تبدأ بعد", icon: <RxCountdownTimer/> },
    { id: "بدأت حديثاً", label: "بدأت حديثاً", icon: <IoRocketOutline /> },
  ]

  const activities = [
    {
      image: activity1,
      title: "هل ترغب بأن تكون جزءاً من المستقبل التكنولوجي",
      description: "دورة تدريب مدربين روبوت سبارك",
      status: "منتهية",
      trainer: "محمد احمد",
      count: 25,
    },
    {
      image: activity2,
      title: "هل ترغب بأن تكون جزءاً من المستقبل التكنولوجي؟",
      description: "دورة تدريب مدربين روبوت سبارك",
      status: "لم تبدأ بعد",
      trainer: "محمد احمد",
      count: 25,
    },
    {
      image: activity3,
      title: "هل ترغب بأن تكون جزءاً من المستقبل التكنولوجي؟",
      description: "دورة تدريب مدربين روبوت سبارك",
      status: "بدأت حديثاً",
      trainer: "محمد احمد",
      count: 25,
    },
    {
      image: activity1,
      title: "هل ترغب بأن تكون جزءاً من المستقبل التكنولوجي؟",
      description: "دورة تدريب مدربين روبوت سبارك",
      status: "منتهية",
      trainer: "محمد احمد",
      count: 25,
    },
    
  ];
   const filteredActivities = activities.filter((activity) => {
    const matchCategory =
      selectedStatus === "all" || activity.status === selectedStatus

    const matchSearch =
      activity.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchCategory && matchSearch
  })


  return (
    <div className='container mt-10'>
      <div>
        <CategoryFilterBar categories={status} 
        selected={selectedStatus} 
        onSelect={setSelectedStatus} 
        />
      </div>
        <SearchBar onSearch={setSearchQuery} />
        <AllActivities activities={filteredActivities} />
        </div>
  )
}

export default ActivitiesPage