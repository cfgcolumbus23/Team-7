"use client";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-goodwill-blue h-1/3 flex justify-center content-center">
      <div className="w-auto flex flex-col border-solid border-2 border-red-800">
        <img
          className="max-w-sm max-h-sm"
          src="/Goodwill-Logo.png"
          alt="goodwill logo"
        ></img>
        <div className="flex gap-5">
          <a className="hover:underline underline-offset-4" href="">
            Sitemap
          </a>
          |
          <a className="hover:underline underline-offset-4" href="">
            Privacy Policy
          </a>
          |
          <a className="hover:underline underline-offset-4" href="">
            Employee Store
          </a>
        </div>
        
      </div>
      <div className="w-auto border-red-800"></div>
    </div>
  );
}
