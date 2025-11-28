import React, { useState } from 'react';
import FadeUpOnScroll from './FadeUpOnScroll';

const achievements = [
    {
        title: "InterCollege Web Development Award",
        subtitle: "1st Runner-up – Front-End Web Development Competition",
        details: "Awarded 1st Runner-up in a fast-paced 25-minute front-end development challenge using HTML5, CSS3, and JavaScript. Designed and implemented a fully responsive UI under strict time constraints, showcasing creativity, speed, and clean code structure. Evaluated on design aesthetics, interactivity, and semantic markup."
    },
    {
        title: "Academic Excellence Award – SSC (10th Grade)",
        subtitle: "Felicitated at Kopargaon for securing top marks in SSC",
        details: "Honored by a renowned Marathi TV actress and Shri Ashutosh Kale (MLA, Kopargaon) in a public ceremony for outstanding academic performance in the SSC Board exams."
    }
    ,
    {
        title: "Medal for Academic Achievement – SSC",
        subtitle: "Awarded by Pentagon Career Institute, Shrirampur",
        details: "Received a medal and recognition for exceptional performance in the 10th-grade board exams during a felicitation program hosted by Pentagon Career Institute."
    },
    {
        "title": "Best Copyright Project Award",
        "subtitle": "Certificate Received from HOD – MCA Induction Program",
        "details": "Awarded for developing an original and innovative project during the first-year MCA induction program at Culturyus. Recognized by the Head of Department for creativity, originality, and adherence to copyright standards, demonstrating a strong understanding of intellectual property and professional project implementation."
    },
    {
        "title": "Best IT Assembly Presenter",
        "subtitle": "Awarded for FYMCA Students – 2025",
        "details": "Recognized as the Best Presenter during the IT Assembly for First-Year MCA students in 2025. Delivered an engaging and informative session on 'Dark Web' topics, demonstrating strong communication skills, technical understanding, and the ability to simplify complex concepts for peers."
    },
    {
        "title": "EthicalPay V2 - Research Paper",
        "subtitle": "Developer-Centric Simulated Payment Gateway",
        "details": "Published a research paper on EthicalPay V2, a security-focused SaaS platform I developed. The platform provides a simulated payment gateway with real-time transaction debugging and smart failure prediction. Highlighted innovative approaches to secure payment simulation, developer usability, and proactive failure management, contributing to safer and more efficient transaction testing."
    },


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
