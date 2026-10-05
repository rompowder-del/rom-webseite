import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Photo } from "@/components/photo"
import { ContactSection } from "@/components/contact-section"
import { Cta, CtaGhost } from "@/components/cta"
import { services, site } from "@/lib/site"
import { OpenStatus } from "@/components/open-status"
import { essenDistricts, nearbyCities, serviceContent } from "@/lib/service-content"

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = services.find((x) => x.slug === slug)
  if (!s) return {}
  return {
    title: s.seoTitle,
    description: `${s.short.length > 150 ? s.short.split(". ")[0] + "." : s.short} R.O.M Cartech – Essen, Ruhrgebiet & NRW.`,
    alternates: { canonical: `/leistungen/${s.slug}` },
    openGraph: {
      title: `${s.seoTitle} | R.O.M Cartech`,
      description: s.short,
      url: `/leistungen/${s.slug}`,
      images: [{ url: `/images/${s.image.name}-1600.webp`, alt: s.image.alt }],
    },
    twitter: { card: "summary_large_image", images: [`/images/${s.image.name}-1600.webp`] },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const index = services.findIndex((x) => x.slug === slug)
  if (index === -1) notFound()
  const s = services[index]
  const prev = services[index - 1]
  const next = services[index + 1]
  const url = `${site.url}/leistungen/${s.slug}`
  const c = serviceContent[s.slug]
  const faqs = [...s.faqs, ...c.faqs]

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.name,
      description: s.intro,
      image: `${site.url}/images/${s.image.name}-1600.webp`,
      url,
      serviceType: s.name,
      areaServed: [
        ...["Essen", ...nearbyCities].map((name) => ({ "@type": "City", name })),
        { "@type": "AdministrativeArea", name: "Ruhrgebiet" },
        { "@type": "State", name: "Nordrhein-Westfalen" },
      ],
      provider: {
        "@type": "AutoBodyShop",
        name: site.name,
        url: site.url,
        telephone: site.phoneHref,
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Krablerstraße 127, Halle 36A",
          postalCode: "45326",
          addressLocality: "Essen",
          addressCountry: "DE",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: site.url },
        { "@type": "ListItem", position: 2, name: "Leistungen", item: `${site.url}/#leistungen` },
        { "@type": "ListItem", position: 3, name: s.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="inhalt">
        {/* Kopf: Lackfläche der Leistung, Name, ein Satz, zwei Wege */}
        <section className="relative isolate overflow-hidden bg-black text-white">
          <Photo
            name={s.image.name}
            alt={s.image.alt}
            w={s.image.w}
            h={s.image.h}
            position={s.image.position}
            priority
            className="absolute inset-0 -z-10 h-full w-full"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/55 to-black/30 md:bg-gradient-to-r md:from-black/90 md:via-black/55 md:to-black/5" />
          <div className="mx-auto max-w-[1440px] px-[4vw] pt-36 pb-20 md:pt-48 md:pb-28">
            <nav aria-label="Brotkrumen" className="text-sm text-white/60">
              <ol className="flex flex-wrap gap-x-2">
                <li>
                  <Link href="/" className="link-underline hover:text-white">Startseite</Link>
                  <span aria-hidden="true"> /</span>
                </li>
                <li>
                  <Link href="/#leistungen" className="link-underline hover:text-white">Leistungen</Link>
                  <span aria-hidden="true"> /</span>
                </li>
                <li aria-current="page" className="text-white/85">{s.name}</li>
              </ol>
            </nav>
            <h1 lang="de" className="display rise mt-8 max-w-[14ch] text-[clamp(2.1rem,6.5vw,5.75rem)] [hyphens:auto] [overflow-wrap:anywhere] sm:[hyphens:manual] sm:[overflow-wrap:normal]">
              {s.name}{" "}
              <span className="mt-3 block text-[0.34em] font-normal tracking-normal text-white/65">{s.region}</span>
            </h1>
            <p className="rise mt-6 max-w-[46ch] text-lg text-white/80" style={{ ["--d" as string]: "100ms" }}>
              {s.short}
            </p>
            <div className="rise mt-10 flex flex-wrap gap-3" style={{ ["--d" as string]: "200ms" }}>
              <Cta href={site.whatsapp} tone="light">
                Foto per WhatsApp senden
              </Cta>
              <CtaGhost href={`tel:${site.phoneHref}`} className="text-white">
                {site.phone}
              </CtaGhost>
            </div>
            <OpenStatus className="rise mt-6 text-sm text-white/75" />
          </div>
        </section>

        {/* Worum es geht + Leistungsumfang, jeder Punkt erklärt */}
        <section className="py-24 md:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-[4vw] lg:grid-cols-[5fr_7fr] lg:gap-24">
            <div data-reveal className="lg:sticky lg:top-32 lg:self-start">
              <p className="display-sm max-w-[30ch] text-[clamp(1.4rem,2.4vw,2rem)]">{s.intro}</p>
            </div>
            <div data-reveal>
              <h2 className="display-sm text-[clamp(1.6rem,2.6vw,2.25rem)]">Das gehört dazu</h2>
              <ul data-reveal-group className="mt-8 border-t border-black/10">
                {c.points.map((p) => (
                  <li key={p.title} data-reveal className="grid gap-2 border-b border-black/10 py-6 md:grid-cols-[auto_1fr] md:gap-x-4">
                    <Check className="mt-1 hidden h-4 w-4 shrink-0 md:block" strokeWidth={1.5} aria-hidden="true" />
                    <h3 className="display-sm text-lg">{p.title}</h3>
                    <p className="text-graphite md:col-start-2">{p.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Ratgeber: ausführlicher Text mit Zwischenüberschriften, daneben das Werkstattfoto */}
        <section className="pb-24 md:pb-36">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-[4vw] lg:grid-cols-[5fr_7fr] lg:gap-24">
            <div data-reveal className="bezel hidden lg:sticky lg:top-32 lg:block lg:self-start">
              <div className="bezel-core sheen relative aspect-[4/5]">
                <Photo
                  name={s.image.name}
                  alt={s.image.alt}
                  w={s.image.w}
                  h={s.image.h}
                  position={s.image.position}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
            <article className="max-w-[68ch]">
              {c.article.map((a, i) => (
                <div key={a.h} data-reveal className={i ? "mt-14" : ""}>
                  <h2 className="display-sm text-[clamp(1.6rem,2.6vw,2.25rem)]">{a.h}</h2>
                  {a.p.map((t) => (
                    <p key={t.slice(0, 24)} className="mt-5 text-lg leading-relaxed text-graphite">
                      {t}
                    </p>
                  ))}
                </div>
              ))}
              <div data-reveal className="mt-12 flex flex-wrap gap-3">
                <Cta href={site.whatsapp}>Foto per WhatsApp senden</Cta>
                <CtaGhost href={`tel:${site.phoneHref}`}>{site.phone}</CtaGhost>
              </div>
            </article>
          </div>
        </section>

        {/* Ablauf dieser Leistung – echte Reihenfolge, daher nummeriert */}
        <section className="bg-mist py-24 md:py-36">
          <div className="mx-auto max-w-[1440px] px-[4vw]">
            <h2 data-reveal className="display-sm text-[clamp(2rem,4vw,3.25rem)]">So gehen wir vor</h2>
            <ol data-reveal-group className={`mt-14 grid gap-4 sm:grid-cols-2 lg:gap-5 ${s.steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}>
              {s.steps.map((st, i) => (
                <li key={st.title} data-reveal className="bezel">
                  <div className="bezel-core flex h-full flex-col bg-white p-7 md:p-8">
                    <span className="display text-5xl leading-none text-black/15 tabular-nums" aria-hidden="true">
                      {i + 1}
                    </span>
                    <h3 className="display-sm mt-10 text-xl">
                      <span className="sr-only">Schritt {i + 1}: </span>
                      {st.title}
                    </h3>
                    <p className="mt-3 text-graphite">{st.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Essen und Umgebung: für Kunden aus den Stadtteilen und Nachbarstädten */}
        <section className="bg-black py-24 text-white md:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-[4vw] lg:grid-cols-2 lg:gap-24">
            <div data-reveal>
              <h2 lang="de" className="display-sm text-[clamp(1.7rem,4vw,3.25rem)] hyphens-auto [overflow-wrap:anywhere] sm:[overflow-wrap:normal]">{c.local.h}</h2>
              {c.local.p.map((t) => (
                <p key={t.slice(0, 24)} className="mt-6 max-w-[52ch] text-lg text-white/70">
                  {t}
                </p>
              ))}
              <div className="mt-10 flex flex-wrap gap-3">
                <Cta href={site.whatsapp} tone="light">
                  Foto per WhatsApp senden
                </Cta>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn inline-flex items-center rounded-full px-5 py-3 text-sm text-white/85 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.25)] hover:text-white">
                  Route planen
                </a>
              </div>
            </div>
            <div data-reveal className="grid content-start gap-10">
              <div>
                <h3 className="text-sm text-white/50">Essener Stadtteile</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {essenDistricts.map((d) => (
                    <li key={d} className="rounded-full bg-white/[0.07] px-3.5 py-1.5 text-sm text-white/85 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.08)]">
                      Essen-{d}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm text-white/50">Städte in der Umgebung</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {nearbyCities.map((d) => (
                    <li key={d} className="rounded-full bg-white/[0.07] px-3.5 py-1.5 text-sm text-white/85 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.08)]">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Häufige Fragen: offen nebeneinander statt Akkordeon */}
        <section className="py-24 md:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-[4vw] lg:grid-cols-[5fr_7fr] lg:gap-24">
            <h2 data-reveal className="display-sm text-[clamp(2rem,4vw,3.25rem)] lg:sticky lg:top-32 lg:self-start">
              {c.faqTitle ?? `Häufige Fragen zu ${s.name}`}
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

        <ContactSection />

        {/* Weiter zur vorherigen / nächsten Leistung in der festen Reihenfolge */}
        <nav aria-label="Weitere Leistungen" className="bg-mist">
          <div className="mx-auto grid max-w-[1440px] gap-4 px-[4vw] py-16 sm:grid-cols-2 md:py-20">
            {prev ? (
              <Link href={`/leistungen/${prev.slug}`} className="group bezel block">
                <span className="bezel-core flex items-center gap-5 bg-white p-6 md:p-8">
                  <ArrowLeft className="h-5 w-5 shrink-0 transition-[translate] duration-300 group-hover:-translate-x-1" strokeWidth={1.5} aria-hidden="true" />
                  <span>
                    <span className="block text-sm text-graphite">Vorherige Leistung</span>
                    <span className="display-sm mt-1 block text-xl">{prev.name}</span>
                  </span>
                </span>
              </Link>
            ) : (
              <span className="hidden sm:block" />
            )}
            {next ? (
              <Link href={`/leistungen/${next.slug}`} className="group bezel block">
                <span className="bezel-core flex items-center justify-end gap-5 bg-white p-6 text-right md:p-8">
                  <span>
                    <span className="block text-sm text-graphite">Nächste Leistung</span>
                    <span className="display-sm mt-1 block text-xl">{next.name}</span>
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 transition-[translate] duration-300 group-hover:translate-x-1" strokeWidth={1.5} aria-hidden="true" />
                </span>
              </Link>
            ) : (
              <Link href="/#leistungen" className="group bezel block">
                <span className="bezel-core flex items-center justify-end gap-5 bg-white p-6 text-right md:p-8">
                  <span>
                    <span className="block text-sm text-graphite">Zurück zur Übersicht</span>
                    <span className="display-sm mt-1 block text-xl">Alle Leistungen</span>
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 transition-[translate] duration-300 group-hover:translate-x-1" strokeWidth={1.5} aria-hidden="true" />
                </span>
              </Link>
            )}
          </div>
        </nav>
      </main>
      <Footer />
    </>
  )
}
