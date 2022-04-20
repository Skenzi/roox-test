import React from 'react';
import { UsersProps } from '../types/types';
import Users from './Users';
import MainHeader from './MainHeader';

function UsersContainer({ users, setActiveUser }: UsersProps) {
  return (
    <>
      <MainHeader titleText="Список пользователей" />
      <div className="page__content">
        <Users users={users} setActiveUser={setActiveUser} />
      </div>
    </>
  );
}

export default UsersContainer;
