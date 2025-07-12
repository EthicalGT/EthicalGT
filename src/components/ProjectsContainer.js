import culturyus from '../assets/img/projects_img/culturyus.png';
import ed_2 from '../assets/img/projects_img/ed_2.jpeg';
import ed_3 from '../assets/img/projects_img/ed_3.jpeg';
import ethicalpay from '../assets/img/projects_img/ethicalpay.jpeg';
import shopg from '../assets/img/projects_img/shopg.jpeg';
import newshub from '../assets/img/projects_img/newshub.jpeg';
import cinevibe from '../assets/img/projects_img/cinevibe.jpeg';
import kavach from '../assets/img/projects_img/kavach.png';
import kohinoor from '../assets/img/projects_img/kohinoor.jpeg';

import FadeUpOnScroll from './FadeUpOnScroll';

const ProjectsContainer = () => {
    return (
        <section id="projects">
            <FadeUpOnScroll>
                <h1>Projects</h1>
                <div className="projectsContainer">
                    <div className="project-boxes">
                        <img src={culturyus} alt="CulturyUs" />
                        <h2>CulturyUs</h2>
                        <p>CulturyUs is a user driven platform serving various services to user like skill-exchange, tourist guide booking, indian artpeice marketplace etc.</p>
                        <h3>Technology Stack</h3>
                        <div className="techstackContainer">
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3-alt"></i>
                            <i class="fa-brands fa-js"></i>
                            <i class="fa-brands fa-golang"></i>
                        </div>

                        <div className="actionContainers">
                            <a href="https://github.com/EthicalGT/CulturyUs"><i class="fa-brands fa-github"></i></a>

                        </div>
                    </div>
                    <div className="project-boxes">
                        <img src={ed_2} alt="EthicalDood" />
                        <h2>EthicalDood</h2>
                        <p>EthicalDood is a learning platform offering real-world code examples, solved problems, and PDF solutions to help users master programming effectively.</p>
                        <h3>Technology Stack</h3>
                        <div className="techstackContainer">
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3-alt"></i>
                            <i class="fa-brands fa-js"></i>
                            <i class="fa-brands fa-php"></i>
                        </div>
                        <div className="actionContainers">
                            <a href="https://github.com/EthicalGT/Ethicaldood"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className="project-boxes">
                        <img src={ed_2} alt="EthicalDood 2.0" />
                        <h2>EthicalDood 2.0</h2>
                        <p>EthicalDood 2.0 is an advanced PHP-based platform that extends its original version with features like forums, MCQ tests, and user uploads—offering a complete space for developers to learn, share code, and collaborate.</p>
                        <h3>Technology Stack</h3>
                        <div className="techstackContainer">
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3-alt"></i>
                            <i class="fa-brands fa-js"></i>
                            <i class="fa-brands fa-php"></i>
                        </div>
                        <div className="actionContainers">
                            <a href="https://github.com/EthicalGT/Ethicaldood-2.0"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>

                    <div className="project-boxes">
                        <img src={ed_3} alt="EthicalDood 3.0" />
                        <h2>EthicalDood 3.0</h2>
                        <p>EthicalDood 3.0 is a Java Swing/AWT desktop app that brings the full power of its web predecessors offline, adding new tools like a plagiarism detector, CMS, online compiler, and video lectures for an all-in-one coding platform.</p>
                        <h3>Technology Stack</h3>
                        <div className="techstackContainer">

                            <i class="fa-brands fa-java"></i>
                        </div>
                        <div className="actionContainers">
                            <a href="https://github.com/EthicalGT/EthicalDood-3.0"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className="project-boxes">
                        <img src={ethicalpay} alt="EthicalPay" />
                        <h2>EthicalPay</h2>
                        <p>EthicalPay is a test-mode payment gateway tailored for student and college projects, enabling safe and realistic transaction flow testing without real financial operations.</p>
                        <h3>Technology Stack</h3>
                        <div className="techstackContainer">
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3-alt"></i>
                            <i class="fa-brands fa-js"></i>
                            <i class="fa-brands fa-golang"></i>
                        </div>
                        <div className="actionContainers">
                            <a href="https://github.com/EthicalGT/EthicalPay"><i class="fa-brands fa-github"></i></a>
                            <a href="https://troubled-eloisa-ethicalpay-eb02efa7.koyeb.app/"><i class="fa-solid fa-rocket"></i></a>
                        </div>
                    </div>
                    <div className="project-boxes">
                        <img src={ed_2} alt="LocalPal" />
                        <h2>LocalPal</h2>
                        <p>LocalPal is a Django-based static web app with MySQL that guides users to nearby attractions. It features an admin panel for managing content and collecting user feedback.</p>
                        <h3>Technology Stack</h3>
                        <div className="techstackContainer">
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3-alt"></i>
                            <i class="fa-brands fa-js"></i>
                            <i class="fa-brands fa-python"></i>
                        </div>
                        <div className="actionContainers">
                            <a href="https://github.com/EthicalGT/LocalPal"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className="project-boxes">
                        <img src={ed_2} alt="PsychBuddy" />
                        <h2>Psychbuddy</h2>
                        <p>PsychBuddy is a Django web app offering mental health support through therapy booking, emotion detection, resources, and community engagement—helping users manage their well-being effectively.</p>
                        <h3>Technology Stack</h3>
                        <div className="techstackContainer">
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3-alt"></i>
                            <i class="fa-brands fa-js"></i>
                            <i class="fa-brands fa-python"></i>
                        </div>
                        <div className="actionContainers">
                            <a href="https://github.com/EthicalGT/Psychbuddy"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className="project-boxes">
                        <img src={shopg} alt="Shop-G" />
                        <h2>Shop-G</h2>
                        <p>Shop-G is a PHP-based grocery shopping app featuring product listings, cart management, user feedback, and an admin panel, all powered by a MySQL database for efficient data handling.</p>
                        <h3>Technology Stack</h3>
                        <div className="techstackContainer">
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3-alt"></i>
                            <i class="fa-brands fa-js"></i>
                            <i class="fa-brands fa-php"></i>
                        </div>
                        <div className="actionContainers">
                            <a href="https://github.com/EthicalGT/Shop-G"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className="project-boxes">
                        <img src={cinevibe} alt="CineVibe" />
                        <h2>CineVibe</h2>
                        <p>CineVibe is an open-source web application designed for movie lovers to watch, download, and book tickets for movies online. The site is managed by an admin having full access.</p>
                        <h3>Technology Stack</h3>
                        <div className="techstackContainer">
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3-alt"></i>
                            <i class="fa-brands fa-js"></i>
                            <i class="fa-brands fa-php"></i>
                        </div>
                        <div className="actionContainers">
                            <a href="https://github.com/EthicalGT/CineVibe"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className="project-boxes">
                        <img src={kohinoor} alt="Kohinoor" />
                        <h2>Kohinoor</h2>
                        <p>Kohinoor is a PHP-based jewellery shopping app with cart management, purchase handling, admin CRUD, and feedback features, using MySQL for efficient data management.</p>
                        <h3>Technology Stack</h3>
                        <div className="techstackContainer">
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3-alt"></i>
                            <i class="fa-brands fa-js"></i>
                            <i class="fa-brands fa-php"></i>
                        </div>
                        <div className="actionContainers">
                            <a href="https://github.com/EthicalGT/Kohinoor"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className="project-boxes">
                        <img src={kavach} alt="Kavach" />
                        <h2>Kavach</h2>
                        <p>Kavach is a mobile app focused on women’s safety, featuring SOS alerts, live location sharing, emergency calls, and admin notifications for quick emergency support.</p>
                        <h3>Technology Stack</h3>
                        <div className="techstackContainer">
                            <i class="fa-brands fa-android"></i>
                            <i class="fa-brands fa-java"></i>
                        </div>
                        <div className="actionContainers">
                            <a href="https://github.com/EthicalGT/Kavach"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className="project-boxes">
                        <img src={ed_2} alt="BabyCare" />
                        <h2>BabyCare</h2>
                        <p>BabyCare is a Java desktop app offering offline baby care guidance, product recommendations, and name ideas, with admin-managed content for easy updates.</p>
                        <h3>Technology Stack</h3>
                        <div className="techstackContainer">
                            <i class="fa-brands fa-java"></i>
                        </div>
                        <div className="actionContainers">
                            <a href="https://github.com/EthicalGT/Babycare"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className="project-boxes">
                        <img src={newshub} alt="NewsHub" />
                        <h2>NewsHub</h2>
                        <p>NewsHub is a dynamic news platform allowing users to view news, send feedback, and interact, with admin control to manage and update content.</p>
                        <h3>Technology Stack</h3>
                        <div className="techstackContainer">
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3-alt"></i>
                            <i class="fa-brands fa-js"></i>
                            <i class="fa-brands fa-php"></i>
                        </div>
                        <div className="actionContainers">
                            <a href="https://github.com/EthicalGT/NewsHub"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </FadeUpOnScroll>
        </section>
    )
};

export default ProjectsContainer;