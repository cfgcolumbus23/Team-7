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
        <div className="bg-gray-200 shadow-lg transform transition duration-300 hover:scale-110 rounded-lg p-3 m-4 hover:bg-gray-300 hover:cursor-pointer">
          <div className="w-80 md:w-48 lg:w-72 h-72 bg-cover bg-center">
            <img
              src="/announcements_image.jpeg"
              alt="picture"
              className="h-2/3 w-full rounded-md"
            />
            <p className="text-black text-4xl md:text-xl lg:text-3xl mt-8">
              ANNOUNCEMENTS
            </p>
          </div>
        </div>
      </button>
      <button
        type="button"
        onClick={() => {
          router.push("/socket");
        }}
      >
        <div className="bg-gray-200 transform transition duration-300 hover:scale-110 shadow-lg rounded-lg p-3 m-4 hover:bg-gray-300 hover:cursor-pointer">
          <div className="w-80 md:w-48 lg:w-72 h-72 bg-contain bg-center">
            <img
              src="/chat.webp"
              alt="picture"
              className="h-2/3 w-full rounded-md"
            />
            <p className="text-black text-4xl md:text-2xl lg:text-3xl mt-3">
              CHAT WITH A PROFESSIONAL
            </p>
          </div>
        </div>
      </button>
      <a href="https://www.goodwillcolumbus.org/services/for-individuals/find-a-job/">
        <div className="bg-gray-200 shadow-lg transform transition duration-300 hover:scale-110 rounded-lg p-3 m-4 hover:bg-gray-300 hover:cursor-pointer">
          <div className="w-80 md:w-48 lg:w-72 h-72 bg-cover bg-center">
            <img
              src="/job-opportunity.jpeg"
              alt="picture"
              className="h-2/3 w-full rounded-md"
            />
<<<<<<< HEAD
            <p className="text-black mt-1">Click here to look for job opportunities.</p>
=======
            <p className="text-black text-4xl md:text-2xl lg:text-3xl mt-3 text-center">
              JOB OPPORTUNITIES
            </p>
>>>>>>> refs/remotes/origin/main
          </div>
        </div>
      </a>
    </div>
  );
};
export default Tile;
