"use client";

import Image from "next/image";
import LoginButton from "@/components/loginButton";
import { usePrivy } from "@privy-io/react-auth";

export default function Home() {
  const { ready, authenticated, user } = usePrivy();
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {ready && authenticated ? (
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-bold">Welcome!</h1>
            <p>You are logged in as {String(user?.email) || user?.wallet?.address}</p>
            <LoginButton />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-bold">Welcome to Wallet Agent</h1>
            <p>Please connect your wallet to continue</p>
            <LoginButton />
          </div>
        )}
      </main>
    </div>
  );
}
