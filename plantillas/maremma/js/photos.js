// MAREMMA · Trattoria — fotos de platos (Unsplash). Mismo sistema que el resto de plantillas.
window.PHOTO_MAP = {
  "Burrata pugliese":             "https://images.unsplash.com/photo-1601827163042-9a1200589c37?auto=format&fit=crop&w=300&q=70",
  "Carciofi alla giudia":         "https://images.unsplash.com/photo-1565299624946-b28f40a1ae5b?auto=format&fit=crop&w=300&q=70",
  "Bruschetta trio":              "https://images.unsplash.com/photo-1572695182864-2c930d424600?auto=format&fit=crop&w=300&q=70",
  "Pici cacio e pepe":            "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=300&q=70",
  "Tagliatelle all'astice":       "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=300&q=70",
  "Tortelli di zucca":            "https://images.unsplash.com/photo-1645112411341-615569887a15?auto=format&fit=crop&w=300&q=70",
  "Spaghetti allo scoglio":       "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=300&q=70",
  "Bistecca alla fiorentina":     "https://images.unsplash.com/photo-1546964125-639b229ce3cf?auto=format&fit=crop&w=300&q=70",
  "Pollo al mattone":             "https://images.unsplash.com/photo-1598515756884-32126e1b6b7b?auto=format&fit=crop&w=300&q=70",
  "Branzino in crosta di sale":   "https://images.unsplash.com/photo-1519708227418-c8fd9a322278?auto=format&fit=crop&w=300&q=70",
  "Tiramisù della nonna":         "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=300&q=70",
  "Panna cotta al miele":         "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=300&q=70",
  "Delizia al limone":            "https://images.unsplash.com/photo-1519915028121-27242c11f68f?auto=format&fit=crop&w=300&q=70",
  "Morellino di Scansano DOCG":   "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=300&q=70",
  "Prosecco Superiore":           "https://images.unsplash.com/photo-1554095669-4f7587827d17?auto=format&fit=crop&w=300&q=70",
  "Aperol Spritz della casa":     "https://images.unsplash.com/photo-1560512823-829cac6ff93b?auto=format&fit=crop&w=300&q=70",
  "Caffè mokaccino":              "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=300&q=70"
};

// Si una foto falla (sin conexión o ID roto), se muestra este degradado + el emoji del plato.
window.PHOTO_FALLBACK = (name) => {
  const FALLBACK_GRADIENTS = ['linear-gradient(135deg,#f3e9dc,#e4d2ba)','linear-gradient(135deg,#efe6da,#dcc9b0)','linear-gradient(135deg,#f1e7db,#dfcdbc)'];
  let h = 0; for (const c of name) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return FALLBACK_GRADIENTS[h % FALLBACK_GRADIENTS.length];
};
