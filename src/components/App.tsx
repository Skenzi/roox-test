import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import SidebarContainer from './SidebarContainer';
import UsersPage from '../pages/UsersPage';
import ProfileUserPage from '../pages/ProfileUserPage';
import mappingSorts from '../utils/utils';
import { User } from '../types/types';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [activeUser, setActiveUser] = useState<User | null>(null);
  const [typeSort, setTypeSort] = useState('');

  useEffect(() => {
    const test = axios.get('https://jsonplaceholder.typicode.com/users');
    test.then((response) => {
      setUsers(response.data);
    });
  }, []);

  const sortUsers = (type: string) => {
    if (type !== typeSort) {
      const sort = mappingSorts[type];
      const sortedUsers = sort(users);
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
            <Route path="/" element={<UsersPage users={users} setActiveUser={setActiveUser} />} />
            <Route path="/profile" element={<ProfileUserPage user={activeUser} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
