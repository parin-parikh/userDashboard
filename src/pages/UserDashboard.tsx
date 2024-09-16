import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserProfile from '../components/UserProfile';
import UserActivities from '../components/UserActivities';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface Activity {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const UserDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch users for dropdown menu
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (err) {
        setError('Failed to load users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (selectedUserId !== null) {
      // Fetch selected users info
      const fetchUserDetails = async () => {
        try {
          setLoading(true);
          const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${selectedUserId}`);
          const activityResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`);
          setUser(userResponse.data);
          setActivities(activityResponse.data);
        } catch (err) {
          setError('Failed to load user data');
        } finally {
          setLoading(false);
        }
      };

      fetchUserDetails();
    }
  }, [selectedUserId]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="dashboard-container">
      <h1>User Dashboard</h1>
      
      <select
        value={selectedUserId || ''}
        onChange={(e) => setSelectedUserId(Number(e.target.value))}
        className="user-dropdown"
      >
        <option value="" disabled>Select a user</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      {user && (
        <div className="user-details-container">
          <UserProfile user={user} />
          <UserActivities activities={activities} />
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
