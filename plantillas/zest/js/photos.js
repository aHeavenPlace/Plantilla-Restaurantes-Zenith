// Zest! · Juice Bar — imágenes de plato (fotos reales vía picsum.photos, seed estable por tipo de plato).
// Verificadas: todas responden HTTP 200 con content-type image/jpeg. Para fotos propias del cliente,
// sustituye la URL por la imagen correspondiente (misma clave = nombre exacto del plato en menu-data.js).
window.PHOTO_MAP = {
  "Mango Biche Sunrise"                   : "https://picsum.photos/seed/mango-smoothie/400/300",
  "Gulupa Boom"                      : "https://picsum.photos/seed/berry-smoothie/400/300",
  "Verde Bucaramanga"                   : "https://picsum.photos/seed/green-smoothie/400/300",
  "Choco Peanut"                    : "https://picsum.photos/seed/chocolate-smoothie/400/300",
  "Açaí Tropical"                   : "https://picsum.photos/seed/acai-bowl/400/300",
  "Matcha Yogurt Bowl"              : "https://picsum.photos/seed/matcha-bowl/400/300",
  "PB Power Bowl"                   : "https://picsum.photos/seed/peanut-butter-oats-bowl/400/300",
  "Naranja & Zanahoria"                      : "https://picsum.photos/seed/orange-juice/400/300",
  "Detox Verde"                     : "https://picsum.photos/seed/green-juice/400/300",
  "Remolacha Boost"                      : "https://picsum.photos/seed/beet-juice/400/300",
  "Patilla Cooler"                   : "https://picsum.photos/seed/watermelon-juice/400/300",
  "Aguacate Toast Zest"              : "https://picsum.photos/seed/avocado-toast/400/300",
  "Grilled Cheese & Tomato"         : "https://picsum.photos/seed/grilled-cheese-sandwich/400/300",
  "Queso ricotta & Miel Toast"           : "https://picsum.photos/seed/ricotta-toast-honey/400/300",
  "Protein Pancakes"                : "https://picsum.photos/seed/pancakes-stack/400/300",
  "Flat White Zest"                 : "https://picsum.photos/seed/flat-white-coffee/400/300",
  "I Matcha Latte"                  : "https://picsum.photos/seed/iced-matcha-latte/400/300",
  "Chai especiado casero"           : "https://picsum.photos/seed/chai-latte/400/300",
  "Cold Brew 18h"                   : "https://picsum.photos/seed/cold-brew-coffee/400/300",
};

// Degradado temático de respaldo si una imagen no carga (sin conexión).
window.PHOTO_FALLBACK = () => "linear-gradient(135deg, #d9f2df 0%, #1e5228 100%)";
