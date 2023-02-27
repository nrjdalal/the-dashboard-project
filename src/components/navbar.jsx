/* eslint-disable @next/next/no-img-element */
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();

  console.log(status === "authenticated" && session);

  return (
    <header className="bg-slate-900">
      <div className="container mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between px-5 text-white">
        <div className="text-3xl font-bold">LOGO</div>

        {status === "authenticated" ? (
          <button onClick={() => void signOut()}>{session.user.email}</button>
        ) : status === "loading" ? (
          <button>Loading</button>
        ) : (
          <button
            className="rounded-lg bg-slate-800 px-5 py-1.5"
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
