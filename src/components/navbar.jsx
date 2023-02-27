/* eslint-disable @next/next/no-img-element */
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();

  console.log(status === "authenticated" && session);

  return (
    <header className="bg-slate-900">
      <div className="container mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between px-5 text-white">
        <button className="text-3xl font-bold">LOGO</button>

        {status === "authenticated" ? (
          <div className="flex items-center gap-2">
            {session.user.email?.split("@")[0]}{" "}
            <button onClick={() => void signOut()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </button>
          </div>
        ) : status === "loading" ? (
          <button> Loading </button>
        ) : (
          <button
            className="flex items-center gap-2 rounded-lg bg-slate-700 px-6 py-1.5"
            onClick={() => void signIn("google")}
          >
            <img
              className="h-5 w-5"
              src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
              alt="Sign in with Google"
            />
            Sign in
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
