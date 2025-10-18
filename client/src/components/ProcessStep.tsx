interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center" data-testid={`step-${number}`}>
      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 shadow-lg">
        <span className="text-2xl font-bold text-primary-foreground">{number}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed max-w-xs">{description}</p>
    </div>
  );
}
