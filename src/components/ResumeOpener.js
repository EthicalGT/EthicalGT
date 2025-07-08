import React from "react";
import GANESH_TELORE_RESUME from "../assets/resume/GANESH_TELORE_RESUME.pdf";

const ResumeOpener = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = GANESH_TELORE_RESUME;
        link.download = "GANESH_TELORE_RESUME.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button onClick={handleDownload}>
            My Resume
        </button>
    );
};

export default ResumeOpener;
