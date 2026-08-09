// ALL editable wedding content lives here.
import weddingMusic from "@/assets/wedding.mp3.asset.json";

export const config = {
  groomName: "PULKIT ARORA",
  brideName: "RADHIKA ARORA",
  groomShort: "PULKIT",
  brideShort: "RADHIKA",
  weddingTitle: "VARMALA AND VOWS",
  date: "13 SEPTEMBER 2026",
  dateShort: "13 • 09 • 2026",
  day: "SUNDAY",
  venue: "SIDDHARTHA RESORTS",
  venueAddress: "PAKHOWAL ROAD, LUDHIANA",
  rsvpNumber: "9914031000",
  whatsappNumber: "919914031000",
  whatsappMessage:
    "Hello! We would love to RSVP for Pulkit & Radhika's Varmala and Vows on 13 September 2026.",
  musicFile: weddingMusic.url,
  countdownDate: "2026-09-13T00:00:00",
  mapsQuery: "Siddhartha Resorts, Pakhowal Road, Ludhiana",

  opening: {
    blessing: "With the blessings of\nLord Shiva & Maa Parvati",
    cta: "ENTER INVITATION",
  },
  scroll: {
    intro:
      "Two hearts, one beautiful beginning.\nWith the blessings of our families\nand the divine grace of\nShiv Ji and Maa Parvati,",
    outro:
      "we invite you to celebrate with us\nas we begin our forever together.",
  },
  blessings: {
    heading: "SURROUNDED BY LOVE\nAND BLESSINGS",
    body: "With the love and blessings of\nour families, we begin this beautiful\njourney together.",
  },
  divine: {
    body: "Like Shiv and Parvati,\nmay every step be filled\nwith love, devotion and togetherness.",
  },
  details: {
    heading: "THE DAY WE SAY\nFOREVER",
  },
  countdown: {
    heading: "COUNTING DOWN TO\nFOREVER",
  },
  varmala: {
    heading: "VARMALA AND VOWS",
    body: "Two souls,\none promise,\none forever.",
  },
  venuePage: {
    cta: "VIEW LOCATION",
  },
  rsvp: {
    heading: "YOUR PRESENCE\nMEANS THE WORLD TO US",
    body: "Come celebrate love,\nlaughter and a beautiful new beginning\nwith Pulkit & Radhika.",
    cta: "RSVP ON WHATSAPP",
  },
  final: {
    heading: "AND SO,\nTHEIR FOREVER BEGINS...",
  },
};

export type WeddingConfig = typeof config;
