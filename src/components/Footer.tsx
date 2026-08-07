import { profile } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="footer">
      <p>
        <span className="prompt-symbol">$</span> echo &quot;Built by {profile.name}&quot;
      </p>
      <p className="footer-muted">React · TypeScript · Vite</p>
    </footer>
  )
}
