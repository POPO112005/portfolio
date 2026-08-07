import { experience } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading index="04" title="Experience" />
      <ol className="timeline">
        {experience.map((item) => (
          <li key={`${item.role}-${item.company}`}>
            <div className="timeline-marker" />
            <div className="timeline-content">
              <span className="timeline-period">{item.period}</span>
              <h3>
                {item.role} <span className="timeline-company">@ {item.company}</span>
              </h3>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
