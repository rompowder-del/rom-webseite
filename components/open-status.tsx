"use client"

import { useEffect, useState } from "react"
import { getOpenStatus, type OpenStatus as Status } from "@/lib/open-status"

/**
 * Live-Anzeige "Jetzt geöffnet". Wird erst im Browser berechnet
 * (sonst stünde die Uhrzeit vom Bauen der Seite da) und jede Minute aktualisiert.
 */
export function OpenStatus({
  tone = "dark",
  variant = "text",
  className = "",
}: {
  tone?: "dark" | "light"
  variant?: "text" | "short"
  className?: string
}) {
  const [s, setS] = useState<Status | null>(null)
  useEffect(() => {
    const tick = () => setS(getOpenStatus())
    tick()
    const id = setInterval(tick, 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <span
      aria-live="polite"
      className={`open-status inline-flex items-center gap-2 whitespace-nowrap ${s ? "opacity-100" : "opacity-0"} ${className}`}
    >
      <span
        aria-hidden="true"
        data-open={s?.open ? "" : undefined}
        className={`status-dot relative h-2 w-2 shrink-0 rounded-full ${s?.open ? "bg-[#2fbf71]" : tone === "dark" ? "bg-white/40" : "bg-black/30"}`}
      />
      {s ? (variant === "short" ? s.short : s.text) : "Öffnungszeiten"}
    </span>
  )
}
