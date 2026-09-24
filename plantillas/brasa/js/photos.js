// Brasa · Asador — imágenes de plato (fotos reales vía picsum.photos, seed estable por tipo de plato).
// Verificadas: todas responden HTTP 200 con content-type image/jpeg. Para fotos propias del cliente,
// sustituye la URL por la imagen correspondiente (misma clave = nombre exacto del plato en menu-data.js).
window.PHOTO_MAP = {
  "Chorizo criollo al carbón"       : "https://picsum.photos/seed/grilled-chorizo/400/300",
  "Provoleta con chimichurri"       : "https://picsum.photos/seed/grilled-provolone/400/300",
  "Camarones al ajillo ahumados"        : "https://picsum.photos/seed/garlic-prawns/400/300",
  "Costillas ahumadas 6 h"          : "https://picsum.photos/seed/bbq-ribs/400/300",
  "T-bone madurado 45 días"         : "https://picsum.photos/seed/t-bone-steak/400/300",
  "Entrecot de angus"               : "https://picsum.photos/seed/ribeye-steak/400/300",
  "Picaña al corte argentino"       : "https://picsum.photos/seed/picanha/400/300",
  "Pollo peri-peri entero"          : "https://picsum.photos/seed/grilled-chicken/400/300",
  "Presas ibéricas de bellota"      : "https://picsum.photos/seed/grilled-pork/400/300",
  "Hamburguesa Brasa (veggie)"      : "https://picsum.photos/seed/gourmet-burger/400/300",
  "Papas brasas con alioli"       : "https://picsum.photos/seed/roasted-potatoes/400/300",
  "Maíz a la parrilla con lima"     : "https://picsum.photos/seed/grilled-corn/400/300",
  "Ajíes fritos"             : "https://picsum.photos/seed/padron-peppers/400/300",
  "Ensalada de la huerta"           : "https://picsum.photos/seed/garden-salad/400/300",
  "Flan casero de panela"            : "https://picsum.photos/seed/caramel-flan/400/300",
  "Coulant de chocolate Ahumado"    : "https://picsum.photos/seed/chocolate-lava-cake/400/300",
  "Torta de natas caramelizada"            : "https://picsum.photos/seed/french-toast/400/300",
  "Vino tinto reserva nacional"        : "https://picsum.photos/seed/red-wine-glass/400/300",
  "Pilsen artesanal bumanga"               : "https://picsum.photos/seed/beer-pint/400/300",
  "Aguardiente premium on the rocks"     : "https://picsum.photos/seed/whiskey-glass/400/300",
  "Jugos naturales & refrescos"               : "https://picsum.photos/seed/soft-drinks/400/300",
};

// Degradado temático de respaldo si una imagen no carga (sin conexión).
window.PHOTO_FALLBACK = () => "linear-gradient(135deg, #40221a 0%, #f6e8d8 100%)";
