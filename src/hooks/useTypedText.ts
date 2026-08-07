import { useEffect, useState } from 'react'

export function useTypedText(words: string[], typingSpeed = 70, pause = 1600) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    const atEnd = text === current
    const atStart = text === ''

    if (!deleting && atEnd) {
      const id = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(id)
    }

    if (deleting && atStart) {
      setDeleting(false)
      setIndex((i) => i + 1)
      return
    }

    const id = setTimeout(
      () => {
        setText(current.slice(0, deleting ? text.length - 1 : text.length + 1))
      },
      deleting ? typingSpeed / 2 : typingSpeed,
    )
    return () => clearTimeout(id)
  }, [text, deleting, index, words, typingSpeed, pause])

  return text
}
