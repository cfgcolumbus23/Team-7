"use client";
import React from "react";
import NavBar from "./Navbar";
import NavBarMobile from "./NavBarMobile";
import { useState } from "react";
export default function NavBarGlobal() {
  const [isMobile, setIsMobile] = useState(true);
  return (
    <div>
      {isMobile ? (
        <button>
          <NavBar mobile={isMobile} setMobile={setIsMobile} />
        </button>
      ) : (
        <NavBarMobile setMobile={setIsMobile} mobile={isMobile} />
      )}
    </div>
  );
}
