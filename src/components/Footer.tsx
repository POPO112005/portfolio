import { profile } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="flex flex-col gap-[6px] border-t border-border px-5 pt-8 pb-10 text-center font-mono text-[13px] text-text-dim">
      <p>
        <span className="text-accent">$</span> echo &quot;Built by {profile.name}&quot;
      </p>
      <p className="text-[#4a5262]">React · TypeScript · Vite</p>
    </footer>
  )
}
