// Brasa · Asador — imágenes de plato.
// Fuente: Bing Images thumbnails (tse.mm.bing.net) — foto REAL relevante a la búsqueda, recortada a
// 600x450 y cacheada por CDN. Cada query fue verificada: HTTP 200, image/jpeg y coherente con el plato.
const BING = (q) => `https://tse.mm.bing.net/th?q=${encodeURIComponent(q)}&w=600&h=450&c=7&rs=1&p=0`;

window.PHOTO_MAP = {
  "Chorizo criollo al carbón"       : BING("grilled chorizo sausage charcoal"),
  "Provoleta con chimichurri"       : BING("grilled provolone cheese chimichurri"),
  "Camarones al ajillo ahumados"    : BING("garlic shrimp prawns pan"),
  "Costillas ahumadas 6 h"          : BING("smoked bbq pork ribs"),
  "T-bone madurado 45 días"         : BING("t-bone steak grill"),
  "Entrecot de angus"               : BING("ribeye steak grilled"),
  "Picaña al corte argentino"       : BING("picanha steak BBQ"),
  "Pollo peri-peri entero"          : BING("peri peri grilled chicken whole"),
  "Presas ibéricas de bellota"      : BING("roasted pork belly crispy"),
  "Hamburguesa Brasa (veggie)"      : BING("gourmet veggie burger"),
  "Papas brasas con alioli"         : BING("roasted potatoes alioli"),
  "Maíz a la parrilla con lima"     : BING("grilled corn lime"),
  "Ajíes fritos"                    : BING("fried green peppers tapa"),
  "Ensalada de la huerta"           : BING("fresh garden salad bowl"),
  "Flan casero de panela"           : BING("caramel flan dessert"),
  "Coulant de chocolate Ahumado"    : BING("chocolate lava cake fondant"),
  "Torta de natas caramelizada"     : BING("caramelized cream cake dessert"),
  "Vino tinto reserva nacional"     : BING("red wine glass bottle"),
  "Pilsen artesanal bumanga"        : BING("craft beer pint glass"),
  "Aguardiente premium on the rocks": BING("liquor glass ice bottle"),
  "Jugos naturales & refrescos"     : BING("natural fruit juices bottles"),
};

// Degradado temático de respaldo si una imagen no carga (sin conexión).
window.PHOTO_FALLBACK = () => "linear-gradient(135deg, #40221a 0%, #f6e8d8 100%)";
