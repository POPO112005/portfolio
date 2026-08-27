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

const techIconMap: Record<string, IconType> = {
  'next.js': SiNextdotjs,
  bun: SiBun,
  'tailwind css': SiTailwindcss,
  tailwind: SiTailwindcss,
  typescript: SiTypescript,
  postgresql: SiPostgresql,
  react: SiReact,
  vercel: SiVercel,
  javascript: SiJavascript,
  python: SiPython,
  go: SiGo,
  'node.js': SiNodedotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  docker: SiDocker,
  aws: FaAws,
  git: SiGit,
  github: FaGithub,
  linux: SiLinux,
  graphql: SiGraphql,
  vite: SiVite,
  sql: TbDatabase,
  'rest / graphql': TbApi,
  rest: TbApi,
  'ci/cd': TbRefresh,
}

export function TechIcon({ name, size = 14 }: { name: string; size?: number }) {
  const Icon = techIconMap[name.trim().toLowerCase()] ?? TbCode
  return <Icon size={size} aria-hidden="true" />
}
