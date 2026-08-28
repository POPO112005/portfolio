import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'
import { useTypedText } from '../hooks/useTypedText'
import { ArrowRightIcon, GithubIcon, LinkedinIcon, MailIcon } from './icons'
import { btnBase, btnGhost, btnPrimary, heading } from './styles'

const heroPhotos = ['/po1.jpg', '/po2.jpg', '/po3.jpg']

export function Hero() {
  const typed = useTypedText(profile.roles)
  const [photoIndex, setPhotoIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setPhotoIndex((i) => (i + 1) % heroPhotos.length)
    }, 3200)
    return () => clearInterval(id)
  }, [])

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
        <p className="mt-5 max-w-[520px] text-base leading-[1.7] whitespace-pre-line text-text-dim max-[900px]:max-w-none">
          {profile.bio}
        </p>

        <div className="mt-8 flex flex-wrap gap-[14px]">
          <a href="#projects" className={`${btnBase} ${btnPrimary}`}>
            View Projects <ArrowRightIcon />
          </a>
          <a href="#contact" className={`${btnBase} ${btnGhost}`}>
            Contact Me
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
      </div>

      <div className="justify-self-center max-[900px]:justify-self-stretch" aria-hidden="true">
        <div className="relative mx-auto h-[420px] w-[460px] max-w-full overflow-hidden max-[900px]:h-[330px] max-[900px]:w-full">
          {heroPhotos.map((src, i) => {
            let rel = i - photoIndex
            if (rel > 1) rel -= heroPhotos.length
            if (rel < -1) rel += heroPhotos.length
            const isCenter = rel === 0
            const isRight = rel === 1
            return (
              <img
                key={src}
                src={src}
                alt=""
                onClick={() => setPhotoIndex(i)}
                className={`absolute top-1/2 left-1/2 h-[420px] w-[300px] -translate-y-1/2 cursor-pointer rounded-xl border object-cover shadow-elevated transition-all duration-500 ease-out max-[900px]:h-[330px] max-[900px]:w-[230px] ${
                  isCenter
                    ? 'z-20 translate-x-[-50%] scale-100 border-accent-border opacity-100'
                    : isRight
                      ? 'z-10 translate-x-[calc(-50%+160px)] scale-[0.82] border-border opacity-60 blur-[1px] max-[900px]:translate-x-[calc(-50%+120px)]'
                      : 'z-10 translate-x-[calc(-50%-160px)] scale-[0.82] border-border opacity-60 blur-[1px] max-[900px]:translate-x-[calc(-50%-120px)]'
                }`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
