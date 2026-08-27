import { heading } from './styles'

export function SectionHeading({
  index,
  title,
  center = false,
}: {
  index: string
  title: string
  center?: boolean
}) {
  return (
    <h2
      className={`mb-10 flex items-center gap-4 whitespace-nowrap text-[21px] text-text-bright md:text-[26px] ${heading} ${center ? 'justify-center' : ''}`}
    >
      <span className="text-accent">{index}.</span> {title}
      <span className="h-px min-w-10 flex-1 bg-border" />
    </h2>
  )
}
