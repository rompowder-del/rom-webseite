import type { Metadata, Viewport } from "next"
import "./globals.css"
import { PaintProvider } from "@/components/paint-context"
import { RevealObserver } from "@/components/reveal-observer"
import { MobileActionBar } from "@/components/mobile-action-bar"
import { CookieBanner } from "@/components/cookie-banner"
import { site } from "@/lib/site"
import ReactDOM from "react-dom"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Lackiererei in Essen, Ruhrgebiet & NRW – Lack, Karosserie & Felgen | R.O.M Cartech",
    template: "%s | R.O.M Cartech",
  },
  description:
    "Lackiererei in Essen für das Ruhrgebiet und NRW: Fahrzeuglackierung, Karosserie, Polierung, Pulverbeschichtung und CNC-Glanzdrehen – alles unter einem Dach.",
  openGraph: { siteName: "R.O.M Cartech", locale: "de_DE", type: "website" },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0b0c",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Hauptschrift sofort mitladen, damit die Überschrift nicht erst später „umspringt“
  ReactDOM.preload("/fonts/archivo-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" })
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        {/* JavaScript aktiv -> Scroll-Reveals vorbereiten; ohne JS bleibt alles sichtbar */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#inhalt" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black">
          Zum Inhalt springen
        </a>
        <PaintProvider>
          {children}
          <RevealObserver />
          <MobileActionBar />
          <CookieBanner />
        </PaintProvider>
      </body>
    </html>
  )
}
