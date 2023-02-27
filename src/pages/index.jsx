import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    void router.push("/dashboard");
  }

  return (
    <div className="flex h-80 w-full items-center justify-center">Home</div>
  );
};

export default Page;
