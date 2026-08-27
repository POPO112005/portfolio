import { useState } from 'react'
import { projects } from '../data/portfolio'
import { ProjectModal } from './ProjectModal'
import { SectionHeading } from './SectionHeading'
import { heading, section } from './styles'

export function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="projects" className={section}>
      <SectionHeading index="03" title="Projects" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        {projects.map((project, i) => (
          <article
            className="group flex cursor-pointer flex-col overflow-hidden rounded-[10px] border border-border bg-bg-elevated outline-none transition duration-150 hover:-translate-y-1 hover:border-accent-border focus-visible:outline-2 focus-visible:outline-accent-border focus-visible:outline-offset-2"
            key={project.title}
            onClick={() => setActiveIndex(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setActiveIndex(i)
            }}
          >
            <div className="relative w-full overflow-hidden bg-bg-alt">
              {project.images?.[0] ? (
                <img
                  src={project.images[0]}
                  alt=""
                  className="block w-full transition duration-300 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="aspect-video w-full bg-[repeating-linear-gradient(135deg,var(--color-border)_0px,var(--color-border)_1px,transparent_1px,transparent_10px)]" />
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-bg-elevated to-transparent" />
            </div>

            <div className="flex flex-1 flex-col px-[26px] pt-5 pb-[26px]">
              <h3 className={`text-lg text-text-bright ${heading}`}>{project.title}</h3>
              <p className="mt-[10px] text-[14.5px] leading-[1.7] text-text-dim">{project.description}</p>
            </div>
          </article>
        ))}
      </div>

      {activeIndex !== null && (
        <ProjectModal project={projects[activeIndex]} onClose={() => setActiveIndex(null)} />
      )}
    </section>
  )
}
