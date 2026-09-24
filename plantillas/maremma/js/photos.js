// Maremma · Trattoria — imágenes de plato.
// Fuente: Bing Images thumbnails (tse.mm.bing.net) — foto REAL relevante a la búsqueda, recortada a
// 600x450 y cacheada por CDN. Cada query fue verificada: HTTP 200, image/jpeg y coherente con el plato.
const BING = (q) => `https://tse.mm.bing.net/th?q=${encodeURIComponent(q)}&w=600&h=450&c=7&rs=1&p=0`;

window.PHOTO_MAP = {
  "Burrata pugliese"                : BING("burrata tomato plate"),
  "Carciofi alla giudia"            : BING("fried artichoke roman"),
  "Bruschetta trio"                 : BING("bruschetta toast tomato"),
  "Pici cacio e pepe"               : BING("cacio e pepe pasta"),
  "Tagliatelle all'astice"          : BING("lobster pasta tagliatelle"),
  "Tortelli di zucca"               : BING("pumpkin ravioli butter sage"),
  "Spaghetti allo scoglio"          : BING("seafood spaghetti"),
  "Bistecca alla fiorentina"        : BING("florentine steak t-bone"),
  "Pollo al mattone"                : BING("roast chicken lemon herbs"),
  "Branzino in crosta di sale"      : BING("sea bass salt crust baked"),
  "Tiramisù della nonna"            : BING("tiramisu classic dessert"),
  "Panna cotta al miele"            : BING("panna cotta honey dessert"),
  "Delizia al limone"               : BING("lemon cake dessert amalfi"),
  "Morellino di Scansano DOCG"      : BING("tuscan red wine glass"),
  "Prosecco Superiore"              : BING("prosecco flute glass"),
  "Aperol Spritz della casa"        : BING("aperol spritz orange glass"),
  "Caffè mokaccino"                 : BING("macchiato espresso cup"),
};

// Degradado temático de respaldo si una imagen no carga (sin conexión).
window.PHOTO_FALLBACK = () => "linear-gradient(135deg, #e7d5b8 0%, #5a3c22 100%)";
