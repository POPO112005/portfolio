import { useState } from 'react'
import { projects } from '../data/portfolio'
import { ProjectModal } from './ProjectModal'
import { SectionHeading } from './SectionHeading'
import { ArrowRightIcon, ExternalLinkIcon, GithubIcon } from './icons'
import { TechIcon } from './techIcons'
import { btnBase, btnGhost, bullet, heading, section } from './styles'

export function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="projects" className={section}>
      <SectionHeading index="03" title="Projects" />
      <div className="flex flex-col gap-20 md:gap-24">
        {projects.map((project, i) => {
          const reversed = i % 2 === 1
          return (
            <article
              className={`flex flex-col gap-8 md:flex-row md:items-center md:gap-12 ${
                reversed ? 'md:flex-row-reverse' : ''
              }`}
              key={project.title}
            >
              <div
                className="group relative w-full cursor-pointer overflow-hidden rounded-xl border border-border bg-bg-elevated p-2.5 shadow-elevated outline-none transition duration-150 hover:border-accent-border focus-visible:outline-2 focus-visible:outline-accent-border focus-visible:outline-offset-2 md:w-1/2"
                onClick={() => setActiveIndex(i)}
                role="button"
                tabIndex={0}
                aria-label={`View ${project.title} screenshots`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setActiveIndex(i)
                }}
              >
                <div className="relative flex h-[220px] w-full items-center justify-center overflow-hidden rounded-lg border border-border bg-bg-alt md:h-[260px]">
                  {project.images?.[0] ? (
                    <img
                      src={project.images[0]}
                      alt=""
                      className="h-full w-full object-contain p-4 transition duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="h-full w-full bg-[repeating-linear-gradient(135deg,var(--color-border)_0px,var(--color-border)_1px,transparent_1px,transparent_10px)]" />
                  )}
                </div>
                <div className="absolute top-5 right-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-[rgba(11,14,20,0.75)] text-text-dim transition duration-150 group-hover:border-accent-border group-hover:text-accent">
                  <ArrowRightIcon size={16} />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3">
                  <span className="h-px w-9 bg-accent" />
                  <h3 className={`text-xl text-text-bright md:text-[22px] ${heading}`}>{project.title}</h3>
                </div>

                <p className="mt-4 text-[14.5px] leading-[1.7] text-text-dim">{project.description}</p>

                {project.highlights && project.highlights.length > 0 && (
                  <ul className="mt-4 flex flex-col gap-[10px] text-[14.5px] leading-[1.6] text-text-dim">
                    {project.highlights.map((point) => (
                      <li key={point} className={bullet}>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="inline-flex items-center gap-[6px] rounded-md border border-border bg-bg px-3 py-[6px] font-mono text-[11.5px] tracking-wide text-text uppercase"
                    >
                      <TechIcon name={t} size={13} />
                      {t}
                    </li>
                  ))}
                </ul>

                {(project.github || project.demo) && (
                  <div className="mt-6 flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className={`${btnBase} ${btnGhost}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GithubIcon size={16} /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className={`${btnBase} ${btnGhost}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLinkIcon size={16} /> Live demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </div>

      {activeIndex !== null && (
        <ProjectModal project={projects[activeIndex]} onClose={() => setActiveIndex(null)} />
      )}
    </section>
  )
}
