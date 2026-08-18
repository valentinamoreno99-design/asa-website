type Props = {
  /** Optional legacy section index — no longer rendered, kept for call-site compatibility. */
  num?: string;
  children: React.ReactNode;
  invert?: boolean;
  className?: string;
};

/** Editorial section eyebrow: mono label over a short accent rule. */
export function Eyebrow({ children, invert = false, className = "" }: Props) {
  return (
    <div className={`mb-8 ${className}`}>
      <p className={`type-label ${invert ? "text-light-blue/70" : "text-muted-foreground"}`}>{children}</p>
      <span className={`mt-3 block h-px w-10 ${invert ? "bg-light-blue" : "bg-asa-blue"}`} />
    </div>
  );
}
