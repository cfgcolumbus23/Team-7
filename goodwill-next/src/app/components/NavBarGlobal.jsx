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
        <NavBar mobile={isMobile} setMobile={setIsMobile} />
      ) : (
        <NavBarMobile setMobile={setIsMobile} mobile={isMobile} />
      )}
    </div>
  );
}
