import GT from '../assets/img/GT.png';
import FadeUpOnScroll from './FadeUpOnScroll';

const HeroContainer = () => {
    return (
        <FadeUpOnScroll>
            <section id="home">
                <FadeUpOnScroll>
                    <div className="heroContainer">
                        <div className="imgContainer">
                            <img src={GT} alt="Developer-GT" />
                        </div>
                        <div className="dataContainer">
                            <b>Hey Ethusiasts! I'm <strong>Ganesh Telore</strong></b>
                            <span>A Full-Stack Enthusiast | Turing Ideas into Scalable Solutions | Open Source Contributor | API Developer | Think. Explore. Execute</span>
                            <div className="btnContainer">
                                <button id="explore-more">Explore More</button>
                                <button>My Resume</button>
                            </div>
                        </div>
                    </div>
                </FadeUpOnScroll>
                <FadeUpOnScroll>
                    <div className="aboutmeContainer">
                        <h1 id="aboutme">About Me</h1>
                        <p>I'm a self-driven Full Stack Developer passionate about building meaningful, performance-oriented solutions. With a strong grip on both frontend and backend technologies, I focus on clean architecture, security, and real-world impact. I don’t chase trends — I master fundamentals, explore deeply, and let my work speak louder than words.</p>
                        <p>My work reflects a blend of creativity, deep logic, and discipline. I thrive on challenges, and I’m always exploring new technologies — from React, Golang, PHP, and Rust to AI/ML and cybersecurity. ’m a focused and self-driven developer who believes in constantly sharpening my skills through real-world challenges. With 15+ practical projects built around real-life use cases, I aim to craft solutions that are not just functional, but genuinely useful — especially for the community. I value depth, clean design, and purpose in everything I build.</p>
                    </div>
                </FadeUpOnScroll>
            </section>
        </FadeUpOnScroll>
    )
};

export default HeroContainer;