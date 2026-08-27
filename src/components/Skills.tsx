import { skills } from '../data/portfolio'
import { bullet, heading, section } from './styles'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className={section}>
      <SectionHeading index="02" title="Skills" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
        {skills.map((group) => (
          <div
            className="rounded-[10px] border border-border bg-bg-elevated p-6 transition duration-150 hover:-translate-y-[3px] hover:border-accent-border"
            key={group.category}
          >
            <h3 className={`mb-4 text-[15px] text-accent ${heading}`}>{group.category}</h3>
            <ul className="flex flex-col gap-[10px] text-[14.5px] text-text-dim">
              {group.items.map((item) => (
                <li key={item} className={bullet}>
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
