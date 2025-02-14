import React from "react";
import Image from "next/image";
import progress from "../../../../public/progress.gif";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from "../../../components/ui/alert-dialog.jsx";

const CustomLoading = ({ loading }) => {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent>
        <div className="flex flex-col items-center my-10 justify-center">
          <AlertDialogTitle>Loading...</AlertDialogTitle>
          <Image src={progress} alt="progress" width={100} height={100} />
          <h2>Generating Your Video... Don't Refresh This Page</h2>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomLoading;