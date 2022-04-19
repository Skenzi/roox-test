import React from 'react';
import { SidebarMenuProps } from '../types/types';
import SidebarMenu from './SidebarMenu';

function SidebarContainer({ sortUsers }: SidebarMenuProps) {
  return (
    <div className="col-2">
      <SidebarMenu sortUsers={sortUsers} />
    </div>
  );
}

export default SidebarContainer;
