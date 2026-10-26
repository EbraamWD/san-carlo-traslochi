import type { Faq } from "./services";

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  datePublished: string;
  dateModified: string;
  sections: { title: string; body: string[]; list?: string[] }[];
  faqs: Faq[];
};

export const guides: Guide[] = [
  {
    slug: "permesso-suolo-pubblico-trasloco-milano",
    title: "Permesso di occupazione suolo pubblico per traslochi a Milano",
    metaTitle: "Permesso Suolo Pubblico Trasloco Milano: Guida",
    metaDescription:
      "Quando serve il permesso di occupazione del suolo pubblico per un trasloco a Milano, come si richiede e quanto anticipo considerare.",
    lead:
      "Se il furgone o la piattaforma aerea devono sostare in strada, a Milano può servire un'autorizzazione all'occupazione temporanea del suolo pubblico. Ecco come orientarsi.",
    datePublished: "2026-10-26",
    dateModified: "2026-10-26",
    sections: [
      {
        title: "Quando serve",
        body: [
          "L'autorizzazione è necessaria quando il mezzo del trasloco occupa una porzione di carreggiata, di parcheggio o di marciapiede per il tempo del carico e scarico, oltre la normale sosta consentita. È quasi sempre richiesta se si usa una piattaforma aerea in strada o se occorre riservare dei posti auto davanti al portone.",
          "Se il mezzo può entrare in un cortile privato o sostare in un'area di carico e scarico nei limiti consentiti, il permesso può non essere necessario.",
        ],
      },
      {
        title: "Come si richiede",
        body: [
          "La domanda si presenta al Comune di Milano, tramite i servizi online dedicati all'occupazione temporanea del suolo pubblico. In genere vanno indicati indirizzo, data e fascia oraria, superficie occupata e tipo di mezzo. L'occupazione è soggetta al canone previsto dal regolamento comunale.",
          "Procedure, moduli e tariffe possono cambiare: verifica sempre le informazioni aggiornate sul sito ufficiale del Comune di Milano prima di procedere.",
        ],
      },
      {
        title: "Tempi e segnaletica",
        body: [
          "Conviene muoversi con qualche settimana di anticipo, perché la pratica ha tempi tecnici di istruttoria. Una volta ottenuta l'autorizzazione, la segnaletica temporanea di divieto di sosta va posizionata con il preavviso previsto dalle regole vigenti, di norma almeno 48 ore prima, così che i veicoli parcheggiati possano essere spostati.",
        ],
      },
      {
        title: "Cosa facciamo noi",
        body: [
          "Durante il sopralluogo valutiamo se il tuo trasloco richiede l'occupazione del suolo pubblico, quanta superficie serve e in quale fascia oraria, così che la richiesta sia corretta fin dall'inizio.",
        ],
      },
    ],
    faqs: [
      {
        q: "Serve sempre il permesso di suolo pubblico per un trasloco a Milano?",
        a: "No. Serve quando il mezzo occupa carreggiata, posti auto o marciapiede oltre la sosta consentita, per esempio con una piattaforma aerea in strada. Se il mezzo entra in un cortile privato può non servire.",
      },
      {
        q: "Con quanto anticipo va richiesto?",
        a: "È consigliabile presentare la domanda con alcune settimane di anticipo e verificare i tempi indicati dal Comune di Milano, considerando anche il preavviso per la segnaletica di divieto di sosta.",
      },
    ],
  },
  {
    slug: "costo-trasloco-milano",
    title: "Quanto costa un trasloco a Milano: da cosa dipende il prezzo",
    metaTitle: "Quanto Costa un Trasloco a Milano? Prezzi e Fattori",
    metaDescription:
      "Da cosa dipende il costo di un trasloco a Milano: volume, piani, ascensore, distanza, servizi extra. Come ottenere un preventivo corretto e confrontabile.",
    lead:
      "Non esiste un prezzo unico per un trasloco: due appartamenti della stessa metratura possono avere costi molto diversi. Ecco le voci che fanno davvero la differenza.",
    datePublished: "2026-10-26",
    dateModified: "2026-10-26",
    sections: [
      {
        title: "I fattori che incidono sul prezzo",
        body: ["Un preventivo serio tiene conto di tutti questi elementi:"],
        list: [
          "Volume da trasportare: quantità di mobili e scatole, più della metratura.",
          "Piani e accessi: presenza e dimensioni dell'ascensore, scale, distanza tra portone e mezzo.",
          "Distanza: trasloco nello stesso quartiere, in provincia o fuori regione.",
          "Smontaggio e rimontaggio dei mobili.",
          "Imballaggio professionale e fornitura dei materiali.",
          "Piattaforma aerea e occupazione del suolo pubblico.",
          "Data e orario: fine mese, weekend e periodo estivo sono più richiesti.",
        ],
      },
      {
        title: "Come risparmiare senza rischi",
        body: [
          "Eliminare ciò che non serve prima del trasloco riduce il volume e quindi il costo: uno sgombero preventivo di cantina o solaio spesso si ripaga. Anche scegliere una data flessibile, a metà mese o infrasettimanale, aiuta.",
          "Puoi imballare da solo gli oggetti non fragili e affidarci solo mobili e pezzi delicati: è una combinazione molto diffusa.",
        ],
      },
      {
        title: "Come confrontare i preventivi",
        body: [
          "Diffida dei prezzi dati al telefono senza aver visto la casa. Un preventivo affidabile è scritto, nasce da un sopralluogo (anche in videochiamata) e specifica servizi inclusi, numero di operatori, mezzi e data.",
          "Noi offriamo sopralluogo e preventivo gratuiti, con un prezzo chiaro e senza sorprese il giorno del trasloco. Gli sgomberi partono da 75 €.",
        ],
      },
    ],
    faqs: [
      {
        q: "Perché il prezzo di un trasloco varia così tanto?",
        a: "Perché dipende da volume, accessi, distanza e servizi richiesti, non solo dalla metratura. Per questo serve un sopralluogo prima di un preventivo affidabile.",
      },
      {
        q: "Il sopralluogo è a pagamento?",
        a: "No, da San Carlo Traslochi sopralluogo e preventivo sono gratuiti, anche in videochiamata.",
      },
    ],
  },
  {
    slug: "checklist-trasloco",
    title: "Checklist trasloco: cosa fare settimana per settimana",
    metaTitle: "Checklist Trasloco: Cosa Fare e Quando",
    metaDescription:
      "La checklist completa per organizzare un trasloco senza stress: cosa fare un mese prima, due settimane prima, il giorno del trasloco e dopo.",
    lead:
      "Un trasloco ben organizzato è un trasloco tranquillo. Questa checklist ti accompagna dal primo preventivo all'ultima scatola aperta.",
    datePublished: "2026-10-26",
    dateModified: "2026-10-26",
    sections: [
      {
        title: "Un mese prima",
        body: [],
        list: [
          "Richiedi sopralluogo e preventivo e fissa la data.",
          "Verifica se serve il permesso di occupazione del suolo pubblico.",
          "Decidi cosa tenere, vendere, regalare o sgomberare.",
          "Avvisa l'amministratore di condominio di entrambi gli edifici.",
          "Procurati scatole e materiali di imballaggio.",
        ],
      },
      {
        title: "Due settimane prima",
        body: [],
        list: [
          "Comunica il cambio di residenza e di indirizzo a banca, assicurazioni e fornitori.",
          "Programma voltura o attivazione di luce, gas e internet nella nuova casa.",
          "Inizia a imballare ciò che usi meno: libri, decorazioni, abiti fuori stagione.",
          "Etichetta ogni scatola con stanza di destinazione e contenuto.",
        ],
      },
      {
        title: "Il giorno prima",
        body: [],
        list: [
          "Svuota e sbrina frigorifero e congelatore.",
          "Prepara una borsa con documenti, chiavi, caricabatterie, farmaci e un cambio.",
          "Metti da parte gioielli e oggetti di valore da trasportare personalmente.",
        ],
      },
      {
        title: "Il giorno del trasloco e dopo",
        body: [],
        list: [
          "Controlla che nulla sia rimasto in armadi, cantina e balconi.",
          "Leggi i contatori nella vecchia e nella nuova casa.",
          "Indica alla squadra dove posizionare mobili e scatole.",
          "Apri prima le scatole essenziali: cucina, bagno, camera.",
        ],
      },
    ],
    faqs: [
      {
        q: "Quando iniziare a organizzare un trasloco?",
        a: "Idealmente un mese prima: è il tempo giusto per ottenere i preventivi, gestire eventuali permessi e imballare con calma.",
      },
      {
        q: "Cosa non affidare alla ditta di traslochi?",
        a: "Documenti importanti, gioielli, denaro e farmaci è meglio trasportarli personalmente.",
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
