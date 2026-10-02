/** WhatsApp-Symbol (vereinfachte Sprechblase mit Hörer), passt zur Strichstärke der übrigen Icons */
export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.6 20.4l1.2-4.1A8.6 8.6 0 1 1 8 19.3z" />
      <path d="M9.1 8.4c.2-.4.6-.5.9-.3l.9 1.3c.2.3.1.7-.1.9l-.5.5c.4 1 1.3 1.9 2.3 2.4l.5-.5c.2-.3.6-.3.9-.1l1.3.9c.3.2.4.6.2.9-.4.8-1.3 1.2-2.1 1-2.3-.6-4.3-2.6-4.9-4.9-.2-.8.2-1.7.6-2.1z" />
    </svg>
  )
}
