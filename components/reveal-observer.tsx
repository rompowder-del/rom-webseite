"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Ein einziger Beobachter für alle [data-reveal]-Elemente der Seite.
 * Elemente erscheinen einmal beim Hineinscrollen; [data-reveal-group] staffelt seine Kinder.
 */
export function RevealObserver() {
  const pathname = usePathname()
  useEffect(() => {
    document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((g) => {
      g.querySelectorAll<HTMLElement>(":scope > [data-reveal]").forEach((el, i) => el.style.setProperty("--rd", `${i * 90}ms`))
    })
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-shown])")
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.setAttribute("data-shown", ""))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          // In einer Gruppe erscheinen alle Geschwister gemeinsam (gestaffelt) –
          // auch die, die in einer Wisch-Leiste noch seitlich außerhalb liegen.
          const group = e.target.parentElement?.closest("[data-reveal-group]")
          const targets = group ? group.querySelectorAll<HTMLElement>(":scope > [data-reveal]") : [e.target]
          targets.forEach((t) => {
            t.setAttribute("data-shown", "")
            io.unobserve(t)
          })
        })
      },
      { rootMargin: "0px 0px -10% 0px" },
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [pathname])
  return null
}
