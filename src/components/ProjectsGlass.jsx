import { useEffect, useState } from "react";
import LiquidGlassModule from "liquid-glass-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./liquidGlass.css";

const LiquidGlass = LiquidGlassModule.default ?? LiquidGlassModule;

const projects = [
  {
    title: "Clarus",
    description:
      "SVT Featured, AI Swedish Visa migration assistant, powered by a RAG-System.",
    github: "https://github.com/LNU-AI-Society/Clarus",
  },
  {
    title: "Self-Service Kiosk",
    description:
      "Fully working self service kiosk made in Java, as part of a project course.",
    github: "https://github.com/BogdanSorinescu/Kiosk-Project",
  },
  {
    title: "Fitness Tracker",
    description:
      "A fitness tracker application, with stregth and diet logging as well as a AI fitness assistant",
    github: "https://github.com/BogdanSorinescu/FitnessTracker",
  },
  {
    title: "Rebootly",
    description:
      "A web platform that uses AI to guide mobile device troubleshooting, repair referrals, and sustainable device reuse.",
    github: "https://github.com/BogdanSorinescu/Rebootly",
  },
];

export default function ProjectsGlass() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("projects-open", isOpen);

    return () => {
      document.body.classList.remove("projects-open");
    };
  }, [isOpen]);

  return (
    <>
      {!isOpen && (
        <>
          <LiquidGlass
            className="projects-glass"
            style={{ position: "fixed", top: "78%", left: "50%" }}
            padding="16px 32px"
            cornerRadius={48}
            overLight
            onClick={() => setIsOpen(true)}
          >
            <div className="projects-title">My projects</div>
          </LiquidGlass>

          <LiquidGlass
            className="resume-glass"
            style={{ position: "fixed", top: "86%", left: "50%" }}
            padding="14px 28px"
            cornerRadius={48}
            overLight
          >
            <a
              className="resume-button"
              href="/resume.pdf"
              download
              target="_blank"
              rel="norer"
            >
              Resume
              <FontAwesomeIcon icon={faDownload} classname = "Resume-download-icon"/>
            </a>
          </LiquidGlass>
        </>
      )}

      {isOpen && (
        <LiquidGlass
          className="info-glass-card projects-list-glass"
          style={{ position: "fixed", top: "48%", left: "50%" }}
          padding="42px 56px"
          cornerRadius={48}
        >
          <section className="personal-card projects-card">
            <button
              className="projects-close"
              type="button"
              aria-label="Close projects"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>

            <h2>Projects</h2>

            <div className="card-profile">
              <div>
                <p>GitHub Links</p>
              </div>
            </div>

            <div className="projects-document-list">
              {projects.map((project) => (
                <section className="project-document-item" key={project.title}>
                  <div className="project-document-header">
                    <h3>{project.title}</h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                    >
                      GitHub
                    </a>
                  </div>

                  <p>{project.description}</p>
                </section>
              ))}
            </div>
          </section>
        </LiquidGlass>
      )}
    </>
  );
}
