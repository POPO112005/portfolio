import type { IconType } from 'react-icons'
import {
  SiBun,
  SiDocker,
  SiExpress,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiGo,
} from 'react-icons/si'
import { FaAws, FaGithub } from 'react-icons/fa'
import { TbApi, TbCode, TbDatabase, TbRefresh } from 'react-icons/tb'

type TechEntry = { icon: IconType; color: string }

// Colors follow each brand's official mark. A few brands (Next.js, Vercel,
// Express, GitHub) use pure black in their logo, which disappears on this
// site's dark background, so those use the brand's own white/light variant.
const techIconMap: Record<string, TechEntry> = {
  'next.js': { icon: SiNextdotjs, color: '#ffffff' },
  bun: { icon: SiBun, color: '#fbf0df' },
  'tailwind css': { icon: SiTailwindcss, color: '#38bdf8' },
  tailwind: { icon: SiTailwindcss, color: '#38bdf8' },
  typescript: { icon: SiTypescript, color: '#3178c6' },
  postgresql: { icon: SiPostgresql, color: '#4169e1' },
  react: { icon: SiReact, color: '#61dafb' },
  vercel: { icon: SiVercel, color: '#ffffff' },
  javascript: { icon: SiJavascript, color: '#f7df1e' },
  python: { icon: SiPython, color: '#3776ab' },
  go: { icon: SiGo, color: '#00add8' },
  'node.js': { icon: SiNodedotjs, color: '#3c873a' },
  nodejs: { icon: SiNodedotjs, color: '#3c873a' },
  express: { icon: SiExpress, color: '#ffffff' },
  docker: { icon: SiDocker, color: '#2496ed' },
  aws: { icon: FaAws, color: '#ff9900' },
  git: { icon: SiGit, color: '#f05032' },
  github: { icon: FaGithub, color: '#ffffff' },
  linux: { icon: SiLinux, color: '#fcc624' },
  graphql: { icon: SiGraphql, color: '#e10098' },
  vite: { icon: SiVite, color: '#a78bfa' },
  sql: { icon: TbDatabase, color: 'var(--accent)' },
  'rest / graphql': { icon: TbApi, color: 'var(--accent)' },
  rest: { icon: TbApi, color: 'var(--accent)' },
  'ci/cd': { icon: TbRefresh, color: 'var(--accent)' },
}

const fallback: TechEntry = { icon: TbCode, color: 'var(--accent)' }

export function TechIcon({ name, size = 14 }: { name: string; size?: number }) {
  const { icon: Icon, color } = techIconMap[name.trim().toLowerCase()] ?? fallback
  return <Icon size={size} color={color} aria-hidden="true" />
}
