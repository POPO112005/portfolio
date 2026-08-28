import { content } from '../data/portfolio'
import { useLanguage } from '../i18n/useLanguage'
import { heading, section } from './styles'
import { SectionHeading } from './SectionHeading'
import { TechIcon } from './techIcons'

export function Skills() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <section id="skills" className={section}>
      <SectionHeading index="02" title={t.sectionTitles.skills} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
        {t.skills.map((group) => (
          <div
            className="rounded-[10px] border border-border bg-bg-elevated p-6 transition duration-150 hover:-translate-y-[3px] hover:border-accent-border"
            key={group.category}
          >
            <h3 className={`mb-4 text-[15px] text-accent ${heading}`}>{group.category}</h3>
            <ul className="flex flex-col gap-[10px] text-[14.5px] text-text-dim">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-[10px]">
                  <TechIcon name={item} size={15} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
