/**
 * Ausführliche Texte für die Leistungsseiten.
 * Jeder Punkt aus "Das gehört dazu" wird erklärt, dazu ein Ratgeber-Teil
 * und ein Abschnitt für Kunden aus Essen und Umgebung (wichtig für Google).
 */

export type ServiceContent = {
  /** Erklärte Leistungspunkte */
  points: { title: string; text: string }[]
  /** Ratgeber-Abschnitte mit eigener Zwischenüberschrift */
  article: { h: string; p: string[] }[]
  /** Text für Essen und Umgebung */
  local: { h: string; p: string[] }
  /** zusätzliche Fragen (werden an die vorhandenen angehängt) */
  faqs: { q: string; a: string }[]
}

/** Essener Stadtteile rund um die Werkstatt und Städte in der Umgebung */
export const essenDistricts = [
  "Altenessen",
  "Vogelheim",
  "Karnap",
  "Bergeborbeck",
  "Borbeck",
  "Stoppenberg",
  "Katernberg",
  "Schonnebeck",
  "Frohnhausen",
  "Holsterhausen",
  "Rüttenscheid",
  "Steele",
  "Kray",
  "Werden",
]

export const nearbyCities = [
  "Gelsenkirchen",
  "Bottrop",
  "Gladbeck",
  "Oberhausen",
  "Mülheim an der Ruhr",
  "Bochum",
  "Herne",
  "Duisburg",
  "Hattingen",
  "Velbert",
  "Dorsten",
  "Recklinghausen",
]

export const serviceContent: Record<string, ServiceContent> = {
  fahrzeuglackierung: {
    points: [
      {
        title: "Komplettlackierungen im Original- oder Wunschfarbton",
        text: "Wenn der Lack großflächig verblasst ist oder Ihr Fahrzeug einen neuen Look bekommen soll, lackieren wir es komplett – originalgetreu oder in einer Farbe Ihrer Wahl, ob uni, metallic oder perleffekt.",
      },
      {
        title: "Lackierung von Fahrzeugkarosserien und Bauteilen",
        text: "Ob ganze Karosserie oder einzelne Karosseriebauteile wie Türen, Kotflügel, Hauben oder Stoßfänger: Jede Fläche wird sorgfältig vorbereitet und so lackiert, dass sie sauber zum restlichen Fahrzeug passt.",
      },
      {
        title: "Lackierung von Motorradteilen und Verkleidungsteilen",
        text: "Tank, Verkleidung, Kotflügel oder Seitenteile: Auch Motorradteile lackieren wir im Originalfarbton oder ganz individuell in Ihrer Wunschfarbe.",
      },
      {
        title: "Individuelle Farbanpassung nach Lackcode",
        text: "Jeder Hersteller vergibt einen Lackcode. Danach mischen wir den Farbton und gleichen ihn am Fahrzeug ab, denn Lack verändert sich mit den Jahren durch Sonne und Witterung. So passt die neue Lackierung zum vorhandenen Lack.",
      },
      {
        title: "Hochwertiger Mehrschicht-Lackaufbau mit Klarlack",
        text: "Grundierung, Basislack und Klarlack werden in mehreren Schichten aufgebaut. Der Klarlack gibt Tiefe und Glanz und schützt die Farbe vor UV-Strahlung, Waschanlage und Witterung.",
      },
    ],
    article: [
      {
        h: "Autolackierung in Essen – worauf es ankommt",
        p: [
          "Eine gute Lackierung erkennt man an ihrem Finish: gleichmäßiger Glanz, saubere Kanten und ein Farbton, der stimmt. Dafür braucht es drei Dinge – eine sorgfältige Vorbereitung, die richtige Farbanpassung und einen hochwertigen Lackaufbau.",
          "Den größten Teil der Arbeit sieht man am Ende gar nicht: Schleifen, Spachteln, Grundieren und Abkleben. Jede Unebenheit, die hier bleibt, zeichnet sich später im glänzenden Lack ab. Deshalb nehmen wir uns für die Vorbereitung die nötige Zeit.",
        ],
      },
      {
        h: "Komplettlackierung, Karosseriebauteile und Motorradteile",
        p: [
          "Eine Komplettlackierung lohnt sich, wenn der Lack an vielen Stellen verwittert ist, bei Oldtimern und Liebhaberfahrzeugen oder wenn Sie die Farbe Ihres Fahrzeugs ändern möchten. Ebenso lackieren wir einzelne Karosseriebauteile sowie Motorradteile und Verkleidungen.",
          "Welche Lösung für Ihr Vorhaben die richtige ist, besprechen wir ehrlich mit Ihnen – am besten anhand von ein paar Fotos per WhatsApp.",
        ],
      },
      {
        h: "Der richtige Farbton",
        p: [
          "Den Lackcode Ihres Fahrzeugs finden Sie meist auf einem Typenschild im Türrahmen, unter der Motorhaube oder im Serviceheft. Er ist der Ausgangspunkt. Weil sich Lack mit der Zeit verändert, stimmen wir den gemischten Ton zusätzlich am Fahrzeug ab. Und wenn Sie eine ganz neue Farbe möchten, beraten wir Sie zu Farbton und Effekt.",
        ],
      },
    ],
    local: {
      h: "Fahrzeuglackierung für Essen und das Ruhrgebiet",
      p: [
        "Unsere Lackiererei liegt im Essener Norden an der Krablerstraße 127 (Halle 36A). Wir sind für Autofahrer aus ganz Essen da – und weil die Werkstatt gut zu erreichen ist, lohnt sich der Weg auch aus den Nachbarstädten im Ruhrgebiet.",
        "Sie suchen eine Autolackiererei in Essen, Gelsenkirchen, Bottrop oder Oberhausen? Schicken Sie uns einfach ein Foto per WhatsApp. Wir sagen Ihnen, was zu tun ist, und vereinbaren einen Termin.",
      ],
    },
    faqs: [
      {
        q: "Wo finde ich den Lackcode meines Autos?",
        a: "Meist auf einem Aufkleber oder Typenschild im Türrahmen der Fahrerseite, unter der Motorhaube oder im Kofferraum. Steht er nicht dort, hilft uns die Fahrzeug-Identnummer aus dem Fahrzeugschein weiter.",
      },
      {
        q: "Lackieren Sie auch für Kunden außerhalb von Essen?",
        a: "Ja. Unsere Werkstatt im Essener Norden ist auch aus Gelsenkirchen, Bottrop, Gladbeck, Oberhausen, Mülheim und Bochum gut zu erreichen. Am einfachsten schicken Sie uns vorab Fotos per WhatsApp.",
      },
    ],
  },

  "instandsetzung-karosserie": {
    points: [
      {
        title: "Beheben von Dellen und Beulen",
        text: "Ob Hagel, Parkplatz oder Einkaufswagen: Dellen und Beulen arbeiten wir aus dem Blech heraus und stellen die ursprüngliche Form der Karosserie wieder her. Wo nötig, wird anschließend gespachtelt und lackiert.",
      },
      {
        title: "Instandsetzung nach Unfallschäden",
        text: "Nach einem Unfall bringen wir Ihr Fahrzeug wieder in Form – vom eingedrückten Kotflügel bis zum beschädigten Heck. Wir besprechen mit Ihnen vorab, was repariert und was getauscht werden sollte.",
      },
      {
        title: "Austausch beschädigter Karosserieteile",
        text: "Ist ein Bauteil zu stark beschädigt, ersetzen wir es. Neue Teile werden eingepasst, Spaltmaße ausgerichtet und im Farbton Ihres Fahrzeugs lackiert.",
      },
      {
        title: "Ausbessern von Roststellen",
        text: "Rost beginnt oft unscheinbar an Radläufen, Schwellern oder Kanten. Wir entfernen ihn gründlich, behandeln die Stelle und bauen den Lack neu auf, damit er nicht gleich wiederkommt.",
      },
      {
        title: "Anschließende Lackierung im Originalfarbton",
        text: "Karosseriearbeit und Lackierung aus einer Hand: Nach der Instandsetzung lackieren wir die reparierten Stellen im Originalfarbton – ohne dass Ihr Auto die Werkstatt wechseln muss.",
      },
    ],
    article: [
      {
        h: "Karosseriewerkstatt in Essen – alles aus einer Hand",
        p: [
          "Bei vielen Schäden sind zwei Arbeitsschritte nötig: Erst wird die Karosserie instand gesetzt, dann lackiert. Bei uns passiert beides in derselben Halle. Das spart Ihnen Wege und sorgt dafür, dass Blech- und Lackarbeit sauber ineinandergreifen.",
          "Ob kleine Delle oder größerer Unfallschaden – wir sehen uns den Schaden gemeinsam mit Ihnen an und erklären verständlich, was gemacht werden muss.",
        ],
      },
      {
        h: "Reparieren statt tauschen – wenn es sinnvoll ist",
        p: [
          "Nicht jedes beschädigte Teil muss ersetzt werden. Viele Dellen und Beulen lassen sich ausbeulen und richten. Das ist oft günstiger als ein Neuteil und erhält die Originalteile Ihres Fahrzeugs. Ist ein Bauteil zu stark verformt oder gerissen, raten wir Ihnen ehrlich zum Austausch.",
        ],
      },
      {
        h: "Warum Sie mit kleinen Schäden nicht warten sollten",
        p: [
          "Wo der Lack bei einer Delle oder einem Kratzer beschädigt ist, kann Feuchtigkeit an das Blech gelangen. Gerade im Winter mit Streusalz entsteht dann schnell Rost – und aus einer kleinen Reparatur wird eine größere. Je früher Sie den Schaden beheben lassen, desto einfacher ist es.",
        ],
      },
    ],
    local: {
      h: "Karosseriearbeiten für Essen und das Ruhrgebiet",
      p: [
        "Sie finden uns im Essener Norden, Krablerstraße 127, Halle 36A. Für Kunden aus Altenessen, Vogelheim, Karnap, Borbeck oder Stoppenberg ist es nur ein kurzer Weg – und auch aus Gelsenkirchen, Bottrop, Gladbeck und Oberhausen sind wir schnell erreicht.",
        "Schicken Sie uns Fotos vom Schaden per WhatsApp, dann bekommen Sie eine erste Einschätzung, bevor Sie losfahren.",
      ],
    },
    faqs: [
      {
        q: "Kann ich mit einem Unfallschaden direkt zu Ihnen kommen?",
        a: "Ja. Melden Sie sich am besten vorher kurz per Telefon oder WhatsApp, damit wir uns Zeit für die Begutachtung nehmen können.",
      },
      {
        q: "Kommen auch Kunden aus Gelsenkirchen oder Bottrop zu Ihnen?",
        a: "Gern. Unsere Werkstatt liegt im Essener Norden und ist aus den Nachbarstädten gut zu erreichen. Schicken Sie uns vorab Fotos, dann wissen Sie schon vor der Fahrt, was auf Sie zukommt.",
      },
    ],
  },

  polierung: {
    points: [
      {
        title: "Mehrstufige Fahrzeugpolitur",
        text: "In mehreren Durchgängen mit immer feineren Polituren verfeinern wir den Lack Schritt für Schritt – bis zu einem tiefen, gleichmäßigen Glanz.",
      },
      {
        title: "Aufbereitung von Fahrzeuglack und Karosserieflächen",
        text: "Ob das ganze Fahrzeug oder einzelne Karosserieflächen: Wir bereiten den Lack auf und geben ihm Farbtiefe und Brillanz zurück.",
      },
      {
        title: "Politur von Fahrzeug- und Anbauteilen",
        text: "Auch einzelne lackierte Fahrzeug- und Anbauteile polieren wir – zum Beispiel nach einer Lackierung oder wenn ein Teil matter wirkt als der Rest.",
      },
      {
        title: "Reduzierung feiner Kratzer und matter Lackstellen",
        text: "Waschanlage, Bürsten und Witterung hinterlassen feine Kratzer, Hologramme und matte Stellen. Eine fachgerechte Politur reduziert diese Gebrauchsspuren sichtbar.",
      },
      {
        title: "Hochglanzfinish mit optionaler Lackversiegelung",
        text: "Zum Abschluss sorgt die Feinpolitur für ein Hochglanzfinish. Auf Wunsch versiegeln wir den Lack, damit Glanz und Schutz länger erhalten bleiben.",
      },
    ],
    article: [
      {
        h: "Fahrzeug polieren lassen in Essen",
        p: [
          "Mit der Zeit verliert jeder Lack an Glanz. Feine Kratzer aus der Waschanlage, matte Stellen und leichte Lackdefekte lassen selbst gepflegte Fahrzeuge stumpf aussehen. Mit einer professionellen Politur holen wir Tiefe und Brillanz zurück.",
          "Dafür arbeiten wir in Stufen: Zuerst wird der Lack gründlich gereinigt und vorbereitet, dann folgen mehrere Politurdurchgänge mit immer feineren Mitteln. Jeder Schritt baut auf dem vorherigen auf – deshalb lässt sich ein gutes Polierergebnis nicht abkürzen.",
        ],
      },
      {
        h: "Was eine Politur kann – und was nicht",
        p: [
          "Eine Politur verfeinert die oberste Lackschicht. Feine Kratzer, Hologramme und matte Stellen werden dadurch deutlich reduziert. Tiefe Kratzer, die bis in den Basislack oder die Grundierung reichen, kann eine Politur nicht vollständig entfernen.",
          "Wir sehen uns Ihr Fahrzeug vorab an und sagen Ihnen ehrlich, welches Ergebnis realistisch ist. Ist ein Schaden zu tief, kann eine Lackierung die bessere Lösung sein – auch dazu beraten wir Sie gern.",
        ],
      },
      {
        h: "Damit der Glanz lange hält",
        p: [
          "Ein frisch polierter Lack dankt eine schonende Pflege: Handwäsche statt Bürstenwaschanlage, weiche Mikrofasertücher und milde Reinigungsmittel. Eine Lackversiegelung gibt zusätzlichen Schutz vor Witterung und Schmutz.",
        ],
      },
    ],
    local: {
      h: "Fahrzeugpolitur für Essen und das Ruhrgebiet",
      p: [
        "Unsere Werkstatt liegt im Essener Norden an der Krablerstraße 127. Ob aus Rüttenscheid, Borbeck, Steele oder Kray – oder aus Mülheim, Gelsenkirchen und Bottrop: Wir bringen den Lack Ihres Fahrzeugs wieder zum Glänzen.",
        "Vorab reichen ein paar Fotos per WhatsApp, damit wir den Zustand des Lacks einschätzen können.",
      ],
    },
    faqs: [],
  },

  pulverbeschichtung: {
    points: [
      {
        title: "Entlackung und Vorbereitung inklusive",
        text: "Die Haltbarkeit einer Pulverbeschichtung hängt vom Untergrund ab. Deshalb entfernen wir die alte Beschichtung gründlich und materialschonend, bevor das neue Pulver aufgetragen wird.",
      },
      {
        title: "Sehr hohe Schlag- und Kratzfestigkeit",
        text: "Die eingebrannte Pulverschicht ist dicker als Nasslack und dadurch besonders robust. Steinschläge und kleine Kratzer, wie sie im Alltag an Felgen entstehen, steckt sie deutlich besser weg.",
      },
      {
        title: "Beständig gegen Streusalz und Bremsstaub",
        text: "Felgen haben es schwer: Streusalz im Winter, heißer Bremsstaub, aggressive Reiniger. Eine Pulverbeschichtung schützt das Metall darunter zuverlässig vor diesen Belastungen.",
      },
      {
        title: "Große Auswahl an RAL-Farbtönen",
        text: "Klassisches Silber, Anthrazit, Schwarz – oder ein auffälliger Farbton als Akzent: Bei der Pulverbeschichtung steht Ihnen eine große Auswahl an RAL-Farben zur Verfügung.",
      },
      {
        title: "Glanz, Seidenmatt oder Matt",
        text: "Neben dem Farbton wählen Sie den Glanzgrad. Hochglanz wirkt edel und klassisch, Seidenmatt dezent, Matt besonders modern und sportlich.",
      },
    ],
    article: [
      {
        h: "Felgen pulverbeschichten lassen in Essen",
        p: [
          "In unserer eigenen Pulverkabine beschichten wir Felgen und Metallteile. Das Farbpulver wird elektrostatisch aufgeladen und haftet dadurch gleichmäßig auf dem Bauteil. Anschließend wird es im Ofen eingebrannt und verbindet sich zu einer geschlossenen, harten Schicht.",
          "Das Ergebnis ist eine Oberfläche, die deutlich widerstandsfähiger ist als herkömmlicher Lack – ideal für Felgen, die im Alltag viel aushalten müssen.",
        ],
      },
      {
        h: "Pulverbeschichtung oder Lackierung?",
        p: [
          "Beide Verfahren haben ihre Stärken. Die Pulverbeschichtung punktet mit Robustheit und Langlebigkeit. Die Nasslackierung bietet mehr Möglichkeiten bei Effekt- und Sonderfarben, etwa Metallic- oder Perleffekte im Fahrzeugfarbton.",
          "Für Felgen im Alltagseinsatz ist die Pulverbeschichtung oft die erste Wahl. Wir beraten Sie, welches Verfahren zu Ihrem Vorhaben passt – und weil wir beides anbieten, bekommen Sie eine ehrliche Empfehlung.",
        ],
      },
      {
        h: "Kombiniert mit CNC-Glanzdrehen",
        p: [
          "Bei zweifarbigen Felgen wird zuerst beschichtet und danach die Front auf der CNC-Drehbank glanzgedreht. So entsteht der Kontrast zwischen farbigen Flächen und blankem Aluminium – beides aus einer Werkstatt.",
        ],
      },
    ],
    local: {
      h: "Pulverbeschichtung für Essen, das Ruhrgebiet und NRW",
      p: [
        "Eine Pulverbeschichtung für Felgen findet man nicht in jeder Werkstatt. Mit unserer eigenen Pulverkabine in Essen sind wir eine Anlaufstelle für Kunden aus ganz Essen, aus Städten wie Gelsenkirchen, Bottrop, Gladbeck, Oberhausen, Mülheim, Bochum und Herne – und für alle in NRW, die ihre Felgen in gute Hände geben möchten.",
        "Sie können uns die Felgen auch ohne Fahrzeug bringen. Schicken Sie uns vorab ein Foto und Ihre Wunschfarbe per WhatsApp.",
      ],
    },
    faqs: [
      {
        q: "Kann ich die Felgen ohne Auto bringen?",
        a: "Ja. Für die Pulverbeschichtung brauchen wir nur die Felgen – Ihr Auto bleibt in der Zeit bei Ihnen.",
      },
      {
        q: "Lohnt sich die Anfahrt aus Bochum oder Herne?",
        a: "Unsere Werkstatt im Essener Norden ist aus dem Ruhrgebiet gut zu erreichen. Schicken Sie uns vorab Fotos und Ihre Wunschfarbe, dann klären wir alles Wichtige schon vor Ihrem Besuch.",
      },
    ],
  },

  "cnc-glanzdrehen": {
    points: [
      {
        title: "Präzise Bearbeitung auf der CNC-Drehbank",
        text: "Die Felge wird auf der CNC-Drehbank eingespannt und die Front computergesteuert abgedreht. So wird sehr gleichmäßig nur so viel Material abgetragen wie nötig.",
      },
      {
        title: "Beseitigt Korrosion und Kratzer an der Felgenfront",
        text: "Glanzgedrehte Flächen sind empfindlich: Ist der Schutzlack beschädigt, entsteht Korrosion – oft als weiße, fadenförmige Flecken. Beim Nachdrehen entfernen wir diese Schäden zusammen mit leichten Kratzern.",
      },
      {
        title: "Abschließende Klarlack-Versiegelung",
        text: "Nach dem Drehen liegt blankes Aluminium frei. Eine Schicht Klarlack schützt es vor Feuchtigkeit und Streusalz und erhält den Glanz.",
      },
      {
        title: "Kombinierbar mit Lackierung oder Pulverbeschichtung",
        text: "Die farbigen Flächen der Felge können vorher in Originalfarbe oder in Ihrer Wunschfarbe lackiert oder pulverbeschichtet werden – alles in unserer Werkstatt.",
      },
    ],
    article: [
      {
        h: "Felgen glanzdrehen lassen in Essen",
        p: [
          "Zweifarbige Alufelgen mit glanzgedrehter Front gehören bei vielen Herstellern zur Serienausstattung. Sie sehen beeindruckend aus – sind aber empfindlicher als einfarbig lackierte Felgen. Schon kleine Beschädigungen der Schutzschicht lassen Feuchtigkeit an das Aluminium, und es bilden sich Korrosionsflecken.",
          "Mit unserer CNC-Drehbank bearbeiten wir solche Felgen wieder so, dass sie aussehen wie ab Werk: Die Felge wird zuerst beschichtet, dann wird die Front präzise abgedreht und anschließend mit Klarlack versiegelt.",
        ],
      },
      {
        h: "Welche Felgen eignen sich?",
        p: [
          "Geeignet sind vor allem Felgen, die ab Werk eine glanzgedrehte Front haben. Beim Drehen wird etwas Material abgetragen. Deshalb prüfen wir jede Felge vorab und sagen Ihnen, ob eine Bearbeitung möglich und sinnvoll ist.",
        ],
      },
      {
        h: "Neuer Look für Ihre Felgen",
        p: [
          "Das Glanzdrehen ist auch eine Gelegenheit, den Felgen einen neuen Charakter zu geben: zum Beispiel schwarze oder anthrazitfarbene Flächen mit glänzender Front. Wir beraten Sie zu den Möglichkeiten.",
        ],
      },
    ],
    local: {
      h: "CNC-Glanzdrehen für Essen, das Ruhrgebiet und NRW",
      p: [
        "Für das Glanzdrehen braucht es eine CNC-Drehbank – die haben wir direkt in unserer Werkstatt in Essen. Ob aus Essen oder aus Gelsenkirchen, Bottrop, Oberhausen, Mülheim, Duisburg und Bochum: Ihre Felgen werden bei uns komplett bearbeitet und müssen nicht an einen weiteren Betrieb gegeben werden. Weil nicht jede Werkstatt eine CNC-Drehbank hat, lohnt sich der Weg nach Essen auch aus anderen Teilen von NRW.",
        "Am besten schicken Sie uns zuerst ein Foto Ihrer Felgen per WhatsApp. Wir sagen Ihnen dann, ob sie sich für das Glanzdrehen eignen.",
      ],
    },
    faqs: [
      {
        q: "Woran erkenne ich, dass meine Felgen nachgedreht werden sollten?",
        a: "Typisch sind weiße, fadenförmige oder fleckige Stellen unter dem Klarlack, abblätternder Lack an der Front und Kratzer vom Bordstein. Ein Foto reicht uns für eine erste Einschätzung.",
      },
    ],
  },
}
