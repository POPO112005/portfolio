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
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          <span className="prompt-symbol">&gt;</span> {profile.handle}
          <span className="cursor-blink">_</span>
        </a>

        <nav className="nav-links">
          {LINKS.map((link, i) => (
            <a key={link.href} href={link.href}>
              <span className="nav-index">{String(i + 1).padStart(2, '0')}.</span>
              {link.label}
            </a>
          ))}
          <a className="nav-resume" href={profile.resumeUrl}>
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {LINKS.map((link, i) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span className="nav-index">{String(i + 1).padStart(2, '0')}.</span>
              {link.label}
            </a>
          ))}
          <a className="nav-resume" href={profile.resumeUrl} onClick={() => setOpen(false)}>
            Resume
          </a>
        </div>
      )}
    </header>
  )
}
