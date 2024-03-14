import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./Cards.css";

const Card = () => {
  const [category, setCategory] = useState("leads");

  // Sample team data
  const teamData = {
    tech: [
      {
        name: "Ayush Gupta",
        image:
          "https://i.ibb.co/fDmGYPW/67ee2a87-b1b1-496f-b6ed-a6f1dd68c781.jpg",
        linkedin: "https://www.linkedin.com/in/ayushgupta08/",
        instagram: "https://www.instagram.com/aashu__thespoiler/",
        github: "https://github.com/ayushg14",
        msg: "Meet our nocturnal navigator of code, weaving React spells and web wonders with a dash of humor – our Website Developer brings digital magic to life!",
      },

      {
        name: "Aabhigyan Kumar",
        image: "https://i.ibb.co/P5fLNy6/IMG20231114012442-2.jpg",
        linkedin: "https://www.linkedin.com/in/aabhigyankumar-global/",
        instagram: "https://www.instagram.com/_aabhigyan_/",
        github: "https://github.com/Aabhi-k/",
        msg: "Meet the Coffee infused creator of Hack Genesis Bot - Sleep deprivation is real, but the Hack Genesis community is stronger!",
      },
      {
        name: "Harsh Tolani",
        image:
          "https://i.ibb.co/5ByD51Q/Whats-App-Image-2024-03-15-at-12-00-55-AM.jpg",
        linkedin: "#",
        instagram: "https://www.instagram.com/_harsh__67/",
        github: "https://github.com/HarshTolani2004",
        msg: "Welcome to digital underworld, where code reigns supreme! I'm your Discord necromancer, innovation in Hack Genesis!!",
      },
    ],
    leads: [
      {
        name: "Aditya Sebastian",
        image:
          "https://media.licdn.com/dms/image/D4D03AQGcCZubMiHjzA/profile-displayphoto-shrink_400_400/0/1687702173877?e=1715817600&v=beta&t=zdJ9XwbuYaXfPBGEKyEPp3VQw7f5zY4Ew9JMyljITJI",
        linkedin: "https://www.linkedin.com/in/aditya-sebastian/",
        instagram: "https://www.instagram.com/adixseb_08/",
        github: "#",
        msg: "Our Lead Organizer: A nocturnal maestro orchestrating events with wit and intellect, ensuring laughter echoes under the stars.",
      },
      {
        name: "Anmol Garg",
        image:
          "https://media.licdn.com/dms/image/D4D03AQGYIvCzU1QvJQ/profile-displayphoto-shrink_400_400/0/1681391031568?e=1715817600&v=beta&t=fRLPC1zmyD9ondRB-9daN1PmYWL-Eou6bb1qzfs5G-A",
        linkedin: "https://www.linkedin.com/in/garg-anmol/",
        instagram: "https://www.instagram.com/anmol_.garg/",
        github: "https://github.com/AnmollGarg",
        msg: "Meet our dual-threat dynamo: Lazy but lively Website Wizard by day, and Lead Organizer by night, infusing events with wit and mischief.",
      },
    ],
    media: [
      {
        name: "Kartikey Sharma",
        image:
          "https://i.ibb.co/hZRdXQJ/6f3b4355-2da0-42e7-8154-0d86e9110dbb-2.jpg",
        linkedin: "https://www.linkedin.com/in/kartikey-sharma-444a62257/",
        instagram: "https://www.instagram.com/_kartikey02/",
        github: "#",
        msg: "Meet our Insta-Magician: With an iPhone (flex) in hand and a knack for editing, our Media Manager crafts visual wonders that defy expectations.",
      },
    ],
  };

  // Function to generate team member cards based on the selected category
  const generateCards = () => {
    const teamMembers = teamData[category];

    if (teamMembers.length === 0) {
      return <p className="text-center text-white">No People</p>;
    }

    return teamMembers.map((member, index) => (
      <div
        className="card max-sm:hover:h-[335px] sm:h-[335px] max-sm:w-[230px] max-sm:h-[300px]"
        key={index}
      >
        <div className="image relative">
          <img
            className="rounded-lg max-sm:w-[12rem] relative right-0"
            src={member.image}
            alt={member.name}
          />
        </div>
        <div className="content">
          <h3 className="text-xl max-sm:text-lg font-bold mb-[1rem]">
            {member.name}
          </h3>
          <p className="text-sm text-left break-words mb-[1rem]">
            {member.msg}
          </p>
          <div className="social-icons flex justify-center items-center mb-[1rem]">
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
    <div id="team" className="pt-[1rem]">
      <h1 className="text-6xl text-center text-white m-[2rem]">Teams</h1>
      <div className="flex justify-center mb-[4rem]">
        <button
          className={`mr-4 ${
            category === "leads" ? "bg-blue-500" : "bg-gray-500"
          } text-white px-4 py-2 rounded`}
          onClick={() => setCategory("leads")}
        >
          Leads
        </button>
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
            category === "media" ? "bg-blue-500" : "bg-gray-500"
          } text-white px-4 py-2 rounded`}
          onClick={() => setCategory("media")}
        >
          Media
        </button>
      </div>
      <div className="flex items-center justify-center min-h-0">
        <div className="containerr flex max-sm:flex-col flex-wrap max-md:m-[2rem] justify-around">
          {generateCards()}
        </div>
      </div>
    </div>
  );
};

export default Card;
