import type { Metadata } from "next"
import { LegalPage, LegalSection } from "@/components/legal"
import { legal } from "@/lib/site"

export const metadata: Metadata = { title: "Impressum", alternates: { canonical: "/impressum" } }

export default function Page() {
  return (
    <LegalPage title="Impressum">
      <LegalSection title="Angaben gemäß § 5 DDG">
        <p>
          <strong className="font-medium text-black">{legal.name}</strong>
          <br />
          {legal.street}
          <br />
          {legal.city}
        </p>
        <p>
          <strong className="font-medium text-black">Vertreten durch:</strong> {legal.owner}
        </p>
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>
          Telefon: <a href={`tel:${legal.phone.replace(/[^+\d]/g, "")}`} className="underline underline-offset-2 hover:text-black">{legal.phone}</a>
          <br />
          E-Mail: <a href={`mailto:${legal.email}`} className="underline underline-offset-2 hover:text-black">{legal.email}</a>
        </p>
      </LegalSection>

      <LegalSection title="Umsatzsteuer-ID">
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: {legal.ustId}</p>
      </LegalSection>

      <LegalSection title="Wirtschafts-Identifikationsnummer">
        <p>Wirtschafts-Identifikationsnummer gemäß § 139 c Abgabenordnung: IdNr. {legal.wIdNr}</p>
      </LegalSection>

      <LegalSection title="Redaktionell verantwortlich">
        <p>
          gemäß § 18 Abs. 2 MStV:
          <br />
          {legal.owner}
          <br />
          {legal.street}
          <br />
          {legal.city}
        </p>
      </LegalSection>

      <LegalSection title="Verbraucherstreitbeilegung">
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Inhalte und Links">
        <p>
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
          Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Unsere Website enthält Links zu externen
          Websites Dritter (zum Beispiel Google Maps oder WhatsApp), auf deren Inhalte wir keinen Einfluss haben. Für die
          Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
        </p>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <p>
          Die Texte und Fotos auf dieser Website unterliegen dem deutschen Urheberrecht. Eine Vervielfältigung oder
          Verwendung außerhalb dieser Website bedarf unserer vorherigen schriftlichen Zustimmung.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
