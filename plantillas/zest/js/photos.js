// Zest! · Juice Bar — imágenes de plato.
// Fuente: Bing Images thumbnails (tse.mm.bing.net) — foto REAL relevante a la búsqueda, recortada a
// 600x450 y cacheada por CDN. Cada query fue verificada: HTTP 200, image/jpeg y coherente con el plato.
const BING = (q) => `https://tse.mm.bing.net/th?q=${encodeURIComponent(q)}&w=600&h=450&c=7&rs=1&p=0`;

window.PHOTO_MAP = {
  "Mango Biche Sunrise"             : BING("mango smoothie glass tropical"),
  "Gulupa Boom"                     : BING("berry smoothie purple glass"),
  "Verde Bucaramanga"               : BING("green smoothie avocado glass"),
  "Choco Peanut"                    : BING("chocolate peanut smoothie"),
  "Açaí Tropical"                   : BING("acai bowl granola banana"),
  "Matcha Yogurt Bowl"              : BING("matcha yogurt bowl blueberries"),
  "PB Power Bowl"                   : BING("overnight oats peanut butter banana"),
  "Naranja & Zanahoria"             : BING("orange carrot juice glass"),
  "Detox Verde"                     : BING("green detox juice celery glass"),
  "Remolacha Boost"                 : BING("beetroot juice glass red"),
  "Patilla Cooler"                  : BING("watermelon juice mint glass"),
  "Aguacate Toast Zest"             : BING("avocado toast poached egg"),
  "Grilled Cheese & Tomato"         : BING("grilled cheese sandwich tomato soup"),
  "Queso ricotta & Miel Toast"      : BING("ricotta toast honey figs"),
  "Protein Pancakes"                : BING("pancake stack maple syrup banana"),
  "Flat White Zest"                 : BING("flat white coffee cup"),
  "I Matcha Latte"                  : BING("iced matcha latte glass"),
  "Chai especiado casero"           : BING("chai latte spices cup"),
  "Cold Brew 18h"                   : BING("cold brew coffee glass ice"),
};

// Degradado temático de respaldo si una imagen no carga (sin conexión).
window.PHOTO_FALLBACK = () => "linear-gradient(135deg, #d9f2df 0%, #1e5228 100%)";
