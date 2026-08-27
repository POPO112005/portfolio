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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" role="dialog" aria-modal="true" aria-label={project.title} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <FolderIcon size={22} />
            <h3>{project.title}</h3>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <CloseIcon size={20} />
          </button>
        </div>

        <p className="modal-description">{project.description}</p>

        {images.length > 0 && (
          <div className="modal-gallery">
            <div className="modal-image-frame">
              {images.length > 1 && (
                <button className="modal-nav modal-nav-prev" onClick={goPrev} aria-label="Previous image">
                  <ChevronLeftIcon />
                </button>
              )}
              <img src={images[index]} alt={`${project.title} screenshot ${index + 1}`} />
              {images.length > 1 && (
                <button className="modal-nav modal-nav-next" onClick={goNext} aria-label="Next image">
                  <ChevronRightIcon />
                </button>
              )}
            </div>

            {images.length > 1 && (
              <>
                <div className="modal-counter">
                  {index + 1} / {images.length}
                </div>
                <p className="modal-hint">Use ← → keys or click thumbnails to navigate</p>
                <div className="modal-thumbnails">
                  {images.map((src, i) => (
                    <button
                      key={src}
                      className={`modal-thumbnail${i === index ? ' active' : ''}`}
                      onClick={() => setIndex(i)}
                      aria-label={`Go to image ${i + 1}`}
                    >
                      <img src={src} alt="" />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className="modal-footer">
          <span className="modal-footer-label">Tech used</span>
          <ul className="modal-tech">
            {project.tech.map((t) => (
              <li key={t}>
                <TechIcon name={t} />
                {t}
              </li>
            ))}
          </ul>

          <div className="modal-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <GithubIcon size={16} /> Code
              </a>
            )}
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <ExternalLinkIcon size={16} /> Live demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
