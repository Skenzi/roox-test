import React from 'react';
import { Link } from 'react-router-dom';
import { UsersProps } from '../types/types';

function Users({ users, setActiveUser }: UsersProps) {
  return (
    <ul className="list-users">
      {users.map((user) => (
        <li key={user.id} className="list-users__item">
          <div className="item__info">
            <div className="info__item">
              <span className="item__name">ФИО:</span>
              {' '}
              <span className="item__content">{user.name}</span>
            </div>
            <div className="info__item">
              <span className="item__name">Город:</span>
              {' '}
              <span className="item__content">{user.address.city}</span>
            </div>
            <div className="info__item">
              <span className="item__name">Компания:</span>
              {' '}
              <span className="item__content">{user.company.name}</span>
            </div>
          </div>
          <Link to="/profile" state={{ user }}>
            <button type="button" className="button button--link" onClick={() => setActiveUser(user)}>Подробнее</button>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Users;
