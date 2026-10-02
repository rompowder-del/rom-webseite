"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { paints, type Paint } from "@/lib/site"

const Ctx = createContext<{ paint: Paint; setPaint: (p: Paint) => void } | null>(null)

/** Gewählter Lack gilt für die ganze Seite (Startbild, Farbfächer, Akzente). */
export function PaintProvider({ children }: { children: ReactNode }) {
  const [paint, setPaint] = useState<Paint>(paints[0])

  useEffect(() => {
    document.documentElement.style.setProperty("--paint", paint.hex)
  }, [paint])

  return <Ctx.Provider value={{ paint, setPaint }}>{children}</Ctx.Provider>
}

export function usePaint() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error("usePaint außerhalb von PaintProvider")
  return ctx
}
