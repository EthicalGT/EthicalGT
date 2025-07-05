import FadeUpOnScroll from "./FadeUpOnScroll";

const ContactMeContainer = () => {
    return (
        <FadeUpOnScroll>
            <section className="contact-section" id="contactme">
                <div className="contact-container">
                    <div className="contact-form">
                        <h2>Contact Me</h2>
                        <p>Feel free to reach out! I’ll get back to you as soon as possible.</p>
                        <form>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>

                    <aside className="social-connect">
                        <h2>Let's Connect</h2>
                        <p>I'm always excited to meet like-minded individuals, collaborate on creative projects, or simply have a good conversation. Whether you have an idea, a question, or just want to say hello — feel free to reach out. Let's build something meaningful together!</p>
                        <p id="phonePara"><i class="fa-solid fa-phone"></i>+91 8010486885</p>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/ganesh-telore-0b566a303/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/EthicalGT" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a></li>
                            <li><a href="mailto:ganeshtelore4@gmail.com"><i class="fa-solid fa-envelope"></i> </a></li>
                            <li><a href="https://www.instagram.com/effortlessgt/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i> </a></li>
                        </ul>
                    </aside>
                </div>
            </section>
        </FadeUpOnScroll>
    );
};

export default ContactMeContainer;
