import { XCircleIcon } from "@heroicons/react/24/solid";

export default function NavBarMobile({ Mobile, setMobile }) {
  return (
    <div className="fixed bg-gray-100 top-0 bottom-0 right-0 w-full">
      <XCircleIcon
        onClick={() => setMobile(!Mobile)}
        className="h-10 w-10 cursor-pointer"
      />
      <ul className="flex flex-col justify-center items-center gap-10 text-sm font-semibold  hover:text-gray-600">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Chat</li>
        <li className="cursor-pointer">Announcments</li>
      </ul>
    </div>
  );
}
