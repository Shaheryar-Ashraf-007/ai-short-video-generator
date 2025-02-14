"use client";
import logo from "../../../../public/logo.png";
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from "../../../../src/components/ui/button.jsx";
import { UserButton } from "@clerk/nextjs";
import { RiMenu4Fill } from "react-icons/ri";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    console.log("Opening sidebar");
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    console.log("Closing sidebar");
    setIsOpenModal(false);
  };

  return (
    <div className="flex items-center justify-between pr-4 pl-4 bg-white shadow-md text-xs sm:text-sm">
      <RiMenu4Fill 
        onClick={isOpenModal ? handleCloseModal : handleOpenModal} 
        className="flex md:hidden cursor-pointer" 
        size={24} 
      />

      <div className="flex items-center">
        <Image 
          src={logo} 
          alt='Logo' 
          className="w-8 h-8 md:w-16 md:h-16 lg:w-[100px] lg:h-[70px]" 
        />
        <h2 className="ml-2 font-bold sm:text-xl">Ai Short Video</h2>
      </div>

      <div className="flex items-center gap-4">
        <Button className="m-2 w-20 h-8 md:w-28 md:h-10 text-xs md:text-lg">
          Dashboard
        </Button>
        <UserButton />
      </div>

      {/* Sidebar component */}
      <Sidebar isOpen={isOpenModal} onClose={handleCloseModal} />
    </div>
  );
}

export default Navbar;