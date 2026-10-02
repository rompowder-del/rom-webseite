import Link from "next/link"
import { services } from "@/lib/site"
import { Photo } from "@/components/photo"

const pick = (slug: string) => services.find((s) => s.slug === slug)!

const features = [
  {
    service: pick("pulverbeschichtung"),
    title: "Pulverbeschichtung im eigenen Haus",
    text: "Unsere eigene Pulverkabine steht direkt in der Halle. Ihre Felgen werden bei uns entlackt, beschichtet und eingebrannt – ohne Umweg über einen Zulieferer.",
    facts: ["Entlacken, beschichten, einbrennen", "Viele RAL-Farbtöne", "Glanz, Seidenmatt oder Matt"],
  },
  {
    service: pick("cnc-glanzdrehen"),
    title: "Glanzdrehen auf der eigenen CNC-Drehbank",
    text: "Zweifarbige Alufelgen bekommen ihre Hochglanz-Front bei uns auf der CNC-Drehbank zurück – präzise nachgedreht und mit Klarlack versiegelt.",
    facts: ["Präzise auf der CNC-Drehbank", "Korrosion und Kratzer entfernt", "Klarlack-Versiegelung"],
  },
]

/** Werkstatt-Einblick: zwei Bild-Text-Paare im Wechsel */
export function Workshop() {
  return (
    <section className="bg-mist py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-[4vw]">
        <h2 data-reveal className="display-sm max-w-[18ch] text-[clamp(2rem,4vw,3.25rem)]">
          Aus unserer Werkstatt in Essen
        </h2>
        <div className="mt-14 space-y-20 md:space-y-28">
          {features.map((f, i) => (
            <article
              key={f.title}
              className={`grid items-center gap-10 md:grid-cols-12 md:gap-14 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div data-reveal className="bezel md:col-span-7">
                <div className="bezel-core sheen relative aspect-[4/3] md:aspect-[5/4]">
                  <Photo
                    name={f.service.image.name}
                    alt={f.service.image.alt}
                    w={f.service.image.w}
                    h={f.service.image.h}
                    position={f.service.image.position}
                    sizes="(min-width: 768px) 55vw, 92vw"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </div>
              <div data-reveal className="md:col-span-5">
                <h3 className="display-sm text-[clamp(1.6rem,2.6vw,2.25rem)]">{f.title}</h3>
                <p className="mt-5 max-w-[48ch] text-graphite">{f.text}</p>
                <ul className="mt-8">
                  {f.facts.map((x) => (
                    <li key={x} className="flex items-center gap-3 border-t border-black/10 py-3.5 last:border-b">
                      <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path d="M3 8.5l3 3 7-7" />
                      </svg>
                      {x}
                    </li>
                  ))}
                </ul>
                <Link href={`/leistungen/${f.service.slug}`} className="link-underline mt-8 inline-block font-medium">
                  Mehr zu {f.service.name}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
