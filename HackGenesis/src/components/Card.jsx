import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./Cards.css";

const Card = () => {
  const [category, setCategory] = useState("tech");

  // Sample team data
  const teamData = {
    tech: [
      {
        name: "Aditya Sebastian",
        image:
          "https://media.licdn.com/dms/image/D4D03AQGcCZubMiHjzA/profile-displayphoto-shrink_400_400/0/1687702173877?e=1715817600&v=beta&t=zdJ9XwbuYaXfPBGEKyEPp3VQw7f5zY4Ew9JMyljITJI",
        linkedin: "https://www.linkedin.com/in/aditya-sebastian/",
        instagram: "https://www.instagram.com/adixseb_08/",
        github: "#",
        msg: "loremwejde3hnde3hudbe3fbubqfbyufvberwyuv",
      },
      {
        name: "Ayush Gupta",
        image:
          "https://media.licdn.com/dms/image/D4D03AQFTxqZauNuSPg/profile-displayphoto-shrink_400_400/0/1688385692264?e=1715817600&v=beta&t=eSAt9zqs8BSIGT3uBxBjC6ubQKu0p0qW_ZRF51rB4Yk",
        linkedin: "https://www.linkedin.com/in/ayushgupta08/",
        instagram: "https://www.instagram.com/aashu__thespoiler/",
        github: "https://github.com/ayushg14",
        msg: "loremwejde3hnde3hudbe3fbubqfbyufvberwyuv",
      },
      {
        name: "Baniya Shaheb",
        image:
          "https://media.licdn.com/dms/image/D4D03AQGYIvCzU1QvJQ/profile-displayphoto-shrink_400_400/0/1681391031568?e=1715817600&v=beta&t=fRLPC1zmyD9ondRB-9daN1PmYWL-Eou6bb1qzfs5G-A",
        linkedin: "https://www.linkedin.com/in/garg-anmol/",
        instagram: "https://www.instagram.com/anmol_.garg/",
        github: "https://github.com/AnmollGarg",
        msg: "loremwejde3hnde3hudbe3fbubqfbyufvberwyuv",
      },

      {
        name: "Baniya Shaheb",
        image:
          "https://media.licdn.com/dms/image/D4D03AQGYIvCzU1QvJQ/profile-displayphoto-shrink_400_400/0/1681391031568?e=1715817600&v=beta&t=fRLPC1zmyD9ondRB-9daN1PmYWL-Eou6bb1qzfs5G-A",
        linkedin: "https://www.linkedin.com/in/garg-anmol/",
        instagram: "https://www.instagram.com/anmol_.garg/",
        github: "https://github.com/AnmollGarg",
        msg: "loremwejde3hnde3hudbe3fbubqfbyufvberwyuv",
      },

      {
        name: "Baniya Shaheb",
        image:
          "https://media.licdn.com/dms/image/D4D03AQGYIvCzU1QvJQ/profile-displayphoto-shrink_400_400/0/1681391031568?e=1715817600&v=beta&t=fRLPC1zmyD9ondRB-9daN1PmYWL-Eou6bb1qzfs5G-A",
        linkedin: "https://www.linkedin.com/in/garg-anmol/",
        instagram: "https://www.instagram.com/anmol_.garg/",
        github: "https://github.com/AnmollGarg",
        msg: "loremwejde3hnde3hudbe3fbubqfbyufvberwyuv",
      },

      {
        name: "Baniya Shaheb",
        image:
          "https://media.licdn.com/dms/image/D4D03AQGYIvCzU1QvJQ/profile-displayphoto-shrink_400_400/0/1681391031568?e=1715817600&v=beta&t=fRLPC1zmyD9ondRB-9daN1PmYWL-Eou6bb1qzfs5G-A",
        linkedin: "https://www.linkedin.com/in/garg-anmol/",
        instagram: "https://www.instagram.com/anmol_.garg/",
        github: "https://github.com/AnmollGarg",
        msg: "loremwejde3hnde3hudbe3fbubqfbyufvberwyuv",
      },

      {
        name: "Baniya Shaheb",
        image:
          "https://media.licdn.com/dms/image/D4D03AQGYIvCzU1QvJQ/profile-displayphoto-shrink_400_400/0/1681391031568?e=1715817600&v=beta&t=fRLPC1zmyD9ondRB-9daN1PmYWL-Eou6bb1qzfs5G-A",
        linkedin: "https://www.linkedin.com/in/garg-anmol/",
        instagram: "https://www.instagram.com/anmol_.garg/",
        github: "https://github.com/AnmollGarg",
        msg: "loremwejde3hnde3hudbe3fbubqfbyufvberwyuv",
      },

      {
        name: "Baniya Shaheb",
        image:
          "https://media.licdn.com/dms/image/D4D03AQGYIvCzU1QvJQ/profile-displayphoto-shrink_400_400/0/1681391031568?e=1715817600&v=beta&t=fRLPC1zmyD9ondRB-9daN1PmYWL-Eou6bb1qzfs5G-A",
        linkedin: "https://www.linkedin.com/in/garg-anmol/",
        instagram: "https://www.instagram.com/anmol_.garg/",
        github: "https://github.com/AnmollGarg",
        msg: "loremwejde3hnde3hudbe3fbubqfbyufvberwyuv",
      },
    ],
    pr: [
      {
        name: "Ayush Gupta",
        image:
          "https://media.licdn.com/dms/image/D4D03AQFTxqZauNuSPg/profile-displayphoto-shrink_400_400/0/1688385692264?e=1715817600&v=beta&t=eSAt9zqs8BSIGT3uBxBjC6ubQKu0p0qW_ZRF51rB4Yk",
        linkedin: "https://www.linkedin.com/in/ayushgupta08/",
        instagram: "https://www.instagram.com/aashu__thespoiler/",
        github: "https://github.com/ayushg14",
        msg: "loremwejde3hnde3hudbe3fbubqfbyufvberwyuv",
      },
      {
        name: "Ayush Gupta",
        image:
          "https://media.licdn.com/dms/image/D4D03AQFTxqZauNuSPg/profile-displayphoto-shrink_400_400/0/1688385692264?e=1715817600&v=beta&t=eSAt9zqs8BSIGT3uBxBjC6ubQKu0p0qW_ZRF51rB4Yk",
        linkedin: "https://www.linkedin.com/in/ayushgupta08/",
        instagram: "https://www.instagram.com/aashu__thespoiler/",
        github: "https://github.com/ayushg14",
        msg: "loremwejde3hnde3hudbe3fbubqfbyufvberwyuv",
      },
      {
        name: "Ayush Gupta",
        image:
          "https://media.licdn.com/dms/image/D4D03AQFTxqZauNuSPg/profile-displayphoto-shrink_400_400/0/1688385692264?e=1715817600&v=beta&t=eSAt9zqs8BSIGT3uBxBjC6ubQKu0p0qW_ZRF51rB4Yk",
        linkedin: "https://www.linkedin.com/in/ayushgupta08/",
        instagram: "https://www.instagram.com/aashu__thespoiler/",
        github: "https://github.com/ayushg14",
        msg: "loremwejde3hnde3hudbe3fbubqfbyufvberwyuv",
      },
      {
        name: "Ayush Gupta",
        image:
          "https://media.licdn.com/dms/image/D4D03AQFTxqZauNuSPg/profile-displayphoto-shrink_400_400/0/1688385692264?e=1715817600&v=beta&t=eSAt9zqs8BSIGT3uBxBjC6ubQKu0p0qW_ZRF51rB4Yk",
        linkedin: "https://www.linkedin.com/in/ayushgupta08/",
        instagram: "https://www.instagram.com/aashu__thespoiler/",
        github: "https://github.com/ayushg14",
        msg: "loremwejde3hnde3hudbe3fbubqfbyufvberwyuv",
      },
    ],
    logistics: [],
  };

  // Function to generate team member cards based on the selected category
  const generateCards = () => {
    return teamData[category].map((member, index) => (
      <div className="card" key={index}>
        <div className="image max-sm:w-[14rem]">
          <img className="rounded-lg" src={member.image} alt={member.name} />
        </div>
        <div className="content">
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-sm break-words">{member.msg}</p>
          <div className="social-icons flex justify-center items-center">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-400 hover:text-blue-500 mx-2 text-[2rem] mt-[0.5rem]" />
            </a>
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-gray-400 hover:text-pink-500 mx-2 text-[2rem] mt-[0.5rem]" />
            </a>
            <a href={member.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-400 hover:text-gray-700 mx-2 text-[2rem] mt-[0.5rem]" />
            </a>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button
          className={`mr-4 ${
            category === "tech" ? "bg-blue-500" : "bg-gray-500"
          } text-white px-4 py-2 rounded`}
          onClick={() => setCategory("tech")}
        >
          Tech
        </button>
        <button
          className={`mr-4 ${
            category === "pr" ? "bg-blue-500" : "bg-gray-500"
          } text-white px-4 py-2 rounded`}
          onClick={() => setCategory("pr")}
        >
          PR
        </button>
        <button
          className={`mr-4 ${
            category === "logistics" ? "bg-blue-500" : "bg-gray-500"
          } text-white px-4 py-2 rounded`}
          onClick={() => setCategory("logistics")}
        >
          Logistics
        </button>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="containerr flex max-sm:flex-col flex-wrap">
          {generateCards()}
        </div>
      </div>
    </div>
  );
};

export default Card;
