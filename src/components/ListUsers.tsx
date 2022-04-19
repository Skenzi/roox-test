import React from 'react';
import { Link } from 'react-router-dom';
import { UsersProps } from '../types/types';

function ListUsers({ users, setActiveUser }: UsersProps) {
  return (
    <ul className="list-users">
      {users.map((user) => (
        <li key={user.id} className="user">
          <div className="user__info">
            <div className="info__item">{user.name}</div>
            <div className="info__item">{user.address.city}</div>
            <div className="info__item">{user.company.name}</div>
          </div>
          <Link to="/profile" state={{ user }}>
            <button type="button" className="user-button" onClick={() => setActiveUser(user)}>Подробнее</button>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ListUsers;
