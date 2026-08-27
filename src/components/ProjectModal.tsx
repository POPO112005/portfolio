import { useEffect, useState } from 'react'
import type { projects } from '../data/portfolio'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  ExternalLinkIcon,
  FolderIcon,
  GithubIcon,
} from './icons'
import { btnBase, btnGhost, heading } from './styles'
import { TechIcon } from './techIcons'

type Project = (typeof projects)[number]

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const images = project.images ?? []
  const [index, setIndex] = useState(0)

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const goNext = () => setIndex((i) => (i + 1) % images.length)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (images.length > 1 && e.key === 'ArrowLeft') goPrev()
      if (images.length > 1 && e.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [images.length, onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex animate-fade-in items-center justify-center bg-[rgba(5,7,11,0.75)] p-6 backdrop-blur-[6px]"
      onClick={onClose}
    >
      <div
        className="max-h-[min(88vh,900px)] w-full max-w-[720px] animate-rise-in overflow-y-auto rounded-xl border border-border bg-bg-elevated px-[30px] pt-7 pb-[30px] shadow-elevated max-[640px]:px-[18px] max-[640px]:pt-[22px] max-[640px]:pb-6"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-accent">
            <FolderIcon size={22} />
            <h3 className={`text-xl text-text-bright ${heading}`}>{project.title}</h3>
          </div>
          <button
            className="inline-flex cursor-pointer items-center justify-center rounded-md border-none bg-none p-1 text-text-dim transition duration-150 hover:bg-border hover:text-text-bright"
            onClick={onClose}
            aria-label="Close"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        <p className="mt-[18px] border-b border-border pb-5 text-[14.5px] leading-[1.7] text-text-dim">
          {project.description}
        </p>

        {images.length > 0 && (
          <div className="mt-[22px] flex flex-col items-center">
            <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[10px] border border-border bg-bg">
              {images.length > 1 && (
                <button
                  className="absolute top-1/2 left-3 inline-flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-[rgba(11,14,20,0.7)] text-text-bright transition duration-150 hover:border-accent-border hover:text-accent"
                  onClick={goPrev}
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon />
                </button>
              )}
              <img
                src={images[index]}
                alt={`${project.title} screenshot ${index + 1}`}
                className="block max-h-[60vh] max-w-full object-contain max-[640px]:max-h-[46vh]"
              />
              {images.length > 1 && (
                <button
                  className="absolute top-1/2 right-3 inline-flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-[rgba(11,14,20,0.7)] text-text-bright transition duration-150 hover:border-accent-border hover:text-accent"
                  onClick={goNext}
                  aria-label="Next image"
                >
                  <ChevronRightIcon />
                </button>
              )}
            </div>

            {images.length > 1 && (
              <>
                <div className="mt-[14px] rounded-full border border-border bg-bg px-[14px] py-1 font-mono text-xs text-text">
                  {index + 1} / {images.length}
                </div>
                <p className="mt-[10px] text-[12.5px] text-text-dim">Use ← → keys or click thumbnails to navigate</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {images.map((src, i) => (
                    <button
                      key={src}
                      className={`h-[52px] w-[52px] cursor-pointer overflow-hidden rounded-md border border-border bg-bg p-0 transition duration-150 ${
                        i === index ? 'border-accent-border opacity-100' : 'opacity-55 hover:opacity-85'
                      }`}
                      onClick={() => setIndex(i)}
                      aria-label={`Go to image ${i + 1}`}
                    >
                      <img src={src} alt="" className="block h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className="mt-6 border-t border-border pt-5">
          <span className="font-mono text-xs tracking-[0.04em] text-text-dim uppercase">Tech used</span>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="inline-flex items-center gap-[7px] rounded-md border border-border bg-bg px-3 py-[5px] font-mono text-[12.5px] text-text"
              >
                <TechIcon name={t} />
                {t}
              </li>
            ))}
          </ul>

          {(project.github || project.demo) && (
            <div className="mt-5 flex gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className={`${btnBase} ${btnGhost}`}>
                  <GithubIcon size={16} /> Code
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className={`${btnBase} ${btnGhost}`}>
                  <ExternalLinkIcon size={16} /> Live demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
