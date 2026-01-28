import React from 'react'
import ActivityCard from '../components/ActivityCard';

const AllActivities = ({activities}) => {
  return (
    <div>
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
  )
}

export default AllActivities