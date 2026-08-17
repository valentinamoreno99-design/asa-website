type Props = {
  num: string;
  children: React.ReactNode;
  invert?: boolean;
  className?: string;
};

/** Editorial section eyebrow: mono label over a short accent rule. */
export function Eyebrow({ num, children, invert = false, className = "" }: Props) {
  return (
    <div className={`mb-8 ${className}`}>
      <p className={`type-label ${invert ? "text-light-blue/70" : "text-muted-foreground"}`}>
        <span className={`mr-4 ${invert ? "text-light-blue" : "text-asa-blue"}`}>{num}</span>
        {children}
      </p>
      <span className={`mt-3 block h-px w-10 ${invert ? "bg-light-blue" : "bg-asa-blue"}`} />
    </div>
  );
}
