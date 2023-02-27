import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    void router.push("/dashboard");
  }

  return <div>Home</div>;
};

export default Page;
