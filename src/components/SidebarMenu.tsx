import React from 'react';
import { SidebarMenuProps } from '../types/types';

function SidebarMenu({ sortUsers }: SidebarMenuProps) {
  return (
    <>
      <h2 className="sidebar__title">Сортировка</h2>
      <div className="sidebar__menu">
        <div className="menu__item">
          <button type="button" className="button button--soft-blue" onClick={() => sortUsers('city')}>По городу</button>
        </div>
        <div className="menu__item">
          <button type="button" className="button button--soft-blue" onClick={() => sortUsers('company')}>По компании</button>
        </div>
      </div>
    </>
  );
}

export default SidebarMenu;
