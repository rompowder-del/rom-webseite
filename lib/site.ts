/**
 * Alle Firmendaten an EINER Stelle.
 * Werte in [eckigen Klammern] sind Platzhalter und müssen vor dem Livegang ersetzt werden.
 */
export const site = {
  name: "R.O.M Cartech",
  legalName: "[Firmierung laut Impressum der bisherigen Seite]",
  owner: "[Inhaber laut Impressum]",
  street: "Krablerstraße 127 / Halle 36A",
  city: "45326 Essen",
  phone: "+49 163 7856598",
  phoneHref: "+491637856598",
  email: "rom.powder@gmail.com",
  emailHref: "rom.powder@gmail.com",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=R.O.M+Cartech+Krablerstra%C3%9Fe+127+45326+Essen",
  /** Öffnungszeiten zur Anzeige */
  hours: [
    { days: "Montag – Freitag", time: "9 – 17 Uhr" },
    { days: "Samstag", time: "9 – 13 Uhr" },
    { days: "Sonntag", time: "geschlossen" },
  ] as { days: string; time: string }[],
  /** Öffnungszeiten für die Live-Anzeige: Minuten ab Mitternacht, 0 = Sonntag … 6 = Samstag */
  openingMinutes: {
    0: [],
    1: [[540, 1020]],
    2: [[540, 1020]],
    3: [[540, 1020]],
    4: [[540, 1020]],
    5: [[540, 1020]],
    6: [[540, 780]],
  } as Record<number, [number, number][]>,
  whatsapp: "https://wa.me/message/EIN6444LJWT7O1",
  /** Links zu Facebook/Instagram – solange leer, werden sie nicht angezeigt */
  facebook: "",
  instagram: "",
  url: "https://rom-cartech.de",
}

export type Service = {
  slug: string
  name: string
  /** Seitentitel für Google (ohne Firmenname, der kommt automatisch dazu) */
  seoTitle: string
  short: string
  intro: string
  points: string[]
  steps: { title: string; text: string }[]
  faqs: { q: string; a: string }[]
  /** Lackfarbe, mit der die Leistung als Musterblech dargestellt wird */
  paint: string
  metallic?: boolean
  /** Foto aus der Werkstatt (public/images/<image>-900|1600.webp) */
  image: { name: string; alt: string; w: number; h: number; position?: string }
}

/** Reihenfolge = Reihenfolge auf der ganzen Website */
export const services: Service[] = [
  {
    slug: "fahrzeuglackierung",
    image: { name: "fahrzeuglackierung", alt: "Lackierer mit Lackierpistole beim Lackieren eines Stoßfängers in der Lackierkabine", w: 4065, h: 2710, position: "40% 50%" },
    name: "Fahrzeuglackierung",
    seoTitle: "Fahrzeuglackierung in Essen – Original- & Wunschfarbton",
    short: "Professionelle Fahrzeuglackierungen in Original- oder Wunschfarbtönen – für Fahrzeuge, Karosseriebauteile und Motorradteile. Präzise Farbanpassung und hochwertiger Lackaufbau für ein makelloses Finish.",
    intro:
      "Ob das ganze Fahrzeug in neuer Farbe, Karosseriebauteile oder Motorradteile: Wir bereiten die Oberfläche sorgfältig vor, mischen den Farbton nach Lackcode oder Wunsch und bauen den Lack Schicht für Schicht bis zum Klarlack auf.",
    points: [
      "Komplettlackierungen im Original- oder Wunschfarbton",
      "Lackierung von Fahrzeugkarosserien und Bauteilen",
      "Lackierung von Motorradteilen und Verkleidungsteilen",
      "Individuelle Farbanpassung nach Lackcode",
      "Hochwertiger Mehrschicht-Lackaufbau mit Klarlack",
    ],
    steps: [
      { title: "Farbton bestimmen", text: "Wir lesen den Lackcode aus und stimmen den Ton am Fahrzeug ab – oder besprechen mit Ihnen Ihre Wunschfarbe." },
      { title: "Vorbereiten", text: "Anbauteile demontieren, schleifen, spachteln und grundieren. Hier entscheidet sich, wie glatt das Ergebnis wird." },
      { title: "Lackieren", text: "Basislack und Klarlack werden in mehreren Schichten aufgetragen und anschließend getrocknet." },
      { title: "Finish", text: "Polieren, montieren und das Ergebnis gemeinsam mit Ihnen bei Tageslicht prüfen." },
    ],
    faqs: [
      { q: "Wird der neue Lack genauso aussehen wie der alte?", a: "Wir mischen den Farbton nach dem Lackcode Ihres Fahrzeugs und gleichen ihn am Auto ab, damit er zum vorhandenen Lack passt." },
      { q: "Kann ich mein Auto in einer ganz anderen Farbe lackieren lassen?", a: "Ja. Bei einer Komplettlackierung ist jede Wunschfarbe möglich. Wir beraten Sie gern zu Farbe und Finish." },
      { q: "Wie lange dauert eine Lackierung?", a: "Das hängt vom Umfang ab. Nach der Besichtigung nennen wir Ihnen einen verbindlichen Termin." },
    ],
    paint: "#7d0c12",
    metallic: true,
  },
  {
    slug: "instandsetzung-karosserie",
    image: { name: "instandsetzung-karosserie", alt: "Schwarzer Kombi bei der Karosserie-Instandsetzung, Rückleuchte ausgebaut", w: 1206, h: 1028, position: "50% 50%" },
    name: "Instandsetzung & Karosseriearbeiten",
    seoTitle: "Instandsetzung & Karosseriearbeiten in Essen",
    short: "Dellen, Beulen und Unfallschäden fachgerecht beheben – vom Ausbeulen bis zur fertigen Lackierung.",
    intro:
      "Nach einem Schaden bringen wir die Karosserie wieder in Form: Wir richten Bleche, beheben Dellen und Beulen, tauschen beschädigte Teile und lackieren anschließend so, dass von der Reparatur nichts mehr zu sehen ist.",
    points: [
      "Beheben von Dellen und Beulen",
      "Instandsetzung nach Unfallschäden",
      "Austausch beschädigter Karosserieteile",
      "Ausbessern von Roststellen",
      "Anschließende Lackierung im Originalfarbton",
    ],
    steps: [
      { title: "Schaden ansehen", text: "Wir begutachten den Schaden gemeinsam mit Ihnen und besprechen, was repariert und was getauscht werden muss." },
      { title: "Karosserie richten", text: "Bleche ausbeulen und richten, beschädigte Teile ersetzen, Übergänge sauber herstellen." },
      { title: "Vorbereiten und lackieren", text: "Spachteln, grundieren und im Originalfarbton lackieren – passend zum restlichen Fahrzeug." },
      { title: "Übergabe", text: "Endkontrolle bei Tageslicht und Übergabe Ihres Fahrzeugs." },
    ],
    faqs: [
      { q: "Lohnt sich die Reparatur einer Delle?", a: "Meist ja – je früher, desto besser, bevor an beschädigten Stellen Rost entsteht. Wir sagen Ihnen nach der Besichtigung, was sinnvoll ist." },
      { q: "Muss das ganze Bauteil neu lackiert werden?", a: "Das hängt von Größe und Lage des Schadens ab. Wir lackieren so viel wie nötig und so wenig wie möglich." },
      { q: "Kann ich vorab Fotos schicken?", a: "Gern. Mit ein paar Fotos können wir den Aufwand oft schon grob einschätzen, bevor Sie vorbeikommen." },
    ],
    paint: "#1c2a44",
    metallic: true,
  },
  {
    slug: "polierung",
    image: { name: "polierung", alt: "Poliermaschine mit Polierschwamm am Heck eines schwarzen Fahrzeugs", w: 1206, h: 1592, position: "50% 55%" },
    name: "Polierung",
    seoTitle: "Fahrzeugpolitur in Essen – Lackpolitur & Hochglanzfinish",
    short: "Professionelle Fahrzeug- und Teilepolitur für ein tiefes, gleichmäßiges Hochglanzfinish. Mehrstufige Politur, die feine Kratzer, matte Stellen und Lackdefekte sichtbar reduziert.",
    intro:
      "Feine Kratzer, matte Stellen und leichte Lackdefekte beeinträchtigen den Glanz eines Fahrzeugs. Mit einer professionellen, mehrstufigen Politur verfeinern wir die Lackoberfläche, reduzieren sichtbare Gebrauchsspuren und bringen den ursprünglichen Glanz zurück – für ein sauberes und hochwertiges Finish.",
    points: [
      "Mehrstufige Fahrzeugpolitur",
      "Aufbereitung von Fahrzeuglack und Karosserieflächen",
      "Politur von Fahrzeug- und Anbauteilen",
      "Reduzierung feiner Kratzer und matter Lackstellen",
      "Hochglanzfinish mit optionaler Lackversiegelung",
    ],
    steps: [
      { title: "Lack begutachten", text: "Wir prüfen den Zustand des Lacks bei gutem Licht und sagen Ihnen, welches Ergebnis realistisch ist." },
      { title: "Vorbereiten", text: "Gründliche Reinigung der Lackoberfläche, empfindliche Kunststoff- und Gummiteile werden abgeklebt." },
      { title: "Mehrstufig polieren", text: "Mehrere Politurdurchgänge mit immer feineren Mitteln verfeinern den Lack bis zum gleichmäßigen Hochglanz." },
      { title: "Versiegeln", text: "Auf Wunsch versiegeln wir den Lack, damit Glanz und Schutz länger erhalten bleiben." },
    ],
    faqs: [
      { q: "Was kann poliert werden?", a: "Der Lack des gesamten Fahrzeugs, einzelne Karosserieflächen sowie lackierte Fahrzeug- und Anbauteile. Sprechen Sie uns zu Ihrem Fahrzeug einfach an." },
      { q: "Verschwinden durch Polieren alle Kratzer?", a: "Feine Kratzer und matte Stellen lassen sich deutlich reduzieren. Tiefe Kratzer, die durch den Klarlack gehen, kann eine Politur nicht vollständig entfernen – das sagen wir Ihnen vorab ehrlich." },
      { q: "Wie lange hält der Glanz?", a: "Das hängt von Nutzung und Pflege ab. Eine Lackversiegelung schützt die Oberfläche zusätzlich." },
    ],
    paint: "#b9bcc2",
    metallic: true,
  },
  {
    slug: "pulverbeschichtung",
    image: { name: "pulverbeschichtung", alt: "Felge wird in der R.O.M-Cartech-Pulverkabine mit der Pistole pulverbeschichtet", w: 1206, h: 2143, position: "50% 60%" },
    name: "Pulverbeschichtung",
    seoTitle: "Pulverbeschichtung von Felgen in Essen",
    short: "Die besonders widerstandsfähige Oberfläche für Felgen und Metallteile – in vielen RAL-Farbtönen.",
    intro:
      "Bei der Pulverbeschichtung wird Farbpulver elektrostatisch aufgetragen und im Ofen eingebrannt. Die Schicht ist dicker und schlagfester als Nasslack – ideal für Felgen, die Steinschlag, Streusalz und Bremsstaub aushalten müssen. Vorher entfernen wir die alte Beschichtung gründlich und materialschonend.",
    points: [
      "Entlackung und Vorbereitung inklusive",
      "Sehr hohe Schlag- und Kratzfestigkeit",
      "Beständig gegen Streusalz und Bremsstaub",
      "Große Auswahl an RAL-Farbtönen",
      "Glanz, Seidenmatt oder Matt",
    ],
    steps: [
      { title: "Farbe wählen", text: "Wir besprechen Farbton und Glanzgrad – vom klassischen Silber bis zum auffälligen RAL-Ton." },
      { title: "Entlacken", text: "Die alte Beschichtung wird gründlich und materialschonend entfernt. Eine saubere Basis ist die Voraussetzung für Haltbarkeit." },
      { title: "Beschichten und einbrennen", text: "Das Pulver wird elektrostatisch aufgetragen und im Ofen eingebrannt." },
      { title: "Kontrolle", text: "Wir prüfen Schichtbild und Oberfläche, bevor Ihre Felgen zur Abholung bereitstehen." },
    ],
    faqs: [
      { q: "Was ist der Unterschied zur Lackierung?", a: "Pulverbeschichtung ist dicker und deutlich widerstandsfähiger gegen Steinschlag und Streusalz. Lack bietet dafür mehr Möglichkeiten bei Effekt- und Sonderfarben." },
      { q: "Welche Farben sind möglich?", a: "Eine große Auswahl an RAL-Farbtönen, jeweils in Glanz, Seidenmatt oder Matt. Wir zeigen Ihnen die Möglichkeiten vor Ort." },
      { q: "Muss ich die Reifen vorher abziehen lassen?", a: "Die Felgen müssen für die Beschichtung ohne Reifen sein. Sprechen Sie uns an, wie wir das am besten lösen." },
    ],
    paint: "#2b2c2e",
    metallic: true,
  },
  {
    slug: "cnc-glanzdrehen",
    image: { name: "cnc-glanzdrehen", alt: "Zweifarbige Alufelge auf der CNC-Drehbank beim Glanzdrehen", w: 1206, h: 1791, position: "50% 55%" },
    name: "CNC-Glanzdrehen",
    seoTitle: "CNC-Glanzdrehen von Alufelgen in Essen",
    short: "Das Hochglanz-Finish für zweifarbige Alufelgen – präzise nachgedreht wie ab Werk.",
    intro:
      "Viele moderne Alufelgen haben eine glanzgedrehte Front. Ist sie beschädigt oder korrodiert, drehen wir sie auf der CNC-Drehbank präzise nach und versiegeln sie anschließend mit Klarlack. So entsteht wieder das typische Hochglanz-Finish.",
    points: [
      "Präzise Bearbeitung auf der CNC-Drehbank",
      "Beseitigt Korrosion und Kratzer an der Felgenfront",
      "Abschließende Klarlack-Versiegelung",
      "Kombinierbar mit Lackierung oder Pulverbeschichtung",
    ],
    steps: [
      { title: "Felge prüfen", text: "Wir prüfen, ob die Felge zum Glanzdrehen geeignet ist und wie viel Material abgetragen werden muss." },
      { title: "Farbe auftragen", text: "Die Felge wird zunächst lackiert oder beschichtet – das ergibt später die farbigen Flächen." },
      { title: "Glanzdrehen", text: "Auf der CNC-Drehbank wird die Front präzise abgedreht, bis das blanke Aluminium glänzt." },
      { title: "Versiegeln", text: "Eine Schicht Klarlack schützt die gedrehte Fläche vor Korrosion." },
    ],
    faqs: [
      { q: "Ist jede Felge für das Glanzdrehen geeignet?", a: "Nicht jede. Es eignen sich vor allem Felgen, die ab Werk eine glanzgedrehte Front haben. Wir prüfen Ihre Felge vorab." },
      { q: "Kann ich die Farbe der Felge dabei ändern?", a: "Ja. Die farbigen Flächen können wir vor dem Drehen in Ihrer Wunschfarbe lackieren oder beschichten." },
      { q: "Warum wird die Fläche versiegelt?", a: "Blankes Aluminium oxidiert. Der Klarlack schützt die gedrehte Fläche und erhält den Glanz." },
    ],
    paint: "#d9dbde",
    metallic: true,
  },
]

/**
 * Kundenstimmen – echte 5-Sterne-Bewertungen von Google, Text unverändert.
 * Nachnamen werden aus Datenschutzgründen abgekürzt.
 */
export const reviews: { quote: string; name: string; topic: string }[] = [
  {
    name: "Raphel C.",
    topic: "Lackierung & CNC-Glanzdrehen",
    quote:
      "Ich bin absolut begeistert von der Arbeit! Mein Fahrzeug wurde hervorragend lackiert und das Ergebnis sieht aus wie neu. Die Lackierung ist sauber, hochwertig und bis ins Detail perfekt ausgeführt. Besonders beeindruckt haben mich die Felgen – diese wurden professionell mit der CNC-Maschine bearbeitet und gedreht. Das Ergebnis ist einfach erstklassig und wertet das gesamte Fahrzeug deutlich auf.\n\nDas Team arbeitet sehr präzise, zuverlässig und kundenorientiert. Von der Beratung bis zur Fertigstellung hat alles reibungslos funktioniert. Klare Weiterempfehlung für alle, die Wert auf Qualität und professionelle Arbeit legen! Vielen dank nochmal",
  },
  {
    name: "Donnie B.",
    topic: "Fahrzeuglackierung",
    quote:
      "Ich bin absolut zufrieden mit der Arbeit von R.O.M. Cartech! Sehr professioneller Service, schnelle Abwicklung und top Qualität. Mein Fahrzeug sieht wieder aus wie neu – die Lackierung ist perfekt geworden.\n\nDas Team ist freundlich, ehrlich und nimmt sich Zeit für den Kunden. Preis-Leistung stimmt hier auf jeden Fall. Kann ich jedem nur weiterempfehlen, der Wert auf saubere und zuverlässige Arbeit legt!\n\nVielen Dank nochmal, ich komme definitiv wieder! 👍",
  },
  {
    name: "Ismail S.",
    topic: "Fahrzeuglackierung",
    quote:
      "Ich bin absolut begeistert von der Arbeit von R.O.M Cartech! Die Lackierung meines Fahrzeugs ist einfach perfekt geworden – man sieht sofort die hohe Qualität und die Liebe zum Detail. Von der Beratung bis zur Fertigstellung lief alles professionell und zuverlässig.\n\nDie Oberfläche ist makellos, der Glanz unglaublich stark und die Farbe genau so, wie ich es mir vorgestellt habe. Besonders beeindruckt hat mich die saubere Vorarbeit und das präzise Ergebnis.\n\nWer eine hochwertige und professionelle Fahrzeuglackierung sucht, ist hier genau richtig. Klare Empfehlung!",
  },
]

/** Link zu allen Google-Bewertungen */
export const googleReviewsUrl = "https://www.google.com/search?q=R.O.M+Cartech+Essen"

/** Farben für den Lack-Konfigurator im Startbild */
export const paints = [
  { name: "Rubinrot Metallic", hex: "#7d0c12", metallic: true },
  { name: "Nachtblau Metallic", hex: "#1c2a44", metallic: true },
  { name: "Kreideweiß", hex: "#e8e6e1", metallic: false },
  { name: "Britisch Grün Metallic", hex: "#1f4d3a", metallic: true },
  { name: "Lava-Orange", hex: "#d4521c", metallic: false },
  { name: "Graphit Metallic", hex: "#3a3c40", metallic: true },
  { name: "Tiefschwarz", hex: "#0d0d0e", metallic: false },
] as const

export type Paint = (typeof paints)[number]
