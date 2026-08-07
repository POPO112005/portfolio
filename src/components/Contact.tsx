import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon, MailIcon } from './icons'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <SectionHeading index="05" title="Get In Touch" />
      <a className="btn btn-primary btn-large" href={profile.social.email}>
        Say Hello
      </a>
      <div className="hero-social contact-social">
        <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GithubIcon />
        </a>
        <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedinIcon />
        </a>
        <a href={profile.social.email} aria-label="Email">
          <MailIcon />
        </a>
      </div>
    </section>
  )
}
