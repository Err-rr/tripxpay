import Logo from "./Logo"

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center">
        <Logo />
        <div className="hidden md:flex ml-8 space-x-6">
          <div className="relative group">
            <button className="text-sm font-medium text-gray-300 hover:text-white flex items-center">
              MERCHANTS
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <button className="text-sm font-medium text-gray-300 hover:text-white">PRICING</button>
          <button className="text-sm font-medium text-gray-300 hover:text-white">HELP & SUPPORT</button>
          <div className="relative group">
            <button className="text-sm font-medium text-gray-300 hover:text-white flex items-center">
              ABOUT
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-sm font-medium text-gray-300 hover:text-white border border-gray-700 rounded-full px-4 py-1">
          LOGIN
        </button>
        <button className="text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-full px-4 py-1">
          SIGNUP
        </button>
        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
