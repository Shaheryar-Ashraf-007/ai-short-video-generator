"use client";
import React, { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import { db } from './config/db';
import { Users } from './config/schema';
import { useState } from 'react';

const Provider = ({ children }) => {
  const [isClient, setIsClient] = useState(false)

  const { user } = useUser();

  useEffect(() => {
    setIsClient(true)

    if (user) {
      isNewUser();
    }
  }, [user]);

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

        if (!fullName) {
          console.error("Cannot insert user: fullName is required");
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

    <h1>{isClient ? children : 'Prerendered'}</h1>

    
  );
};

export default Provider;
