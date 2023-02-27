import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  console.log(router.pathname);
  console.log(status === "authenticated" && session);

  return (
    <header className="bg-slate-900">
      <div className="container mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between px-5 text-white">
        <div className="text-3xl font-bold">LOGO</div>

        {status === "authenticated" ? (
          session.user.email
        ) : (
          <button
            className="rounded-xl bg-slate-800 px-5 py-1.5"
            onClick={() => void signIn("google")}
          >
            Sign in
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
