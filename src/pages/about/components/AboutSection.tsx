type AboutSectionProps = {
  title: string;
  content: string;
};

export default function AboutSection({ title, content }: AboutSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-accent">{title}</h2>
      <p>{content}</p>
    </div>
  );
}
