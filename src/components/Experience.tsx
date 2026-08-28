import { content } from '../data/portfolio'
import { useLanguage } from '../i18n/useLanguage'
import { ExternalLinkIcon } from './icons'
import { bullet, heading, section } from './styles'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <section id="experience" className={section}>
      <SectionHeading index="04" title={t.sectionTitles.experience} />
      <ol className="relative flex flex-col gap-9 border-l border-border pl-7">
        {t.experience.map((item) => (
          <li key={`${item.role}-${item.company}`} className="relative">
            <div className="absolute top-1 left-[-33px] h-[9px] w-[9px] rounded-full border-2 border-accent bg-bg" />
            <div>
              <span className="font-mono text-[13px] text-accent">{item.period}</span>
              <h3 className={`mt-[6px] text-[17px] text-text-bright ${heading}`}>
                {item.role}{' '}
                <span className="font-normal text-text-dim">
                  @{' '}
                  {item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 transition duration-150 hover:text-accent"
                    >
                      {item.company}
                      <ExternalLinkIcon size={13} />
                    </a>
                  ) : (
                    item.company
                  )}
                </span>
              </h3>
              <ul className="mt-3 flex flex-col gap-2 text-[14.5px] leading-[1.6] text-text-dim">
                {item.points.map((point) => (
                  <li key={point} className={bullet}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
