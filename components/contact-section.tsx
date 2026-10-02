import { Mail, MapPin, Phone } from "lucide-react"
import { site } from "@/lib/site"
import { ContactForm } from "@/components/contact-form"
import { HoursBlock } from "@/components/hours-block"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { OpenStatus } from "@/components/open-status"

/** Die drei Wege zu uns – WhatsApp als schnellster hervorgehoben */
function Channels() {
  const tile =
    "group relative flex flex-col justify-between gap-10 rounded-2xl p-6 transition-[background-color,box-shadow,translate] duration-300 md:p-7 [@media(hover:hover)]:hover:-translate-y-0.5"
  return (
    <ul data-reveal-group className="grid gap-3 md:grid-cols-3 md:gap-4">
      <li data-reveal>
        <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={`${tile} h-full bg-black text-white`}>
          <span className="flex items-center justify-between">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-black">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">Am schnellsten</span>
          </span>
          <span>
            <span className="display-sm block text-2xl">WhatsApp</span>
            <span className="mt-2 block text-sm text-white/65">Foto vom Schaden oder den Felgen schicken – wir melden uns mit einer Einschätzung.</span>
          </span>
        </a>
      </li>
      <li data-reveal>
        <a href={`tel:${site.phoneHref}`} className={`${tile} h-full bg-white shadow-[inset_0_0_0_1px_rgb(11_11_12/0.08)] hover:shadow-[inset_0_0_0_1px_rgb(11_11_12/0.3)]`}>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-black/[0.05]">
            <Phone className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <span>
            <span className="display-sm block text-2xl tabular-nums">{site.phone}</span>
            <span className="mt-2 block text-sm text-graphite">
              <OpenStatus tone="light" />
            </span>
          </span>
        </a>
      </li>
      <li data-reveal>
        <a href={`mailto:${site.emailHref}`} className={`${tile} h-full bg-white shadow-[inset_0_0_0_1px_rgb(11_11_12/0.08)] hover:shadow-[inset_0_0_0_1px_rgb(11_11_12/0.3)]`}>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-black/[0.05]">
            <Mail className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <span>
            <span className="display-sm block break-all text-xl md:text-2xl">{site.email}</span>
            <span className="mt-2 block text-sm text-graphite">Für ausführliche Anfragen mit mehreren Fotos.</span>
          </span>
        </a>
      </li>
    </ul>
  )
}

/**
 * Kontaktbereich: Kontaktwege oben, darunter Formular und daneben
 * Werkstatt-Karte mit Adresse und Öffnungszeiten.
 */
export function ContactSection({ title = "Termin anfragen", intro }: { title?: string; intro?: string }) {
  return (
    <section id="kontakt" className="scroll-mt-24 bg-mist py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-[4vw]">
        <div data-reveal className="max-w-3xl">
          <h2 className="display-sm text-[clamp(2rem,4vw,3.25rem)]">{title}</h2>
          <p className="mt-5 max-w-[56ch] text-lg text-graphite">
            {intro ??
              "Wählen Sie den Weg, der Ihnen am liebsten ist. Mit ein paar Fotos können wir Ihnen meist schon vorab sagen, was auf Sie zukommt."}
          </p>
        </div>

        <div className="mt-12">
          <Channels />
        </div>

        <div className="mt-4 grid gap-4 md:mt-5 lg:grid-cols-12 lg:gap-5">
          <div data-reveal className="lg:col-span-7">
            <h3 className="sr-only">Anfrageformular</h3>
            <ContactForm />
          </div>

          <aside data-reveal className="bezel lg:col-span-5" aria-label="Werkstatt">
            <div className="bezel-core flex h-full flex-col gap-10 bg-white p-6 md:p-10">
              <div>
                <h3 className="display-sm text-xl">Werkstatt</h3>
                <p className="mt-4 flex gap-3 text-lg">
                  <MapPin className="mt-1 h-5 w-5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                  <span>
                    R.O.M Cartech
                    <br />
                    {site.street}
                    <br />
                    {site.city}
                  </span>
                </p>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn mt-6 inline-flex items-center gap-2 rounded-full bg-black/[0.05] px-5 py-3 text-sm font-medium hover:bg-black/[0.1]"
                >
                  Route in Google Maps planen
                </a>
              </div>
              <div className="border-t border-black/10 pt-8">
                <h3 className="display-sm text-xl">Öffnungszeiten</h3>
                <div className="mt-4">
                  <HoursBlock />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
