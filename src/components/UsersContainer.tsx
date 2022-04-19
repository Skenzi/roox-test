import React from 'react';
import { Link } from 'react-router-dom';
import { UsersProp } from '../types/types';

function UsersContainer({ users }: UsersProp) {
  return (
    <div className="col">
      <h1>Список пользователей</h1>
      <div>
        {users.map((user) => (
          <div key={user.id} className="user">
            <div className="user__info">
              <div className="info__item">{user.name}</div>
              <div className="info__item">{user.address.city}</div>
              <div className="info__item">{user.company.name}</div>
            </div>
            <div className="user-button">
              <Link to="/profile">Подробнее</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersContainer;
