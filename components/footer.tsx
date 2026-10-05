import Link from "next/link"
import { services, site } from "@/lib/site"
import { Cta } from "@/components/cta"
import { OpenStatus } from "@/components/open-status"
import { CookieSettingsLink } from "@/components/cookie-banner"

/** Schlanker Footer: ein klarer Weg zum Anruf, Leistungen, Pflichtangaben */
export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-[4vw] pt-24 pb-[max(2.5rem,env(safe-area-inset-bottom))] md:pt-32">
        <div className="grid gap-16 lg:grid-cols-[7fr_5fr]">
          <div>
            <p className="display-sm max-w-[18ch] text-[clamp(1.8rem,3.4vw,2.75rem)]">
              Felgen oder Lack, die wieder wie neu aussehen sollen?
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Cta href={site.whatsapp} tone="light">
                Foto per WhatsApp senden
              </Cta>
              <a href={`tel:${site.phoneHref}`} className="link-underline text-white/80 hover:text-white">
                {site.phone}
              </a>
              <a href={`mailto:${site.emailHref}`} className="link-underline text-white/80 hover:text-white">
                {site.email}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="text-white/45">Leistungen</p>
              <ul className="mt-4 space-y-2.5">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/leistungen/${s.slug}`} className="link-underline text-white/80 hover:text-white">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/45">Werkstatt</p>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-underline mt-4 inline-block text-white/80 hover:text-white">
                {site.street}
                <br />
                {site.city}
              </a>
              <OpenStatus className="mt-5 text-white/85" />
              <ul className="mt-3 space-y-1 text-white/55">
                {site.hours.map((h) => (
                  <li key={h.days}>
                    {h.days}: {h.time}
                  </li>
                ))}
              </ul>
              {(site.facebook || site.instagram) && (
                <ul className="mt-4 flex gap-4">
                  {site.facebook && (
                    <li><a href={site.facebook} target="_blank" rel="noopener noreferrer" className="link-underline text-white/80">Facebook</a></li>
                  )}
                  {site.instagram && (
                    <li><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="link-underline text-white/80">Instagram</a></li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p className="wordmark text-[12px] text-white/80">R.O.M CARTECH</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link href="/impressum" className="link-underline hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="link-underline hover:text-white">Datenschutz</Link>
            <CookieSettingsLink className="link-underline hover:text-white" />
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
