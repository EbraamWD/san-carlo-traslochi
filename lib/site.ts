// Dati aziendali: unica fonte per footer, contatti, JSON-LD e llms.txt.
// I campi vuoti non vengono mostrati sul sito né inseriti nello schema:
// compilali con dati reali (devono coincidere con la scheda Google Business).

export const site = {
  name: "San Carlo Traslochi",
  url: "https://www.sancarlotraslochi.it",
  city: "Milano",
  region: "Lombardia",

  phone: "+393514987799",
  phoneDisplay: "+39 351 498 77 99",
  whatsapp: "393514987799",
  email: "info@sancarlotraslochi.it",

  // TODO: inserire i dati reali. Finché sono vuoti non compaiono.
  address: {
    street: "",
    postalCode: "",
    locality: "Milano",
    province: "MI",
  },
  geo: { lat: 0, lng: 0 },
  vatId: "", // es. "IT01234567890" — obbligatoria sul sito
  legalName: "", // ragione sociale, se diversa dal nome commerciale
  foundingYear: 0, // es. 2015
  googleBusinessUrl: "", // link alla scheda Google Maps
  sameAs: [] as string[], // profili social / directory

  // Orari ripresi dal vecchio sito: verificare che coincidano con Google Business.
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00", label: "Lun – Ven" },
  ],

  // Aggiungere solo i comuni in cui si lavora davvero (es. "Sesto San Giovanni").
  areaServed: ["Milano", "Provincia di Milano"],
};

export const telHref = `tel:${site.phone}`;

export function whatsappHref(text = "Buongiorno, vorrei un preventivo per un trasloco a Milano.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function fullAddress() {
  const a = site.address;
  if (!a.street) return "";
  return `${a.street}, ${a.postalCode} ${a.locality} (${a.province})`;
}
