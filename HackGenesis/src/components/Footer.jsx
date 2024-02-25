import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="">
      <div className="container-footer max-md:flex-col md:mt-[6rem]">
        <div className="left-footer">
          <div className="footer-links flex justify-center items-center mb-[2rem]">
            <a
              href="#"
              className="contact-us-footer max-md:mr-10 md:mr-10 md:p-[2rem]"
            >
              CONTACT US
            </a>
            <a href="#" className="contact-us-footer">
              BROCHURE
            </a>
          </div>
        </div>
        <div className="social-icons-footer relative md:bottom-[7rem] md:mt-[4rem]">
          <a href="#*" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook text-4xl" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-4xl" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-4xl" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-discord text-4xl" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-4xl" />
          </a>
        </div>
        <div className="right-footer">
          <ul>
            <li>
              <span className="copyright-footer p-[2rem] md:w-[18rem] lg:w-[30rem] flex justify-center text-center">
                Copyright &copy; 2023 Hack Genesis'24. All Rights Reserved.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
