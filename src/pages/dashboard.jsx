import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    void router.push("/");
  }

  return (
    <div className="flex h-80 w-full items-center justify-center">
      Dashboard
    </div>
  );
};

export default Page;
