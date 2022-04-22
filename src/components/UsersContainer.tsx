import React from 'react';
import { UsersProps } from '../types/types';
import Users from './Users';

function UsersContainer({ users, stateFetchData, setActiveUser }: UsersProps) {
  return (
    <Users users={users} stateFetchData={stateFetchData} setActiveUser={setActiveUser} />
  );
}

export default UsersContainer;
