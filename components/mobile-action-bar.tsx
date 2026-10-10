import { Mail, MapPin, Phone } from "lucide-react"
import { site } from "@/lib/site"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

/**
 * Feste Kontaktleiste am Handy: Anrufen, WhatsApp, E-Mail und Route.
 * WhatsApp ist hervorgehoben – Foto schicken ist die niedrigste Hürde.
 */
export function MobileActionBar() {
  const item =
    "btn flex flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2 text-[12px] font-medium min-[380px]:text-[13px]"
  return (
    <>
      <div aria-hidden="true" className="h-[calc(4.75rem+env(safe-area-inset-bottom,0px))] bg-black md:hidden" />
      <nav
        aria-label="Schnellkontakt"
        className="action-bar fixed inset-x-0 bottom-0 z-[var(--z-nav)] px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
      >
        <div className="flex gap-1.5 rounded-2xl bg-black/90 p-1.5 text-white shadow-[0_12px_40px_-12px_rgb(11_11_12/0.6)] backdrop-blur-xl">
          <a href={`tel:${site.phoneHref}`} className={`${item} active:bg-white/10`}>
            <Phone className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            Anrufen
          </a>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={`${item} bg-white text-black`}>
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </a>
          <a href={`mailto:${site.emailHref}`} className={`${item} active:bg-white/10`}>
            <Mail className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            E-Mail
          </a>
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className={`${item} active:bg-white/10`}>
            <MapPin className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            Route
          </a>
        </div>
      </nav>
    </>
  )
}
