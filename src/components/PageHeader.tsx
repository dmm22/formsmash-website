type PageHeaderProps = {
  image: React.ReactNode
  title: string
}

export default function PageHeader({ image, title }: PageHeaderProps) {
  return (
    <header className="grid gap-1">
      {image}
      <h2>{title}</h2>
    </header>
  )
}
