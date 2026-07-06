type AboutSectionProps = {
  title: string;
  content: string;
};

export default function AboutSection({ title, content }: AboutSectionProps) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-lg font-medium text-accent">{title}</h4>
      <p>{content}</p>
    </div>
  );
}
