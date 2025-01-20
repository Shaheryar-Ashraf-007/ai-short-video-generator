import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import {Outfit} from "next/font/google";




export const metadata = {
  title: "Ai Video App",
  description: "",
};

const outfit=Outfit({subsets:['latin']})

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={outfit.className}
      >
        <Provider>

        {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
