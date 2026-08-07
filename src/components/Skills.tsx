import { skills } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading index="02" title="Skills" />
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-card" key={group.category}>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
