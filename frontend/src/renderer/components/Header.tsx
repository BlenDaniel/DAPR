import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  GlobeAltIcon,
  QueueListIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../../../assets/svg/logo.svg";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  //const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleLanguage = () => setLanguage(language === "EN" ? "DE" : "EN");

  return (
    <header
      className={`sticky top-0 shadow-md z-50 transition-all ${
        isSticky ? "py-4 opacity-100 bg-white" : "py-6 "
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {isSticky ? (
              <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
            ) : (
              <p></p>
            )}
          </div>

          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link to="/projects" className="hover:text-blue-500">
              Projects
            </Link>
            <Link to="/about" className="hover:text-blue-500">
              About
            </Link>
       
            <Link to="/services" className="hover:text-blue-500">
              Contact 
            </Link>
            <Link
              to="/faq"
              className="hover:text-blue-500"
            >
              FAQ
            </Link>
          </nav>

          <div className="flex items-center">
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center px-3 py-1 border rounded-md hover:bg-gray-100"
            >
              <GlobeAltIcon className="h-5 w-5 mr-1" />
              {language}
            </button>
            <button onClick={toggleMenu} className="md:hidden">
              <QueueListIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className={`
      absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden
      ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}
    `}
        >
          {
            <div
              className={`
          ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden
        `}
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img src={logo} alt="Logo" className="h-8 w-auto" />
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        onClick={toggleMenu}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      <Link
                        to="/"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Home
                        </span>
                      </Link>
                      <Link
                        to="/about"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          About
                        </span>
                      </Link>
                      <Link
                        to="/services"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Services
                        </span>
                      </Link>
                      <Link
                        to="/faq"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          FAQ
                        </span>
                      </Link>
                      <Link
                        to="/blog"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Blog
                        </span>
                      </Link>
                      <div className="relative">
                        <button
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="flex items-center text-gray-500 hover:text-gray-900 focus:outline-none"
                        >
                          More
                          <ChevronDownIcon
                            className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                              dropdownOpen ? "transform rotate-180" : ""
                            }`}
                          />
                        </button>
                        {dropdownOpen && (
                          <div className="absolute left-0 mt-2 w-full bg-white rounded-md shadow-lg py-1 z-10">
                            <Link
                              to="/faq"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              FAQ
                            </Link>
                            <Link
                              to="/blog"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Blog
                            </Link>
                          </div>
                        )}
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="flex items-center">
                    <GlobeAltIcon className="h-5 w-5 mr-2 text-gray-400" />
                    <button
                      onClick={toggleLanguage}
                      className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      {language}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      )}
    </header>
  );
};

export default Header;
