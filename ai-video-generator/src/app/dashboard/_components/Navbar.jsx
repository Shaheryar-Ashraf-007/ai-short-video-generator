import logo from "../../../../public/logo.png";
import Image from 'next/image';
import React from 'react';
import { Button } from "../../../../src/components/ui/button.jsx";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between pr-4 pl-4 bg-white shadow-md text-xs sm:text-sm">
      <div className="flex items-center">
        <Image 
          src={logo} 
          alt='logo' 
          className="w-8 h-8 md:w-16 md:h-16 lg:w-[100px] lg:h-[70px]" 
        />
        <h2 className="ml-2 font-bold sm:text-xl">Ai Short Video</h2>
      </div>
      <div className="flex items-center gap-4">
        <Button className="w-20 h-8 md:w-28 md:h-10 text-xs md:text-lg">
          Dashboard
        </Button>
        <UserButton />
      </div>
    </div>
  );
}

export default Navbar;