import { useState } from 'react'
import { projects } from '../data/portfolio'
import { ExternalLinkIcon, FolderIcon, GithubIcon } from './icons'
import { ProjectModal } from './ProjectModal'
import { SectionHeading } from './SectionHeading'
import { heading, section } from './styles'
import { TechIcon } from './techIcons'

export function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="projects" className={section}>
      <SectionHeading index="03" title="Projects" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        {projects.map((project, i) => (
          <article
            className="flex cursor-pointer flex-col rounded-[10px] border border-border bg-bg-elevated p-[26px] outline-none transition duration-150 hover:-translate-y-1 hover:border-accent-border focus-visible:outline-2 focus-visible:outline-accent-border focus-visible:outline-offset-2"
            key={project.title}
            onClick={() => setActiveIndex(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setActiveIndex(i)
            }}
          >
            <div className="flex items-center justify-between text-accent">
              <FolderIcon />
              <div className="flex gap-[14px] text-text-dim">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-accent"
                  >
                    <GithubIcon size={20} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} live demo`}
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-accent"
                  >
                    <ExternalLinkIcon size={20} />
                  </a>
                )}
              </div>
            </div>
            <h3 className={`mt-[18px] text-lg text-text-bright ${heading}`}>{project.title}</h3>
            <p className="mt-[10px] grow text-[14.5px] leading-[1.7] text-text-dim">{project.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2 font-mono text-xs text-text-dim">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="inline-flex items-center gap-[6px] rounded-md border border-border bg-bg px-[10px] py-[5px]"
                >
                  <TechIcon name={t} size={13} />
                  {t}
                </li>
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
