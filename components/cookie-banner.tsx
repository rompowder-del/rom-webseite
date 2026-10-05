"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

/**
 * Cookie-Hinweis mit Auswahl.
 * Die Seite selbst setzt nur technisch notwendige Daten (z. B. diese Auswahl).
 * Wird später z. B. Google Maps oder eine Statistik eingebaut, darf das nur
 * laden, wenn hasOptionalConsent() true ist.
 */
const KEY = "cookie-consent"
export const OPEN_EVENT = "cookie-settings:open"

type Choice = "all" | "necessary"

function readChoice(): Choice | null {
  try {
    const v = localStorage.getItem(KEY)
    return v === "all" || v === "necessary" ? v : null
  } catch {
    return null
  }
}

export function hasOptionalConsent() {
  return readChoice() === "all"
}

export function CookieBanner() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // erst kurz nach dem Laden zeigen, damit das Startbild zuerst ankommt
    const t = setTimeout(() => {
      if (!readChoice()) setOpen(true)
    }, 900)
    const reopen = () => setOpen(true)
    window.addEventListener(OPEN_EVENT, reopen)
    return () => {
      clearTimeout(t)
      window.removeEventListener(OPEN_EVENT, reopen)
    }
  }, [])

  const choose = (c: Choice) => {
    try {
      localStorage.setItem(KEY, c)
    } catch {}
    setOpen(false)
    window.dispatchEvent(new CustomEvent("cookie-consent:changed", { detail: c }))
  }

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      className="cookie-in fixed inset-x-3 bottom-[calc(6rem+env(safe-area-inset-bottom,0px))] z-[60] md:inset-x-auto md:bottom-6 md:left-6 md:max-w-[420px]"
    >
      <div className="rounded-3xl bg-white p-4 text-black shadow-[0_24px_60px_-12px_rgb(0_0_0/0.35),0_0_0_1px_rgb(11_11_12/0.06)] md:p-6">
        <p id="cookie-title" className="display-sm text-base md:text-lg">
          Cookies &amp; Datenschutz
        </p>
        <p className="mt-1.5 text-[13px] leading-relaxed text-graphite md:mt-2 md:text-sm">
          Wir verwenden nur technisch notwendige Cookies, damit unsere Website funktioniert. Externe Dienste wie Google
          Maps oder WhatsApp öffnen sich erst, wenn Sie darauf klicken. Mehr dazu in der{" "}
          <Link href="/datenschutz" className="underline underline-offset-2 hover:text-black">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="mt-4 flex gap-2 md:mt-5">
          <button
            type="button"
            onClick={() => choose("all")}
            className="btn flex-1 rounded-full bg-black px-4 py-2.5 text-sm font-medium md:px-5 md:py-3 text-white hover:bg-black/85"
          >
            Alle akzeptieren
          </button>
          <button
            type="button"
            onClick={() => choose("necessary")}
            className="btn flex-1 rounded-full bg-black/[0.06] px-4 py-2.5 text-sm font-medium md:px-5 md:py-3 hover:bg-black/[0.1]"
          >
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  )
}

/** Link im Footer, um die Auswahl später zu ändern */
export function CookieSettingsLink({ className = "" }: { className?: string }) {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))} className={className}>
      Cookie-Einstellungen
    </button>
  )
}
