
export default function NewsCard({ title, info }) {
  const shorterText = info.length > 100 ? info.substring(0, 100) + "..." : info;
  return (
    <div className="flex flex-col bg-goodwill-white p-5 rounded-lg shadow-lg gap-4 text-black">
      <h1 className=" text-4xl ml-3 my-2 hover:text-white-500 hover:underline cursor-pointer">
        {title}
      </h1>
      <p className="font-semibold text-md ">{shorterText}</p>
      <button className="text-goodwill-blue  rounded-lg border-2 p-2 border-goodwill-blue hover:bg-goodwill-blue hover:text-white w-3/4 md:w-2/3 lg:3/4 ">
        Read More
      </button>
    </div>
  );
}
