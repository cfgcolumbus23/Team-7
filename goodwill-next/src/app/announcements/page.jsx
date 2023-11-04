'use client';
import NewsCardContain from "./../components/NewsCardContain";
import {useRef} from 'react';
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
      <div className="flex justify-around mt-48 mb-96 p-1 mx-4">
      <button className="text-black rounded-lg border border-2 p-2 bg-goodwill-blue text-white "onClick={handleNewsClick}>Go to News
        </button>
        <button className="text-black rounded-lg border border-2 p-2 bg-goodwill-blue text-white " onClick={handleCareerClick}>Go to Careers
        </button>
        <button className="text-black rounded-lg border border-2 p-2 bg-goodwill-blue text-white " onClick={handleOppoClick}>Go to Opportunities
        </button>
      </div>
        <div ref={newsRef} className="grid grid-cols-3 mt-96 pt-52 mb-96 gap-4 text-center items-center justify-center">
        <div><NewsCard 
            info = "Click here to read more about the carrer at Goodwill!"
            title = "Company Info"
            ref = {careerRef} 
          />
          </div>
          <div><NewsCard 
            info = "Click here to read about career modules at Goodwill!"
            title = "Career Modules"
          />
          </div>
          <div><NewsCard 
            info = "Click here to read more about the latest career opportunities at Goodwill!"
            title = "Career Opportunities"
          />
          </div>
        </div>
        <div ref={careerRef} className="grid grid-cols-3 mt-96 pt-52 mb-96 gap-4 text-center">
        <div><NewsCard 
            info = "Click here to read more about the latest education opportunities at Goodwill!"
            title = "Education News"
            ref = {careerRef} 
          />
          </div>
          <div><NewsCard 
            info = "Click here to read more about the latest education opportunities at Goodwill!"
            title = "Education Modules"
          />
          </div>
          <div><NewsCard 
            info = "Click here to read more about the latest education opportunities at Goodwill!"
            title = "Education"
          />
          </div>
        </div>
        <div ref={courseRef} className="grid grid-cols-3 mt-96 pt-52 mb-96 gap-4 text-center"> 
          <div><NewsCard 
            info = "Click here to read more about the latest education opportunities at Goodwill!"
            title = "Education"
            ref = {courseRef}
          />
          </div>
          <div><NewsCard 
            info = "Click here to read more about the latest education opportunities at Goodwill!"
            title = "Education"
          />
          </div>
          <div><NewsCard 
            info = "Click here to read more about the latest education opportunities at Goodwill!"
            title = "Education"
          />
        </div>

        </div>
      </div>
  );
}