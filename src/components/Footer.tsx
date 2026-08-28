import { content } from '../data/portfolio'
import { useLanguage } from '../i18n/useLanguage'

export function Footer() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <footer className="flex flex-col gap-[6px] border-t border-border px-5 pt-8 pb-10 text-center font-mono text-[13px] text-text-dim">
      <p>
        <span className="text-accent">$</span> echo &quot;{t.footer.builtBy} {t.name}&quot;
      </p>
      <p className="text-[#4a5262]">{t.footer.stack}</p>
    </footer>
  )
}
