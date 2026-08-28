import { content } from '../data/portfolio'
import { useLanguage } from '../i18n/useLanguage'
import { ExternalLinkIcon } from './icons'
import { section } from './styles'
import { SectionHeading } from './SectionHeading'

export function About() {
  const { language } = useLanguage()
  const t = content[language]
  const firstExperience = t.experience[0]

  return (
    <section id="about" className={section}>
      <SectionHeading index="01" title={t.sectionTitles.about} />
      <div className="grid grid-cols-1 gap-7 md:grid-cols-[1.4fr_1fr] md:gap-12">
        <p className="text-text-dim text-[16.5px] leading-[1.8]">{t.about}</p>
        <dl className="flex flex-col gap-4 border-t border-border pt-5 font-mono text-sm md:border-t-0 md:border-l md:pt-0 md:pl-6">
          <div>
            <dt className="mb-1 text-text-dim">{t.aboutLabels.education}</dt>
            <dd className="text-text-bright">{t.education}</dd>
          </div>
          <div>
            <dt className="mb-1 text-text-dim">{t.aboutLabels.experience}</dt>
            <dd className="text-text-bright">
              {firstExperience.companyUrl ? (
                <a
                  href={firstExperience.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition duration-150 hover:text-accent"
                >
                  {firstExperience.company}
                  <ExternalLinkIcon size={13} />
                </a>
              ) : (
                firstExperience.company
              )}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
