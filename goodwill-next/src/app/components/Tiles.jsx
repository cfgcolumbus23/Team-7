import { useRouter } from "next/navigation";

const Tile = () => {
  const router = useRouter();

  return (
    <div className="flex mt-24 items-center flex-col md:flex-row justify-center content-center">
      <button
        type="button"
        onClick={() => {
          router.push("/announcements");
        }}
      >
        <div className="bg-gray-200 shadow-lg rounded-lg p-3 m-4 hover:bg-gray-300 hover:cursor-pointer">
          <div className="w-80 md:w-48 lg:w-72 h-72 bg-cover bg-center">
            <img
              src="/announcements.jpeg"
              alt="picture"
              className="h-2/3 w-full rounded-md"
            />
            <p className="text-black mt-1">
              Click here for the announcements page.
            </p>
          </div>
        </div>
      </button>
      <button
        type="button"
        onClick={() => {
          router.push("/chat");
        }}
      >
        <div className="bg-gray-200 shadow-lg rounded-lg p-3 m-4 hover:bg-gray-300 hover:cursor-pointer">
          <div className="w-80 md:w-48 lg:w-72 h-72 bg-contain bg-center">
            <img
              src="/chat.webp"
              alt="picture"
              className="h-2/3 w-full rounded-md"
            />
            <p className="text-black mt-1">
              Click here to chat with a professional.
            </p>
          </div>
        </div>
      </button>
      <a href="https://www.goodwillcolumbus.org/services/for-individuals/find-a-job/">
        <div className="bg-gray-200 shadow-lg rounded-lg p-3 m-4 hover:bg-gray-300 hover:cursor-pointer">
          <div className="w-80 md:w-48 lg:w-72 h-72 bg-cover bg-center">
            <img
              src="/job-opportunity.jpeg"
              alt="picture"
              className="h-2/3 w-full rounded-md"
            />
            <p className="text-black mt-1">Click here for job oppurtunities.</p>
          </div>
        </div>
      </a>
    </div>
  );
};
export default Tile;
