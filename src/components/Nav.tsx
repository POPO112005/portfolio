import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'
import { CloseIcon, MenuIcon } from './icons'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

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
          {LINKS.map((link, i) => (
            <a key={link.href} href={link.href} className="text-text-dim transition-colors duration-150 hover:text-accent">
              <span className="mr-1 text-accent">{String(i + 1).padStart(2, '0')}.</span>
              {link.label}
            </a>
          ))}
          <a
            className="rounded-md border border-accent-border px-[14px] py-2 text-accent"
            href={profile.resumeUrl}
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="hidden cursor-pointer border-none bg-none p-1 text-text-bright max-[860px]:block"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-border px-5 pt-3 pb-6 font-mono text-[15px]">
          {LINKS.map((link, i) => (
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
            Resume
          </a>
        </div>
      )}
    </header>
  )
}
