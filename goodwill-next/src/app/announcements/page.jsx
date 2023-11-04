"use client";
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
      <div className="flex items-center justify-evenly content-center w-full h-screen bg-gray-100">
      <button className="text-black"onClick={handleNewsClick}>Go to News
        </button>
        <button className="text-black" onClick={handleCareerClick}>Go to Careers
        </button>
        <button className="text-black" onClick={handleOppoClick}>Go to Opportunities
        </button>
      </div>
        <div ref={newsRef} className="grid grid-cols-3 gap-4">
        <div><NewsCard 
            info = ""
            title = ""
            ref = {careerRef} 
          />
          </div>
          <div><NewsCard 
            info = ""
            title = ""
          />
          </div>
          <div><NewsCard 
            info = ""
            title = ""
          />
          </div>
        </div>
        <div ref={careerRef} className="grid grid-cols-3 gap-4">
        <div><NewsCard 
            info = ""
            title = ""
            ref = {careerRef} 
          />
          </div>
          <div><NewsCard 
            info = ""
            title = ""
          />
          </div>
          <div><NewsCard 
            info = ""
            title = ""
          />
          </div>
        </div>
        <div ref={courseRef} className="grid grid-cols-3 gap-4"> 
          <div><NewsCard 
            info = ""
            title = ""
            ref = {courseRef}
          />
          </div>
          <div><NewsCard 
            info = ""
            title = ""
          />
          </div>
          <div><NewsCard 
            info = ""
            title = ""
          />
        </div>

    </div>
    </div>
  );
}
