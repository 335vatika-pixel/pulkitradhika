const PETALS = Array.from({ length: 14 }, (_, i) => i);

export function Petals({ variant = "petal" }: { variant?: "petal" | "gold" }) {
  return (
    <div className="petal-field" aria-hidden="true">
      {PETALS.map((i) => (
        <span
          key={i}
          className={variant === "gold" ? "gold-dust" : "petal"}
          style={{
            left: `${(i * 7.3) % 100}%`,
            animationDelay: `${(i * 1.37) % 12}s`,
            animationDuration: `${11 + ((i * 3) % 9)}s`,
            transform: `scale(${0.6 + ((i % 5) * 0.15)})`,
          }}
        />
      ))}
    </div>
  );
}
