import { useState } from 'react'
import { projects } from '../data/portfolio'
import { ExternalLinkIcon, FolderIcon, GithubIcon } from './icons'
import { ProjectModal } from './ProjectModal'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="section">
      <SectionHeading index="03" title="Projects" />
      <div className="projects-grid">
        {projects.map((project, i) => (
          <article
            className="project-card"
            key={project.title}
            onClick={() => setActiveIndex(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setActiveIndex(i)
            }}
          >
            <div className="project-card-top">
              <FolderIcon />
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GithubIcon size={20} />
                  </a>
                )}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} live demo`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLinkIcon size={20} />
                </a>
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="project-tech">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {activeIndex !== null && (
        <ProjectModal project={projects[activeIndex]} onClose={() => setActiveIndex(null)} />
      )}
    </section>
  )
}
