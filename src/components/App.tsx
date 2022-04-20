import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import SidebarContainer from './SidebarContainer';
import UsersPage from '../pages/UsersPage';
import ProfileUserPage from '../pages/ProfileUserPage';
import quickSortUsers from '../utils/utils';
import { User } from '../types/types';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [activeUser, setActiveUser] = useState<User | null>(null);
  const [typeSort, setTypeSort] = useState('');
  const [stateFetchData, setStateFetchData] = useState('waiting');

  useEffect(() => {
    const data = axios.get('https://jsonplaceholder.typicode.com/users');
    data
      .then((response) => {
        setUsers(response.data);
        setStateFetchData('loaded');
      }).catch(() => {
        setStateFetchData('error');
      });
  }, []);

  const sortUsers = (type: string) => {
    if (type !== typeSort) {
      const sortedUsers = quickSortUsers(users, type);
      setUsers(sortedUsers);
      setTypeSort(type);
    }
  };

  return (
    <div className="container-md center">
      <div className="flex-container">
        <SidebarContainer sortUsers={sortUsers} />
        <div className="flex-container f-wrap page">
          <Routes>
            <Route path="/" element={<UsersPage users={users} stateFetchData={stateFetchData} setActiveUser={setActiveUser} />} />
            <Route path="/profile" element={<ProfileUserPage user={activeUser} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
