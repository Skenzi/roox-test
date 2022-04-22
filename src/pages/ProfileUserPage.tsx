import React, { useState } from 'react';
import ProfileContainer from '../components/ProfileContainer';
import ProfileHeader from '../components/ProfileHeader';
import { ProfilePageProps } from '../types/types';

function ProfileUserPage({ user }: ProfilePageProps) {
  const [isEdit, setIsEdit] = useState<Boolean>(false);
  return (
    <>
      <ProfileHeader setIsEdit={setIsEdit} />
      <div className="page__content">
        <ProfileContainer user={user} isEdit={isEdit} />
      </div>
    </>
  );
}

export default ProfileUserPage;
