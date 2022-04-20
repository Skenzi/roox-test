import React from 'react';

interface ProfileHeaderProps {
    setIsEdit: React.Dispatch<React.SetStateAction<Boolean>>,
}

function ProfileHeader({ setIsEdit }: ProfileHeaderProps) {
  return (
    <div>
      <h1>Профиль пользователя</h1>
      <button type="button" className="button" onClick={() => setIsEdit(true)}>Редактировать</button>
    </div>
  );
}

export default ProfileHeader;
