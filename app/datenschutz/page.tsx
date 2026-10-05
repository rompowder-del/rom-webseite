import type { Metadata } from "next"
import { LegalPage, LegalSection } from "@/components/legal"
import { legal } from "@/lib/site"

export const metadata: Metadata = { title: "Datenschutzerklärung", alternates: { canonical: "/datenschutz" } }

const ext = "underline underline-offset-2 hover:text-black"

export default function Page() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <LegalSection title="1. Verantwortlicher">
        <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
        <p>
          <strong className="font-medium text-black">{legal.name}</strong>
          <br />
          {legal.owner}
          <br />
          {legal.street}
          <br />
          {legal.city}
          <br />
          Telefon: {legal.phone}
          <br />
          E-Mail: {legal.email}
        </p>
      </LegalSection>

      <LegalSection title="2. Allgemeines zur Datenverarbeitung">
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir verarbeiten personenbezogene Daten nur, soweit dies
          zur Bereitstellung dieser Website, zur Beantwortung Ihrer Anfragen oder zur Erfüllung gesetzlicher Pflichten
          erforderlich ist. Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. b DSGVO (Vertrag und vorvertragliche
          Maßnahmen), Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
          Interesse).
        </p>
      </LegalSection>

      <LegalSection title="3. Hosting">
        <p>
          Diese Website wird bei der Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf
          der Website verarbeitet Vercel technisch notwendige Daten (siehe Server-Logfiles), um die Seite auszuliefern
          und vor Missbrauch zu schützen. Dabei kann eine Übermittlung in die USA stattfinden. Diese erfolgt auf
          Grundlage des EU-US Data Privacy Framework bzw. der EU-Standardvertragsklauseln. Rechtsgrundlage ist unser
          berechtigtes Interesse an einer sicheren und zuverlässigen Bereitstellung der Website (Art. 6 Abs. 1 lit. f
          DSGVO).
        </p>
      </LegalSection>

      <LegalSection title="4. Server-Logfiles">
        <p>
          Bei jedem Aufruf der Website werden automatisch Informationen erfasst, die Ihr Browser übermittelt: IP-Adresse,
          Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL, Browsertyp und Betriebssystem. Diese Daten
          dienen ausschließlich dem technischen Betrieb und der Sicherheit der Website, werden nicht mit anderen Daten
          zusammengeführt und nach kurzer Zeit gelöscht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies und lokale Speicherung">
        <p>
          Unsere Website verwendet nur technisch notwendige Speicherungen. Dazu gehört Ihre Auswahl im Cookie-Hinweis,
          damit dieser nicht bei jedem Besuch erneut erscheint. Diese Information wird ausschließlich in Ihrem Browser
          gespeichert (§ 25 Abs. 2 TDDDG). Es werden keine Analyse- oder Werbe-Cookies eingesetzt. Ihre Auswahl können
          Sie jederzeit über „Cookie-Einstellungen“ am Ende jeder Seite ändern.
        </p>
      </LegalSection>

      <LegalSection title="6. Kontaktaufnahme">
        <p>
          Wenn Sie uns per E-Mail, Telefon, Telefax oder über das Kontaktformular kontaktieren, verarbeiten wir Ihre
          Angaben (zum Beispiel Name, Telefonnummer, E-Mail-Adresse, Ihre Nachricht und gegebenenfalls Fotos), um Ihre
          Anfrage zu bearbeiten. Das Kontaktformular übermittelt keine Daten an unseren Server, sondern öffnet Ihr
          eigenes E-Mail-Programm mit einer vorausgefüllten Nachricht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO,
          soweit Ihre Anfrage auf einen Auftrag gerichtet ist, im Übrigen Art. 6 Abs. 1 lit. f DSGVO. Wir löschen die
          Daten, sobald die Anfrage erledigt ist, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
        </p>
      </LegalSection>

      <LegalSection title="7. WhatsApp">
        <p>
          Sie können uns über WhatsApp kontaktieren. Anbieter ist die WhatsApp Ireland Limited, 4 Grand Canal Square,
          Grand Canal Harbour, Dublin 2, Irland. Ein Klick auf einen WhatsApp-Link auf unserer Website öffnet WhatsApp;
          vorher werden keine Daten an WhatsApp übertragen. Wenn Sie uns schreiben, verarbeitet WhatsApp Ihre
          Telefonnummer und die Nachrichteninhalte nach seinen eigenen Datenschutzbestimmungen; dabei kann auch eine
          Übermittlung in die USA stattfinden. Wir nutzen die übermittelten Informationen nur zur Bearbeitung Ihrer
          Anfrage (Art. 6 Abs. 1 lit. b bzw. f DSGVO). Wenn Sie WhatsApp nicht nutzen möchten, erreichen Sie uns auch
          per Telefon oder E-Mail. Weitere Informationen:{" "}
          <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer" className={ext}>
            Datenschutzrichtlinie von WhatsApp
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="8. Links zu Google Maps und Google-Bewertungen">
        <p>
          Unsere Website enthält Links zu Google Maps (Routenplanung) und zu unseren Bewertungen bei Google. Anbieter ist
          die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Es handelt sich um einfache Links,
          es werden keine Karten oder Inhalte von Google in unsere Seite eingebettet. Daten werden erst an Google
          übertragen, wenn Sie einen solchen Link anklicken. Ab dann gilt die{" "}
          <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className={ext}>
            Datenschutzerklärung von Google
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="9. Schriftarten">
        <p>
          Die auf dieser Website verwendeten Schriftarten sind lokal auf unserem Server eingebunden. Beim Aufruf der
          Seite wird keine Verbindung zu Servern von Google oder anderen Schriftanbietern aufgebaut.
        </p>
      </LegalSection>

      <LegalSection title="10. Ihre Rechte">
        <p>Sie haben jederzeit das Recht auf:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung auf Grundlage berechtigter Interessen (Art. 21 DSGVO)</li>
          <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
        <p>
          Wenden Sie sich dazu einfach an die oben genannten Kontaktdaten. Außerdem haben Sie das Recht, sich bei einer
          Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Für uns zuständig ist die Landesbeauftragte für
          Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213 Düsseldorf.
        </p>
      </LegalSection>

      <LegalSection title="11. SSL-/TLS-Verschlüsselung">
        <p>
          Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
          erkennen Sie an „https://“ und dem Schloss-Symbol in der Adresszeile Ihres Browsers.
        </p>
      </LegalSection>

      <LegalSection title="12. Aktualität">
        <p>Stand: Oktober 2026. Wir passen diese Datenschutzerklärung an, wenn sich die Website oder die Rechtslage ändert.</p>
      </LegalSection>
    </LegalPage>
  )
}
