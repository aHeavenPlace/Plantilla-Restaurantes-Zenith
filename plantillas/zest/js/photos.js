// ZEST · Juice Bar — fotos de platos (Unsplash). Mismo sistema que el resto de plantillas.
window.PHOTO_MAP = {
  "Mango Sunrise":              "https://images.unsplash.com/photo-1623065421790-9f26ec3c4e01?auto=format&fit=crop&w=400&q=70",
  "Berry Boom":                 "https://images.unsplash.com/photo-1595475207225-52ae474f5eb1?auto=format&fit=crop&w=400&q=70",
  "Green Machine":              "https://images.unsplash.com/photo-1610970881756-1f54c1679bf2?auto=format&fit=crop&w=400&q=70",
  "Choco Peanut":               "https://images.unsplash.com/photo-1541658041327-f2292db8eb61?auto=format&fit=crop&w=400&q=70",
  "Açaí Tropical":              "https://images.unsplash.com/photo-1590301157876-7c4a3dcfe318?auto=format&fit=crop&w=400&q=70",
  "Matcha Yogurt Bowl":         "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=70",
  "PB Power Bowl":              "https://images.unsplash.com/photo-1590301157876-7c4a3dcfe318?auto=format&fit=crop&w=400&q=70",
  "Sunrise OJ":                 "https://images.unsplash.com/photo-1613478223719-3ab654489b79?auto=format&fit=crop&w=400&q=70",
  "Detox Verde":                "https://images.unsplash.com/photo-1595924208534-2c93128803e6?auto=format&fit=crop&w=400&q=70",
  "Beet Boost":                 "https://images.unsplash.com/photo-1622597467836-f3d2e784b004?auto=format&fit=crop&w=400&q=70",
  "Sandia Cooler":              "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=70",
  "Avocado Toast Zest":         "https://images.unsplash.com/photo-1597951388354-3474fca3434e?auto=format&fit=crop&w=400&q=70",
  "Grilled Cheese & Tomato":    "https://images.unsplash.com/photo-1553909489-cd47e09079f4?auto=format&fit=crop&w=400&q=70",
  "Ricotta & Honey Toast":      "https://images.unsplash.com/photo-1484723091739-30a097e3a3be?auto=format&fit=crop&w=400&q=70",
  "Protein Pancakes":           "https://images.unsplash.com/photo-1567620905862-474026b79e8a?auto=format&fit=crop&w=400&q=70",
  "Flat White Zest":            "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=70",
  "I Matcha Latte":             "https://images.unsplash.com/photo-1515823662971-da4d4b3893c6?auto=format&fit=crop&w=400&q=70",
  "Chai especiado casero":      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=400&q=70",
  "Cold Brew 18h":              "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=400&q=70"
};

// Si una foto falla (sin conexión o ID roto), se muestra este degradado + el emoji del plato.
window.PHOTO_FALLBACK = (name) => {
  const FALLBACK_GRADIENTS = ['linear-gradient(135deg,#eaffeb,#d8f5dd)','linear-gradient(135deg,#fff7d6,#ffe9b8)','linear-gradient(135deg,#fdeef0,#f8dbe2)'];
  let h = 0; for (const c of name) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return FALLBACK_GRADIENTS[h % FALLBACK_GRADIENTS.length];
};
