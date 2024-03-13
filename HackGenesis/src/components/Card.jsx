import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./Cards.css";

const Card = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="containerr flex max-sm:flex-col">
        <div className="card">
          <div className="image">
            <img
              className="rounded-lg"
              src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"
              alt="Placeholder"
            />
          </div>
          <div className="content">
            <h3 className="text-xl font-bold">This is content</h3>
            <p className="text-sm">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
            <div className="social-icons flex justify-center items-center">
              <a href="https://www.linkedin.com/" target="_blank">
                <FaLinkedin className="text-gray-400 hover:text-blue-500 mx-2 text-[2rem] mt-[0.5rem]" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram className="text-gray-400 hover:text-pink-500 mx-2 text-[2rem] mt-[0.5rem]" />
              </a>
              <a href="https://www.github.com/" target="_blank">
                <FaGithub className="text-gray-400 hover:text-gray-700 mx-2 text-[2rem] mt-[0.5rem]" />
              </a>
            </div>
          </div>
        </div>

        {/* Repeat the card structure two more times for additional containers */}
        <div className="card">
          <div className="image">
            <img
              className="rounded-lg"
              src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"
              alt="Placeholder"
            />
          </div>
          <div className="content">
            <h3 className="text-xl font-bold">This is content</h3>
            <p className="text-sm">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
            <div className="social-icons flex justify-center items-center">
              <a href="https://www.linkedin.com/" target="_blank">
                <FaLinkedin className="text-gray-400 hover:text-blue-500 mx-2 text-[2rem] mt-[0.5rem]" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram className="text-gray-400 hover:text-pink-500 mx-2 text-[2rem] mt-[0.5rem]" />
              </a>
              <a href="https://www.github.com/" target="_blank">
                <FaGithub className="text-gray-400 hover:text-gray-700 mx-2 text-[2rem] mt-[0.5rem]" />
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img
              className="rounded-lg"
              src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"
              alt="Placeholder"
            />
          </div>
          <div className="content">
            <h3 className="text-xl font-bold">This is content</h3>
            <p className="text-sm">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
            <div className="social-icons flex justify-center items-center">
              <a href="https://www.linkedin.com/" target="_blank">
                <FaLinkedin className="text-gray-400 hover:text-blue-500 mx-2 text-[2rem] mt-[0.5rem]" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram className="text-gray-400 hover:text-pink-500 mx-2 text-[2rem] mt-[0.5rem]" />
              </a>
              <a href="https://www.github.com/" target="_blank">
                <FaGithub className="text-gray-400 hover:text-gray-700 mx-2 text-[2rem] mt-[0.5rem]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
