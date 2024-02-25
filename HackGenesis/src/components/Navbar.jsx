import React, { useState } from "react";
import "../App.css"; // Assuming you have your CSS in a file named App.css
import logo from "../assets/Clip path group.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <div className="App max-md:hidden">
        <header className="header pt-[0.5rem] pb-[0.5rem]">
          <a href="#" className="logo">
            <img src={logo} className="h-[4rem] w-[4rem]" />
          </a>
          <i
            className={isActive ? "bx bx-x" : "bx bx-menu"}
            id="menu-icon"
            onClick={toggleMenu}
          ></i>
          <nav className={isActive ? "navbar active" : "navbar justify-end"}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </nav>
        </header>
        <div className={isActive ? "nav-bg active" : "nav-bg"}></div>
      </div>

      {/* Medium screen Navbar */}
      <div className="flex justify-between p-[2rem] md:hidden">
        <header className="header pt-[0.5rem] pb-[0.5rem]">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center w-[15rem]">
            <a href="#" className="logo">
              <img src={logo} className="h-[4rem] w-[4rem]" />
            </a>
          </div>
        </header>
        <div className={isActive ? "nav-bg active" : "nav-bg"}></div>
      </div>
    </div>
  );
};

export default Navbar;
