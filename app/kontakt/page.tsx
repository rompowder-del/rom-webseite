import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Photo } from "@/components/photo"
import { Cta, CtaGhost } from "@/components/cta"
import { OpenStatus } from "@/components/open-status"
import { businessJsonLd } from "@/lib/schema"
import { services, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Kontakt & Öffnungszeiten – Lackiererei in Essen",
  description:
    "R.O.M Cartech, Krablerstraße 127 / Halle 36A, 45326 Essen. Mo–Fr 9–17 Uhr, Sa 9–13 Uhr. Termin per WhatsApp, Telefon +49 163 7856598 oder Formular anfragen.",
  alternates: { canonical: "/kontakt" },
  openGraph: { url: "/kontakt", images: ["/opengraph-image"] },
}

const checklist = [
  { title: "Fotos aus mehreren Blickwinkeln", text: "Einmal mit Abstand, einmal ganz nah – bei Tageslicht sieht man Kratzer und Dellen am besten." },
  { title: "Fahrzeugschein oder Lackcode", text: "Damit treffen wir den Originalfarbton. Der Lackcode steht oft auf einem Aufkleber im Türrahmen oder unter der Motorhaube." },
  { title: "Ihre Wunschfarbe", text: "Bei Felgen oder einer neuen Farbe gern einen RAL-Ton, ein Beispielfoto oder einfach eine Beschreibung." },
  { title: "Bei Felgen: Größe und Anzahl", text: "Zollgröße und wie viele Felgen bearbeitet werden sollen – bei zweifarbigen Felgen auch, ob sie glanzgedreht sind." },
]

const faqs = [
  {
    q: "Wie bekomme ich am schnellsten ein Angebot?",
    a: "Schicken Sie uns per WhatsApp ein paar Fotos und einen kurzen Satz, was gemacht werden soll. Wir melden uns mit einer ersten Einschätzung und vereinbaren bei Bedarf einen Termin zur Besichtigung.",
  },
  {
    q: "Kann ich auch einfach vorbeikommen?",
    a: "Gern während unserer Öffnungszeiten. Am besten melden Sie sich kurz vorher per Telefon oder WhatsApp, damit wir uns Zeit für Sie nehmen können.",
  },
  {
    q: "Kann ich nur meine Felgen vorbeibringen?",
    a: "Ja. Für Pulverbeschichtung, Lackierung, Polierung oder CNC-Glanzdrehen können Sie uns die Felgen auch ohne Fahrzeug bringen.",
  },
  {
    q: "Was kostet die Bearbeitung?",
    a: "Das hängt von Leistung, Umfang und Zustand ab. Nach den Fotos oder der Besichtigung erstellen wir Ihnen ein individuelles Angebot.",
  },
]

export default function KontaktPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  }
  const photo = services.find((s) => s.slug === "fahrzeuglackierung")!.image

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([businessJsonLd(), faqLd]) }} />
      <Header />
      <main id="inhalt">
        {/* Kopf */}
        <section className="relative isolate overflow-hidden bg-black text-white">
          <Photo name={photo.name} alt={photo.alt} w={photo.w} h={photo.h} position={photo.position} priority className="absolute inset-0 -z-10 h-full w-full" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/60 to-black/35 md:bg-gradient-to-r md:from-black/90 md:via-black/60 md:to-black/10" />
          <div className="mx-auto max-w-[1440px] px-[4vw] pt-36 pb-20 md:pt-48 md:pb-28">
            <p className="rise mb-6 inline-flex rounded-full bg-white/[0.08] px-3.5 py-1.5 text-sm text-white/85 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.1)] backdrop-blur-md">
              <OpenStatus />
            </p>
            <h1 className="display rise max-w-[14ch] text-[clamp(2.4rem,6.5vw,5.75rem)]">
              Kontakt &amp; Anfahrt{" "}
              <span className="mt-3 block text-[0.38em] font-normal tracking-normal text-white/65">Lackiererei in Essen</span>
            </h1>
            <p className="rise mt-6 max-w-[52ch] text-lg text-white/80" style={{ ["--d" as string]: "100ms" }}>
              Ob Kratzer, Delle, neue Farbe oder Felgen wie neu: Erzählen Sie uns, was Sie vorhaben. Wir beraten Sie
              persönlich und erstellen Ihnen ein individuelles Angebot.
            </p>
            <div className="rise mt-10 flex flex-wrap gap-3" style={{ ["--d" as string]: "200ms" }}>
              <Cta href={site.whatsapp} tone="light">
                Foto per WhatsApp senden
              </Cta>
              <CtaGhost href={`tel:${site.phoneHref}`} className="text-white">
                {site.phone}
              </CtaGhost>
            </div>
          </div>
        </section>

        <ContactSection
          title="So erreichen Sie uns"
          intro="WhatsApp, Telefon, E-Mail oder Formular – wählen Sie den Weg, der Ihnen am liebsten ist. Wir melden uns so schnell wie möglich zurück."
        />

        {/* Gut vorbereitet */}
        <section className="py-24 md:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-[4vw] lg:grid-cols-[5fr_7fr] lg:gap-24">
            <div data-reveal className="lg:sticky lg:top-32 lg:self-start">
              <h2 className="display-sm text-[clamp(2rem,4vw,3.25rem)]">Gut vorbereitet zum schnellen Angebot</h2>
              <p className="mt-5 max-w-[42ch] text-graphite">
                Je mehr wir vorab wissen, desto genauer wird unsere Einschätzung. Diese Angaben helfen uns am meisten:
              </p>
            </div>
            <ul data-reveal-group className="grid gap-4 sm:grid-cols-2">
              {checklist.map((c) => (
                <li key={c.title} data-reveal className="bezel">
                  <div className="bezel-core h-full bg-white p-7">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-white" aria-hidden="true">
                      <Check className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <h3 className="display-sm mt-6 text-lg">{c.title}</h3>
                    <p className="mt-2 text-graphite">{c.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Anfahrt */}
        <section className="bg-black py-24 text-white md:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-[4vw] lg:grid-cols-2 lg:gap-24">
            <div data-reveal>
              <h2 className="display-sm text-[clamp(2rem,4vw,3.25rem)]">So finden Sie uns</h2>
              <p className="mt-6 max-w-[48ch] text-white/70">
                Unsere Werkstatt liegt in Essen, Krablerstraße 127. Auf dem Gelände finden Sie uns in Halle 36A – dort
                sind Lackiererei, Pulverbeschichtung und CNC-Drehbank unter einem Dach.
              </p>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="cta cta-light mt-10">
                <span>Route in Google Maps planen</span>
                <span className="cta-icon" aria-hidden="true">
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </a>
            </div>
            <dl data-reveal className="grid content-start gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
              {[
                ["Adresse", `${site.street}\n${site.city}`],
                ["Telefon", site.phone],
                ["Öffnungszeiten", "Mo – Fr 9 – 17 Uhr\nSa 9 – 13 Uhr"],
                ["E-Mail", site.email],
              ].map(([k, v]) => (
                <div key={k} className="bg-black p-7">
                  <dt className="text-sm text-white/50">{k}</dt>
                  <dd className="mt-2 whitespace-pre-line break-words text-lg">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Häufige Fragen */}
        <section className="py-24 md:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-[4vw] lg:grid-cols-[5fr_7fr] lg:gap-24">
            <h2 data-reveal className="display-sm text-[clamp(2rem,4vw,3.25rem)] lg:sticky lg:top-32 lg:self-start">
              Häufige Fragen zur Anfrage
            </h2>
            <dl data-reveal-group className="divide-y divide-black/10 border-y border-black/10">
              {faqs.map((f) => (
                <div key={f.q} data-reveal className="grid gap-3 py-8 md:grid-cols-[2fr_3fr] md:gap-10">
                  <dt className="display-sm text-lg">{f.q}</dt>
                  <dd className="text-graphite">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Leistungen */}
        <nav aria-label="Unsere Leistungen" className="bg-mist py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-[4vw]">
            <h2 data-reveal className="display-sm text-[clamp(1.75rem,3vw,2.5rem)]">Unsere Leistungen</h2>
            <ul data-reveal-group className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {services.map((s) => (
                <li key={s.slug} data-reveal>
                  <Link
                    href={`/leistungen/${s.slug}`}
                    className="group flex h-full items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-[inset_0_0_0_1px_rgb(11_11_12/0.06)] transition-shadow duration-300 hover:shadow-[inset_0_0_0_1px_rgb(11_11_12/0.3)]"
                  >
                    <span className="font-medium">{s.name}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 transition-[translate] duration-300 group-hover:translate-x-1" strokeWidth={1.5} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </main>
      <Footer />
    </>
  )
}
