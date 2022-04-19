import React from 'react';
import { UsersProps } from '../types/types';
import Users from './Users';

function UsersContainer({ users, setActiveUser }: UsersProps) {
  return (
    <div className="col">
      <h1>Список пользователей</h1>
      <Users users={users} setActiveUser={setActiveUser} />
    </div>
  );
}

export default UsersContainer;
