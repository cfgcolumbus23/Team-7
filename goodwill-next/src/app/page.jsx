"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <button type="button" onClick={() => router.push("/home")}>
          Home
        </button>
        <button type="button" onClick={() => router.push("/chat")}>
          Chat
        </button>
        <button type="button" onClick={() => router.push("/home")}>
          Announcements
        </button>
      </div>
    </main>
  );
}