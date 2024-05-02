import React from "react";

function Navbar() {
  return (
    <nav className="container flex justify-between p-5 mx-auto">
      <h1 className="text-lg font-semibold leading-6">Your Name</h1>
      <ul className="hidden gap-[0.875rem] sm:flex">
        <li className="p-2">Blog</li>
        <li className="p-2">Projects</li>
        <li className="p-2">About</li>
        <li className="p-2">Newsletter</li>
        <li className="flex gap-4 p-2 lg:bg-black lg:rounded-full lg:py-2 lg:px-4">
          <img
            className="lg:hidden"
            src="src/assets/icons/sun.png"
            alt="Sun icon"
          />
          <img
            className="lg:hidden"
            src="src/assets/icons/moon.png"
            alt="Moon icon"
          />
          <img
            className="hidden lg:block"
            src="src/assets/icons/sun-light-mode.png"
            alt=""
          />
          <img
            className="hidden lg:block"
            src="src/assets/icons/moon-light-mode.png"
            alt=""
          />
        </li>
      </ul>
      <img
        className="aspect-square max-w-8 sm:hidden"
        src="src/assets/icons/hamburger-menu_icon.svg"
        alt=""
      />
    </nav>
  );
}

export default Navbar;
