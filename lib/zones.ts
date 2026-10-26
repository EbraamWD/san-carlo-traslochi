import type { Faq } from "./services";

// Municipi di Milano con alcuni quartieri principali (pagina /zone)
export const municipi = [
  { n: 1, name: "Centro storico", quartieri: ["Duomo", "Brera", "Magenta", "Sant'Ambrogio"] },
  { n: 2, name: "Stazione Centrale – Gorla", quartieri: ["Stazione Centrale", "Greco", "Gorla", "Precotto", "Turro", "Crescenzago"] },
  { n: 3, name: "Città Studi – Lambrate", quartieri: ["Città Studi", "Lambrate", "Casoretto", "Ortica"] },
  { n: 4, name: "Porta Vittoria – Forlanini", quartieri: ["Porta Vittoria", "Forlanini", "Corvetto", "Rogoredo", "Ponte Lambro"] },
  { n: 5, name: "Vigentino – Gratosoglio", quartieri: ["Vigentino", "Ripamonti", "Gratosoglio", "Chiaravalle"] },
  { n: 6, name: "Navigli – Barona – Lorenteggio", quartieri: ["Navigli", "Barona", "Giambellino", "Lorenteggio"] },
  { n: 7, name: "San Siro – Baggio", quartieri: ["San Siro", "De Angeli", "Baggio", "Forze Armate"] },
  { n: 8, name: "Fiera – Gallaratese – Quarto Oggiaro", quartieri: ["Fiera", "CityLife", "Portello", "QT8", "Gallaratese", "Quarto Oggiaro"] },
  { n: 9, name: "Garibaldi – Niguarda", quartieri: ["Porta Garibaldi", "Isola", "Bovisa", "Affori", "Bicocca", "Niguarda", "Comasina"] },
];

export type Comune = {
  slug: string; // es. "traslochi-sesto-san-giovanni"
  name: string;
  intro: string;
  // Testo specifico del comune (accessi, tipologia di edifici, distanze): evitare testi copiati da altri comuni.
  body: string[];
  faqs: Faq[];
};

// FAQ comuni a tutte le pagine comune, con il nome del comune
function baseFaqs(name: string): Faq[] {
  return [
    {
      q: `Quanto costa un trasloco a ${name}?`,
      a: `Dipende da volume, piani, ascensore, distanza e servizi richiesti. Per i traslochi a ${name} facciamo un sopralluogo gratuito, anche in videochiamata, e consegniamo un preventivo scritto e definitivo.`,
    },
    {
      q: `Fate anche sgomberi a ${name}?`,
      a: `Sì, sgomberiamo cantine, solai, box e appartamenti a ${name}, a partire da 75 €. Per una stima rapida bastano alcune foto su WhatsApp.`,
    },
  ];
}

function comune(name: string, intro: string, body: string[], faqs: Faq[] = []): Comune {
  const slug = `traslochi-${name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")}`;
  return { slug, name, intro, body, faqs: [...faqs, ...baseFaqs(name)] };
}

// Pagine dei comuni della provincia (/zone/<slug>): ognuna con testo specifico,
// per evitare pagine duplicate. Gli altri comuni sono elencati in `altriComuni`.
export const comuni: Comune[] = [
  comune(
    "Sesto San Giovanni",
    "Traslochi e sgomberi a Sesto San Giovanni, il primo comune a nord di Milano. Sopralluogo e preventivo gratuiti.",
    [
      "Sesto San Giovanni confina direttamente con Milano ed è collegata dalla linea rossa M1, con le fermate Sesto Marelli, Sesto Rondò e Sesto 1° Maggio FS. Molti traslochi verso Sesto partono proprio da Milano: sono traslochi brevi, che spesso si chiudono in una sola giornata.",
      "La città alterna condomini degli anni Sessanta e Settanta, spesso con ascensori piccoli, a nuovi complessi residenziali sorti nelle ex aree industriali. Nei palazzi più vecchi valutiamo l'uso dell'autoscala per mobili voluminosi; nei complessi nuovi concordiamo in anticipo orari e accessi con l'amministrazione.",
    ],
    [
      {
        q: "Fate traslochi da Milano a Sesto San Giovanni?",
        a: "Sì. Data la distanza ridotta, un trasloco da Milano a Sesto San Giovanni nella maggior parte dei casi si completa in una giornata.",
      },
    ],
  ),
  comune(
    "Cinisello Balsamo",
    "Traslochi, sgomberi e montaggio mobili a Cinisello Balsamo, a nord di Milano. Preventivo gratuito.",
    [
      "Cinisello Balsamo si trova a nord di Milano, tra Sesto San Giovanni e Monza, ai margini del Parco Nord. È uno dei comuni più popolosi della provincia, con quartieri residenziali molto diversi tra loro: dal centro storico di Balsamo ai grandi condomini costruiti dagli anni Sessanta.",
      "Per i traslochi a Cinisello pianifichiamo la sosta del mezzo e gli accessi in base alla via: nelle strade residenziali più strette scegliamo il furgone adatto, mentre per i piani alti senza ascensore adeguato proponiamo l'autoscala con operatore.",
    ],
  ),
  comune(
    "Cologno Monzese",
    "Traslochi e sgomberi a Cologno Monzese, collegata a Milano dalla linea verde M2. Sopralluogo gratuito.",
    [
      "Cologno Monzese si trova a nord-est di Milano ed è servita dalla linea verde M2 con tre fermate: Cologno Sud, Cologno Centro e Cologno Nord. È un comune prevalentemente residenziale, con molti condomini di medie dimensioni.",
      "Per chi trasloca da Milano a Cologno, o all'interno del comune, organizziamo traslochi completi con smontaggio e rimontaggio mobili, oppure piccoli traslochi per pochi mobili e scatoloni.",
    ],
  ),
  comune(
    "Cernusco sul Naviglio",
    "Traslochi a Cernusco sul Naviglio, lungo il Naviglio Martesana. Case, ville e uffici, con preventivo gratuito.",
    [
      "Cernusco sul Naviglio si trova a est di Milano, lungo il Naviglio Martesana, ed è collegata dalla linea verde M2. Accanto ai condomini ci sono molte villette e case indipendenti, oltre alle ville storiche affacciate sul Naviglio.",
      "Nei traslochi di ville e case indipendenti il volume da trasportare è spesso maggiore e gli spazi esterni permettono di avvicinare il mezzo all'ingresso. Pianifichiamo mezzi e squadra in base al sopralluogo, con particolare cura per giardini, vialetti e pavimentazioni esterne.",
    ],
  ),
  comune(
    "Segrate",
    "Traslochi e sgomberi a Segrate, da Milano Due a Redecesio. Sopralluogo e preventivo gratuiti.",
    [
      "Segrate si trova a est di Milano, a ridosso dell'aeroporto di Linate e dell'Idroscalo. Comprende quartieri molto diversi, come Milano Due, con i suoi complessi residenziali immersi nel verde, Redecesio, Novegro e il centro storico.",
      "In complessi residenziali come Milano Due gli accessi dei mezzi e gli orari per il carico sono spesso regolati: li verifichiamo prima del trasloco, così il giorno stabilito tutto procede senza intoppi.",
    ],
  ),
  comune(
    "San Donato Milanese",
    "Traslochi di case e uffici a San Donato Milanese, capolinea della linea gialla M3. Preventivo gratuito.",
    [
      "San Donato Milanese si trova a sud-est di Milano ed è il capolinea della linea gialla M3. Accanto alle zone residenziali ospita il quartiere di Metanopoli e importanti sedi aziendali, per questo i traslochi di uffici sono frequenti quanto quelli di abitazioni.",
      "Per i traslochi aziendali a San Donato lavoriamo anche di sera e nel fine settimana, così da non interrompere l'attività. Per le abitazioni offriamo traslochi completi, piccoli traslochi e sgomberi.",
    ],
  ),
  comune(
    "San Giuliano Milanese",
    "Traslochi e sgomberi a San Giuliano Milanese, a sud-est di Milano lungo la via Emilia. Preventivo gratuito.",
    [
      "San Giuliano Milanese si trova a sud-est di Milano, lungo la via Emilia, e comprende diverse frazioni, tra cui Sesto Ulteriano, Borgolombardo e Zivido. Il patrimonio abitativo va dalle cascine ristrutturate ai condomini più recenti.",
      "Per i traslochi tra Milano e San Giuliano organizziamo il trasporto con un unico mezzo e un'unica squadra, senza trasbordi. Nelle frazioni con strade strette scegliamo il mezzo più adatto durante il sopralluogo.",
    ],
  ),
  comune(
    "Rozzano",
    "Traslochi, sgomberi e autoscala a Rozzano, a sud di Milano. Sopralluogo e preventivo gratuiti.",
    [
      "Rozzano si trova a sud di Milano, lungo il Naviglio Pavese, ed è collegata alla città anche dal tram. Ospita grandi complessi residenziali con edifici a molti piani, oltre a zone di villette e al polo ospedaliero Humanitas.",
      "Nei condomini più alti l'ascensore condominiale può rallentare molto il trasloco: in questi casi valutiamo l'autoscala con operatore, che porta mobili e scatoloni direttamente dalla finestra al mezzo.",
    ],
  ),
  comune(
    "Assago",
    "Traslochi di uffici e abitazioni ad Assago, tra Milanofiori e il Forum. Preventivo gratuito.",
    [
      "Assago si trova a sud-ovest di Milano ed è collegata dalla linea verde M2 con le fermate Assago Milanofiori Nord e Assago Milanofiori Forum. Il distretto di Milanofiori ospita molte sedi aziendali, mentre il resto del comune è prevalentemente residenziale.",
      "Per gli uffici di Milanofiori pianifichiamo traslochi aziendali con fermo attività minimo, anche nel fine settimana, rispettando le regole di accesso dei complessi direzionali. Per le abitazioni offriamo traslochi completi e montaggio mobili.",
    ],
  ),
  comune(
    "Corsico",
    "Traslochi e sgomberi a Corsico, lungo il Naviglio Grande. Sopralluogo e preventivo gratuiti.",
    [
      "Corsico confina con Milano a sud-ovest, all'altezza dei quartieri Giambellino e Lorenteggio, ed è attraversata dal Naviglio Grande. È un comune compatto, con molti condomini e strade residenziali dove la sosta va organizzata con attenzione.",
      "Per i traslochi a Corsico verifichiamo durante il sopralluogo dove posizionare il mezzo e se serve l'occupazione del suolo pubblico. Lavoriamo anche nei vicini comuni di Buccinasco e Trezzano sul Naviglio.",
    ],
  ),
  comune(
    "Rho",
    "Traslochi a Rho, a nord-ovest di Milano, vicino a Fiera Milano. Case, uffici e sgomberi con preventivo gratuito.",
    [
      "Rho si trova a nord-ovest di Milano, accanto al polo fieristico di Fiera Milano, ed è collegata dalla linea rossa M1 e dalla ferrovia con la stazione Rho Fiera. Il comune ha un centro storico raccolto e quartieri residenziali in crescita.",
      "Nel centro storico di Rho le vie sono strette e la sosta va pianificata; nei quartieri più recenti contano gli orari condominiali. Per i traslochi da e verso Milano organizziamo tutto in un'unica giornata quando il volume lo permette.",
    ],
  ),
  comune(
    "Legnano",
    "Traslochi e sgomberi a Legnano e nell'Alto Milanese. Sopralluogo e preventivo gratuiti.",
    [
      "Legnano è il principale centro dell'Alto Milanese, a nord-ovest di Milano lungo il fiume Olona, ed è raggiungibile con l'autostrada A8 Milano-Laghi. Il patrimonio abitativo va dalle case di corte del centro ai condomini e alle villette dei quartieri più recenti.",
      "Per un trasloco tra Milano e Legnano la distanza richiede una pianificazione più accurata di carico e orari: definiamo tutto nel preventivo, così sai in anticipo quanto durerà il trasloco.",
    ],
  ),
  comune(
    "Abbiategrasso",
    "Traslochi a Abbiategrasso, lungo il Naviglio Grande, a ovest di Milano. Preventivo gratuito.",
    [
      "Abbiategrasso si trova a ovest di Milano, lungo il Naviglio Grande e alle porte del Parco del Ticino. Il centro storico, raccolto intorno al Castello Visconteo, ha vie strette e accessi limitati, mentre nei dintorni prevalgono villette e cascine.",
      "Nel centro di Abbiategrasso scegliamo mezzi di dimensioni adatte alle vie storiche; per cascine e case indipendenti pianifichiamo squadre e tempi in base ai volumi, spesso maggiori rispetto a un appartamento.",
    ],
  ),
  comune(
    "Bollate",
    "Traslochi e sgomberi a Bollate, a nord-ovest di Milano. Sopralluogo e preventivo gratuiti.",
    [
      "Bollate si trova a nord-ovest di Milano ed è collegata dalle Ferrovie Nord. Comprende diverse frazioni, tra cui Cascina del Sole, Ospiate e Castellazzo, con la storica Villa Arconati. Il comune alterna condomini, villette e case di corte.",
      "Per i traslochi a Bollate valutiamo caso per caso accessi e spazi di manovra: nelle case di corte il mezzo spesso non può entrare nel cortile e occorre organizzare il trasporto a mano per un tratto.",
    ],
  ),
];

// Altri comuni della provincia serviti, senza pagina dedicata (elencati in /zone)
export const altriComuni = [
  "Arese", "Baranzate", "Bresso", "Buccinasco", "Cesano Boscone", "Cormano", "Cusano Milanino", "Garbagnate Milanese",
  "Lainate", "Locate di Triulzi", "Magenta", "Melegnano", "Novate Milanese", "Opera", "Paderno Dugnano", "Pero",
  "Peschiera Borromeo", "Pioltello", "Pregnana Milanese", "Senago", "Settimo Milanese", "Trezzano sul Naviglio",
  "Vimodrone", "Vittuone",
];

export function getComune(slug: string) {
  return comuni.find((c) => c.slug === slug);
}
