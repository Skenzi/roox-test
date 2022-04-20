import React from 'react';
import UsersContainer from '../components/UsersContainer';
import { UsersProps } from '../types/types';

function UsersPage({ users, stateFetchData, setActiveUser }: UsersProps) {
  return (
    <UsersContainer users={users} stateFetchData={stateFetchData} setActiveUser={setActiveUser} />
  );
}

export default UsersPage;
