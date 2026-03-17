import "./index.scss";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

type ContainerProps = {
  children: React.ReactNode;
};

export function Section({ children, className = "" }: SectionProps) {
  return <section className={`kto-layout-section ${className}`.trim()}>{children}</section>;
}

export function Container({ children }: ContainerProps) {
  return <div className="kto-layout-container">{children}</div>;
}