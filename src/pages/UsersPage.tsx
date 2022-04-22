import React from 'react';
import UsersContainer from '../components/UsersContainer';
import MainHeader from '../components/MainHeader';
import { UsersProps } from '../types/types';

function UsersPage({ users, stateFetchData, setActiveUser }: UsersProps) {
  return (
    <>
      <MainHeader titleText="Список пользователей" />
      <div className="page__content">
        <UsersContainer
          users={users}
          stateFetchData={stateFetchData}
          setActiveUser={setActiveUser}
        />
      </div>
    </>
  );
}

export default UsersPage;
