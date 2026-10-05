import { Header } from "@/components/header"
import { PaintHero } from "@/components/paint-hero"
import { ServiceStrip } from "@/components/service-strip"
import { Reviews } from "@/components/reviews"
import { ShadeFan } from "@/components/shade-fan"
import { Process } from "@/components/process"
import { WhyUs } from "@/components/why-us"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { businessJsonLd } from "@/lib/schema"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
}

export default function Home() {
  const jsonLd = businessJsonLd()
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header overHero />
      <main id="inhalt">
        <PaintHero />
        <ServiceStrip />
        <Process />
        <Reviews />
        <WhyUs />
        <ShadeFan />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
