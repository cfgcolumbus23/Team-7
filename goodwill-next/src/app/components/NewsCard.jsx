"use client";
import { useRouter } from "next/navigation";

export default function NewsCard({ title, info }) {
  const router = useRouter();
  const shorterText = info.length > 100 ? info.substring(0, 100) + "..." : info;
  return (
    <div className="flex flex-col justify-center content-center bg-white h-96 p-5 rounded-lg shadow-lg gap-5 text-black">
      <h1 className="md:text-3xl sm:text-2xl text-lg text-center ml-3 my-2 hover:text-white-500 hover:underline cursor-pointer">
        {title}
      </h1>
      <p className="font-semibold text-md ">{shorterText}</p>
      <button
        type="button"
        onClick={() => router.push("/articles")}
        className="text-goodwill-blue mx-auto rounded-lg border-2 p-2 border-goodwill-blue hover:bg-goodwill-blue hover:text-white w-3/4 md:w-2/3 lg:3/4"
      >
        Read More
      </button>
    </div>
  );
}
