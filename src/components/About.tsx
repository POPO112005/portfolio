import { experience, profile } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="section">
      <SectionHeading index="01" title="About Me" />
      <div className="about-grid">
        <p className="about-bio">{profile.bio}</p>
        <dl className="about-facts">
          <div>
            <dt>Education</dt>
            <dd>{profile.education}</dd>
          </div>
          <div>
            <dt>Expertise</dt>
            <dd>{profile.role}</dd>
          </div>
          <div>
            <dt>Experience</dt>
            <dd>{experience[0].company}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
