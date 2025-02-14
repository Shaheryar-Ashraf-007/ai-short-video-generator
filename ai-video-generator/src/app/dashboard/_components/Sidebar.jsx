"use client";
import React, { useEffect } from 'react';
import { MdOutlineSpaceDashboard, MdOutlineVideoLibrary, MdOutlineAccountBalanceWallet } from "react-icons/md";
import { GiArmorUpgrade } from "react-icons/gi";
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const Sidebar = ({ isOpen, onClose }) => {

  const router = useRouter();


  const handleopenvideo=()=>{
    router.push("/dashboard/create-new")
  }


  const path = usePathname();
  console.log(path)
  return (
    <div 
      className={`fixed left-0 top-16 md:top-20 bg-white shadow-md w-56 h-screen z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="p-4">
        <ul className=" space-y-4">
        <Link href={"/dashboard"}>
          <li onClick={"onclose" ? handleopenvideo : ""} className={`hover:bg-primary hover:text-white p-2 rounded-md cursor-pointer text-xl flex items-center ${path==='/dashboard'? 'bg-primary text-white': ''}`}>
          
            <MdOutlineSpaceDashboard size={24} className="mr-2" />
            Dashboard
          </li>
          </Link>
          <li onClick={"onclose" ? handleopenvideo : ""}  className="hover:bg-primary hover:text-white p-2 rounded-md cursor-pointer text-xl flex items-center">
            <MdOutlineVideoLibrary size={24} className="mr-2" />
            Create New
          </li>
          <li onClick={onClose} className="hover:bg-primary hover:text-white p-2 rounded-md cursor-pointer text-xl flex items-center">
            <GiArmorUpgrade size={24} className="mr-2" />
            Upgrade
          </li>
          <li onClick={onClose} className="hover:bg-primary hover:text-white p-2 rounded-md cursor-pointer text-xl flex items-center">
            <MdOutlineAccountBalanceWallet size={24} className="mr-2" />
            Account
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
