import React from 'react';
import { UsersProps } from '../types/types';
import ListUsers from './ListUsers';

function UsersContainer({ users, setActiveUser }: UsersProps) {
  return (
    <div className="col">
      <h1>Список пользователей</h1>
      <ListUsers users={users} setActiveUser={setActiveUser} />
    </div>
  );
}

export default UsersContainer;
