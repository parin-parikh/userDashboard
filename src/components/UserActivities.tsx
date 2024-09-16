import React from 'react';

interface Activity {
  id: number;
  title: string;
  body: string;
}

interface UserActivitiesProps {
  activities: Activity[];
}

const UserActivities: React.FC<UserActivitiesProps> = ({ activities }) => {
  return (
    /* Display user activities */
    <div className="user-activities">
      <h3>User Activities</h3>
      {activities.map((activity) => (
        <div className="activity-item" key={activity.id}>
          <h4>{activity.title}</h4>
          <p>{activity.body}</p>
        </div>
      ))}
    </div>
  );
};

export default UserActivities;
