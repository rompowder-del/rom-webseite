import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { site } from "@/lib/site"

export const metadata: Metadata = { title: "Datenschutzerklärung", robots: { index: false } }

export default function Page() {
  return (
    <>
      <Header />
      <main id="inhalt" className="mx-auto max-w-[72ch] px-[4vw] pt-32 pb-24 md:pt-40">
        <h1 lang="de" className="display-sm text-[clamp(1.75rem,8vw,2.25rem)] hyphens-auto break-words">Datenschutzerklärung</h1>
        <div className="mt-10 space-y-4 text-graphite">
          <p className="text-black">{site.legalName}</p>
          <p>
            {site.owner}
            <br />
            {site.street}
            <br />
            {site.city}
          </p>
          <p>
            Telefon: {site.phone}
            <br />
            E-Mail: {site.email}
          </p>
          <h2 className="display-sm pt-6 text-xl text-black">Cookies</h2>
          <p>
            Unsere Website verwendet nur technisch notwendige Speicherungen. Dazu gehört Ihre Auswahl im Cookie-Hinweis,
            damit dieser nicht bei jedem Besuch erneut erscheint. Diese Information wird ausschließlich in Ihrem Browser
            gespeichert. Es werden keine Analyse- oder Werbe-Cookies eingesetzt.
          </p>
          <p>
            Links zu Google Maps und WhatsApp öffnen die jeweiligen Dienste erst, wenn Sie darauf klicken. Ab dann gelten
            die Datenschutzbestimmungen des jeweiligen Anbieters. Ihre Auswahl können Sie jederzeit über „Cookie-Einstellungen“
            am Ende jeder Seite ändern.
          </p>
          <p>[Den vollständigen Text der bisherigen Seite rom-cartech.de hier übernehmen.]</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
