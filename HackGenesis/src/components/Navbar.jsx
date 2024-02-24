import React, { useState } from "react";
import "../App.css"; // Assuming you have your CSS in a file named App.css
import logo from "../assets/Clip path group.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="App">
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
  );
};

export default Navbar;
