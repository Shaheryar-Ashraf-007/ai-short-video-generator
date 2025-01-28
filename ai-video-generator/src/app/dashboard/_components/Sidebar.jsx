import React from 'react';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";


const Sidebar = () => {
  return (
    <div className='bg-white shadow-md w-56 h-screen mt-4'>
      <div className="p-4">
        <ul className="space-y-4">
          <li className="flex items-center">
            <MdOutlineSpaceDashboard className="mr-2" />
            Dashboard
          </li >
          <li className="flex items-center">
          <MdOutlineVideoLibrary className="mr-2" />
          Create New</li>
          <li>Upgrade</li>
          <li>Account</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;