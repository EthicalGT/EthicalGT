import { useState } from "react";
import FadeUpOnScroll from "./FadeUpOnScroll";

const SkillStackContainer = () => {
    const [activeTab, setActiveTab] = useState("Frontend");

    const skillsData = {
        Frontend: [
            { icon: "fa-solid fa-code", label: "React JS" },
            { icon: "fa-brands fa-html5", label: "HTML" },
            { icon: "fa-brands fa-css3-alt", label: "CSS" },
            { icon: "fa-brands fa-js", label: "JavaScript" },
        ],
        Backend: [
            { icon: "fa-brands fa-rust", label: "Rust" },
            { icon: "fa-solid fa-database", label: "MongoDB" },
            { icon: "fa-brands fa-python", label: "Python" },
            { icon: "fa-brands fa-golang", label: "GoLang" },
            { icon: "fa-brands fa-java", label: "Java" },
            { icon: "fa-brands fa-php", label: "PHP" },
        ],
        Others: [
            { icon: "fa-solid fa-code-branch", label: "Git" },
            { icon: "fa-brands fa-figma", label: "Figma" },
            { icon: "fa-brands fa-linux", label: "Linux" },
            { icon: "fa-solid fa-terminal", label: "CLI Tools" },
        ],
        Frameworks: [
            { icon: "fa-solid fa-springboot", label: "SpringBoot" },
            { icon: "fa-solid fa-spring", label: "Spring" },
            { icon: "fa-solid fa-echo", label: "Echo" },
            { icon: "fa-solid fa-rocket", label: "Rocket" },
        ],
        Databases: [
            { icon: "fa-solid fa-database", label: "MongoDB" },
            { icon: "fa-solid fa-database", label: "MySQL" },
            { icon: "fa-solid fa-database", label: "SQLite" },
            { icon: "fa-solid fa-database", label: "Oracle" },
            { icon: "fa-solid fa-database", label: "PostgresSQL" },
        ],
    };

    return (
        <section>
            <FadeUpOnScroll>
                <h1>Skills & Stack</h1>
                <div className="skillContainer">
                    <div className="skillNavigators">
                        {["Frontend", "Backend", "Frameworks", "Databases", "Others"].map((tab) => (
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
                                <i className={skill.icon}></i>
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
