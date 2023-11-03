export default function Page() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen bg-goodwill-blue">
        <div className="bg-white p-8 rounded-xl">
          <h1 className="text-3xl font-bold my-10 text-black text-center">
            Sign in
          </h1>
          <form className="flex flex-col gap-10">
            <input
              className="p-4 rounded-lg bg-white border border-gray-300 border-width-19 focus:outline-none"
              type="text"
              placeholder="Username..."
            />
            <input
              className="p-4 rounded-lg bg-white focus:outline-none border border-gray-300 border-width-19"
              type="password"
              placeholder="Password..."
            />
            <div className="w-full flex justify-center">
              <button className="bg-goodwill-blue p-3 rounded-lg text-white w-1/2 ">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
