import React from 'react';
import { SidebarMenuProps } from '../types/types';

function SidebarMenu({ sortUsers }: SidebarMenuProps) {
  return (
    <>
      <h2>Сортировка</h2>
      <button type="button" onClick={() => sortUsers('city')}>По городу</button>
      <button type="button" onClick={() => sortUsers('company')}>По компании</button>
    </>
  );
}

export default SidebarMenu;
