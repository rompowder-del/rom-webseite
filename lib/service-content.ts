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
        title: "Teillackierung einzelner Bauteile",
        text: "Kratzer im Stoßfänger, ein Parkrempler an der Tür oder Steinschläge auf der Motorhaube: Oft reicht es, nur das betroffene Bauteil zu lackieren. Das spart Zeit und Kosten – und der Übergang zum restlichen Fahrzeug bleibt unsichtbar.",
      },
      {
        title: "Komplettlackierung im Original- oder Wunschfarbton",
        text: "Wenn der Lack großflächig verblasst ist oder Sie Ihrem Auto einen neuen Look geben möchten, lackieren wir das komplette Fahrzeug – originalgetreu oder in einer Farbe Ihrer Wahl, ob uni, metallic oder perleffekt.",
      },
      {
        title: "Farbton nach Lackcode, abgestimmt am Fahrzeug",
        text: "Jeder Hersteller vergibt einen Lackcode. Danach mischen wir den Farbton und gleichen ihn am Fahrzeug ab, denn Lack verändert sich mit den Jahren durch Sonne und Witterung. So passt die neue Stelle zum vorhandenen Lack.",
      },
      {
        title: "Lackierung von Felgen und Anbauteilen",
        text: "Spiegelkappen, Grill, Spoiler, Zierleisten oder Felgen: Auch einzelne Anbauteile lackieren wir – zum Beispiel in Wagenfarbe, in Schwarz glänzend oder als bewusster Farbakzent.",
      },
      {
        title: "Mehrschichtiger Aufbau mit Klarlack",
        text: "Grundierung, Basislack und Klarlack werden in mehreren Schichten aufgebaut. Der Klarlack gibt Tiefe und Glanz und schützt die Farbe vor UV-Strahlung, Waschanlage und Witterung.",
      },
    ],
    article: [
      {
        h: "Autolackierung in Essen – worauf es ankommt",
        p: [
          "Eine gute Lackierung sieht man nicht. Das klingt widersprüchlich, ist aber der Anspruch: Nach der Reparatur soll niemand erkennen, dass an Ihrem Fahrzeug etwas gemacht wurde. Dafür braucht es drei Dinge – eine sorgfältige Vorbereitung, den richtigen Farbton und einen sauberen Lackaufbau.",
          "Den größten Teil der Arbeit sieht man am Ende gar nicht: Schleifen, Spachteln, Grundieren und Abkleben. Jede Unebenheit, die hier bleibt, zeichnet sich später im glänzenden Lack ab. Deshalb nehmen wir uns für die Vorbereitung die nötige Zeit.",
        ],
      },
      {
        h: "Teillackierung oder Komplettlackierung?",
        p: [
          "Bei Kratzern, Dellen oder kleineren Unfallschäden ist eine Teillackierung meist die wirtschaftlichste Lösung. Wir lackieren dabei nur die betroffenen Bauteile und gleichen bei Bedarf die angrenzenden Flächen an, damit kein Farbunterschied entsteht.",
          "Eine Komplettlackierung lohnt sich, wenn der Lack an vielen Stellen verwittert ist, bei Oldtimern und Liebhaberfahrzeugen oder wenn Sie die Farbe Ihres Autos ändern möchten. Welche Variante bei Ihrem Fahrzeug sinnvoll ist, besprechen wir ehrlich mit Ihnen – am besten anhand von ein paar Fotos.",
        ],
      },
      {
        h: "Der richtige Farbton",
        p: [
          "Den Lackcode Ihres Fahrzeugs finden Sie meist auf einem Typenschild im Türrahmen, unter der Motorhaube oder im Serviceheft. Er ist der Ausgangspunkt. Weil sich Lack mit der Zeit verändert, stimmen wir den gemischten Ton zusätzlich am Fahrzeug ab. So passt die Reparatur auch bei älteren Fahrzeugen zum Rest.",
        ],
      },
    ],
    local: {
      h: "Fahrzeuglackierung für Essen und Umgebung",
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
      h: "Karosseriearbeiten für Essen und Umgebung",
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
        title: "Hochglanzpolitur für Aluminium",
        text: "Poliertes Aluminium hat einen Glanz, den kein Lack erreicht. In mehreren Durchgängen mit immer feineren Mitteln bringen wir die Oberfläche auf Hochglanz.",
      },
      {
        title: "Entfernt feine Kratzer und matte Stellen",
        text: "Waschanlage, Bremsstaub und Witterung hinterlassen feine Kratzer und einen grauen Schleier. Beim Polieren tragen wir diese Schicht ab, bis die Oberfläche wieder klar und glänzend ist.",
      },
      {
        title: "Für Felgen sowie Zier- und Anbauteile",
        text: "Wir polieren vor allem Aluminiumfelgen, aber auch Zierleisten und andere Metallteile. Sprechen Sie uns zu Ihrem Teil einfach an – wir sagen Ihnen, ob es sich eignet.",
      },
      {
        title: "Optional mit schützender Versiegelung",
        text: "Blankes Aluminium reagiert mit Luft und Feuchtigkeit. Eine Versiegelung schützt die polierte Oberfläche und hilft, dass der Glanz länger erhalten bleibt.",
      },
    ],
    article: [
      {
        h: "Felgen polieren lassen in Essen",
        p: [
          "Polierte Felgen sind ein echter Blickfang. Mit der Zeit verlieren sie aber ihren Glanz: Feine Kratzer, Bremsstaub und Oxidation machen die Oberfläche matt und fleckig. Mit einer fachgerechten Politur holen wir die Tiefe und den Spiegelglanz zurück.",
          "Dafür arbeiten wir in Stufen: Erst werden tiefere Spuren in feinen Schritten herausgeschliffen, dann folgt die eigentliche Politur mit immer feineren Mitteln. Jeder Schritt baut auf dem vorherigen auf – deshalb lässt sich ein gutes Polierergebnis nicht abkürzen.",
        ],
      },
      {
        h: "Was Polieren kann – und was nicht",
        p: [
          "Polieren entfernt feine Kratzer, matte Stellen und Oxidation. Tiefe Kratzer, Bordsteinschäden oder Abplatzer müssen vorher ausgebessert werden. Wir sehen uns Ihre Teile vorab an und sagen Ihnen ehrlich, welches Ergebnis realistisch ist.",
          "Ist eine Felge stark beschädigt oder soll sie eine neue Farbe bekommen, kann auch eine Pulverbeschichtung oder Lackierung die bessere Wahl sein. Wir beraten Sie dazu gern.",
        ],
      },
      {
        h: "Damit der Glanz lange hält",
        p: [
          "Polierte Oberflächen danken eine schonende Pflege: mildes Reinigungsmittel, weiche Tücher und regelmäßiges Entfernen von Bremsstaub. Eine Versiegelung gibt zusätzlichen Schutz.",
        ],
      },
    ],
    local: {
      h: "Polierung für Essen und Umgebung",
      p: [
        "Unsere Werkstatt liegt im Essener Norden an der Krablerstraße 127. Ob aus Rüttenscheid, Borbeck, Steele oder Kray – oder aus Mülheim, Gelsenkirchen und Bottrop: Bringen Sie Ihre Felgen oder Teile einfach während unserer Öffnungszeiten vorbei.",
        "Vorab reicht ein Foto per WhatsApp, damit wir den Zustand einschätzen können.",
      ],
    },
    faqs: [
      {
        q: "Kann ich nur die Felgen vorbeibringen?",
        a: "Ja. Für die Politur brauchen wir die Felgen, nicht das ganze Fahrzeug. Sprechen Sie uns vorher kurz an, damit wir besprechen, ob die Reifen abgezogen werden müssen.",
      },
      {
        q: "Polieren Sie auch für Kunden aus Mülheim oder Oberhausen?",
        a: "Natürlich. Unsere Werkstatt in Essen ist aus dem ganzen westlichen Ruhrgebiet gut zu erreichen. Schicken Sie uns vorab ein Foto Ihrer Teile per WhatsApp.",
      },
    ],
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
      h: "Pulverbeschichtung für Essen und das Ruhrgebiet",
      p: [
        "Eine Pulverbeschichtung für Felgen findet man nicht in jeder Werkstatt. Mit unserer eigenen Pulverkabine in Essen sind wir eine Anlaufstelle für Kunden aus ganz Essen und aus Städten wie Gelsenkirchen, Bottrop, Gladbeck, Oberhausen, Mülheim, Bochum und Herne.",
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
      h: "CNC-Glanzdrehen für Essen und Umgebung",
      p: [
        "Für das Glanzdrehen braucht es eine CNC-Drehbank – die haben wir direkt in unserer Werkstatt in Essen. Ob aus Essen oder aus Gelsenkirchen, Bottrop, Oberhausen, Mülheim, Duisburg und Bochum: Ihre Felgen werden bei uns komplett bearbeitet und müssen nicht an einen weiteren Betrieb gegeben werden.",
        "Am besten schicken Sie uns zuerst ein Foto Ihrer Felgen per WhatsApp. Wir sagen Ihnen dann, ob sie sich für das Glanzdrehen eignen.",
      ],
    },
    faqs: [
      {
        q: "Woran erkenne ich, dass meine Felgen nachgedreht werden sollten?",
        a: "Typisch sind weiße, fadenförmige oder fleckige Stellen unter dem Klarlack, abblätternder Lack an der Front und Kratzer vom Bordstein. Ein Foto reicht uns für eine erste Einschätzung.",
      },
      {
        q: "Muss ich für das Glanzdrehen weit fahren?",
        a: "Nicht, wenn Sie aus Essen oder dem Ruhrgebiet kommen: Wir haben die CNC-Drehbank in unserer Werkstatt im Essener Norden. Aus Gelsenkirchen, Bottrop oder Oberhausen sind Sie schnell bei uns.",
      },
    ],
  },
}
