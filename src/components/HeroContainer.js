import GT from '../assets/img/GT.png';
import FadeUpOnScroll from './FadeUpOnScroll';
import ResumeOpener from './ResumeOpener';
import { Typewriter } from 'react-simple-typewriter';

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
                            <b>
                                Hey Ethusiasts! I'm <strong className="typewriter-name">
                                    <Typewriter
                                        words={['Ganesh Telore', 'a Full Stack Developer', 'a Creator', 'an Open Source Contributor', 'a Problem Solver']}
                                        loop={0}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </strong>
                            </b>
                            <span>
                                A Full-Stack Enthusiast | RESTful API Architect | Scalable System Designer | Saas Builder | Real-World Problem Solver | Clean Architecture Practitioner| Self-Taught Multi-Stack Engineer
                            </span>
                            <div className="btnContainer">
                                <button id="explore-more"><a href="#aboutme">Explore More</a></button>
                                <ResumeOpener />
                            </div>
                        </div>
                    </div>
                </FadeUpOnScroll>
                <FadeUpOnScroll>
                    <div className="aboutmeContainer">
                        <h1 id="aboutme">About Me</h1>
                        <p>I am a self-driven Full Stack Developer with a deep passion for building scalable, secure, and performance-oriented solutions. With strong expertise across both frontend and backend technologies, I prioritize clean architecture, maintainability, and real-world impact in every project I take on.</p>
                        <p>I don’t chase trends — I master fundamentals, explore technologies in depth, and let the quality of my work speak louder than words. My development style blends creativity, logical problem-solving, and discipline, ensuring that every solution I deliver is both purposeful and reliable.</p>
                        <p>Over the past few years, I’ve successfully built and delivered 20+ projects, including freelance work for clients and independent real-world applications. These projects range from interactive web platforms and SaaS tools to solutions involving cybersecurity practices, and system automation. Each project reflects my goal of crafting software that is not only functional but also genuinely useful for its users.</p>
                        <p>I thrive in challenges and continuously expand my skill set across a diverse tech stack — from React and Next.js on the frontend to Golang, PHP, Python, Java and Rust on the backend, along with experience in databases, cloud deployment, and API design. I also stay actively engaged with cybersecurity, exploring ways to integrate them into practical, impactful solutions.</p>
                        <p>For me, development is more than just writing code — it’s about building with purpose, solving meaningful problems, and delivering value through technology.</p>
                    </div>
                </FadeUpOnScroll>
            </section>
        </FadeUpOnScroll>
    )
};

export default HeroContainer;