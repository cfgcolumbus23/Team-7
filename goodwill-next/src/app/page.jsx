"use client";
import Tiles from "./components/Tiles";

/**
 * Renders the Home page component.
 * @returns {JSX.Element} The Home page component.
 */
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
    <main className="flex flex-col overflow-x-hidden items-center justify-between p-28">
      <div>
        <Tiles />
      </div>
    </main>
  );
}
