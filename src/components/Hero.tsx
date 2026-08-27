import { profile } from '../data/portfolio'
import { useTypedText } from '../hooks/useTypedText'
import { ArrowRightIcon, GithubIcon, LinkedinIcon, MailIcon } from './icons'
import { btnBase, btnGhost, btnPrimary, heading } from './styles'

export function Hero() {
  const typed = useTypedText(profile.roles)

  return (
    <section
      id="top"
      className="mx-auto grid w-full max-w-[1200px] min-h-[calc(100svh-66px)] grid-cols-1 items-center gap-12 px-5 pt-14 pb-16 max-[900px]:min-h-[auto] md:px-8 md:pt-[88px] min-[901px]:grid-cols-[1.1fr_1fr]"
    >
      <div>
        <p className="mb-3 font-mono text-[15px] text-text-dim">
          <span className="text-accent">$</span> whoami
        </p>
        <h1 className={`text-[clamp(32px,5vw,52px)] leading-[1.15] tracking-[-0.5px] text-text-bright ${heading}`}>
          Hi, I&apos;m <span className="text-accent">{profile.name}</span>
        </h1>
        <p className="mt-3 min-h-[1.4em] font-mono text-[clamp(18px,2.6vw,24px)] text-accent">
          {typed}
          <span className="inline-block animate-blink text-accent motion-reduce:animate-none">_</span>
        </p>
        <p className="mt-5 max-w-[520px] text-base leading-[1.7] text-text-dim max-[900px]:max-w-none">
          {profile.bio}
        </p>

        <div className="mt-8 flex flex-wrap gap-[14px]">
          <a href="#projects" className={`${btnBase} ${btnPrimary}`}>
            View Projects <ArrowRightIcon />
          </a>
          <a href="#contact" className={`${btnBase} ${btnGhost}`}>
            Get in Touch
          </a>
        </div>

        <div className="mt-8 flex gap-5">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-text-dim transition duration-150 hover:-translate-y-0.5 hover:text-accent"
          >
            <GithubIcon />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-text-dim transition duration-150 hover:-translate-y-0.5 hover:text-accent"
          >
            <LinkedinIcon />
          </a>
          <a
            href={profile.social.email}
            aria-label="Email"
            className="text-text-dim transition duration-150 hover:-translate-y-0.5 hover:text-accent"
          >
            <MailIcon />
          </a>
        </div>
      </div>

      <div className="justify-self-center max-[900px]:justify-self-stretch" aria-hidden="true">
        <div className="w-full max-w-[420px] overflow-hidden rounded-[10px] border border-border bg-bg-elevated shadow-elevated">
          <div className="flex items-center gap-2 border-b border-border bg-bg-alt px-[14px] py-3">
            <span className="h-[11px] w-[11px] rounded-full bg-red" />
            <span className="h-[11px] w-[11px] rounded-full bg-yellow" />
            <span className="h-[11px] w-[11px] rounded-full bg-green" />
            <span className="ml-2 font-mono text-xs text-text-dim">{profile.handle}@portfolio: ~</span>
          </div>
          <div className="p-5 font-mono text-[13.5px] leading-[1.7]">
            <p className="text-text-dim">
              <span className="text-accent">$</span> cat profile.json
            </p>
            <pre className="my-[10px] whitespace-pre-wrap break-words text-text">{`{
  "name": "${profile.name}",
  "role": "${profile.role}",
  "education": "${profile.education}",
  "focus": "${profile.tagline}"
}`}</pre>
            <p className="text-text-dim">
              <span className="text-accent">$</span>{' '}
              <span className="inline-block animate-blink text-accent motion-reduce:animate-none">_</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
