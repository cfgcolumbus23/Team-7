"use client";
import { React, useState, useEffect } from "react";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return <div>{isMobile ? <FooterMobile /> : <FooterDesktop />}</div>;
}
