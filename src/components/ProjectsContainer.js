import React, { useState } from 'react';
import culturyus from '../assets/img/projects_img/culturyus.png';
import ed_2 from '../assets/img/projects_img/ed_2.jpeg';
import ed_3 from '../assets/img/projects_img/ed_3.jpeg';
import ethicalpay from '../assets/img/projects_img/ethicalpay.jpeg';
import shopg from '../assets/img/projects_img/shopg.jpeg';
import newshub from '../assets/img/projects_img/newshub.jpeg';
import cinevibe from '../assets/img/projects_img/cinevibe.jpeg';
import kavach from '../assets/img/projects_img/kavach.png';
import kohinoor from '../assets/img/projects_img/kohinoor.jpeg';
import babycare from '../assets/img/projects_img/babycare.png';
import ethicalpay2 from '../assets/img/projects_img/ethicalpay2.png';
import ethixion from '../assets/img/projects_img/Ethixion.png';
import freelancing from "../assets/img/projects_img/freelancing.png";
import boss from "../assets/img/projects_img/boss.png";
import aura from "../assets/img/projects_img/aura.png";
import hodportfolio from "../assets/img/projects_img/hodportfolio.png";
import alternate from "../assets/img/projects_img/alternate.png";
import portfolio from "../assets/img/projects_img/portfolio.png";


import FadeUpOnScroll from './FadeUpOnScroll';

const ProjectsContainer = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const projects = [
        {
            name: "CulturyUs",
            category: "Full Stack",
            image: culturyus,
            description: "CulturyUs is a user driven platform serving various services to user like skill-exchange, tourist guide booking, indian artpeice marketplace etc.",
            techStack: ["html5", "css3-alt", "js", "golang"],
            github: "https://github.com/EthicalGT/CulturyUs",
            demo: null,
            label: "Completed"
        },
        {
            name: "EthicalDood",
            category: "Full Stack",
            image: ed_2,
            description: "EthicalDood is a learning platform offering real-world code examples, solved problems, and PDF solutions to help users master programming effectively.",
            techStack: ["html5", "css3-alt", "js", "php"],
            github: "https://github.com/EthicalGT/Ethicaldood",
            demo: null,
            label: "Completed"
        },
        {
            name: "EthicalDood 2.0",
            category: "Full Stack",
            image: ed_2,
            description: "EthicalDood 2.0 is an advanced PHP-based platform that extends its original version with features like forums, MCQ tests, and user uploads—offering a complete space for developers to learn, share code, and collaborate.",
            techStack: ["html5", "css3-alt", "js", "php"],
            github: "https://github.com/EthicalGT/Ethicaldood-2.0",
            demo: null,
            label: "Completed"
        },
        {
            name: "EthicalDood 3.0",
            category: "Full Stack",
            image: ed_3,
            description: "EthicalDood 3.0 is a Java Swing/AWT desktop app that brings the full power of its web predecessors offline, adding new tools like a plagiarism detector, CMS, online compiler, and many more.",
            techStack: ["java"],
            github: "https://github.com/EthicalGT/EthicalDood-3.0",
            demo: null,
            label: "Completed"
        },
        {
            name: "EthicalPay",
            category: "Full Stack",
            image: ethicalpay,
            description: "EthicalPay is a test-mode payment gateway tailored for student and college projects, enabling safe and realistic transaction flow testing without real financial operations.",
            techStack: ["html5", "css3-alt", "js", "golang"],
            github: "https://github.com/EthicalGT/EthicalPay",
            demo: "https://troubled-eloisa-ethicalpay-eb02efa7.koyeb.app/",
            label: "Completed"
        },
        {
            name: "EthicalPay 2.0",
            category: "Full Stack",
            image: ethicalpay2,
            description: "EthicalPay II is an SaaS, API-driven Payment Gateway Simulation Framework designed for developers, students, and researchers to test and experiment with payment workflows.",
            techStack: ["html5", "css3-alt", "js", "golang"],
            github: "https://github.com/EthicalGT/EthicalPay",
            demo: "https://ethicalpay2.koyeb.app/",
            label: "Completed"
        },
        {
            name: "LocalPal",
            category: "Full Stack",
            image: alternate,
            description: "LocalPal is a Django-based static web app with MySQL that guides users to nearby attractions. It features an admin panel for managing content and collecting user feedback.",
            techStack: ["html5", "css3-alt", "js", "python"],
            github: "https://github.com/EthicalGT/LocalPal",
            demo: null,
            label: "Completed"
        },
        {
            name: "PsychBuddy",
            category: "Full Stack",
            image: alternate,
            description: "PsychBuddy is a Django web app offering mental health support through therapy booking, emotion detection, resources, and community engagement—helping users manage their well-being effectively.",
            techStack: ["html5", "css3-alt", "js", "python"],
            github: "https://github.com/EthicalGT/Psychbuddy",
            demo: null,
            label: "Completed"
        },
        {
            name: "Shop-G",
            category: "Full Stack",
            image: shopg,
            description: "Shop-G is a PHP-based grocery shopping app featuring product listings, cart management, user feedback, and an admin panel, all powered by a MySQL database for efficient data handling.",
            techStack: ["html5", "css3-alt", "js", "php"],
            github: "https://github.com/EthicalGT/Shop-G",
            demo: null,
            label: "Completed"
        },
        {
            name: "CineVibe",
            category: "Full Stack",
            image: cinevibe,
            description: "CineVibe is an open-source web application designed for movie lovers to watch, download, and book tickets for movies online. The site is managed by an admin having full access.",
            techStack: ["html5", "css3-alt", "js", "php"],
            github: "https://github.com/EthicalGT/CineVibe",
            demo: null,
            label: "Completed"
        },
        {
            name: "Kohinoor",
            category: "Full Stack",
            image: kohinoor,
            description: "Kohinoor is a PHP-based jewellery shopping app with cart management, purchase handling, admin CRUD, and feedback features, using MySQL for efficient data management.",
            techStack: ["html5", "css3-alt", "js", "php"],
            github: "https://github.com/EthicalGT/Kohinoor",
            demo: null,
            label: "Completed"
        },
        {
            name: "Kavach",
            category: "Mobile Application",
            image: kavach,
            description: "Kavach is a mobile app focused on women’s safety, featuring SOS alerts, live location sharing, emergency calls, and admin notifications for quick emergency support.",
            techStack: ["android", "java"],
            github: "https://github.com/EthicalGT/Kavach",
            demo: null,
            label: "Completed"
        },
        {
            name: "BabyCare",
            category: "Full Stack",
            image: babycare,
            description: "BabyCare is a Java desktop app offering offline baby care guidance, product recommendations, and name ideas, with admin-managed content for easy updates.",
            techStack: ["java"],
            github: "https://github.com/EthicalGT/Babycare",
            demo: null,
            label: "Completed"
        },
        {
            name: "NewsHub",
            category: "Full Stack",
            image: newshub,
            description: "NewsHub is a dynamic news platform allowing users to view news, send feedback, and interact, with admin control to manage and update content.",
            techStack: ["html5", "css3-alt", "js", "php"],
            github: "https://github.com/EthicalGT/NewsHub",
            demo: null,
            label: "Completed"
        },
        {
            name: "Ethixion",
            category: "Full Stack",
            image: ethixion,
            description: "Ethixion is an advanced Web Application Firewall (WAF) and API security platform designed to safeguard modern applications against evolving cyber threats. Ethixion is under development...",
            techStack: ["react", "rust"],
            github: "https://github.com/EthicalGT/Ethixion-FE",
            demo: null,
            label: "In Development"
        },
        {
            name: "AURA",
            category: "Full Stack",
            image: aura,
            description: "AURA (Authentic Universal Ayurvedic Resource Authentication) is an AI and Blockchain-powered platform that ensures authenticity, transparency, and fair trade in the Ayurvedic herb supply chain. Farmers upload geo-tagged herb images through a mobile app.",
            techStack: ["react", "blockchain", "ai"],
            github: "https://github.com/EthicalGT/AURA.git",
            demo: "https://aura-ktej.onrender.com/",
            label: "In Development"
        },
        {
            name: "HOD Portfolio - MCA Department",
            category: "Freelancing",
            image: hodportfolio,
            description: "A freelance project for the MCA Department HOD portfolio, showcasing professional achievements, department updates, and faculty highlights with a modern and responsive design.",
            techStack: ["html5", "css3-alt", "js", "react"],
            github: "https://github.com/EthicalGT/KavitaSuryawanshi-Portfolio.git",
            demo: "https://kavitasuryawanshi.vercel.app/",
            label: "Completed"
        },
        {
            name: "ShishyArthi",
            category: "Web Designs",
            image: alternate,
            description: "Shishyarthi is an innovative online platform designed to address real-world challenges faced by students. It offers a comprehensive suite of resources, including academic support, job opportunities, and tools.",
            techStack: ["html5", "css3-alt", "js"],
            github: "https://github.com/EthicalGT/Shishyarthi.git",
            demo: null,
            label: "Completed"
        },
        {
            name: "Freelancing Project",
            category: "Freelancing",
            image: freelancing,
            description: "A project for MBA students for organic food growing. Due to a private agreement, the repository is private and cannot be disclosed.",
            techStack: ["html5", "css3-alt", "js"],
            github: "https://github.com/EthicalGT/Freelancing.git",
            demo: "https://freelancing-seven.vercel.app/",
            label: "In Development"
        },
        {
            name: "BOSS",
            category: "Full Stack",
            image: boss,
            description: "A new layer of browser-side security for web applications. The project is copyrighted; please do not attempt to copy. Built with Rust, Next.js, and ML models.",
            techStack: ["rust", "react", "js", "hexagon-nodes-bolt"],
            github: "https://github.com/EthicalGT/BOSS.git",
            demo: "https://bossservice.vercel.app/",
            label: "In Development"
        },
        {
            name: "My First Portfolio",
            category: "Web Designs",
            image: portfolio,
            description: "My very first portfolio project, built in just one day using HTML5, CSS, and JavaScript. It reflects my initial steps into frontend development, focusing on layout, styling, and interactivity.",
            techStack: ["html5", "css3-alt", "js"],
            github: "https://github.com/EthicalGT/Portfolio-Project.git",
            demo: null,
            label: "Completed"
        },
        {
            name: "BookHaven",
            category: "Full Stack",
            image: alternate,
            description: "BookHaven is a simple and fun full-stack book management system that demonstrates CRUD (Create, Read, Update, Delete) operations. Built using Django for the backend and HTML, CSS, and JavaScript for the frontend.",
            techStack: ["html5", "css3-alt", "js", "python"],
            github: "https://github.com/EthicalGT/BookHaven",
            demo: null,
            label: "Completed"
        },

    ];

    const categories = ["All", "Full Stack", "Mobile Application", "Freelancing", "Web Designs"];

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section id="projects">
            <FadeUpOnScroll>
                <h1>Projects</h1>
                <div className="category-buttons">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={activeCategory === cat ? "active" : ""}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="projectsContainer">
                    {filteredProjects.map((proj) => (
                        <div className="project-boxes" key={proj.name}>
                            <div className="image-container">
                                <img src={proj.image} alt={proj.name} />
                                {proj.label && (
                                    <div className="project-label">
                                        {proj.label === "In Development" ? (
                                            <i className="fa-solid fa-spinner"></i>
                                        ) : (
                                            <i class="fa-solid fa-thumbs-up"></i>
                                        )}
                                        {proj.label}
                                    </div>
                                )}
                            </div>
                            <h2>{proj.name}</h2>
                            <p>{proj.description}</p>

                            <h3>Technology Stack</h3>
                            <div className="techstackContainer">
                                {proj.techStack.map((t, i) => (
                                    <i key={i} className={`fa-brands fa-${t}`}></i>
                                ))}
                            </div>

                            <div className="actionContainers">
                                <a href={proj.github} target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                {proj.demo && (
                                    <a href={proj.demo} target="_blank" rel="noreferrer">
                                        <i className="fa-solid fa-rocket"></i>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </FadeUpOnScroll>
        </section>
    );
};

export default ProjectsContainer;
