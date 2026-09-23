// BRASA · Asador — fotos de platos (Unsplash). Mismo sistema que el resto de plantillas.
window.PHOTO_MAP = {
  "Chorizo criollo al carbón":        "https://images.unsplash.com/photo-1599922526388-9d9a4a91b7e0?auto=format&fit=crop&w=400&q=70",
  "Provoleta con chimichurri":        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=70",
  "Gambas al ajillo ahumado":         "https://images.unsplash.com/photo-1625943553852-731e04c0c328?auto=format&fit=crop&w=400&q=70",
  "Costillas ahumadas 6 h":           "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=70",
  "T-bone madurado 45 días":          "https://images.unsplash.com/photo-1615938929337-1b0180bccc0c?auto=format&fit=crop&w=400&q=70",
  "Entrecot de angus":                "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=400&q=70",
  "Picaña al corte argentino":        "https://images.unsplash.com/photo-1558030006-459677816289?auto=format&fit=crop&w=400&q=70",
  "Pollo peri-peri entero":           "https://images.unsplash.com/photo-1598103442097-8b743940dba1?auto=format&fit=crop&w=400&q=70",
  "Presas ibéricas de bellota":       "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=400&q=70",
  "Hamburguesa Brasa (veggie)":       "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=70",
  "Patatas brasas con alioli":        "https://images.unsplash.com/photo-1573080496219-b234c1b94df9?auto=format&fit=crop&w=400&q=70",
  "Maíz a la parrilla con lima":      "https://images.unsplash.com/photo-1567234291443-936bd0c35898?auto=format&fit=crop&w=400&q=70",
  "Pimientos de Padrón":              "https://images.unsplash.com/photo-1598170845058-32b9d2a5c996?auto=format&fit=crop&w=400&q=70",
  "Ensalada de la huerta":            "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=70",
  "Flan de huevo casero":             "https://images.unsplash.com/photo-1528975653884-6f09fa50e882?auto=format&fit=crop&w=400&q=70",
  "Coulant de chocolate Ahumado":     "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=400&q=70",
  "Torrija caramelizada":             "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=70",
  "Ribera del Duero Crianza":         "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=70",
  "Craft lager local":                "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=400&q=70",
  "Whisky bourbon on the rocks":      "https://images.unsplash.com/photo-1527281400683-1aa27e4ac357?auto=format&fit=crop&w=400&q=70",
  "Refrescos & aguas":                "https://images.unsplash.com/photo-1554866585-c4c0d3b116c9?auto=format&fit=crop&w=400&q=70"
};

// Si una foto falla (sin conexión o ID roto), se muestra este degradado + el emoji del plato.
window.PHOTO_FALLBACK = (name) => {
  const FALLBACK_GRADIENTS = ['linear-gradient(135deg,#2e1710,#57241a)','linear-gradient(135deg,#241210,#3d2018)','linear-gradient(135deg,#2a1a10,#4a3018)'];
  let h = 0; for (const c of name) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return FALLBACK_GRADIENTS[h % FALLBACK_GRADIENTS.length];
};
