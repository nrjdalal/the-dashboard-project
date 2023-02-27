import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    void router.push("/");
  }

  return <div>Dashboard</div>;
};

export default Page;
