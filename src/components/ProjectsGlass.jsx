import { useState } from "react";
import LiquidGlassModule from "liquid-glass-react";

import "./liquidGlass.css";

const LiquidGlass = LiquidGlassModule.default ?? LiquidGlassModule;

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built to show my work and background.",
    github: "https://github.com/your-username/portfolio",
  },
  {
    title: "Project Two",
    description: "Add a short description of your project here.",
    github: "https://github.com/your-username/project-two",
  },
  {
    title: "Project Three",
    description: "Add a short description of your project here.",
    github: "https://github.com/your-username/project-three",
  },
];

export default function ProjectsGlass() {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
