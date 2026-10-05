/** Werkstattfoto in vier vorbereiteten Größen (WebP) – Handys laden nur, was sie brauchen. Keine Layout-Sprünge dank fester Maße. */
export function Photo({
  name,
  alt,
  w,
  h,
  sizes = "100vw",
  className = "",
  position,
  priority = false,
  card = false,
}: {
  name: string
  alt: string
  w: number
  h: number
  sizes?: string
  className?: string
  position?: string
  priority?: boolean
  /** fertig zugeschnittenes Hochformat (4:5) für die Leistungskarten */
  card?: boolean
}) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={card ? `${base}/images/${name}-card-640.webp` : `${base}/images/${name}-900.webp`}
      srcSet={(card
        ? [`${base}/images/${name}-card-400.webp 400w`, `${base}/images/${name}-card-640.webp 640w`, `${base}/images/${name}-card-800.webp 800w`]
        : [
            `${base}/images/${name}-400.webp 400w`,
            `${base}/images/${name}-640.webp 640w`,
            `${base}/images/${name}-900.webp 900w`,
            `${base}/images/${name}-1600.webp ${Math.min(w, 1600)}w`,
          ]
      ).join(", ")}
      sizes={sizes}
      alt={alt}
      width={card ? 800 : w}
      height={card ? 1000 : h}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      className={`object-cover ${className}`}
      style={position && !card ? { objectPosition: position } : undefined}
    />
  )
}
