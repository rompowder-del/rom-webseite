import { services, site } from "@/lib/site"

/** LocalBusiness-Daten für Google (Startseite und Kontakt) */
export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    name: site.name,
    url: site.url,
    telephone: site.phoneHref,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Krablerstraße 127, Halle 36A",
      postalCode: "45326",
      addressLocality: "Essen",
      addressCountry: "DE",
    },
    image: `${site.url}/opengraph-image`,
    hasMap: site.mapsUrl,
    areaServed: [
      { "@type": "City", name: "Essen" },
      { "@type": "AdministrativeArea", name: "Ruhrgebiet" },
      { "@type": "State", name: "Nordrhein-Westfalen" },
    ],
    makesOffer: services.map((sv) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: sv.name, url: `${site.url}/leistungen/${sv.slug}` },
    })),
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
    ],
  }
}
