// Sakura · Omakase — imágenes de plato.
// Fuente: Bing Images thumbnails (tse.mm.bing.net) — devuelven una foto REAL relevante a la búsqueda,
// recortada a 600x450 y cacheada por CDN (estable y sin API key). Cada query fue verificada: HTTP 200,
// content-type image/jpeg y contenido coherente con el plato. Para fotos propias del cliente, sustituye
// la URL por la imagen correspondiente (misma clave = nombre exacto del plato en menu-data.js).
const BING = (q) => `https://tse.mm.bing.net/th?q=${encodeURIComponent(q)}&w=600&h=450&c=7&rs=1&p=0`;

window.PHOTO_MAP = {
  "Edamame con sal marina"          : BING("edamame salt dish"),
  "Chawanmushi"                     : BING("chawanmushi egg custard japanese"),
  "Tako wasabi"                     : BING("tako wasabi octopus sashimi"),
  "Omakase Nigiri (8 pzs)"          : BING("nigiri sushi platter chef"),
  "Sashimi Premium (12 pzs)"        : BING("sashimi platter salmon tuna"),
  "Hand roll de anguila"            : BING("unagi hand roll sushi"),
  "Veggie maki (6 pzs)"             : BING("vegetable maki roll avocado"),
  "Ramen Tonkotsu"                  : BING("tonkotsu ramen bowl egg chashu"),
  "Wagyu teppanyaki A5"             : BING("wagyu steak teppanyaki"),
  "Okonomiyaki de marisco"          : BING("okonomiyaki seafood pancake"),
  "Brochetas yakitori (4 u.)"       : BING("yakitori chicken skewers grilled"),
  "Tiramisú de matcha"              : BING("matcha tiramisu dessert"),
  "Dango de temporada"              : BING("dango mitarashi skewers"),
  "Helado de sésamo negro"          : BING("black sesame ice cream bowl"),
  "Sake Junmai Ginjo (copa)"        : BING("sake cup tokkuri glass"),
  "Cerveza artesana yuzu"           : BING("craft beer glass citrus garnish"),
  "Matcha latte (frío/caliente)"    : BING("matcha latte glass iced"),
};

// Degradado temático de respaldo si una imagen no carga (sin conexión).
window.PHOTO_FALLBACK = () => "linear-gradient(135deg, #3a2f27 0%, #e9dfc8 100%)";
