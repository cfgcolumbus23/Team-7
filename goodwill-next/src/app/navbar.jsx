const Navbar = () => {
    return (
        <nav className="bg-goodwill-blue p-4 fixed w-screen">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/Goodwill-Logo.png"
              alt="Logo"
              className="w-40 ml-4"
            />
          </div>
          <h1 className="text-white text-2xl font-semibold text-center italic">
              We believe in the power of work and opportunity for all
          </h1>
  
          <ul className="flex space-x-5">
            <li>
              <a href="#" className="text-white hover:text-gray-300 font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300 font-semibold">
                Chat
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300 font-semibold">
                Announcements
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 px-4 py-2 rounded-full border border-white font-semibold"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar