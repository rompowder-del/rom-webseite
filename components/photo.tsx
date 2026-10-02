/** Werkstattfoto in zwei vorbereiteten Größen (WebP). Keine Layout-Sprünge dank fester Maße. */
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
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/${name}-900.webp`}
      srcSet={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/${name}-900.webp 900w, ${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/${name}-1600.webp ${Math.min(w, 1600)}w`}
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
