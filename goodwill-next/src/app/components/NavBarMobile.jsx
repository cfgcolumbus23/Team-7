"use client";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function NavBarMobile({ Mobile, setMobile }) {
  const router = useRouter();
  return (
    <div className="fixed bg-gray-100 top-0 bottom-0 right-0 w-full">
      <XCircleIcon
        onClick={() => setMobile(!Mobile)}
        className="h-10 w-10 cursor-pointer"
      />
      <ul className="flex flex-col justify-center items-center gap-10 text-sm font-semibold  hover:text-gray-600">
        <button
          type="button"
          onClick={() => {
            router.push("/home");
          }}
        >
          <li className="cursor-pointer">Home</li>
        </button>
        <button type="button" onClick={() => router.push("/chat")}>
          <li className="cursor-pointer">Chat</li>
        </button>
        <button type="button" onClick={() => router.push("/announcements")}>
          <li className="cursor-pointer">Announcments</li>
        </button>
      </ul>
    </div>
  );
}
