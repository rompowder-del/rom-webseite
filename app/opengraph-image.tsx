export const dynamic = "force-static"
import { ImageResponse } from "next/og"

export const alt = "R.O.M Cartech – Felgenlackierung, Pulverbeschichtung und PKW-Lackierung in Essen"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "white",
          background: "radial-gradient(ellipse 70% 50% at 65% 85%, #8e1118 0%, #3a070b 45%, #0b0b0c 75%)",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 10 }}>R.O.M CARTECH</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 1.02, letterSpacing: -2 }}>Präzision, Qualität und Perfektion bis ins Detail.</div>
          <div style={{ fontSize: 30, marginTop: 24, opacity: 0.7 }}>Lackierung · Karosserie · Polierung · Pulverbeschichtung · CNC-Glanzdrehen</div>
        </div>
      </div>
    ),
    size,
  )
}
