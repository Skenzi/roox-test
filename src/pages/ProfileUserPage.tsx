import React from 'react';
import ProfileContainer from '../components/ProfileContainer';
import { ProfileProps } from '../types/types';

function ProfileUserPage({ user }: ProfileProps) {
  return (
    <ProfileContainer user={user} />
  );
}

export default ProfileUserPage;
