import type { Metadata } from "next"
import { Cta, CtaGhost } from "@/components/cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = { title: "Seite nicht gefunden", robots: { index: false } }

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="inhalt" className="mx-auto max-w-[1440px] px-[4vw] pt-44 pb-40">
        <h1 className="display text-[clamp(2.4rem,6vw,5rem)]">Diese Seite gibt es nicht.</h1>
        <p className="mt-6 text-graphite">Vielleicht hilft Ihnen einer dieser Wege weiter:</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Cta href="/">Zur Startseite</Cta>
          <CtaGhost href="/kontakt">Kontakt</CtaGhost>
        </div>
      </main>
      <Footer />
    </>
  )
}
