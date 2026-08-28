import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon, MailIcon } from './icons'
import { btnBase, btnLarge, btnPrimary, section } from './styles'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <section id="contact" className={`${section} pb-30 text-center`}>
      <SectionHeading index="05" title="Get In Touch" center />
      <a className={`${btnBase} ${btnPrimary} ${btnLarge} mt-9`} href={profile.social.email}>
        Say Hello
      </a>
      <div className="mt-10 flex items-center justify-center gap-5">
        <a
          href={profile.social.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-text-dim transition duration-150 hover:-translate-y-0.5 hover:text-accent"
        >
          <GithubIcon size={26} />
        </a>
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-text-dim transition duration-150 hover:-translate-y-0.5 hover:text-accent"
        >
          <LinkedinIcon size={24} />
        </a>
        <a
          href={profile.social.email}
          aria-label="Email"
          className="text-text-dim transition duration-150 hover:-translate-y-0.5 hover:text-accent"
        >
          <MailIcon size={24} />
        </a>
      </div>
    </section>
  )
}
