"use client";
import NewsCardContain from "./../components/NewsCardContain";
import { useRef } from "react";
import NewsCard from "./../components/NewsCard";

export default function Page() {
  const newsRef = useRef(null);
  const careerRef = useRef(null);
  const courseRef = useRef(null);

  function handleNewsClick() {
    newsRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  function handleCareerClick() {
    careerRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  function handleOppoClick() {
    courseRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="">
      <h1 className="bg-goodwill-blue text-6xl mt-24 pb-12 text-white text-center">
        Learn More <br />
        About Goodwill
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center content-center mt-32 gap-8 first-letter:mt-48 mb-96 p-1 mx-4">
        <div
          className="text-xl pt-12 md:pt-20 rounded-lg border-2 p-2 bg-goodwill-blue text-white hover:bg-sky-500 transform transition duration-300 hover:scale-110 text-center w-96 md:w-58 md:h-48 h-32 cursor-pointer"
          onClick={handleNewsClick}
        >
          Company
        </div>
        <button
          className="text-xl rounded-lg border-2 p-2 bg-goodwill-blue text-white hover:bg-sky-500 transform transition duration-300 hover:scale-110 w-96 md:w-58 md:h-48 h-32"
          onClick={handleCareerClick}
        >
          Careers
        </button>
        <button
          className="text-xl rounded-lg border-2 p-2 bg-goodwill-blue text-white hover:bg-sky-500 transform transition duration-300 hover:scale-110 w-96 md:w-58 md:h-48 h-32"
          onClick={handleOppoClick}
        >
          Opportunities
        </button>
      </div>
      <div
        ref={newsRef}
        className="grid grid-cols-3 mt-96 pt-52 mb-96 gap-4 text-center items-center justify-center"
      >
        <div>
          <NewsCard
            info="Click here to read more about Goodwill's mission"
            title="Company Info"
            ref={careerRef}
          />
        </div>
        <div>
          <NewsCard
            info="Click here to read more about Goodwill's mission"
            title="Company Info"
          />
        </div>
        <div>
          <NewsCard
            info="Click here to read more about Goodwill's mission"
            title="Company Info"
          />
        </div>
      </div>
      <div
        ref={careerRef}
        className="grid grid-cols-3 mt-96 pt-52  mb-96 gap-4 text-center"
      >
        <div>
          <NewsCard
            info="Click here to read more about the latest career opportunities at Goodwill."
            title="Career Info"
            ref={careerRef}
          />
        </div>
        <div>
          <NewsCard
            info="Click here to read more about the latest career opportunities at Goodwill."
            title="Career Info"
          />
        </div>
        <div>
          <NewsCard
            info="Click here to read more about the latest career opportunities at Goodwill."
            title="Career Info"
          />
        </div>
      </div>
      <div
        ref={courseRef}
        className="grid grid-cols-3 mt-96 pt-52 mb-96 gap-4 text-center"
      >
        <div>
          <NewsCard
            info="Click here to read more about the latest education opportunities at Goodwill."
            title="Education Opportunities"
            ref={courseRef}
          />
        </div>
        <div>
          <NewsCard
            info="Click here to read more about the latest education opportunities at Goodwill."
            title="Education Opportunities"
          />
        </div>
        <div>
          <NewsCard
            info="Click here to read more about the latest education opportunities at Goodwill."
            title="Education Opportunities"
          />
        </div>
      </div>
    </div>
  );
}
