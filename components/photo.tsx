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
}: {
  name: string
  alt: string
  w: number
  h: number
  sizes?: string
  className?: string
  position?: string
  priority?: boolean
}) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${base}/images/${name}-900.webp`}
      srcSet={[
        `${base}/images/${name}-400.webp 400w`,
        `${base}/images/${name}-640.webp 640w`,
        `${base}/images/${name}-900.webp 900w`,
        `${base}/images/${name}-1600.webp ${Math.min(w, 1600)}w`,
      ].join(", ")}
      sizes={sizes}
      alt={alt}
      width={w}
      height={h}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      className={`object-cover ${className}`}
      style={position ? { objectPosition: position } : undefined}
    />
  )
}
