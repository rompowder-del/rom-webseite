"use client"

import { useEffect, useState } from "react"
import { site } from "@/lib/site"
import { berlinNow } from "@/lib/open-status"
import { OpenStatus } from "@/components/open-status"

const rows = [
  { label: "Montag", days: [1] },
  { label: "Dienstag", days: [2] },
  { label: "Mittwoch", days: [3] },
  { label: "Donnerstag", days: [4] },
  { label: "Freitag", days: [5] },
  { label: "Samstag", days: [6] },
  { label: "Sonntag", days: [0] },
]
const fmt = (m: number) => (m % 60 === 0 ? String(m / 60) : `${Math.floor(m / 60)}:${String(m % 60).padStart(2, "0")}`)

/** Wochenübersicht mit Live-Status; der heutige Tag ist hervorgehoben */
export function HoursBlock({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [today, setToday] = useState<number | null>(null)
  useEffect(() => setToday(berlinNow().day), [])
  const dark = tone === "dark"

  return (
    <div>
      <OpenStatus tone={dark ? "dark" : "light"} className={`text-base font-medium ${dark ? "text-white" : "text-black"}`} />
      <table className="mt-5 w-full max-w-sm text-left">
        <caption className="sr-only">Öffnungszeiten</caption>
        <tbody>
          {rows.map((r) => {
            const slots = site.openingMinutes[r.days[0]] ?? []
            const isToday = today === r.days[0]
            return (
              <tr
                key={r.label}
                className={`${isToday ? (dark ? "text-white" : "text-black") : dark ? "text-white/55" : "text-graphite"}`}
                aria-current={isToday ? "date" : undefined}
              >
                <th scope="row" className={`py-1.5 pr-6 font-normal ${isToday ? "font-medium" : ""}`}>
                  {r.label}
                  {isToday && <span className="ml-2 text-xs opacity-70">heute</span>}
                </th>
                <td className={`py-1.5 tabular-nums ${isToday ? "font-medium" : ""}`}>
                  {slots.length ? slots.map(([o, c]) => `${fmt(o)} – ${fmt(c)} Uhr`).join(", ") : "geschlossen"}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
