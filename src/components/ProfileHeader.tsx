import React from 'react';
import MainHeader from './MainHeader';

interface ProfileHeaderProps {
    setIsEdit: React.Dispatch<React.SetStateAction<Boolean>>,
}

function ProfileHeader({ setIsEdit }: ProfileHeaderProps) {
  return (
    <MainHeader titleText="Профиль пользователя">
      <div className="header__item">
        <button type="button" className="button button--soft-blue" onClick={() => setIsEdit(true)}>Редактировать</button>
      </div>
    </MainHeader>
  );
}

export default ProfileHeader;
