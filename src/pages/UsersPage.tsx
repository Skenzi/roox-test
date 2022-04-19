import React from 'react';
import UsersContainer from '../components/UsersContainer';
import { UsersProps } from '../types/types';

function UsersPage({ users, setActiveUser }: UsersProps) {
  return (
    <UsersContainer users={users} setActiveUser={setActiveUser} />
  );
}

export default UsersPage;
