"use client";
import { useRouter } from "next/navigation";
import Tiles from "./components/Tiles";

export default function Home() {
  // get token from cookie
  let token = "";
  if (typeof window !== "undefined") {
    try {
      token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token"))
        .split("=")[1];
    } catch (e) {
      console.log("error getting token from cookie");
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <br />
        <br />
        <Tiles />
      </div>
    </main>
  );
}
