import { site } from "@/lib/site"

const DAY_NAMES = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
const fmt = (m: number) => (m % 60 === 0 ? String(m / 60) : `${Math.floor(m / 60)}:${String(m % 60).padStart(2, "0")}`)

/** Wochentag und Uhrzeit in Essen – unabhängig davon, wo der Besucher gerade ist */
export function berlinNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Berlin",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date())
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? ""
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"))
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) }
}

export type OpenStatus = { open: boolean; text: string; short: string }

export function getOpenStatus({ day, minutes } = berlinNow()): OpenStatus {
  const H = site.openingMinutes
  const today = H[day] ?? []
  const now = today.find(([o, c]) => minutes >= o && minutes < c)
  if (now) {
    const left = now[1] - minutes
    const soon = left <= 60 ? ` · noch ${left} Min.` : ""
    return { open: true, text: `Jetzt geöffnet · bis ${fmt(now[1])} Uhr${soon}`, short: `Geöffnet bis ${fmt(now[1])} Uhr` }
  }
  const later = today.find(([o]) => minutes < o)
  if (later) return { open: false, text: `Öffnet heute um ${fmt(later[0])} Uhr`, short: `Ab ${fmt(later[0])} Uhr geöffnet` }
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7
    if (H[d]?.length) {
      const when = i === 1 ? "morgen" : DAY_NAMES[d]
      return { open: false, text: `Geschlossen · öffnet ${when} um ${fmt(H[d][0][0])} Uhr`, short: `Öffnet ${when} ${fmt(H[d][0][0])} Uhr` }
    }
  }
  return { open: false, text: "", short: "" }
}
