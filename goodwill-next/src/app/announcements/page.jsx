"use client";
import NewsCardContain from "./../components/NewsCardContain";
import {useRef} from 'react';
import NewsCard from "./../components/NewsCard";

export default function Page() {
  const newsRef = useRef(null);
  const careerRef = useRef(null);
  const courseRef = useRef(null);

  function handleClick() {
    newsRef.current?.scrollIntoView({ behavior: "smooth" });
    careerRef.current?.scrollIntoView({ behavior: "smooth" });
    courseRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="">
      <div className="mt-40 text-black cursor-pointer">
        <button onClick={handleClick}>Go to News</button>
      </div>
      <div className=" w-full h-screen mt-96 text-black">
        <h1>Section 1</h1>
        <div ref = {newsRef} className="grid grid-cols-3 gap-4">
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
    </div>
  );
}
