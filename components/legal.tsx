import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

/** Gemeinsames, gut lesbares Layout für Impressum und Datenschutz */
export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="inhalt" className="mx-auto max-w-[72ch] px-[4vw] pt-32 pb-24 md:pt-40">
        <h1 lang="de" className="display-sm text-[clamp(1.75rem,8vw,2.5rem)] hyphens-auto">
          {title}
        </h1>
        <div className="legal mt-10 text-graphite">{children}</div>
      </main>
      <Footer />
    </>
  )
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-black/10 py-8 first:border-t-0 first:pt-0">
      <h2 lang="de" className="display-sm text-xl text-black hyphens-auto">
        {title}
      </h2>
      <div className="mt-4 space-y-4 leading-relaxed">{children}</div>
    </section>
  )
}
