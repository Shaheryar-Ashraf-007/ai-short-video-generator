import { UserButton } from "@clerk/nextjs";
import { Button } from "../components/ui/button.jsx";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      dashboard
      <Button>
        start
      </Button>

      <UserButton/>

    </div>
  );
}
