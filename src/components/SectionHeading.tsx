export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <h2 className="section-heading">
      <span className="section-index">{index}.</span> {title}
      <span className="section-rule" />
    </h2>
  )
}
