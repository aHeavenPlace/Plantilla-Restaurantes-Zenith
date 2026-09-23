// SAKURA · Fotos de platos (Unsplash) — mapea nombre del plato → foto real.
// Cambia la URL o añade una entrada nueva si personalizas la carta.
window.PHOTO_MAP = {
  "Edamame con sal marina":      "https://images.unsplash.com/photo-1596937009242-a1806c9b28c8?auto=format&fit=crop&w=300&q=70",
  "Chawanmushi":                 "https://images.unsplash.com/photo-1591886864658-90f7d1c0bbaa?auto=format&fit=crop&w=300&q=70",
  "Tako wasabi":                 "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=300&q=70",
  "Omakase Nigiri (8 pzs)":      "https://images.unsplash.com/photo-1579871494447-9811a8ae1048?auto=format&fit=crop&w=300&q=70",
  "Sashimi Premium (12 pzs)":    "https://images.unsplash.com/photo-1580822186718-c6e0b8c7ebb4?auto=format&fit=crop&w=300&q=70",
  "Hand roll de anguila":        "https://images.unsplash.com/photo-1611143643746-29a25f79741d?auto=format&fit=crop&w=300&q=70",
  "Veggie maki (6 pzs)":         "https://images.unsplash.com/photo-1554866585-cd94860890b0?auto=format&fit=crop&w=300&q=70",
  "Ramen Tonkotsu":              "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=70",
  "Wagyu teppanyaki A5":         "https://images.unsplash.com/photo-1607301405496-bbd61f2268c0?auto=format&fit=crop&w=300&q=70",
  "Okonomiyaki de marisco":      "https://images.unsplash.com/photo-1545090225-25a796162903?auto=format&fit=crop&w=300&q=70",
  "Brochetas yakitori (4 u.)":   "https://images.unsplash.com/photo-1555121680-daf2a0b335e9?auto=format&fit=crop&w=300&q=70",
  "Tiramisú de matcha":          "https://images.unsplash.com/photo-1515823064-d65e7e835171?auto=format&fit=crop&w=300&q=70",
  "Dango de temporada":          "https://images.unsplash.com/photo-1528722828861-1a56f7711a73?auto=format&fit=crop&w=300&q=70",
  "Helado de sésamo negro":      "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&w=300&q=70",
  "Sake Junmai Ginjo (copa)":    "https://images.unsplash.com/photo-1610051659807-41da33611e73?auto=format&fit=crop&w=300&q=70",
  "Cerveza artesana yuzu":       "https://images.unsplash.com/photo-1608270586620-24e0239d3b7b?auto=format&fit=crop&w=300&q=70",
  "Matcha latte (frío/caliente)":"https://images.unsplash.com/photo-1515823662971-da4d4b3893c6?auto=format&fit=crop&w=300&q=70"
};

// Si una foto falla (sin conexión o ID roto), se muestra este degradado + el emoji del plato.
window.PHOTO_FALLBACK = (name) => {
  const FALLBACK_GRADIENTS = ['linear-gradient(135deg,#2e241e,#4a3628)','linear-gradient(135deg,#241c22,#40303a)','linear-gradient(135deg,#1e2429,#2e4152)'];
  let h = 0; for (const c of name) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return FALLBACK_GRADIENTS[h % FALLBACK_GRADIENTS.length];
};
