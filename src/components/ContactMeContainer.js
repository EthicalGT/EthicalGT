import { useState } from "react";
import FadeUpOnScroll from "./FadeUpOnScroll";

const ContactMeContainer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim() || formData.name.length < 2)
            newErrors.name = "Name must be at least 2 characters";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = "Invalid email format";
        if (!formData.message.trim() || formData.message.length < 10)
            newErrors.message = "Message must be at least 10 characters";
        return newErrors;
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            e.preventDefault();
            setErrors(validationErrors);
        } else {
            setErrors({});
        }
    };

    return (
        <FadeUpOnScroll>
            <section className="contact-section" id="contactme">
                <div className="contact-container">
                    <div className="contact-form">
                        <h2>Contact Me</h2>
                        <p>Feel free to reach out! I’ll get back to you as soon as possible.</p>
                        <form
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            {errors.name && <p className="error">{errors.name}</p>}

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <p className="error">{errors.email}</p>}

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            {errors.message && <p className="error">{errors.message}</p>}

                            <input
                                type="hidden"
                                name="access_key"
                                value="4e5f3210-ad8b-4645-8282-687630bf7fa1"
                            />
                            <button type="submit">Send Message</button>
                        </form>
                    </div>

                    <aside className="social-connect">
                        <h2>Let's Connect</h2>
                        <p>
                            I'm always excited to meet like-minded individuals, collaborate on creative projects, or simply have a good conversation. Whether you have an idea, a question, or just want to say hello — feel free to reach out. Let's build something meaningful together!
                        </p>
                        <p id="phonePara">
                            <i className="fa-solid fa-phone"></i>+91 8010486885
                        </p>
                        <ul>
                            <li>
                                <a href="https://linkedin.com/in/ganesh-telore-0b566a303/" target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/EthicalGT" target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:ganeshtelore4@gmail.com">
                                    <i className="fa-solid fa-envelope"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/effortlessgt/" target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </aside>
                </div>
            </section>
        </FadeUpOnScroll>
    );
};

export default ContactMeContainer;
