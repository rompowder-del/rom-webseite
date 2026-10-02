"use client"

import { useEffect, useRef, useState } from "react"
import { googleReviewsUrl, reviews, site } from "@/lib/site"
import { Cta } from "@/components/cta"

const AVATAR = ["#4b5563", "#7c4dbd", "#6d4c3d"]

const Stars = ({ size = "h-4 w-4" }: { size?: string }) => (
  <span className="flex gap-0.5 text-[#f4b400]" role="img" aria-label="5 von 5 Sternen">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 20 20" className={`${size} fill-current`} aria-hidden="true">
        <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
      </svg>
    ))}
  </span>
)

function ReviewCard({
  r,
  i,
  copy = false,
  onToggle,
}: {
  r: (typeof reviews)[number]
  i: number
  copy?: boolean
  onToggle?: (open: boolean) => void
}) {
  const [open, setOpen] = useState(false)
  const id = `review-${i}${copy ? "-copy" : ""}`
  return (
    <li className="marquee-item flex w-[82vw] shrink-0 sm:w-[24rem]" aria-hidden={copy || undefined} inert={copy || undefined}>
      <article className="flex w-full flex-col rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgb(11_11_12/0.06),0_12px_32px_-20px_rgb(11_11_12/0.35)] md:p-7">
        <header className="flex items-center gap-3">
          <span
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-base font-medium text-white"
            style={{ background: AVATAR[i % AVATAR.length] }}
            aria-hidden="true"
          >
            {r.name.charAt(0)}
          </span>
          <div className="min-w-0">
            <p className="font-medium leading-tight">{r.name}</p>
            <p className="text-sm text-graphite">Google-Bewertung</p>
          </div>
        </header>
        <div className="mt-4 flex items-center gap-3">
          <Stars />
          <span className="text-xs text-graphite">{r.topic}</span>
        </div>
        <p
          id={id}
          className={`mt-4 whitespace-pre-line text-[15px] leading-relaxed text-black/80 ${open ? "" : "line-clamp-6"}`}
        >
          {open ? r.quote : r.quote.replace(/\n+/g, " ")}
        </p>
        <button
          onClick={() => {
            setOpen((o) => !o)
            onToggle?.(!open)
          }}
          aria-expanded={open}
          aria-controls={id}
          className="mt-3 self-start text-sm font-medium text-[#1a5fd0] hover:underline"
        >
          {open ? "Weniger anzeigen" : "Mehr anzeigen"}
        </button>
      </article>
    </li>
  )
}

/** "Das sagen unsere Kunden" – echte 5-Sterne-Bewertungen, gestaltet wie Google-Rezensionen */
export function Reviews() {
  const [expanded, setExpanded] = useState(0)
  const [touchHold, setTouchHold] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const bandRef = useRef<HTMLDivElement>(null)
  const paused = expanded > 0 || touchHold

  // Antippen am Handy: anhalten, nach 4 Sekunden ohne Berührung weiterlaufen
  const hold = () => {
    setTouchHold(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setTouchHold(false), 4000)
  }
  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <section id="bewertungen" className="scroll-mt-24 bg-mist py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-[4vw]">
        <div data-reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="display-sm text-[clamp(2rem,4vw,3.25rem)]">Das sagen unsere Kunden</h2>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-graphite">
              <Stars size="h-5 w-5" />
              <span>Echte Bewertungen auf Google</span>
            </div>
          </div>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-3 text-sm font-medium shadow-[inset_0_0_0_1px_rgb(11_11_12/0.1)] hover:shadow-[inset_0_0_0_1px_rgb(11_11_12/0.4)] md:self-auto"
          >
            Alle Bewertungen auf Google
          </a>
        </div>

        {/* Endlosband: läuft langsam von links nach rechts, hält bei Berührung, Maus oder Tastaturfokus an */}
        <div
          ref={bandRef}
          data-reveal
          data-paused={paused ? "" : undefined}
          className="marquee -mx-[4vw] mt-12"
          onPointerDown={(e) => e.pointerType !== "mouse" && hold()}
          role="region"
          aria-label="Kundenbewertungen"
        >
          <ul className="marquee-track items-start">
            {reviews.map((r, i) => (
              <ReviewCard key={r.name} r={r} i={i} onToggle={(o) => setExpanded((n) => n + (o ? 1 : -1))} />
            ))}
            {reviews.map((r, i) => (
              <ReviewCard key={`${r.name}-copy`} r={r} i={i} copy />
            ))}
          </ul>
        </div>

        <div data-reveal className="mt-14 flex flex-wrap items-center gap-6">
          <p className="max-w-[40ch] text-graphite">Ihr Fahrzeug als Nächstes? Schicken Sie uns ein Foto – wir melden uns.</p>
          <Cta href={site.whatsapp}>Foto per WhatsApp senden</Cta>
        </div>
      </div>
    </section>
  )
}
