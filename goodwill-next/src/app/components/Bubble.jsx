"use client";
import React from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function Bubble() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => {
        router.push("/socket");
      }}
    >
      <div className="fixed z-20 transform transition duration-300 hover:scale-110 bottom-8 right-8 cursor-pointer border-4 rounded-xl text-white border-black bg-goodwill-blue p-2">
        <ChatBubbleLeftRightIcon className="h-16 w-16" />
      </div>
    </button>
  );
}
