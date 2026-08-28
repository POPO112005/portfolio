import { content, profile } from '../data/portfolio'
import { useLanguage } from '../i18n/useLanguage'
import { GithubIcon, LinkedinIcon, MailIcon } from './icons'
import { btnBase, btnLarge, btnPrimary, section } from './styles'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <section id="contact" className={`${section} pb-30 text-center`}>
      <SectionHeading index="05" title={t.sectionTitles.contact} center />
      <a className={`${btnBase} ${btnPrimary} ${btnLarge} mt-9`} href={profile.social.email}>
        {t.contact.sayHello}
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
