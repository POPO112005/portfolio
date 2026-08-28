import { useEffect, useState } from 'react'
import { content, profile } from '../data/portfolio'
import { useLanguage } from '../i18n/useLanguage'
import { CloseIcon, MenuIcon } from './icons'

function LanguageToggle({ className = '' }: { className?: string }) {
  const { language, setLanguage } = useLanguage()

  return (
    <div className={`inline-flex items-center rounded-md border border-border p-0.5 font-mono text-xs ${className}`}>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`rounded-[5px] px-2 py-1 transition duration-150 ${
          language === 'en' ? 'bg-accent-dim text-accent' : 'text-text-dim hover:text-text'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('th')}
        aria-pressed={language === 'th'}
        className={`rounded-[5px] px-2 py-1 transition duration-150 ${
          language === 'th' ? 'bg-accent-dim text-accent' : 'text-text-dim hover:text-text'
        }`}
      >
        TH
      </button>
    </div>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)
  const { language } = useLanguage()
  const t = content[language]

  const links = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[rgba(11,14,20,0.75)] backdrop-blur-[10px]">
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-5 py-4 md:px-8 md:py-[18px]">
        <a href="#top" className="font-mono text-base font-semibold text-text-bright">
          <span className="text-accent">&gt;</span> {profile.handle}
          <span className="inline-block animate-blink text-accent motion-reduce:animate-none">_</span>
        </a>

        <nav className="flex items-center gap-7 font-mono text-sm max-[860px]:hidden">
          {links.map((link, i) => (
            <a key={link.href} href={link.href} className="text-text-dim transition-colors duration-150 hover:text-accent">
              <span className="mr-1 text-accent">{String(i + 1).padStart(2, '0')}.</span>
              {link.label}
            </a>
          ))}
          <a
            className="rounded-md border border-accent-border px-[14px] py-2 text-accent"
            href={profile.resumeUrl}
          >
            {t.nav.resume}
          </a>
          <LanguageToggle />
        </nav>

        <div className="hidden items-center gap-3 max-[860px]:flex">
          <LanguageToggle />
          <button
            type="button"
            className="cursor-pointer border-none bg-none p-1 text-text-bright"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-border px-5 pt-3 pb-6 font-mono text-[15px]">
          {links.map((link, i) => (
            <a key={link.href} href={link.href} className="px-1 py-3 text-text" onClick={() => setOpen(false)}>
              <span className="mr-1 text-accent">{String(i + 1).padStart(2, '0')}.</span>
              {link.label}
            </a>
          ))}
          <a
            className="rounded-md border border-accent-border px-[14px] py-2 text-accent"
            href={profile.resumeUrl}
            onClick={() => setOpen(false)}
          >
            {t.nav.resume}
          </a>
        </div>
      )}
    </header>
  )
}
