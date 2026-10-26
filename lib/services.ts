export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string; // nome breve per menu e schede
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  summary: string; // una riga per le card in home
  priceFrom?: number;
  keywords: string[]; // varianti di ricerca, usate in schema (alternateName) e llms.txt
  sections: { title: string; body: string[] }[];
  includes: string[];
  faqs: Faq[];
};

// Data dell'ultima revisione dei contenuti, mostrata nelle pagine servizio
export const servicesUpdated = "2026-10-26";

export const services: Service[] = [
  {
    slug: "traslochi-abitazioni-milano",
    name: "Traslochi abitazioni",
    metaTitle: "Trasloco Casa Milano | Appartamenti e Piccoli Traslochi",
    metaDescription:
      "Traslochi di case e appartamenti a Milano e provincia, anche piccoli traslochi: smontaggio, imballaggio, trasporto e rimontaggio mobili. Preventivo gratuito.",
    eyebrow: "Traslochi privati · Milano",
    h1: "Trasloco casa a Milano",
    lead:
      "Dal monolocale in centro alla villa in provincia: pianifichiamo ogni trasloco come un progetto, con un unico referente dal sopralluogo all'ultimo mobile rimontato.",
    summary: "Appartamenti, case e piccoli traslochi a Milano e provincia.",
    keywords: ["trasloco casa Milano", "traslochi appartamenti Milano", "piccoli traslochi Milano", "trasloco monolocale Milano"],
    sections: [
      {
        title: "Come lavoriamo nei traslochi di casa",
        body: [
          "Ogni trasloco inizia con un sopralluogo gratuito, in presenza o in videochiamata. Valutiamo il volume da spostare, gli accessi dei due edifici (piano, ascensore, scale, cortili, ZTL) e gli oggetti che richiedono attenzione particolare: opere d'arte, specchi, pianoforti, elettrodomestici da incasso.",
          "Sulla base del sopralluogo riceverai un preventivo scritto e dettagliato, con data, orari, numero di operatori e mezzi. Niente voci a sorpresa il giorno del trasloco.",
          "Il giorno stabilito la squadra protegge pavimenti e ascensori, smonta e imballa i mobili, carica il furgone e, a destinazione, rimonta tutto stanza per stanza seguendo le tue indicazioni.",
        ],
      },
      {
        title: "Traslochi a Milano: cosa considerare",
        body: [
          "Milano ha esigenze specifiche: strade strette, cortili interni, Area C e Area B, palazzi d'epoca senza ascensore o con ascensori piccoli. Per questo pianifichiamo con anticipo la sosta del mezzo e, quando serve, la richiesta di occupazione di suolo pubblico.",
          "Quando le scale non bastano, usiamo la piattaforma aerea per far passare mobili e scatole dalle finestre o dai balconi: un trasloco più rapido e senza rischi per le parti comuni del condominio.",
        ],
      },
      {
        title: "Piccoli traslochi a Milano",
        body: [
          "Non serve traslocare una casa intera per chiamarci. Per i piccoli traslochi a Milano, come un monolocale, una stanza, qualche mobile o pochi scatoloni, organizziamo un intervento con mezzo e operatori dimensionati sul lavoro, così paghi solo quello che serve.",
          "È la soluzione giusta anche per studenti, per chi si trasferisce in un appartamento arredato o per chi deve spostare pochi oggetti tra casa e cantina.",
        ],
      },
      {
        title: "Su misura per te",
        body: [
          "Puoi affidarci tutto, dall'imballaggio delle stoviglie al riposizionamento dei quadri, oppure solo le parti più impegnative. Se il nuovo appartamento non è ancora pronto, possiamo organizzare il trasloco in più fasi.",
          "Per chi trasloca da o verso altre città italiane organizziamo anche traslochi fuori regione, con lo stesso livello di cura.",
        ],
      },
    ],
    includes: [
      "Sopralluogo e preventivo scritto gratuiti",
      "Protezione di pavimenti, porte e ascensori",
      "Smontaggio e rimontaggio mobili",
      "Imballaggio professionale di oggetti fragili",
      "Piattaforma aerea per piani alti",
      "Fornitura di scatole e materiali",
    ],
    faqs: [
      {
        q: "Quanto costa un trasloco di casa a Milano?",
        a: "Dipende dal volume da trasportare, dai piani, dalla presenza dell'ascensore, dalla distanza e dai servizi richiesti (smontaggio, imballaggio, piattaforma). Per questo facciamo un sopralluogo gratuito e consegniamo un preventivo scritto e senza sorprese.",
      },
      {
        q: "Con quanto anticipo devo prenotare il trasloco?",
        a: "Consigliamo di contattarci almeno due o tre settimane prima, soprattutto a fine mese e nei mesi estivi. Se serve il permesso di occupazione del suolo pubblico, i tempi tecnici del Comune vanno considerati nella pianificazione.",
      },
      {
        q: "Smontate e rimontate anche i mobili?",
        a: "Sì. Smontiamo armadi, letti, cucine e librerie, li imballiamo e li rimontiamo nella nuova casa. Possiamo anche montare mobili nuovi acquistati per l'occasione.",
      },
      {
        q: "Fate anche piccoli traslochi a Milano?",
        a: "Sì. Facciamo anche piccoli traslochi, come un monolocale, una stanza o pochi mobili, con mezzo e squadra dimensionati sul lavoro.",
      },
      {
        q: "Lavorate anche fuori Milano?",
        a: "Sì, operiamo in tutta la provincia di Milano e organizziamo traslochi verso altre città italiane.",
      },
    ],
  },
  {
    slug: "traslochi-uffici-milano",
    name: "Traslochi uffici",
    metaTitle: "Trasloco Uffici Milano | Traslochi Aziendali e Negozi",
    metaDescription:
      "Trasloco uffici a Milano e traslochi aziendali per studi e negozi, con fermo attività minimo: archivi, arredi e IT, anche nel weekend. Preventivo gratuito.",
    eyebrow: "Traslochi aziendali · Milano",
    h1: "Trasloco uffici a Milano",
    lead:
      "Spostiamo uffici, studi professionali e negozi riducendo al minimo il fermo operativo: si chiude il venerdì, si riapre il lunedì.",
    summary: "Traslochi aziendali di uffici, studi e negozi, anche nel weekend.",
    keywords: ["trasloco uffici Milano", "traslochi aziendali Milano", "trasloco ufficio Milano", "trasloco negozio Milano"],
    sections: [
      {
        title: "Traslochi aziendali: un piano prima del trasloco",
        body: [
          "Un trasloco aziendale riuscito si decide prima del giorno del trasloco. Con il tuo referente interno definiamo la planimetria di destinazione, l'etichettatura di postazioni e archivi, gli orari compatibili con il condominio e le eventuali fasi in cui suddividere il lavoro.",
          "Possiamo lavorare di sera, nel fine settimana o nei giorni festivi, così che i tuoi collaboratori lascino la scrivania a fine giornata e la ritrovino pronta nella nuova sede.",
        ],
      },
      {
        title: "Arredi, archivi e attrezzature",
        body: [
          "Smontiamo e rimontiamo scrivanie operative, pareti attrezzate, armadi e sale riunioni. Gli archivi cartacei vengono imballati in contenitori numerati e ricollocati nello stesso ordine, per ritrovare ogni pratica dal primo giorno.",
          "Computer, monitor e stampanti vengono imballati singolarmente e trasportati con cura. Se l'ufficio si trova ai piani alti o l'ascensore non è adatto, utilizziamo la piattaforma aerea.",
        ],
      },
      {
        title: "Traslochi di negozi, studi e magazzini",
        body: [
          "Ogni attività ha esigenze diverse. Per uno studio medico o legale la priorità sono documenti riservati e attrezzature delicate; per un negozio sono scaffalature, banconi e merce da spostare senza perdere giornate di vendita; per un magazzino contano ordine e tempi di carico.",
          "Per questo il piano di trasloco viene costruito insieme a te, partendo dagli orari di apertura, dalle regole del condominio o del centro commerciale e dagli accessi per lo scarico. A Milano teniamo conto anche di ZTL, Area C e fasce orarie consentite per il carico e scarico merci.",
        ],
      },
      {
        title: "Sgombero della vecchia sede",
        body: [
          "Al termine del trasloco possiamo occuparci anche di ciò che non serve più: arredi dismessi, archivi da eliminare, materiali di risulta. Riconsegni i locali liberi, senza dover coordinare altri fornitori.",
        ],
      },
    ],
    includes: [
      "Sopralluogo e piano di trasloco",
      "Lavoro serale e nel weekend",
      "Etichettatura postazioni e archivi",
      "Smontaggio e montaggio arredi ufficio",
      "Imballaggio apparecchiature IT",
      "Sgombero e smaltimento vecchia sede",
    ],
    faqs: [
      {
        q: "Potete fare il trasloco dell'ufficio nel weekend?",
        a: "Sì. Pianifichiamo spesso traslochi aziendali di sera, nel fine settimana o nei ponti, per non interrompere l'attività.",
      },
      {
        q: "Come gestite archivi e documenti?",
        a: "Gli archivi vengono imballati in contenitori chiusi e numerati secondo uno schema concordato, poi ricollocati nello stesso ordine nella nuova sede.",
      },
      {
        q: "Traslocate anche negozi e magazzini?",
        a: "Sì, ci occupiamo di negozi, showroom, magazzini e depositi a Milano e provincia.",
      },
      {
        q: "Rilasciate fattura?",
        a: "Sì, ogni servizio è regolarmente fatturato.",
      },
    ],
  },
  {
    slug: "sgomberi-milano",
    name: "Sgomberi",
    metaTitle: "Sgomberi Milano da 75€ | Sgombero Cantine e Appartamenti",
    metaDescription:
      "Sgomberi a Milano da 75€: sgombero cantine, solai, box e appartamenti, uffici e negozi. Smaltimento a norma, preventivo gratuito anche da foto su WhatsApp.",
    eyebrow: "Sgomberi · Milano",
    h1: "Sgomberi a Milano da 75 €",
    lead:
      "Cantine, solai, box, appartamenti e uffici: liberiamo gli spazi in tempi rapidi e ci occupiamo noi del trasporto e del conferimento dei materiali.",
    summary: "Cantine, solai, box e appartamenti, a partire da 75 €.",
    priceFrom: 75,
    keywords: ["sgomberi Milano", "sgombero cantina Milano", "sgombero appartamento Milano", "sgombero solaio Milano", "svuotamento cantine Milano"],
    sections: [
      {
        title: "Sgombero cantine, solai e box a Milano",
        body: [
          "Lo sgombero di una cantina è il lavoro che ci chiedono più spesso: la cantina condominiale piena da anni, il solaio da liberare prima di una vendita, il box auto da svuotare. Sono anche gli sgomberi più rapidi, spesso completati in poche ore.",
          "Ci basta qualche foto su WhatsApp per darti una stima: per una cantina con pochi oggetti e facile accesso il prezzo parte da 75 €.",
        ],
      },
      {
        title: "Sgombero appartamenti a Milano",
        body: [
          "Liberiamo appartamenti completi da mettere in vendita, in affitto o da restituire al proprietario, anche dopo una successione. Ci occupiamo di mobili, elettrodomestici, oggetti e materiali di ogni tipo.",
          "Per aziende e negozi sgomberiamo uffici, magazzini e locali commerciali, inclusi arredi, scaffalature e archivi da dismettere.",
        ],
      },
      {
        title: "Quanto costa uno sgombero a Milano",
        body: [
          "Gli sgomberi partono da 75 € per i lavori più piccoli, come una cantina con pochi oggetti e facile accesso. Il prezzo finale dipende dal volume, dal tipo di materiali, dal piano e dalla distanza dal punto di carico.",
          "Dopo un sopralluogo gratuito, anche tramite foto o video su WhatsApp, ricevi un preventivo chiaro e definitivo.",
        ],
      },
      {
        title: "Smaltimento corretto",
        body: [
          "I materiali vengono separati e conferiti secondo le normative: legno, metalli, ingombranti, RAEE (elettrodomestici e apparecchiature elettroniche). Ciò che è ancora in buono stato può essere destinato al riuso.",
          "Su richiesta, al termine dello sgombero possiamo eseguire una pulizia dei locali, così da riconsegnarli pronti per la vendita o la locazione.",
        ],
      },
    ],
    includes: [
      "Preventivo anche da foto su WhatsApp",
      "Cantine, solai, box, appartamenti",
      "Uffici, negozi e magazzini",
      "Trasporto e conferimento a norma",
      "Smaltimento RAEE",
      "Pulizia finale su richiesta",
    ],
    faqs: [
      {
        q: "Quanto costa sgomberare una cantina a Milano?",
        a: "Gli sgomberi partono da 75 €. Per una cantina il prezzo dipende soprattutto dal volume e dall'accessibilità. Mandaci qualche foto su WhatsApp per una stima rapida.",
      },
      {
        q: "Posso avere un preventivo senza sopralluogo?",
        a: "Sì, per gli sgomberi più semplici bastano foto o un breve video degli ambienti. Per appartamenti interi preferiamo un sopralluogo, sempre gratuito.",
      },
      {
        q: "Vi occupate dello smaltimento?",
        a: "Sì, trasportiamo e conferiamo i materiali presso i centri autorizzati, separandoli per tipologia.",
      },
      {
        q: "Quanto tempo serve per sgomberare un appartamento?",
        a: "Nella maggior parte dei casi uno o due giorni, in base al volume e ai piani. Il tempo stimato è indicato nel preventivo.",
      },
    ],
  },
  {
    slug: "noleggio-autoscala-milano",
    name: "Noleggio autoscala",
    metaTitle: "Noleggio Autoscala Milano con Operatore | Piattaforma Aerea",
    metaDescription:
      "Noleggio autoscala e piattaforma aerea con operatore per traslochi a Milano: mobili e scatoloni dalla finestra, anche ai piani alti. Preventivo gratuito.",
    eyebrow: "Autoscala e piattaforma aerea · Milano",
    h1: "Noleggio autoscala a Milano con operatore",
    lead:
      "Quando le scale sono strette o l'ascensore è troppo piccolo, i mobili passano dalla finestra. Più rapidi, più sicuri, senza toccare le parti comuni.",
    summary: "Autoscala con operatore: mobili dalla finestra, anche ai piani alti.",
    keywords: ["noleggio autoscala Milano", "autoscala trasloco Milano", "piattaforma aerea trasloco Milano", "montamobili Milano"],
    sections: [
      {
        title: "Quando serve l'autoscala per il trasloco",
        body: [
          "Molti palazzi milanesi hanno scale strette, ascensori piccoli o nessun ascensore. Divani, armadi, pianoforti e grandi elettrodomestici spesso non passano, o passano solo smontandoli e con il rischio di rovinare pareti e corrimano.",
          "L'autoscala per traslochi (chiamata anche piattaforma aerea o montamobili) porta il carico direttamente dalla finestra o dal balcone al mezzo in strada. Il trasloco è più veloce e il condominio resta libero.",
        ],
      },
      {
        title: "Noleggio autoscala con operatore",
        body: [
          "Forniamo l'autoscala con operatore esperto, che si occupa del posizionamento in sicurezza e della movimentazione. Puoi richiederla come parte di un nostro trasloco oppure come servizio singolo, ad esempio per consegnare un mobile nuovo o sollevare materiali per lavori in casa.",
          "Durante il sopralluogo verifichiamo lo spazio disponibile in strada, l'altezza da raggiungere e l'eventuale necessità di occupare suolo pubblico.",
        ],
      },
      {
        title: "Perché usare l'autoscala a Milano",
        body: [
          "Il primo vantaggio è il tempo: mobili e scatoloni salgono e scendono direttamente dalla finestra, senza fare avanti e indietro sulle scale. Un trasloco che con l'ascensore condominiale richiederebbe una giornata intera spesso si chiude in poche ore.",
          "Il secondo è la sicurezza. Gli oggetti voluminosi non vengono inclinati o forzati in curve strette, e le parti comuni del condominio, come pareti, corrimano e ascensore, restano intatte. Anche i vicini apprezzano: l'ascensore resta libero per tutto il giorno.",
          "L'autoscala è utile anche fuori dai traslochi: per consegnare un divano o un pianoforte, per sollevare materiali durante una ristrutturazione o per svuotare un solaio.",
        ],
      },
    ],
    includes: [
      "Autoscala con operatore",
      "Verifica accessi e spazi in strada",
      "Disponibile anche come servizio singolo",
      "Ideale per divani, armadi, pianoforti",
      "Nessun passaggio dalle parti comuni",
    ],
    faqs: [
      {
        q: "Fino a che piano arriva l'autoscala?",
        a: "Dipende dal mezzo e dallo spazio disponibile in strada. In fase di sopralluogo verifichiamo altezza e posizionamento e ti confermiamo la fattibilità.",
      },
      {
        q: "Serve un permesso per usare l'autoscala in strada a Milano?",
        a: "Se il mezzo occupa la carreggiata o il marciapiede può essere necessaria l'autorizzazione all'occupazione temporanea del suolo pubblico. Ti indichiamo come procedere durante il sopralluogo.",
      },
      {
        q: "Posso noleggiare solo l'autoscala senza il trasloco?",
        a: "Sì, il noleggio dell'autoscala con operatore è disponibile anche come servizio singolo, per esempio per consegnare un divano o un mobile nuovo.",
      },
    ],
  },
  {
    slug: "montaggio-mobili-milano",
    name: "Montaggio mobili",
    metaTitle: "Montaggio Mobili Milano | Smontaggio, Cucine e Mobili IKEA",
    metaDescription:
      "Montaggio e smontaggio mobili a Milano: armadi, cucine, letti, librerie, mobili IKEA e di altre marche, anche senza trasloco. Preventivo gratuito.",
    eyebrow: "Montaggio mobili · Milano",
    h1: "Montaggio e smontaggio mobili a Milano",
    lead:
      "Armadi, cucine, letti a scomparsa, librerie: li smontiamo, proteggiamo ogni componente e li rimontiamo perfettamente in bolla.",
    summary: "Armadi, cucine, mobili IKEA e di altre marche, anche senza trasloco.",
    keywords: ["montaggio mobili Milano", "smontaggio mobili Milano", "montaggio cucina Milano", "montaggio mobili IKEA Milano"],
    sections: [
      {
        title: "Smontaggio mobili durante il trasloco",
        body: [
          "I mobili grandi raramente viaggiano interi. Li smontiamo con cura, raccogliamo viteria e ferramenta in sacchetti etichettati e proteggiamo ante, piani e vetri con imballi dedicati.",
          "A destinazione rimontiamo tutto seguendo la disposizione che ci indichi, regolando cerniere e livellando ogni elemento.",
        ],
      },
      {
        title: "Montaggio mobili IKEA e di altre marche",
        body: [
          "Hai acquistato mobili nuovi o devi spostare un armadio da una stanza all'altra? Interveniamo anche per il solo montaggio o smontaggio, a Milano e provincia: mobili IKEA, cabine armadio, letti contenitore, librerie e mobili di qualsiasi marca.",
        ],
      },
      {
        title: "Montaggio cucine a Milano",
        body: [
          "La cucina è il mobile più delicato da spostare: pensili, basi, top e ante devono essere smontati in ordine e rimontati con le stesse misure e gli stessi allineamenti. Prima di smontare fotografiamo e numeriamo ogni modulo, così il rimontaggio nella nuova casa è preciso.",
          "Se la nuova cucina ha misure diverse, valutiamo insieme a te quali moduli riutilizzare. Gli allacciamenti di gas, acqua ed elettricità vanno affidati a tecnici abilitati, che possiamo aiutarti a coordinare.",
        ],
      },
      {
        title: "Come lavoriamo",
        body: [
          "Arriviamo con gli attrezzi necessari, proteggiamo il pavimento nella zona di lavoro e, a fine montaggio, portiamo via cartoni e imballi dei mobili nuovi. Ogni mobile viene fissato a muro quando necessario, per esempio librerie e armadi alti.",
        ],
      },
    ],
    includes: [
      "Armadi, letti, librerie, cabine armadio",
      "Moduli cucina",
      "Montaggio mobili nuovi",
      "Ferramenta etichettata e conservata",
      "Protezione di ante, vetri e piani",
    ],
    faqs: [
      {
        q: "Montate mobili IKEA a Milano?",
        a: "Sì, montiamo mobili IKEA e di qualsiasi altra marca, anche appena acquistati e senza un trasloco associato.",
      },
      {
        q: "Smontate e rimontate la cucina?",
        a: "Sì, smontiamo e rimontiamo i moduli della cucina. Gli allacciamenti di gas, acqua ed elettricità devono essere eseguiti da tecnici abilitati.",
      },
      {
        q: "Cosa succede alla ferramenta durante il trasloco?",
        a: "Viti, staffe e accessori vengono raccolti in sacchetti etichettati per ogni mobile, così il rimontaggio è rapido e nulla va perso.",
      },
    ],
  },
  {
    slug: "scatoloni-trasloco-milano",
    name: "Scatoloni e imballaggio",
    metaTitle: "Scatoloni per Trasloco Milano | Scatole e Imballaggio",
    metaDescription:
      "Scatoloni e scatole per trasloco a Milano con consegna a domicilio: nastro, pluriball e materiali di imballaggio. Anche imballaggio professionale.",
    eyebrow: "Imballaggio · Milano",
    h1: "Scatoloni per trasloco a Milano",
    lead:
      "Tutto il necessario per imballare in sicurezza, consegnato a casa tua. Oppure lascia fare a noi: imballiamo anche gli oggetti più delicati.",
    summary: "Scatoloni, pluriball, nastro e imballaggio professionale.",
    keywords: ["scatoloni trasloco Milano", "scatole trasloco Milano", "materiale imballaggio Milano", "imballaggio trasloco Milano"],
    sections: [
      {
        title: "Scatoloni e materiali disponibili",
        body: [
          "Forniamo scatoloni per trasloco di diverse misure, robuste e adatte a libri, stoviglie e abiti, insieme a nastro adesivo, pluriball, carta da imballo e film estensibile per proteggere mobili e superfici.",
          "Indicaci la dimensione della casa e ti consigliamo la quantità giusta di materiale, così da evitare sprechi o corse dell'ultimo minuto.",
        ],
      },
      {
        title: "Imballaggio professionale",
        body: [
          "Se preferisci non pensarci, la nostra squadra imballa tutto per te: piatti e bicchieri, quadri e specchi, lampade, libri e oggetti di valore, con materiali dedicati e scatole etichettate per stanza.",
          "Un imballaggio fatto bene è la miglior garanzia che tutto arrivi integro, ed è anche ciò che rende veloce il disimballo nella nuova casa.",
        ],
      },
      {
        title: "Consigli per imballare gli scatoloni",
        body: [
          "Usa scatoloni piccoli per gli oggetti pesanti, come libri e documenti, e scatoloni grandi per quelli leggeri, come cuscini e abiti: così nessuna scatola diventa troppo pesante da sollevare.",
          "Riempi gli spazi vuoti con carta o pluriball, perché una scatola piena a metà si schiaccia sotto le altre. Piatti e vassoi viaggiano meglio in verticale, avvolti uno per uno. Chiudi fondo e coperchio con un doppio giro di nastro.",
          "Scrivi su almeno due lati di ogni scatola la stanza di destinazione e il contenuto, e segnala con chiarezza quelle fragili. Il giorno del trasloco la squadra saprà subito dove portarle.",
        ],
      },
    ],
    includes: [
      "Scatole di varie misure",
      "Pluriball, carta e film estensibile",
      "Nastro adesivo",
      "Consegna a domicilio a Milano",
      "Imballaggio professionale su richiesta",
    ],
    faqs: [
      {
        q: "Quanti scatoloni servono per un trasloco?",
        a: "Varia molto in base a quanti oggetti possiedi. Descrivici la casa e il tipo di contenuto e ti consigliamo la quantità corretta.",
      },
      {
        q: "Consegnate gli scatoloni a domicilio a Milano?",
        a: "Sì, consegniamo scatoloni e materiali a domicilio a Milano e provincia, anche prima del giorno del trasloco.",
      },
      {
        q: "Potete imballare voi gli oggetti fragili?",
        a: "Sì, offriamo l'imballaggio professionale di stoviglie, quadri, specchi e oggetti delicati.",
      },
    ],
  },
];

export const extraServices = [
  "Ristrutturazione bagni",
  "Imbiancatura e verniciatura",
  "Pulizie civili e industriali",
  "Lavaggio moquette",
  "Cristallizzazione marmi",
  "Rotazione sacchi",
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
