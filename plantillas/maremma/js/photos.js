// Maremma · Trattoria — imágenes de plato (fotos reales vía picsum.photos, seed estable por tipo de plato).
// Verificadas: todas responden HTTP 200 con content-type image/jpeg. Para fotos propias del cliente,
// sustituye la URL por la imagen correspondiente (misma clave = nombre exacto del plato en menu-data.js).
window.PHOTO_MAP = {
  "Burrata pugliese"                : "https://picsum.photos/seed/burrata-tomato/400/300",
  "Carciofi alla giudia"            : "https://picsum.photos/seed/fried-artichoke/400/300",
  "Bruschetta trio"                 : "https://picsum.photos/seed/bruschetta/400/300",
  "Pici cacio e pepe"               : "https://picsum.photos/seed/cacio-e-pepe/400/300",
  "Tagliatelle all'astice"          : "https://picsum.photos/seed/lobster-pasta/400/300",
  "Tortelli di zucca"               : "https://picsum.photos/seed/pumpkin-ravioli/400/300",
  "Spaghetti allo scoglio"          : "https://picsum.photos/seed/seafood-spaghetti/400/300",
  "Bistecca alla fiorentina"        : "https://picsum.photos/seed/florentine-steak/400/300",
  "Pollo al mattone"                : "https://picsum.photos/seed/roast-chicken/400/300",
  "Branzino in crosta di sale"      : "https://picsum.photos/seed/sea-bass-salt-crust/400/300",
  "Tiramisù della nonna"            : "https://picsum.photos/seed/tiramisu/400/300",
  "Panna cotta al miele"            : "https://picsum.photos/seed/panna-cotta/400/300",
  "Delizia al limone"               : "https://picsum.photos/seed/lemon-cake/400/300",
  "Morellino di Scansano DOCG"      : "https://picsum.photos/seed/tuscan-wine/400/300",
  "Prosecco Superiore"              : "https://picsum.photos/seed/prosecco/400/300",
  "Aperol Spritz della casa"        : "https://picsum.photos/seed/aperol-spritz/400/300",
  "Caffè mokaccino"                 : "https://picsum.photos/seed/macchiato/400/300",
};

// Degradado temático de respaldo si una imagen no carga (sin conexión).
window.PHOTO_FALLBACK = () => "linear-gradient(135deg, #e7d5b8 0%, #5a3c22 100%)";
