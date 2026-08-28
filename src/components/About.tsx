import { experience, profile } from '../data/portfolio'
import { ExternalLinkIcon } from './icons'
import { section } from './styles'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className={section}>
      <SectionHeading index="01" title="About Me" />
      <div className="grid grid-cols-1 gap-7 md:grid-cols-[1.4fr_1fr] md:gap-12">
        <p className="text-text-dim text-[16.5px] leading-[1.8]">{profile.about}</p>
        <dl className="flex flex-col gap-4 border-t border-border pt-5 font-mono text-sm md:border-t-0 md:border-l md:pt-0 md:pl-6">
          <div>
            <dt className="mb-1 text-text-dim">Education</dt>
            <dd className="text-text-bright">{profile.education}</dd>
          </div>
          <div>
            <dt className="mb-1 text-text-dim">Experience</dt>
            <dd className="text-text-bright">
              {experience[0].companyUrl ? (
                <a
                  href={experience[0].companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition duration-150 hover:text-accent"
                >
                  {experience[0].company}
                  <ExternalLinkIcon size={13} />
                </a>
              ) : (
                experience[0].company
              )}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
