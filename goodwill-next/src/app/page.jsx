"use client";
import Tiles from "./components/Tiles";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden items-center justify-between p-24">
      <div>
        <Tiles />
      </div>
    </main>
  );
}
