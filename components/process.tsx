import { site } from "@/lib/site"
import { Cta } from "@/components/cta"

const steps = [
  {
    title: "Foto schicken",
    text: "Machen Sie ein, zwei Fotos vom Schaden oder Ihren Felgen und schicken Sie sie uns per WhatsApp. Ein kurzer Satz dazu, was Sie sich wünschen, genügt.",
  },
  {
    title: "Angebot und Termin",
    text: "Wir melden uns mit einer ersten Einschätzung. Bei Bedarf sehen wir uns das Fahrzeug vor Ort an und erstellen Ihnen ein individuelles Angebot.",
  },
  {
    title: "Bearbeitung",
    text: "Instandsetzen, lackieren, polieren, beschichten oder glanzdrehen – sorgfältig, mit moderner Technik und hochwertigen Materialien.",
  },
  {
    title: "Abholung",
    text: "Wir prüfen das Ergebnis gemeinsam mit Ihnen. Sie holen Ihr Fahrzeug oder Ihre Felgen ab – fertig zum Fahren.",
  },
]

/** Ablauf: Überschrift + WhatsApp-Einstieg bleiben links stehen, die Schritte laufen rechts vorbei */
export function Process() {
  return (
    <section id="ablauf" className="scroll-mt-24 py-24 md:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-[4vw] lg:grid-cols-[5fr_7fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start" data-reveal>
          <h2 className="display-sm text-[clamp(2rem,4vw,3.25rem)]">So einfach geht’s</h2>
          <p className="mt-5 max-w-[38ch] text-graphite">
            Der schnellste Weg zu Ihrem Angebot: ein Foto per WhatsApp. Kein Formular, kein Warten in der Leitung.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Cta href={site.whatsapp}>Foto per WhatsApp senden</Cta>
            <a href={`tel:${site.phoneHref}`} className="link-underline text-sm">
              oder anrufen: {site.phone}
            </a>
          </div>
        </div>
        <ol className="paint-track space-y-4" data-reveal-group>
          {steps.map((s, i) => (
            <li key={s.title} data-reveal className="bezel">
              <div className="bezel-core grid gap-6 bg-white p-8 sm:grid-cols-[auto_1fr] sm:gap-10 md:p-10">
                <span className="display text-[clamp(3rem,6vw,4.5rem)] leading-none text-black/15 tabular-nums" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="display-sm text-2xl">
                    <span className="sr-only">Schritt {i + 1}: </span>
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-graphite">{s.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
