type AboutSectionProps = {
  title: string
  content: string
}

export default function AboutSection({ title, content }: AboutSectionProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}
