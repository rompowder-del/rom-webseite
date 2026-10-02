"use client"

import { useState } from "react"
import { services, site } from "@/lib/site"
import { ArrowUpRight } from "lucide-react"

type Errors = Partial<Record<"name" | "phone", string>>

/**
 * Anfrageformular. Ohne Server: öffnet das E-Mail-Programm mit allen Angaben.
 * Prüft Pflichtfelder direkt am Feld statt mit Pop-ups.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Errors>({})

  const validate = (f: FormData): Errors => {
    const e: Errors = {}
    if (!String(f.get("name") ?? "").trim()) e.name = "Bitte geben Sie Ihren Namen an."
    const phone = String(f.get("phone") ?? "").replace(/[\s/()-]/g, "")
    if (!phone) e.phone = "Bitte geben Sie eine Telefonnummer an, damit wir zurückrufen können."
    else if (!/^\+?\d{6,}$/.test(phone)) e.phone = "Diese Telefonnummer sieht unvollständig aus."
    return e
  }

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    const f = new FormData(ev.currentTarget)
    const e = validate(f)
    setErrors(e)
    if (Object.keys(e).length) {
      ev.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(e)[0]}"]`)?.focus()
      return
    }
    const body = [
      `Name: ${f.get("name")}`,
      `Telefon: ${f.get("phone")}`,
      `Fahrzeug: ${f.get("car")}`,
      `Leistung: ${f.get("service")}`,
      "",
      String(f.get("message") ?? ""),
      "",
      "(Fotos bitte an diese E-Mail anhängen.)",
    ].join("\n")
    window.location.href = `mailto:${site.emailHref}?subject=${encodeURIComponent(`Anfrage: ${f.get("service")}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const field =
    "mt-2 w-full rounded-2xl bg-mist px-4 py-3.5 text-base outline-none ring-1 ring-transparent transition-[box-shadow,background-color] duration-300 placeholder:text-graphite/60 focus:bg-white focus:ring-black/80 aria-[invalid=true]:ring-[#b42318]"
  const err = (id: keyof Errors) =>
    errors[id] ? (
      <span id={`${id}-err`} className="mt-1.5 block text-sm text-[#b42318]">
        {errors[id]}
      </span>
    ) : null

  return (
    <div className="bezel">
      <form onSubmit={onSubmit} noValidate className="bezel-core grid gap-5 bg-white p-6 sm:grid-cols-2 md:p-10">
        <label className="text-sm font-medium">
          Name
          <input
            name="name"
            autoComplete="name"
            className={field}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-err" : undefined}
            onInput={() => errors.name && setErrors((e) => ({ ...e, name: undefined }))}
          />
          {err("name")}
        </label>
        <label className="text-sm font-medium">
          Telefon
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className={field}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-err" : undefined}
            onInput={() => errors.phone && setErrors((e) => ({ ...e, phone: undefined }))}
          />
          {err("phone")}
        </label>
        <label className="text-sm font-medium">
          Fahrzeug oder Felgen
          <input name="car" placeholder="z. B. Audi A4, 19-Zoll-Felgen" className={field} />
        </label>
        <label className="text-sm font-medium">
          Leistung
          <select name="service" className={field} defaultValue={services[0].name}>
            {services.map((s) => (
              <option key={s.slug}>{s.name}</option>
            ))}
            <option>Sonstiges</option>
          </select>
        </label>
        <label className="text-sm font-medium sm:col-span-2">
          Ihr Anliegen
          <textarea name="message" rows={4} className={field} placeholder="Was soll gemacht werden? Wunschfarbe, Finish, Schäden …" />
        </label>
        <div className="flex flex-col gap-4 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[44ch] text-sm text-graphite" aria-live="polite">
            {sent
              ? "Ihr E-Mail-Programm wurde geöffnet. Hängen Sie gern Fotos an und senden Sie die Nachricht ab."
              : "Beim Absenden öffnet sich Ihr E-Mail-Programm – dort können Sie Fotos anhängen."}
          </p>
          <button type="submit" className="cta cta-dark shrink-0 self-start sm:self-auto">
            <span>Anfrage senden</span>
            <span className="cta-icon" aria-hidden="true">
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}
