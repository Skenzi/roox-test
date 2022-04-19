import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import SidebarContainer from './SidebarContainer';
import UsersPage from '../pages/UsersPage';
import ProfileUserPage from '../pages/ProfileUserPage';
import mappingSorts from '../utils/utils';
import { EmptyUser, User } from '../types/types';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [activeUser, setActiveUser] = useState<User | EmptyUser>({});
  useEffect(() => {
    const test = axios.get('https://jsonplaceholder.typicode.com/users');
    test.then((response) => {
      setUsers(response.data);
    });
  }, []);

  const sortUsers = (type: string) => {
    const sort = mappingSorts[type];
    const sortedUsers = sort(users);
    setUsers(sortedUsers);
  };

  return (
    <div className="container">
      <div className="row">
        <SidebarContainer sortUsers={sortUsers} />
        <Routes>
          <Route path="/" element={<UsersPage users={users} setActiveUser={setActiveUser} />} />
          <Route path="/profile" element={<ProfileUserPage user={activeUser} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
