import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

/** Pill-Button mit Pfeil in eigener Kapsel ("Button im Button") */
export function Cta({
  href,
  children,
  tone = "dark",
  external = false,
  className = "",
}: {
  href: string
  children: React.ReactNode
  tone?: "dark" | "light"
  external?: boolean
  className?: string
}) {
  const cls = `cta cta-${tone} ${className}`
  const inner = (
    <>
      <span>{children}</span>
      <span className="cta-icon" aria-hidden="true">
        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
      </span>
    </>
  )
  if (external || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  )
}

/** Zweitrangige Aktion: Umriss-Pill ohne Pfeil */
export function CtaGhost({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={`cta cta-ghost ${className}`}>
      {children}
    </Link>
  )
}
