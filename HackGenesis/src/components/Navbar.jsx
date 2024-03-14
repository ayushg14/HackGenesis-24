import React, { useState, useEffect, useRef } from "react";
import "../App.css"; // Assuming you have your CSS in a file named App.css
import logo from "../assets/Clip path group.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePageClick = () => {
    setIsActive(false);
  };

  return (
    <div>
      <div className="App max-md:hidden">
        <header className="header pt-[0.5rem] pb-[0.5rem]">
          <a href="/" className="logo">
            <img src={logo} className="h-[4rem] w-[4rem]" alt="Logo" />
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer lg:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={toggleMenu}
          >
            {isActive ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
          <nav className={isActive ? "navbar active" : "navbar justify-end"}>
            <a href="#about">About</a>
            <a href="#tracks">Tracks</a>
            <a href="#schedule">Schedule</a>
            <a href="#faq">FAQ</a>
          </nav>
        </header>
        <div className={isActive ? "nav-bg active" : "nav-bg"}></div>
      </div>

      {/* Medium screen Navbar */}
      <div className="flex justify-between p-[2rem] md:hidden">
        <header className="header pt-[0.5rem] pb-[0.5rem]">
          <div className="dropdown" ref={dropdownRef}>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 cursor-pointer lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isActive ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </div>
            <ul
              className={
                isActive
                  ? "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  : "hidden"
              }
            >
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#tracks">Tracks</a>
              </li>
              <li>
                <a href="#schedule">Schedule</a>
              </li>
              <li>
                <a href="#team">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-end w-[15rem]">
            <a href="#" className="logo mr-[1rem]">
              <img src={logo} className="h-[4rem] w-[4rem]" alt="Logo" />
            </a>
          </div>
        </header>
        <div className={isActive} onClick={handlePageClick}></div>
      </div>
    </div>
  );
};

export default Navbar;
