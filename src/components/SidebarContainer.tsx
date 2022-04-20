import React from 'react';
import { SidebarMenuProps } from '../types/types';
import SidebarMenu from './SidebarMenu';

function SidebarContainer({ sortUsers }: SidebarMenuProps) {
  return (
    <div className="sidebar">
      <SidebarMenu sortUsers={sortUsers} />
    </div>
  );
}

export default SidebarContainer;
