"use client"
import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';
import login from "../../../../../public/login.jpg";
import { motion } from 'framer-motion';

   const Page = ()=> {
  return (
    <div className=" flex items-center h-screen justify-center mr-4">
      <motion.div
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:block w-1/2"
      >
        <Image className="object-cover w-full h-screen" src={login} alt="login" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }} 
        className="w-full sm:w-1/2 md:w-1/2 flex justify-center mt-4"
      >
        <SignIn />
      </motion.div>
    </div>
  );
}

export default Page