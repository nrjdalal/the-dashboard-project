/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// @ts-nocheck

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const Page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    void router.push("/");
  }

  const [fileUpload, setFileUpload] = useState(null);

  const onDrop = useCallback((files) => {
    const formData = new FormData();
    formData.append("file", files[0]);

    console.log(formData);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex w-full items-center justify-center">
      <div
        className="flex w-full max-w-screen-xl border-2 border-dashed border-slate-900 p-24"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag n drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};

export default Page;
