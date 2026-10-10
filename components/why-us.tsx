import { Photo } from "@/components/photo"

/** Unsere Halle – Foto vom Betrieb */
const halle = { name: "halle", alt: "Werkstatthalle von R.O.M Cartech mit Lackierkabine und Oldtimer vor dem Firmenschild", w: 1086, h: 1448, position: "50% 62%" }

const reasons = [
  {
    title: "Alles aus einem Betrieb",
    text: "Instandsetzen, Lackieren, Polieren, Pulverbeschichten und Glanzdrehen – Ihre Teile verlassen für keinen Arbeitsschritt unsere Halle.",
  },
  {
    title: "Vom Lack bis zur Felge",
    text: "Karosserie, Lack und Felgen aus einer Hand – vom Bordsteinschaden bis zur zweifarbigen Hochglanzfelge.",
  },
  {
    title: "Haltbar statt nur schön",
    text: "Gründliche Vorbereitung ist die Basis jeder Beschichtung. Deshalb hält das Ergebnis auch im Winter und in der Waschanlage.",
  },
  {
    title: "Persönlich und schnell",
    text: "Sie sprechen direkt mit dem, der an Ihrem Auto arbeitet. Faire Preise, kurze Wartezeiten.",
  },
]

/** Bento: vier Gründe und die Kundenstimme als große Kachel */
export function WhyUs() {
  return (
    <section className="py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-[4vw]">
        <h2 data-reveal className="display-sm max-w-[16ch] text-[clamp(2rem,4vw,3.25rem)]">
          Warum R.O.M Cartech
        </h2>

        <div data-reveal-group className="mt-14 grid gap-4 md:grid-cols-12 md:gap-5">
          {/* Unsere Halle als große Kachel */}
          <div data-reveal className="bezel md:col-span-7 md:row-span-2">
            <div className="bezel-core relative h-full min-h-[22rem]">
              <Photo
                name={halle.name}
                alt={halle.alt}
                w={halle.w}
                h={halle.h}
                position={halle.position}
                sizes="(min-width: 768px) 55vw, 92vw"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          {reasons.map((r, i) => (
            <div key={r.title} data-reveal className={`bezel ${i < 2 ? "md:col-span-5" : "md:col-span-6"}`}>
              <div className="bezel-core h-full bg-white p-8 md:p-10">
                <h3 className="display-sm text-xl">{r.title}</h3>
                <p className="mt-3 max-w-[48ch] text-graphite">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
