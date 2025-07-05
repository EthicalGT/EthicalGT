import React, { useState } from 'react';
import FadeUpOnScroll from './FadeUpOnScroll';

const achievements = [
    {
        title: "Best College Award",
        subtitle: "Got best college award at IBMRD, Ahilyanagar",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        title: "Top Innovator Award",
        subtitle: "Recognized for innovation in academic projects",
        details: "Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
        title: "Hackathon Winner",
        subtitle: "Won Smart India Hackathon, 2023",
        details: "Built an AI-driven problem solver for citizens."
    }
];

const AchievementsContainer = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleViewMore = (index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <section id="achievements">
            <FadeUpOnScroll>
                <h1 className="achievements-title">Achievements</h1>
                <div className="achievementsContainer">
                    {achievements.map((achieve, index) => (
                        <div className="achievements-box" key={index}>
                            <h3>{achieve.title}</h3>
                            <span>{achieve.subtitle}</span>
                            <button className="toggle-button" onClick={() => toggleViewMore(index)}>
                                {activeIndex === index ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
                            </button>
                            <div className={`view-more ${activeIndex === index ? 'show' : ''}`}>
                                <p>{achieve.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </FadeUpOnScroll>
        </section>
    );
};

export default AchievementsContainer;
