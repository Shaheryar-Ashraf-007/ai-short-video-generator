"use client"
import { SignUp } from '@clerk/nextjs';
import Image from 'next/image';
import signup from "../../../../../public/signup.jpg";
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className="flex items-center h-screen justify-center mr-2">
      <motion.div
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }} 
        className="hidden md:block w-1/2"
      >
        <Image className="object-cover w-full h-screen" src={signup} alt="signup" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }} 
        className="w-full md:w-1/2 flex justify-center mt-4"
      >
        <SignUp />
      </motion.div>
    </div>
  );
}