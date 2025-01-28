"use client";
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import { db } from './config/db';
import { Users } from './config/schema';

const Provider = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    setIsClient(true);

    user&&isNewUser()
    
    
  },[user]);

  const isNewUser = async () => {
    try {
      const email = user?.primaryEmailAddress?.emailAddress;

      if (!email) {
        console.error("User email is required but not found.");
        return;
      }

      const result = await db.select().from(Users)
        .where(eq(Users.email, email));

      console.log("User Check Result:", result);

      if (result.length === 0) {
        const { fullName, imageUrl } = user;

        // Debugging: Check the entire user object
        console.log("User Object:", user);

        if (!fullName) {
          return;
        }

        await db.insert(Users).values({
          name: fullName,
          email: email,
          imageUrl: imageUrl,
        });

        console.log("New user inserted:", { name: fullName, email, imageUrl });
      }
    } catch (error) {
      console.error("Error checking or inserting user:", error);
    }
  };

  return (
    <div>
      {isClient ? children : 'Prerendered'}
    </div>
  );
};

export default Provider;