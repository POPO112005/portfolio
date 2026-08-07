import { profile } from '../data/portfolio'
import { useTypedText } from '../hooks/useTypedText'
import { ArrowRightIcon, GithubIcon, LinkedinIcon, MailIcon } from './icons'

export function Hero() {
  const typed = useTypedText(profile.roles)

  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <p className="eyebrow">
          <span className="prompt-symbol">$</span> whoami
        </p>
        <h1>
          Hi, I&apos;m <span className="accent-text">{profile.name}</span>
        </h1>
        <p className="hero-role">
          {typed}
          <span className="cursor-blink">_</span>
        </p>
        <p className="hero-bio">{profile.bio}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects <ArrowRightIcon />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in Touch
          </a>
        </div>

        <div className="hero-social">
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
      </div>

      <div className="hero-terminal" aria-hidden="true">
        <div className="terminal-window">
          <div className="terminal-bar">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
            <span className="terminal-title">{profile.handle}@portfolio: ~</span>
          </div>
          <div className="terminal-body">
            <p>
              <span className="prompt-symbol">$</span> cat profile.json
            </p>
            <pre>{`{
  "name": "${profile.name}",
  "role": "${profile.role}",
  "education": "${profile.education}",
  "focus": "${profile.tagline}"
}`}</pre>
            <p>
              <span className="prompt-symbol">$</span> <span className="cursor-blink">_</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
