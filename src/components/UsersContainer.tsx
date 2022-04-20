import React from 'react';
import { UsersProps } from '../types/types';
import Users from './Users';
import MainHeader from './MainHeader';

function UsersContainer({ users, setActiveUser }: UsersProps) {
  return (
    <>
      <MainHeader titleText="Список пользователей" />
      <Users users={users} setActiveUser={setActiveUser} />
    </>
  );
}

export default UsersContainer;
