// ZEST! · Juice Bar — datos de la carta (edítalos aquí)
window.MENU_DATA = {
  currency: "COP",
  whatsapp: "573001234567", // número para pedidos
  categories: [
    { id: "smoothies", label: "Smoothies", note: "Fruta recién batida, con cosecha santandereana. Sin azúcares añadidos, nunca." },
    { id: "bowls", label: "Bowls", note: "Base cremosa + toppings que crujen." },
    { id: "juices", label: "Cold press", note: "Prensado en frío el mismo día. Caducidad: hoy." },
    { id: "toast", label: "Toast & snacks", note: "Para mojar y no irse con hambre." },
    { id: "cafe", label: "Café & té", note: "Grano de tueste local, leches vegetales gratis." }
  ],
  dishes: [
    { cat: "smoothies", name: "Mango Biche Sunrise", price: 16000, kcal: "210 kcal", desc: "Mango biche, gulupa y maracuyá con cúrcuma fresca.", long: "Mango biche bien maduro, pulpa de gulupa y maracuyá santandereanos, cúrcuma fresca rallada. Dulzor natural, cero azúcar añadido.", isNew: true },
    { cat: "smoothies", name: "Gulupa Boom", price: 17000, kcal: "190 kcal", desc: "Gulupa, mora de castilla, banano y yogur griego.", long: "Gulupa y mora de castilla batidas con banano y yogur griego proteico. Antioxidantes a borbotones, cosecha del páramo." },
    { cat: "smoothies", name: "Verde Bucaramanga", price: 17000, kcal: "230 kcal", desc: "Aguacate criollo, espinaca, piña y leche de coco.", long: "El verde que sí sabe bien: aguacate criollo entero, puñado de espinaca baby, piña dulce de la región y leche de coco fría." },
    { cat: "smoothies", name: "Choco Peanut", price: 18000, kcal: "310 kcal", desc: "Cacao puro, mantequilla de cacahuete y dátil.", long: "Postre disfrazado de desayuno: cacao 100%, crema de cacahuete tostada y dos dátiles medjool. Proteína extra si añades avena." },

    { cat: "bowls", name: "Açaí Tropical", price: 22000, kcal: "380 kcal", desc: "Açaí brasileño, granola horneada, plátano y coco.", long: "Base densa de açaí batida con plátano, coronada con granola horneada en casa, rodajas de plátano, coco rallado y miel de caña.", isNew: true },
    { cat: "bowls", name: "Matcha Yogurt Bowl", price: 20000, kcal: "340 kcal", desc: "Yogur de matcha, arándanos, semillas de chía.", long: "Yogur natural montado con matcha ceremonial de Uji, chía, arándanos frescos y lamas de almendra." },
    { cat: "bowls", name: "PB Power Bowl", price: 22000, kcal: "430 kcal", desc: "Porridge overnight, cacahuete, banana y chips de coco.", long: "Avena reposada toda la noche con leche de almendra, remolino de mantequilla de cacahuete, banana en rodajas y chips de coco tostado. Energía hasta la cena." },

    { cat: "juices", name: "Naranja & Zanahoria", price: 12000, kcal: "160 kcal", desc: "Naranja y zanahoria prensadas en frío.", long: "Naranjas jugosas y zanahoria lavada, prensadas juntas en frío. Sin conservantes, sin agua, sin nada más." },
    { cat: "juices", name: "Detox Verde", price: 14000, kcal: "120 kcal", desc: "Apio, pepino, manzana verde, jengibre y limón.", long: "El clásico verde honesto: apio y pepino como base, manzana granny para el punto dulce, jengibre vivo y limón." },
    { cat: "juices", name: "Remolacha Boost", price: 14000, kcal: "140 kcal", desc: "Remolacha, manzana, zanahoria y perejil.", long: "Remolacha asada antes de prensar para quitar tierra y sacar caramelo. Hierro, nitratos y color de atardecer." },
    { cat: "juices", name: "Patilla Cooler", price: 12000, kcal: "110 kcal", desc: "Sandía, hierbabuena y lima. Verano embotellado.", long: "Solo sandía madura prensada con hielo, hojas de hierbabuena machacadas y un giro de lima." },

    { cat: "toast", name: "Aguacate Toast Zest", price: 21000, kcal: "320 kcal", desc: "Pan masa madre, aguacate, huevo poché y dukkah.", long: "Rebanada gruesa de masa madre tostada, aguacate en láminas gruesas, huevo poché de corral, dukkah egipcio y escamas de sal." },
    { cat: "toast", name: "Grilled Cheese & Tomato", price: 18000, kcal: "410 kcal", desc: "Tres quesos fundidos y sopa de tomate para mojar.", long: "Sándwich de brioche con cheddar curado, gruyère y parmesano, plancha hasta dorar, con sopa de tomate asado en vaso." },
    { cat: "toast", name: "Queso ricotta & Miel Toast", price: 17000, kcal: "290 kcal", desc: "Ricotta batida, miel de romero, higos y nueces.", long: "Dulce-salado: ricotta aireada con miel, higos de temporada, nueces caramelizadas y pimienta negra." },
    { cat: "toast", name: "Protein Pancakes", price: 22000, kcal: "450 kcal", desc: "Tortitas de avena y plátano, sirope de arce real.", long: "Torre de tortitas hechas solo con avena, plátano y clara de huevo. Mantequilla de maní y sirope de arce grado A." },

    { cat: "cafe", name: "Flat White Zest", price: 9000, kcal: "", desc: "Doble ristretto y microespuma de seda.", long: "Blend propio de tueste medio: doble ristretto con leche texturizada al milímetro. Con leche de vaca o vegetal al mismo precio." },
    { cat: "cafe", name: "I Matcha Latte", price: 12000, kcal: "", desc: "Matcha ceremonial sobre hielo y leche de avena.", long: "Matcha de primer brote batido con chasen, servido sobre una montaña de hielo con leche de avena barista." },
    { cat: "cafe", name: "Chai especiado casero", price: 11000, kcal: "", desc: "Té negro hervido con especias enteras y espuma.", long: "Té Assam hervido despacio con canela, cardamomo, clavo y jengibre fresco; leche vaporizada y espuma especiada." },
    { cat: "cafe", name: "Cold Brew 18h", price: 10000, kcal: "", desc: "Extracción en frío durante 18 horas. Suave y chocolateado.", long: "Café molido grueso en maceración fría 18 horas, filtrado dos veces. Bajo en acidez, alto en cafeína." }
  ]
};
