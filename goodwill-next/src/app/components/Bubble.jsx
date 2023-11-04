import React from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

export default function Bubble() {
  return (
    <div className="fixed bottom-8 right-8 cursor-pointer border-4 rounded-xl text-white border-black bg-goodwill-blue p-2">
      <ChatBubbleLeftRightIcon className="h-16 w-16" />
    </div>
  );
}
