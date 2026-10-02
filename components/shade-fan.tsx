"use client"

import { usePaint } from "@/components/paint-context"

/**
 * Musterbleche: der gewählte Lack in Aufhellungs- und Abdunklungsstufen –
 * so wird beim Lackierer ein Farbton am Fahrzeug abgeglichen.
 */
const steps = [-36, -24, -12, 0, 12, 24, 36]

export function ShadeFan() {
  const { paint } = usePaint()

  return (
    <section className="bg-mist py-24 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-[4vw] lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-20">
        <div data-reveal>
          <h2 className="display-sm text-[clamp(2rem,4vw,3.25rem)]">Ihre Wunschfarbe. Auf den Punkt getroffen.</h2>
          <p className="mt-6 max-w-[52ch] text-graphite">
            Ob Originalton nach Lackcode, ein RAL-Farbton für die Pulverbeschichtung oder ein ganz eigener Look für
            Ihre Felgen: Wir stimmen die Farbe vorab mit Ihnen ab, damit das Ergebnis genau so aussieht, wie Sie es sich
            vorstellen.
          </p>
          <p className="mt-4 max-w-[52ch] text-graphite">
            Oben im Startbild ausgewählt: <span className="text-black">{paint.name}</span>. Rechts sehen Sie den Ton in
            sieben Abstufungen – so feine Unterschiede machen am Fahrzeug den Unterschied.
          </p>
        </div>

        <div data-reveal className="bezel bg-white/60">
        <ol className="bezel-core grid grid-cols-7 gap-1.5 bg-white p-4 sm:gap-3 sm:p-8" aria-label={`Musterbleche ${paint.name}`}>
          {steps.map((s, i) => {
            const mix = s === 0 ? paint.hex : `color-mix(in oklab, ${paint.hex}, ${s > 0 ? "white" : "black"} ${Math.abs(s)}%)`
            return (
              <li key={s} className="flex flex-col items-center gap-3">
                <div
                  data-metallic={paint.metallic ? "" : undefined}
                  className={`panel-chip paint-surface w-full rounded-md transition-[translate] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    s === 0 ? "aspect-[1/3] -translate-y-3 ring-2 ring-black ring-offset-2 ring-offset-white" : "aspect-[1/3]"
                  }`}
                  style={{ ["--paint" as string]: mix, backgroundColor: mix, transitionDelay: `${i * 30}ms` }}
                >
                  <div className="paint-flake" />
                </div>
                <span className={`text-xs tabular-nums ${s === 0 ? "font-medium text-black" : "text-graphite"}`}>
                  {s === 0 ? "Ziel" : s > 0 ? `+${s / 12}` : `${s / 12}`}
                </span>
              </li>
            )
          })}
        </ol>
        </div>
      </div>
    </section>
  )
}
