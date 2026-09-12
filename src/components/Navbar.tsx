import { useState } from "react";
import logoImg from "../assets/logo-text.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar bg-white px-4 md:px-12 py-3 border-b border-gray-100 sticky top-0 z-50 shadow-sm scroll-smooth">
      <div className="navbar-start flex items-center gap-2">
        <RxHamburgerMenu onClick={toggleMobileMenu} className="btn btn-ghost btn-circle lg:hidden focus:outline-none w-8 h-8 cursor-pointer"/>
        <a className="flex items-center gap-2">
          <img src={logoImg}alt="DevStack Logo" className="h-8 w-auto object-contain"/>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 text-sm font-medium text-gray-600">
          <li><a className="text-pink-600 font-semibold hover:bg-transparent">Home</a></li>
          <li><a className="hover:text-pink-600 hover:bg-transparent">Technologies</a></li>
          <li><a className="hover:text-pink-600 hover:bg-transparent">Projects</a></li>
          <li><a className="hover:text-pink-600 hover:bg-transparent">About</a></li>
          <li><a className="hover:text-pink-600 hover:bg-transparent">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="hidden lg:flex items-center gap-5">
          <a className="btn btn-ghost bg-green-300 btn-md text-gray-700 font-large">Sign In</a>
          <a className="btn btn-md bg-pink-600 hover:bg-pink-700 text-white border-none font-medium px-4 rounded-md">Sign Up</a>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div onClick={toggleMobileMenu} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity"/>
      )}
      <div className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between p-6 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">
            <img src={logoImg} alt="DevStack Logo" className="h-7 w-auto object-contain"/>
            <IoCloseOutline onClick={toggleMobileMenu} className="btn btn-sm btn-circle btn-ghost text-gray-500 hover:text-gray-900"/>
          </div>

          <ul className="flex flex-col gap-4 mt-8 font-medium text-gray-700 text-base">
            <li><a onClick={toggleMobileMenu}className="block text-pink-600 font-semibold py-1">Home</a></li>
            <li><a onClick={toggleMobileMenu}className="block hover:text-pink-600 py-1 transition-colors">Technologies</a>
            </li>
            <li><a onClick={toggleMobileMenu} className="block hover:text-pink-600 py-1 transition-colors">Projects</a></li>
            <li><a onClick={toggleMobileMenu} className="block hover:text-pink-600 py-1 transition-colors">About</a></li>
            <li><a onClick={toggleMobileMenu} className="block hover:text-pink-600 py-1 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
          <a className="btn btn-outline border-gray-200 bg-green-500 text-white text-lg w-full normal-case font-medium">Sign In</a>
          <a className="btn bg-pink-600 hover:bg-pink-700 text-white text-lg border-none w-full normal-case font-medium">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}
