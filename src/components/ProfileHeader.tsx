import React from 'react';

interface ProfileHeaderProps {
    setIsEdit: React.Dispatch<React.SetStateAction<Boolean>>,
}

function ProfileHeader({ setIsEdit }: ProfileHeaderProps) {
  return (
    <div className="header__item">
      <button type="button" className="button button--soft-blue" onClick={() => setIsEdit(true)}>Редактировать</button>
    </div>
  );
}

export default ProfileHeader;
