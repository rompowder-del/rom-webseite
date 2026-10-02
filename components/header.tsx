"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Phone } from "lucide-react"
import { services, site } from "@/lib/site"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

/**
 * Schwebende Navigations-Insel. Über dem Startbild durchsichtig,
 * beim Scrollen wird sie zur Glas-Pille. Menü öffnet als Vollbild-Glas.
 */
export function Header({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(!overHero)
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (!overHero) return
    // Sentinel statt scroll-Listener: kein Reflow bei jedem Scroll-Ereignis
    const sentinel = document.getElementById("hero-end")
    if (!sentinel) return
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting && e.boundingClientRect.top < 0))
    io.observe(sentinel)
    return () => io.disconnect()
  }, [overHero])

  useEffect(() => {
    if (menuRef.current) menuRef.current.inert = !open
    document.body.style.overflow = open ? "hidden" : ""
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const dark = !scrolled && !open // weiße Schrift über dunklem Startbild
  const tel = `tel:${site.phoneHref}`
  const close = () => setOpen(false)

  const links = [
    { href: "/#leistungen", label: "Leistungen" },
    { href: "/#ablauf", label: "Ablauf" },
    { href: "/kontakt", label: "Kontakt" },
  ]

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[var(--z-nav)] px-3 pt-3 md:px-6 md:pt-5">
        <div
          className={`pointer-events-auto mx-auto flex h-14 max-w-[1240px] items-center justify-between rounded-full pr-2 pl-5 transition-[background-color,box-shadow,color] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] md:h-16 md:pl-7 ${
            open
              ? "bg-transparent text-black"
              : scrolled
                ? "bg-white/70 text-black shadow-[inset_0_0_0_1px_rgb(11_11_12/0.06),0_10px_30px_-18px_rgb(11_11_12/0.35)] backdrop-blur-2xl backdrop-saturate-150"
                : "bg-white/[0.06] text-white shadow-[inset_0_0_0_1px_rgb(255_255_255/0.1)] backdrop-blur-md"
          }`}
        >
          <Link href="/" className="wordmark text-[12px] md:text-[13px]" aria-label="R.O.M Cartech – Startseite" onClick={close}>
            R.O.M CARTECH
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 text-sm md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={`link-underline ${pathname === l.href ? "bg-[length:100%_1px]" : ""}`}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn hidden h-10 items-center gap-2 rounded-full px-4 text-sm md:flex ${
                dark ? "hover:bg-white/10" : "hover:bg-black/5"
              }`}
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a
              href={tel}
              className={`btn hidden h-10 items-center gap-2 rounded-full px-4 text-sm md:flex ${
                dark ? "hover:bg-white/10" : "hover:bg-black/5"
              }`}
            >
              <Phone className="h-4 w-4" strokeWidth={1.5} />
              <span className="hidden lg:inline">{site.phone}</span>
              <span className="lg:hidden">Anrufen</span>
            </a>
            <button
              ref={toggleRef}
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="hauptmenue"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              className={`btn grid h-10 w-10 place-items-center rounded-full md:h-12 md:w-12 ${
                dark ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              <span className="burger" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Vollbild-Menü */}
      <div
        ref={menuRef}
        id="hauptmenue"
        role="dialog"
        aria-modal="true"
        aria-label="Menü"
        data-open={open ? "" : undefined}
        className="menu-overlay fixed inset-0 z-[var(--z-menu)] overflow-y-auto bg-white/95 backdrop-blur-3xl backdrop-saturate-150"
      >
        <div className="mx-auto flex min-h-full max-w-[1240px] flex-col px-6 pt-28 pb-[max(2.5rem,env(safe-area-inset-bottom))] md:px-10 md:pt-36">
          <div className="grid flex-1 gap-14 md:grid-cols-[7fr_5fr]">
            <nav aria-label="Leistungen">
              <p className="menu-item mb-4 text-sm text-graphite" style={{ ["--i" as string]: 0 }}>
                Leistungen
              </p>
              <ul>
                {services.map((s, i) => (
                  <li key={s.slug} className="menu-item" style={{ ["--i" as string]: i + 1 }}>
                    <Link
                      href={`/leistungen/${s.slug}`}
                      onClick={close}
                      className="display-sm block py-1.5 text-[clamp(1.75rem,4vw,3rem)] transition-colors duration-300 hover:text-graphite"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col gap-10 md:pt-10">
              <ul className="space-y-3 text-lg">
                {[{ href: "/#ablauf", label: "So läuft Ihr Auftrag" }, { href: "/kontakt", label: "Kontakt & Anfahrt" }].map((l, i) => (
                  <li key={l.href} className="menu-item" style={{ ["--i" as string]: services.length + 1 + i }}>
                    <Link href={l.href} onClick={close} className="link-underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="menu-item space-y-1 text-graphite" style={{ ["--i" as string]: services.length + 3 }}>
                <a href={tel} className="display-sm block text-2xl text-black">
                  {site.phone}
                </a>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="link-underline flex items-center gap-2 text-black">
                  <WhatsAppIcon /> Per WhatsApp schreiben
                </a>
                <a href={`mailto:${site.emailHref}`} className="link-underline">
                  {site.email}
                </a>
                <p>
                  {site.street}, {site.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
