import React from 'react'
import activity1 from '../assets/images/activity-1.jpg';
import activity2 from '../assets/images/activity-2.jpg';
import activity3 from '../assets/images/activity-3.png';
import ActivityCard from '../components/ActivityCard';
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
    status: "منتهية",
    trainer: "محمد احمد",
    count: 25,
  },
  {
    image: activity3,
    title: "هل ترغب بأن تكون جزءاً من المستقبل التكنولوجي؟",
    description: "دورة تدريب مدربين روبوت سبارك",
    status: "منتهية",
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
  
]

const Activities = ({id}) => {
  return (
    <div className='bg-white-color p-4 mb-40' id={id}>
         <div className="container">
        <h1 className='text-second-color font-semibold text-[40px] mb-10'>النشاطات</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {activities.map((activity, index) => (
        <div key={index}>
          <ActivityCard
            image={activity.image}
            title={activity.title}
            description={activity.description}
            status={activity.status}
            trainer={activity.trainer}
            count={activity.count}
          />
        </div>
      ))}
    </div>
    </div>
    </div>
  )
}

export default Activities