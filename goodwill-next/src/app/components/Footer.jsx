"use client";
import { useState, useEffect } from "react";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  });

  function handleResize() {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return <div>{isMobile ? <FooterMobile /> : <FooterDesktop />}</div>;
}
