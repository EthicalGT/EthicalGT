import FadeUpOnScroll from "./FadeUpOnScroll";

const EducationCertification = () => {
    return (
        <>
            <FadeUpOnScroll>
                <section id="education">
                    <h1 id="educationHeading">Education & Certifications</h1>
                    <div className="headingContainer"><h1 id="edu-mob-heading">Education</h1></div>
                    <div class="ECContainer">
                        <div class="education-timeline-container">
                            <div class="timeline-card">
                                <i class="fa-solid fa-graduation-cap graduation-icon"></i>
                                <h3>Bachelor of Business Administration in Computer Application (BBA(CA))</h3>
                                <p><strong>Year of Passing:</strong> 2024</p>
                                <p><strong>University:</strong> Savitribai Phule Pune University</p>
                                <p><strong>Aggregate CGPA:</strong> 8.60 / 10</p>
                            </div>

                            <div class="timeline-card">
                                <i class="fa-solid fa-graduation-cap graduation-icon"></i>
                                <h3>Master of Computer Applications (MCA)</h3>
                                <p><strong>Year of Passing:</strong> 2026</p>
                                <p><strong>University:</strong> Savitribai Phule Pune University</p>
                                <p><strong>Aggregate CGPA:</strong> Persuing</p>
                            </div>
                        </div>
                        <h1 id="cert-mob-heading">Certifications</h1>
                        <div class="certification-timeline-container">
                            <div class="timeline-card">
                                <i class="fa-solid fa-award certificate"></i>
                                <h3>Web Development</h3>
                                <p><strong>Year of Passing:</strong> 2023</p>
                                <p><strong>Institute:</strong> IT Planet Programming, Shrirampur</p>
                                <p><strong>Grade:</strong> A+</p>
                            </div>
                            <div class="timeline-card">
                                <i class="fa-solid fa-award certificate"></i>
                                <h3>Google’s Golang Specialization</h3>
                                <p><strong>Year of Passing:</strong> 2024</p>
                                <p><strong>Institute:</strong> Coursera</p>
                                <p><strong>Grade:</strong> Completed with Distinction</p>
                            </div>

                        </div>
                    </div>
                </section>
            </FadeUpOnScroll>
        </>
    );
}

export default EducationCertification;
