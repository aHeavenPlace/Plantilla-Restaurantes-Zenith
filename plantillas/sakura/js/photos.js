// Sakura · Omakase — imágenes de plato (fotos reales vía picsum.photos, seed estable por tipo de plato).
// Verificadas: todas responden HTTP 200 con content-type image/jpeg. Para fotos propias del cliente,
// sustituye la URL por la imagen correspondiente (misma clave = nombre exacto del plato en menu-data.js).
window.PHOTO_MAP = {
  "Edamame con sal marina"          : "https://picsum.photos/seed/edamame/400/300",
  "Chawanmushi"                     : "https://picsum.photos/seed/chawanmushi/400/300",
  "Tako wasabi"                     : "https://picsum.photos/seed/octopus-sashimi/400/300",
  "Omakase Nigiri (8 pzs)"          : "https://picsum.photos/seed/nigiri-sushi/400/300",
  "Sashimi Premium (12 pzs)"        : "https://picsum.photos/seed/sashimi-platter/400/300",
  "Hand roll de anguila"            : "https://picsum.photos/seed/unagi-sushi/400/300",
  "Veggie maki (6 pzs)"             : "https://picsum.photos/seed/vegetable-maki-roll/400/300",
  "Ramen Tonkotsu"                  : "https://picsum.photos/seed/tonkotsu-ramen/400/300",
  "Wagyu teppanyaki A5"             : "https://picsum.photos/seed/wagyu-steak/400/300",
  "Okonomiyaki de marisco"          : "https://picsum.photos/seed/okonomiyaki/400/300",
  "Brochetas yakitori (4 u.)"       : "https://picsum.photos/seed/yakitori/400/300",
  "Tiramisú de matcha"              : "https://picsum.photos/seed/matcha-tiramisu/400/300",
  "Dango de temporada"              : "https://picsum.photos/seed/dango/400/300",
  "Helado de sésamo negro"          : "https://picsum.photos/seed/black-sesame-ice-cream/400/300",
  "Sake Junmai Ginjo (copa)"        : "https://picsum.photos/seed/sake-cup/400/300",
  "Cerveza artesana yuzu"           : "https://picsum.photos/seed/craft-beer/400/300",
  "Matcha latte (frío/caliente)"    : "https://picsum.photos/seed/matcha-latte/400/300",
};

// Degradado temático de respaldo si una imagen no carga (sin conexión).
window.PHOTO_FALLBACK = () => "linear-gradient(135deg, #3a2f27 0%, #e9dfc8 100%)";
