import React, { useEffect } from "react";
import ReactDOM from "react-dom"; // Import ReactDOM
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../App.css";

const TeamCategories = () => {
  // Sample team data (replace with your actual team data)
  const teamData = {
    tech: [
      {
        name: "Aditya Sebastian",
        image:
          "https://media.licdn.com/dms/image/D4D03AQGcCZubMiHjzA/profile-displayphoto-shrink_400_400/0/1687702173877?e=1715817600&v=beta&t=zdJ9XwbuYaXfPBGEKyEPp3VQw7f5zY4Ew9JMyljITJI",
        linkedin: "https://www.linkedin.com/in/aditya-sebastian/",
        instagram: "https://www.instagram.com/adixseb_08/",
        github: "#",
      },
      {
        name: "Ayush Gupta",
        image:
          "https://media.licdn.com/dms/image/D4D03AQFTxqZauNuSPg/profile-displayphoto-shrink_400_400/0/1688385692264?e=1715817600&v=beta&t=eSAt9zqs8BSIGT3uBxBjC6ubQKu0p0qW_ZRF51rB4Yk",
        linkedin: "https://www.linkedin.com/in/ayushgupta08/",
        instagram: "https://www.instagram.com/aashu__thespoiler/",
        github: "https://github.com/ayushg14",
      },
      {
        name: "Baniya Shaheb",
        image:
          "https://media.licdn.com/dms/image/D4D03AQGYIvCzU1QvJQ/profile-displayphoto-shrink_400_400/0/1681391031568?e=1715817600&v=beta&t=fRLPC1zmyD9ondRB-9daN1PmYWL-Eou6bb1qzfs5G-A",
        linkedin: "https://www.linkedin.com/in/garg-anmol/",
        instagram: "https://www.instagram.com/anmol_.garg/",
        github: "https://github.com/AnmollGarg",
      },
      //   { name: "Emily", image: "https://via.placeholder.com/150" },
      //   { name: "David", image: "https://via.placeholder.com/150" },
    ],
    pr: [
      { name: "Sarah", image: "https://via.placeholder.com/150" },
      { name: "Michael", image: "https://via.placeholder.com/150" },
      { name: "Olivia", image: "https://via.placeholder.com/150" },
      { name: "James", image: "https://via.placeholder.com/150" },
      { name: "Emma", image: "https://via.placeholder.com/150" },
      { name: "Sophia", image: "https://via.placeholder.com/150" },
      { name: "William", image: "https://via.placeholder.com/150" },
      { name: "Ava", image: "https://via.placeholder.com/150" },
      { name: "Matthew", image: "https://via.placeholder.com/150" },
      { name: "Ethan", image: "https://via.placeholder.com/150" },
    ],
    logistics: [
      { name: "Daniel", image: "https://via.placeholder.com/150" },
      { name: "Isabella", image: "https://via.placeholder.com/150" },
      { name: "Alexander", image: "https://via.placeholder.com/150" },
      { name: "Mia", image: "https://via.placeholder.com/150" },
    ],
    category4: [],
    category5: [],
  };

  // Function to show team members for a specific category
  const showCategory = (category) => {
    const teamContainer = document.getElementById("team-container");
    teamContainer.innerHTML = ""; // Clear previous team members

    const members = teamData[category];
    if (members && members.length > 0) {
      members.forEach((member) => {
        const card = document.createElement("div");
        card.className =
          "team-card border border-gray-300 rounded p-4 m-4 text-center";

        // Adding image and name
        const img = document.createElement("img");
        img.src = member.image;
        img.alt = member.name;
        img.className = "mx-auto rounded-full h-[15rem] mb-[1.5rem]";
        card.appendChild(img);

        const name = document.createElement("p");
        name.textContent = member.name;
        name.className = "mb-[1.5rem]";
        card.appendChild(name);

        // Adding icons container
        const iconsContainer = document.createElement("div");
        iconsContainer.className = "flex justify-center";

        // Adding Linkedin icon with redirect
        const linkedinLink = document.createElement("a");
        linkedinLink.href = member.linkedin;
        linkedinLink.target = "_blank"; // Open link in a new tab
        const linkedinIcon = document.createElement("div");
        linkedinIcon.className = "text-blue-500 hover:text-blue-700";
        const linkedinIconComponent = <FaLinkedin size={24} />;
        ReactDOM.render(linkedinIconComponent, linkedinIcon);
        linkedinLink.appendChild(linkedinIcon);
        iconsContainer.appendChild(linkedinLink);

        // Adding Instagram icon with redirect
        const instagramLink = document.createElement("a");
        instagramLink.href = member.instagram;
        instagramLink.target = "_blank"; // Open link in a new tab
        const instagramIcon = document.createElement("div");
        instagramIcon.className = "text-blue-500 hover:text-blue-700 ml-4";
        const instagramIconComponent = <FaInstagram size={24} />;
        ReactDOM.render(instagramIconComponent, instagramIcon);
        instagramLink.appendChild(instagramIcon);
        iconsContainer.appendChild(instagramLink);

        // Adding Github icon with redirect
        const githubLink = document.createElement("a");
        githubLink.href = member.github;
        githubLink.target = "_blank"; // Open link in a new tab
        const githubIcon = document.createElement("div");
        githubIcon.className = "text-blue-500 hover:text-blue-700 ml-4";
        const githubIconComponent = <FaGithub size={24} />;
        ReactDOM.render(githubIconComponent, githubIcon);
        githubLink.appendChild(githubIcon);
        iconsContainer.appendChild(githubLink);

        card.appendChild(iconsContainer);

        teamContainer.appendChild(card);
      });
    } else {
      teamContainer.innerText = "No team members in this category.";
    }
  };

  // Show the "Tech" team category by default when component is first rendered
  useEffect(() => {
    showCategory("tech");
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">TEAMS</h1>

      {/* Categories */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => showCategory("tech")}
          className="btn btn-primary mx-2"
        >
          Tech
        </button>
        <button
          onClick={() => showCategory("pr")}
          className="btn btn-primary mx-2"
        >
          PR
        </button>
        <button
          onClick={() => showCategory("logistics")}
          className="btn btn-primary mx-2"
        >
          Logistics
        </button>
        <button
          onClick={() => showCategory("category4")}
          className="btn btn-primary mx-2"
        >
          Category 4
        </button>
        <button
          onClick={() => showCategory("category5")}
          className="btn btn-primary mx-2"
        >
          Category 5
        </button>
      </div>

      {/* Team Members */}
      <div
        id="team-container"
        className="flex flex-wrap justify-center mt-4"
      ></div>
    </div>
  );
};

export default TeamCategories;
