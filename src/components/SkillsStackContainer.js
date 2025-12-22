import { useState } from "react";
import FadeUpOnScroll from "./FadeUpOnScroll";
import postman from "../assets/img/extras/postman.svg";
import springboot from "../assets/img/extras/springboot.svg";
import rocket from "../assets/img/extras/rocket.svg";
import django from "../assets/img/extras/django.svg";
import flask from "../assets/img/extras/flask.svg";
import echo from "../assets/img/extras/echo.png";
import docker from "../assets/img/extras/docker.svg";
import laravel from "../assets/img/extras/laravel.png";


const SkillStackContainer = () => {
    const [activeTab, setActiveTab] = useState("Frontend");

    const skillsData = {
        Frontend: [
            { icon: "fa-solid fa-code icon", label: "React JS" },
            { icon: "fa-solid fa-code icon", label: "Vue JS" },
            { icon: "fa-solid fa-code icon", label: "Next JS" },
            { icon: "fa-brands fa-html5 icon", label: "HTML" },
            { icon: "fa-brands fa-css3-alt icon", label: "CSS" },
            { icon: "fa-brands fa-js icon", label: "JavaScript" },
        ],
        Backend: [
            { icon: "fa-brands fa-rust icon", label: "Rust" },
            { icon: "fa-brands fa-python icon", label: "Python" },
            { icon: "fa-brands fa-golang icon", label: "GoLang" },
            { icon: "fa-brands fa-java icon", label: "Java" },
            { icon: "fa-brands fa-php icon", label: "PHP" },
        ],
        Others: [
            { icon: "fa-brands fa-linux icon", label: "Linux" },
        ],
        Frameworks: [
            { image: springboot, label: "SpringBoot" },
            { image: echo, label: "Echo" },
            { image: rocket, label: "Rocket" },
            { image: django, label: "Django" },
            { image: flask, label: "Flask" },
            { image: laravel, label: "Laravel" },
        ],
        Databases: [
            { icon: "fa-solid fa-database icon", label: "MongoDB" },
            { icon: "fa-solid fa-database icon", label: "MySQL" },
            { icon: "fa-solid fa-database icon", label: "SQLite" },
            { icon: "fa-solid fa-database icon", label: "Oracle" },
            { icon: "fa-solid fa-database icon", label: "PostgresSQL" },
        ],
        Tools: [
            { image: postman, label: "PostMan API" },
            { image: docker, label: "Docker" },
            { icon: "fa-solid fa-code-branch icon", label: "Git" },
            { icon: "fa-brands fa-figma icon", label: "Figma" },
        ],
    };

    return (
        <section id="skills">
            <FadeUpOnScroll>
                <h1>Skills & Stack</h1>
                <div className="skillContainer">
                    <div className="skillNavigators">
                        {["Frontend", "Backend", "Frameworks", "Databases", "Tools", "Others"].map((tab) => (
                            <span
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`navTab ${activeTab === tab ? "activeTab" : ""}`}
                            >
                                {tab}
                            </span>
                        ))}
                    </div>

                    <div className="skills">
                        {skillsData[activeTab].map((skill, index) => (
                            <div className="skillbox" key={index}>
                                {skill.image ? (
                                    <img src={skill.image} alt={skill.label} className="skill-img" />
                                ) : (
                                    <i className={skill.icon}></i>
                                )}
                                <span>{skill.label}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </FadeUpOnScroll>
        </section>
    );
};

export default SkillStackContainer;
