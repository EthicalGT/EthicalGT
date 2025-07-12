import { useState } from "react";
import FadeUpOnScroll from "./FadeUpOnScroll";

const SkillStackContainer = () => {
    const [activeTab, setActiveTab] = useState("Frontend");

    const skillsData = {
        Frontend: [
            { icon: "fa-solid fa-code icon", label: "React JS" },
            { icon: "fa-brands fa-html5 icon", label: "HTML" },
            { icon: "fa-brands fa-css3-alt icon", label: "CSS" },
            { icon: "fa-brands fa-js icon", label: "JavaScript" },
        ],
        Backend: [
            { icon: "fa-brands fa-rust icon", label: "Rust" },
            { icon: "fa-solid fa-database icon", label: "MongoDB" },
            { icon: "fa-brands fa-python icon", label: "Python" },
            { icon: "fa-brands fa-golang icon", label: "GoLang" },
            { icon: "fa-brands fa-java icon", label: "Java" },
            { icon: "fa-brands fa-php icon", label: "PHP" },
        ],
        Others: [
            { icon: "fa-solid fa-code-branch icon", label: "Git" },
            { icon: "fa-brands fa-figma icon", label: "Figma" },
            { icon: "fa-brands fa-linux icon", label: "Linux" },
        ],
        Frameworks: [
            { icon: "fa-solid fa-folder-tree icon", label: "SpringBoot" },
            { icon: "fa-solid fa-folder-tree icon", label: "Spring" },
            { icon: "fa-solid fa-folder-tree icon", label: "Echo" },
            { icon: "fa-solid fa-folder-tree icon", label: "Rocket" },
            { icon: "fa-solid fa-folder-tree icon", label: "Django" },
            { icon: "fa-solid fa-folder-tree icon", label: "Flask" },
        ],
        Databases: [
            { icon: "fa-solid fa-database icon", label: "MongoDB" },
            { icon: "fa-solid fa-database icon", label: "MySQL" },
            { icon: "fa-solid fa-database icon", label: "SQLite" },
            { icon: "fa-solid fa-database icon", label: "Oracle" },
            { icon: "fa-solid fa-database icon", label: "PostgresSQL" },
        ],
    };

    return (
        <section id="skills">
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
