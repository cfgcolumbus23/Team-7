import React from "react";

export default function page() {
  return (
    <div className="mt-24 bg-goodwill-blue text-center font-bold h-1/4 p-2">
      <div className="w-screen text-white">
        <h1 className="text-4xl">Contact Us</h1>
        <h2 className="text-3xl mt-4">We’re here to help.</h2>
      </div>
      <div className="w-screen flex justify-around my-9 ">
        <button className="p-4 bg-goodwill-blue text-white border-2 border-white rounded-full  hover:bg-white hover:text-black transition-all duration-150">
          General Inquiry
        </button>
        <button className="p-4 bg-goodwill-blue text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-150">
          General Inquiry
        </button>
        <button className="p-4 bg-goodwill-blue text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-150">
          General Inquiry
        </button>
      </div>
      <div className="bg-white p-4 h-screen">
        <form className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="p-4 focus:outline-none  border-2 border-black rounded-full "
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-4  focus:outline-none  border-2 border-black rounded-full"
          />
          <input
            type="text"
            placeholder="Email"
            className="p-4  focus:outline-none  border-2 border-black rounded-full"
          />
          <input
            type=""
            placeholder="Phone Number"
            className="p-4 focus:outline-none border-2 border-black rounded-full "
          />
          <input
            type="text"
            placeholder="Topic"
            className="p-4  focus:outline-none  border-2 border-black rounded-full col-span-2"
          />
          <input
            type="text"
            placeholder="Message"
            className="p-4  focus:outline-none  border-2 border-black rounded-full col-span-2"
          />
          <span className="w-screen flex justify-center">
            <button className="bg-white text-goodwill-blue  border-2 border-goodwill-blue rounded-full hover:bg-goodwill-blue hover:text-white transition-all duration-150  w-1/6 h-14">
              Submit
            </button>
          </span>
        </form>
        <div className="mt-9">
          <h1 className="mb-2">
            To learn more about our mission or services, please complete the
            form below or contact us.
          </h1>
          <h1 className="mb-2">
            <span className="font-extrabold">
              For questions regarding a specific retail store{" "}
            </span>
            , please visit goodwillcolumbus.org/findastore.
          </h1>
          <h1 className="mb-2">
            <span className="font-extrabold">For media inquiries</span>, please
            contact communications@gwcols.com.
          </h1>
        </div>
      </div>
    </div>
  );
}
