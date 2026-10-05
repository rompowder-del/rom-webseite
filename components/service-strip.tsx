"use client"

import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { services, site } from "@/lib/site"
import { Photo } from "@/components/photo"

/** Leistungen als Leiste zum Durchwischen – mit echten Fotos aus der Werkstatt */
export function ServiceStrip() {
  const ref = useRef<HTMLUListElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const count = services.length + 1 // + Karte "Foto senden"
  const [active, setActive] = useState(0)
  const activeRef = useRef(0)
  useEffect(() => {
    activeRef.current = active
  }, [active])
  const [auto, setAuto] = useState(false) // läuft gerade automatisch?
  const holdUntil = useRef(0)
  const programmatic = useRef(0)
  const STEP_MS = 3800

  const cards = () => Array.from(ref.current?.querySelectorAll<HTMLElement>(":scope > li") ?? [])

  const goTo = useCallback((i: number) => {
    const el = ref.current
    const list = Array.from(el?.querySelectorAll<HTMLElement>(":scope > li") ?? [])
    if (!el || !list.length) return
    const target = list[Math.max(0, Math.min(list.length - 1, i))]
    programmatic.current = performance.now()
    el.scrollTo({ left: target.offsetLeft - list[0].offsetLeft, behavior: "smooth" })
  }, [])

  // Nutzer greift ein → automatische Bewegung 8 Sekunden pausieren
  const hold = () => {
    holdUntil.current = performance.now() + 8000
  }

  const scrollBy = (dir: 1 | -1) => {
    hold()
    goTo(active + dir)
  }

  // aktuelle Karte aus der Scrollposition ablesen
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const list = cards()
      if (!list.length) return
      const x = el.scrollLeft
      let best = 0
      list.forEach((c, i) => {
        if (Math.abs(c.offsetLeft - list[0].offsetLeft - x) < Math.abs(list[best].offsetLeft - list[0].offsetLeft - x)) best = i
      })
      const atEnd = x >= el.scrollWidth - el.clientWidth - 4
      setActive(atEnd ? list.length - 1 : best)
      if (performance.now() - programmatic.current > 900) hold() // von Hand gewischt
    }
    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [])

  // langsam von selbst weiter, solange die Leiste sichtbar ist
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let visible = false
    const io = new IntersectionObserver(([e]) => (visible = e.intersectionRatio > 0.35), { threshold: [0, 0.35, 0.6] })
    if (sectionRef.current) io.observe(sectionRef.current)
    const id = setInterval(() => {
      const running = visible && performance.now() > holdUntil.current
      setAuto(running)
      if (!running) return
      const el = ref.current
      if (!el) return
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4
      goTo(atEnd ? 0 : activeRef.current + 1)
    }, STEP_MS)
    return () => {
      clearInterval(id)
      io.disconnect()
    }
  }, [goTo])

  return (
    <section ref={sectionRef} id="leistungen" className="scroll-mt-24 py-24 md:pt-36 md:pb-32">
      <div data-reveal className="mx-auto flex max-w-[1440px] items-end justify-between gap-6 px-[4vw]">
        <div>
          <h2 className="display-sm text-[clamp(2rem,4vw,3.25rem)]">Leistungen</h2>
          <p className="mt-4 max-w-[50ch] text-graphite">
            Fünf Leistungen, eine Werkstatt: vom Lack über die Karosserie bis zur Felge – alles in unserer eigenen Halle.
          </p>
        </div>
        <div className="hidden gap-2 md:flex">
          <button
            onClick={() => scrollBy(-1)}
            className="btn flex h-12 w-12 items-center justify-center rounded-full bg-black/[0.05] hover:bg-black/[0.1]"
            aria-label="Vorherige Leistungen"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="btn flex h-12 w-12 items-center justify-center rounded-full bg-black/[0.05] hover:bg-black/[0.1]"
            aria-label="Weitere Leistungen"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <ul
        ref={ref}
        data-reveal-group
        onPointerEnter={(e) => e.pointerType === "mouse" && hold()}
        onPointerDown={hold}
        onFocus={hold}
        className="strip mt-12 flex gap-5 overflow-x-auto px-[4vw] pb-4 [scroll-padding-inline:4vw] xl:px-[max(4vw,calc((100vw-1440px)/2+4vw))]"
      >
        {services.map((s) => (
          <li key={s.slug} data-reveal className="flex w-[80vw] shrink-0 sm:w-[380px]">
            <Link href={`/leistungen/${s.slug}`} className="group flex w-full flex-col">
              <div className="bezel">
                <div className="bezel-core sheen relative aspect-[4/5]">
                  <Photo
                    name={s.image.name}
                    alt={s.image.alt}
                    w={s.image.w}
                    h={s.image.h}
                    position={s.image.position}
                    sizes="(min-width: 640px) 380px, 80vw"
                    className="absolute inset-0 h-full w-full transition-[scale] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)]:group-hover:scale-[1.04]"
                  />
                  {/* Name direkt im Bild, unten auf dunklem Verlauf */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-5 pt-20 text-white">
                    <h3 className="display-sm text-2xl leading-tight">{s.name}</h3>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur-md transition-[translate,background-color] duration-500 group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-4 px-1 text-sm text-graphite">{s.short}</p>
            </Link>
          </li>
        ))}
        {/* letzte Karte: direkter Weg zur Anfrage */}
        <li data-reveal className="flex w-[80vw] shrink-0 sm:w-[380px]">
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="group flex w-full flex-col">
            <div className="bezel">
              <div className="bezel-core flex aspect-[4/5] flex-col justify-between bg-black p-7 text-white">
                <p className="display-sm text-[1.75rem] leading-tight">Nicht sicher, was Ihr Fahrzeug braucht?</p>
                <div>
                  <p className="text-white/70">Schicken Sie uns ein Foto per WhatsApp – wir sagen Ihnen, was sinnvoll ist.</p>
                  <span className="cta cta-light mt-6">
                    <span>Foto senden</span>
                    <span className="cta-icon" aria-hidden="true">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>

      {/* Fortschritt: zeigt, dass es weitergeht – und springt per Klick */}
      <div className="mx-auto mt-6 flex max-w-[1440px] items-center gap-4 px-[4vw]">
        <div className="flex flex-1 gap-1.5" role="tablist" aria-label="Leistungen durchblättern">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={i < services.length ? services[i].name : "Foto senden"}
              onClick={() => {
                hold()
                goTo(i)
              }}
              className="group relative h-6 flex-1"
            >
              <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-black/10">
                <span
                  key={`${i}-${active}-${auto}`}
                  className={`strip-progress absolute inset-y-0 left-0 rounded-full bg-black ${
                    i < active ? "w-full" : i === active ? (auto ? "is-running" : "w-full") : "w-0"
                  }`}
                  style={{ ["--step" as string]: `${STEP_MS}ms` }}
                />
              </span>
            </button>
          ))}
        </div>
        <span className="shrink-0 text-sm tabular-nums text-graphite" aria-live="polite">
          {active + 1} / {count}
        </span>
      </div>
    </section>
  )
}
