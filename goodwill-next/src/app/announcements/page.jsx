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
    <div className="w-full h-screen flex items-center justify-center">
      <div className=" grid grid-cols-3 gap-20 gap-y-10 w-2/3">
        <NewsCard
          info="Click here for more information about the "
          title="TEST"
        />
        <NewsCard
          info="Click here for more information about the "
          title="TEST"
        />
        <NewsCard
          info="Click here for more information about the "
          title="TEST"
        />
        <NewsCard
          info="Click here for more information about the "
          title="TEST"
        />
        <NewsCard
          info="Click here for more information about the "
          title="TEST"
        />
        <NewsCard
          info="Click here for more information about the "
          title="TEST"
        />
        <NewsCard
          info="Click here for more information about the "
          title="TEST"
        />
        <NewsCard
          info="Click here for more information about the "
          title="TEST"
        />
        <NewsCard
          info="Click here for more information about the "
          title="TEST"
        />
      </div>
      <div ref={newsRef} className="grid grid-cols-3 gap-4">
        <div>
          <NewsCard info="" title="" ref={careerRef} />
        </div>
        <div>
          <NewsCard info="" title="" />
        </div>
        <div>
          <NewsCard info="" title="" />
        </div>
      </div>
      <div ref={careerRef} className="grid grid-cols-3 gap-4">
        <div>
          <NewsCard info="" title="" ref={careerRef} />
        </div>
        <div>
          <NewsCard info="" title="" />
        </div>
        <div>
          <NewsCard info="" title="" />
        </div>
      </div>
      <div ref={courseRef} className="grid grid-cols-3 gap-4">
        <div>
          <NewsCard info="" title="" ref={courseRef} />
        </div>
        <div>
          <NewsCard info="" title="" />
        </div>
        <div>
          <NewsCard info="" title="" />
        </div>
      </div>
    </div>
  );
}
