import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarMenuProps } from '../types/types';

function SidebarMenu({ sortUsers }: SidebarMenuProps) {
  return (
    <>
      <h2>Сортировка</h2>
      <button type="button" onClick={() => sortUsers('city')}>По городу</button>
      <button type="button" onClick={() => sortUsers('company')}>По компании</button>
      <Link to="/profile">Form</Link>
    </>
  );
}

export default SidebarMenu;
