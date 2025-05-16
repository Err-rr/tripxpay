import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <div className="bg-transparent text-white w-full">
      {/* NAVBAR */}
      <nav className="w-full py-4 px-6 md:px-12 flex justify-between items-center relative z-50">
        {/* Logo and Desktop Nav */}
        <div className="flex items-center">
          <Link to="/">
            <Logo />
          </Link>
          <div className="hidden md:flex ml-8 space-x-6">
            <Link to="/about" className="text-sm font-medium text-gray-300 hover:text-white">
              ABOUT
            </Link>
            <Link to="/blogs" className="text-sm font-medium text-gray-300 hover:text-white">
              BLOGS
            </Link>
            <Link to="/help-support" className="text-sm font-medium text-gray-300 hover:text-white">
              HELP & SUPPORT
            </Link>
            <Link to="/merchant-login" className="text-sm font-medium text-gray-300 hover:text-white">
              MERCHANT
            </Link>
          </div>
        </div>

        {/* Auth Buttons & Hamburger */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-sm font-medium text-gray-300 hover:text-white border border-gray-700 rounded-full px-4 py-3"
          >
            LOGIN
          </Link>
          <Link
            to="/signup"
            className="text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-full px-4 py-2"
          >
            SIGNUP
          </Link>

          {/* Hamburger Icon Toggle */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            <motion.div
              initial={false}
              animate={isOpen ? "open" : "closed"}
              className="w-6 h-3 relative"
            >
              <motion.span
                variants={{
                  open: { rotate: 45, y: 6 },
                  closed: { rotate: 0, y: 0 },
                }}
                className="absolute left-0 top-0 w-full h-0.5 bg-white"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 },
                }}
                className="absolute left-0 top-2.5 w-full h-0.5 bg-white"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                variants={{
                  open: { rotate: -45, y: -6 },
                  closed: { rotate: 0, y: 12 },
                }}
                className="absolute left-0 bottom-0 w-full h-0.5 bg-white"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown (not overlaying, now in document flow) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden  px-6 mt-2 backdrop-blur-sm b"
          >
            <div className="flex space-x-4">
            <Link to="/about" onClick={toggleMenu} className="block text-sm font-medium text-gray-300 hover:text-white">
              ABOUT
            </Link>
            <Link to="/pricing" onClick={toggleMenu} className="block text-sm font-medium text-gray-300 hover:text-white">
              PRICING
            </Link>
            <Link
              to="/help-support"
              onClick={toggleMenu}
              className="block text-sm font-medium text-gray-300 hover:text-white"
            >
              HELP & SUPPORT
            </Link>
            <Link
              to="/merchant-login"
              onClick={toggleMenu}
              className="block text-sm font-medium text-gray-300 hover:text-white"
            >
              MERCHANT
            </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
