import React from 'react';

interface User {
  name: string;
  email: string;
  phone: string;
}

const UserProfile: React.FC<{ user: User }> = ({ user }) => {
  return (
    /* Display user information */
    <div className="user-profile">
      <h2>{user.name}</h2>
      <div className="user-info">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
    </div>
  );
};

export default UserProfile;
