"use client"

import { Cta, CtaGhost } from "@/components/cta"
import { OpenStatus } from "@/components/open-status"
import { site } from "@/lib/site"
import { useEffect, useRef, useState } from "react"
import { paints } from "@/lib/site"
import { usePaint } from "@/components/paint-context"

/**
 * Startbild: eine Kotflügel-Linie in echtem "Lack".
 * Die Farbe lässt sich wie in einem Fahrzeug-Konfigurator umschalten,
 * mit der Maus wandert das Licht über die Fläche.
 */
export function PaintHero() {
  const { paint, setPaint } = usePaint()
  const surfaceRef = useRef<HTMLDivElement>(null)
  const frame = useRef(0)
  // Lack, der schon "trocken" auf dem Blech ist; null = noch unlackiert (erster Sprühgang beim Laden)
  const [base, setBase] = useState<typeof paint | null>(null)
  const [pass, setPass] = useState(0)
  const spraying = !base || base.hex !== paint.hex

  useEffect(() => {
    setPass((p) => p + 1)
  }, [paint])

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return
    const el = surfaceRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width) * 100
    const y = ((e.clientY - r.top) / r.height) * 100
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty("--lx", `${x.toFixed(1)}%`)
      el.style.setProperty("--ly", `${Math.max(8, y).toFixed(1)}%`)
    })
  }

  return (
    <section
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-black text-white"
      onPointerMove={onPointerMove}
      aria-label="R.O.M Cartech – Fahrzeuglackierung, Karosseriearbeiten und Oberflächenveredelung"
    >
      {/* Lackfläche */}
      <div className="fender-in pointer-events-none absolute inset-x-0 bottom-0 h-[42%] sm:h-[56%] md:h-[70%]">
        <div ref={surfaceRef} className="absolute inset-0">
          {/* Grundierung / alter Lack */}
          <div
            data-metallic={base?.metallic ? "" : undefined}
            className={`paint-surface fender-mask absolute inset-0 ${base ? "" : "primer"}`}
            style={base ? { ["--paint" as string]: base.hex, backgroundColor: base.hex } : undefined}
          >
            <div className="paint-flake" />
          </div>
          {/* neuer Lack: wird in einem Sprühgang von links nach rechts aufgetragen */}
          {spraying && (
            <div key={pass} className="spray-pass absolute inset-0" onAnimationEnd={(e) => e.target === e.currentTarget && setBase(paint)}>
              <div
                data-metallic={paint.metallic ? "" : undefined}
                className="paint-surface paint-sweep fender-mask absolute inset-0"
                style={{ ["--paint" as string]: paint.hex, backgroundColor: paint.hex }}
              >
                <div className="paint-flake" />
              </div>
              <div className="spray-mist fender-mask absolute inset-0" style={{ ["--paint" as string]: paint.hex }} />
            </div>
          )}
        </div>
        {/* Sicke: die scharfe Lichtkante entlang der Karosserielinie */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="crease" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#fff" stopOpacity="0" />
              <stop offset="0.45" stopColor="#fff" stopOpacity="0.75" />
              <stop offset="1" stopColor="#fff" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            d="M0 352C170 300 330 236 560 214C760 195 930 196 1100 222C1240 243 1350 280 1440 318"
            fill="none"
            stroke="url(#crease)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M0 470C260 418 520 384 820 376C1060 370 1260 392 1440 430"
            fill="none"
            stroke="#fff"
            strokeOpacity="0.14"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* dunkler Verlauf unten, damit die Farbwahl auch auf hellem Lack lesbar bleibt */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Text */}
      <div className="relative mx-auto w-full max-w-[1440px] flex-1 px-[4vw] pt-24 min-[400px]:pt-28 md:pt-[max(7rem,14svh)]">
        <p className="rise mb-5 inline-flex rounded-full bg-white/[0.08] px-3.5 py-1.5 text-sm text-white/85 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.1)] backdrop-blur-md">
          <OpenStatus />
        </p>
        <h1 className="display rise-text max-w-[19ch] text-[clamp(1.85rem,min(6vw,8svh),5.25rem)] md:max-w-[22ch] md:text-[clamp(2.4rem,min(4.6vw,7.5svh),4.75rem)]">
          Präzision, Qualität und Perfektion bis ins Detail.{" "}
          <span className="mt-3 block max-w-[34ch] text-[0.32em] md:max-w-none md:text-[0.3em] max-sm:[@media(max-height:600px)]:hidden font-normal leading-snug tracking-normal text-white/65">
            Fahrzeuglackierung, Karosseriearbeiten und hochwertige Oberflächenveredelung.
          </span>
        </h1>
        <p
          className="rise-text mt-5 max-w-[58ch] text-[15px] lg:max-w-[72ch] max-sm:[@media(max-height:700px)]:hidden text-white/75 sm:text-base"
          style={{ ["--d" as string]: "120ms" }}
        >
          Bei R.O.M Cartech verbinden wir handwerkliche Präzision mit modernen Verfahren und einem hohen
          Qualitätsanspruch. Von professionellen Fahrzeuglackierungen und Karosserieinstandsetzungen über
          Pulverbeschichtung bis hin zum CNC-Glanzdrehen bieten wir maßgeschneiderte Lösungen für Fahrzeuge, Felgen und
          Motorradteile.
        </p>
        <div className="rise mt-7 mb-10 flex flex-wrap gap-3 md:mb-8" style={{ ["--d" as string]: "220ms" }}>
          <Cta href={site.whatsapp} tone="light">
            Foto per WhatsApp senden
          </Cta>
          <CtaGhost href={`tel:${site.phoneHref}`} className="text-white max-sm:hidden">
            {site.phone}
          </CtaGhost>
        </div>
        <ul className="rise -mt-3 mb-10 hidden md:mb-6 flex-wrap gap-x-6 gap-y-2 text-sm text-white/65 sm:flex md:[@media(max-height:820px)]:hidden" style={{ ["--d" as string]: "300ms" }}>
          {["Persönliche Beratung", "Individuelles Angebot", "Kurze Wartezeiten"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M3 8.5l3 3 7-7" /></svg>
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Farbwahl */}
      <div className="relative mx-auto w-full max-w-[1440px] px-[4vw] pb-[calc(6.5rem+env(safe-area-inset-bottom,0px))] md:pb-[max(2rem,env(safe-area-inset-bottom))]">
        <div className="rise flex flex-col gap-4 md:flex-row md:items-end md:justify-between" style={{ ["--d" as string]: "340ms" }}>
          <p className="text-sm text-white/80" aria-live="polite">
            <span className="text-white/55">Farbe: </span>
            {paint.name}
          </p>
          <div className="flex flex-wrap gap-2.5 min-[400px]:gap-3" role="group" aria-label="Lackfarbe wählen">
            {paints.map((p) => (
              <button
                key={p.hex}
                onClick={() => setPaint(p)}
                aria-pressed={paint.hex === p.hex}
                aria-label={p.name}
                title={p.name}
                className="swatch relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/25 min-[400px]:h-10 min-[400px]:w-10"
              >
                <span
                  className="paint-surface panel-chip absolute inset-0"
                  data-metallic={p.metallic ? "" : undefined}
                  style={{ ["--paint" as string]: p.hex, backgroundColor: p.hex }}
                >
                  <span className="paint-flake" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Markiert das Ende des Startbilds für die Navigation */}
      <div id="hero-end" aria-hidden="true" className="absolute bottom-16 h-px w-px" />
    </section>
  )
}
