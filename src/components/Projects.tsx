import { projects } from '../data/portfolio'
import { ExternalLinkIcon, FolderIcon, GithubIcon } from './icons'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading index="03" title="Projects" />
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-top">
              <FolderIcon />
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}>
                    <GithubIcon size={20} />
                  </a>
                )}
                <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>
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
    </section>
  )
}
