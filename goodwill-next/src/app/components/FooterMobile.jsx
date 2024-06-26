"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function FooterMobile() {
  const router = useRouter();
  return (
    <div className="bg-goodwill-blue bottom-0 overflow-x-hidden h-auto w-screen flex gap-10 flex-col justify-center content-center">
      <img
        className="w-80 mx-auto mt-10"
        src="https://goodwillmedia.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/05/26162455/GWC_Logo_White.svg"
      />
      <div className="flex gap-10 text-lg mx-auto text-white">
        <a
          className="hover:underline underline-offset-4"
          href="https://www.goodwillcolumbus.org/our-leadership/"
        >
          Our Leadership
        </a>
        <button
          type="button"
          onClick={() => {
            router.push("/contact");
          }}
        >
          <div className="hover:underline underline-offset-4">Contact</div>
        </button>
        <a
          className="hover:underline underline-offset-4"
          href="https://www.goodwillcolumbus.org/news-events/"
        >
          News & Events
        </a>
        <a
          className="hover:underline underline-offset-4"
          href="https://us59.dayforcehcm.com/CandidatePortal/en-US/gwcols"
        >
          Goodwill Careers
        </a>
      </div>
      <div className="flex gap-5 mx-auto p-0 text-white">
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
      <div className="text-sky-400 text-xl text-center mx-auto ">
        <p>
          © 2023 Goodwill Columbus <br />
          <a
            className="hover:underline underline-offset-4"
            href="https://www.google.com/maps/place/671+S+High+St+8th+Floor,+Columbus,+OH+43206/@39.9484532,-83.0015722,17z/data=!3m1!4b1!4m5!3m4!1s0x88388f4ea13a53b3:0xf45092a449e396df!8m2!3d39.9484491!4d-82.9989919"
          >
            671 South High Street, Suite 800, Columbus, OH 43206
          </a>
          <br />
          <a
            className="hover:underline underline-offset-4"
            href="tel:614-294-5181"
          >
            (614) 294-5181
          </a>
        </p>
      </div>
      <div className="flex mb-10 mx-auto gap-5">
        <a href="https://www.facebook.com/GoodwillColumbus">
          <svg
            className="w-8 text-sky-500 hover:text-white cursor-pointer transition-all"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook-square"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.3V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0 -48-48z"
            ></path>
          </svg>
        </a>
        <a href="https://twitter.com/GoodwillCols">
          <svg
            className="w-8 text-sky-500 hover:text-white cursor-pointer transition-all"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="twitter-square"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8 .2 5.7 .2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3 .6 10.4 .8 15.8 .8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.45 65.45 0 0 1 -29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
            ></path>
          </svg>
        </a>
        <a href="https://www.youtube.com/user/GoodwillColumbus1">
          <svg
            className="w-8 text-sky-500 hover:text-white cursor-pointer transition-all"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="youtube-square"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"
            ></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/goodwill-columbus/">
          <svg
            className="w-8 text-sky-500 hover:text-white cursor-pointer transition-all"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="linkedin"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
            ></path>
          </svg>
        </a>
        <a href="https://www.instagram.com/goodwillcolumbus/">
          <svg
            className="w-8 text-sky-500 hover:text-white cursor-pointer transition-all"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="instagram"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
