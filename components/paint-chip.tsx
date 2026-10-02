/** Musterblech: kleine Lackfläche als Bildersatz, bis echte Fotos da sind */
export function PaintChip({
  color,
  metallic,
  className = "",
}: {
  color: string
  metallic?: boolean
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      data-metallic={metallic ? "" : undefined}
      className={`panel-chip paint-surface ${className}`}
      style={{ ["--paint" as string]: color, backgroundColor: color }}
    >
      <div className="paint-flake" />
    </div>
  )
}
