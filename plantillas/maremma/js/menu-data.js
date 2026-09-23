// MAREMMA · Trattoria — datos de la carta (edítalos aquí)
window.MENU_DATA = {
  currency: "€",
  categories: [
    { id: "antipasti", label: "Antipasti", it: "Per cominciare" },
    { id: "pasta", label: "Pasta fresca", it: "Fatta in casa" },
    { id: "secondi", label: "Secondi", it: "Dal fuoco" },
    { id: "dolci", label: "Dolci", it: "Finale dolce" },
    { id: "vini", label: "Vini & Bevande", it: "Abbinamenti" }
  ],
  dishes: [
    { cat: "antipasti", icon: "🍅", name: "Burrata pugliese", it: "con pomodorini confit", price: 12.0, desc: "Burrata de Andria, tomates confitados al romero y pan de masa madre.", note: "Signature", long: "Burrata cremosa importada dos veces por semana desde Andria, con pomodorini del piennolo confitados a baja temperatura con romero, aceite de oliva Nocellara y tostadas de masa madre." },
    { cat: "antipasti", icon: "🫒", name: "Carciofi alla giudia", it: "alcachofas fritas judías", price: 9.5, desc: "Alcachofa entera frita, crujiente como una flor, limón y menta.", note: "Vegetariano", long: "La receta romana más antigua del ghetto judío: alcachofa entera aplastada y frita dos veces hasta abrirse como un crisantemo dorado." },
    { cat: "antipasti", icon: "🥖", name: "Bruschetta trio", it: "la casa / tomate / 'nduja", price: 8.5, desc: "Tres tostadas de pan de leña con nuestros untables del día.", note: "", long: "Pan tostadísimo al fuego de leña con: crema de alubias y romero; tomate San Marzano y albahaca; y mantequilla picante calabra 'nduja fundida." },

    { cat: "pasta", icon: "🍝", name: "Pici cacio e pepe", it: "Gricia romana", price: 14.5, desc: "Pici amasados a mano, pecorino romano DOP y pimienta de Sarawak.", note: "Signature", long: "La pasta gruesa toscana trenzada a mano se saltea en la crema exacta de pecorino y agua de cocción, con pimienta negra recién molida en cantidad generosa. Nada más." },
    { cat: "pasta", icon: "🦞", name: "Tagliatelle all'astice", it: "tagliatelle con bogavante", price: 22.0, desc: "Bogavante azul, bisque reducida y un toque de brandy.", note: "", long: "Tagliatelle al huevo cortada fina, bañada en bisque del propio bogavante reducido tres horas, carne desmenuzada y ralladura de limón." },
    { cat: "pasta", icon: "🌿", name: "Tortelli di zucca", it: "tortelli de calabaza y amaretti", price: 15.0, desc: "Calabaza asada, mostaza de Mantua y galleta amaretti rallada.", note: "Vegetariano", long: "Receta de Mantua: relleno de zucca violina asada con amaretti croccanti, mostarda y nuez moscada. Mantequilla y salvia al final." },
    { cat: "pasta", icon: "🐙", name: "Spaghetti allo scoglio", it: "espaguetis marineros", price: 18.5, desc: "Mejillones, almejas, calamar y gamones al punto de ajo y vino blanco.", note: "Sin gluten opcional", long: "El mar tirado a la sartén: marisco vivo del mercado pasado dos minutos con spaghetti n.5 mantecados en su propio jugo." },

    { cat: "secondi", icon: "🥩", name: "Bistecca alla fiorentina", it: "para compartir (1 kg)", price: 58.0, desc: "Chianina IGP madurada 30 días, brasa de encina, a lo grande.", note: "Mín. 2 pers.", long: "Solomillo + lomo bajo con hueso de ternera Chianina del Val di Chiana. Sellada a fuego vivo, reposada de pie, sal maldon y aceite crudo. Un minuto por lado, ni uno más." },
    { cat: "secondi", icon: "🐔", name: "Pollo al mattone", it: "pollo ladrillo y limón", price: 16.0, desc: "Medio pollo prensado bajo un ladrillo, piel dorada, hierbas del huerto.", note: "", long: "Pollo de corral marinado en limón y hierbas, asado prensado con un ladrillo caliente sobre las brasas hasta que la piel queda como papel." },
    { cat: "secondi", icon: "🐟", name: "Branzino in crosta di sale", it: "lubina en costra de sal", price: 24.0, desc: "Pescado entero al horno en costra de sal marina y hinojo.", note: "Para compartir", long: "Lubina salvaje cocinada intacta dentro de una montaña de sal con hinojo marino: se abre en mesa ante ti, jugosa y perfumada." },

    { cat: "dolci", icon: "🍰", name: "Tiramisù della nonna", it: "el de la abuela", price: 7.0, desc: "Savoiardi, mascarpone batido y café de espresso doble.", note: "Signature", long: "Nada de recetas líquidas: capas densas de savoiardi empapados en espresso frío, crema de cuatro yemas montadas con azúcar y marsala seco. Cacao amargo de origen." },
    { cat: "dolci", icon: "🍨", name: "Panna cotta al miele", it: "panna cotta de miel de castaño", price: 6.5, desc: "Cuajada suave con miel de castaño de la Maremma y avellanas.", note: "Vegetariano", long: "Nata fresca cuajada con mínimo gelatina para que tienda el temblor justo, miel de castaño de bosque y praliné de avellanas piamontesas." },
    { cat: "dolci", icon: "🍋", name: "Delizia al limone", it: "delicia de limón de Amalfi", price: 7.0, desc: "Esponja de limón, crema chantilly y sorbete casero.", note: "", long: "El postre de la costa amalfitana: bizcocho emborrachado en limoncello artesano, crema ligera y sorbete intenso de limones de Sferracavallo." },

    { cat: "vini", icon: "🍷", name: "Morellino di Scansano DOCG", it: "Sangiovese toscano", price: 6.5, desc: "Copa de tinto fresco, cereza y tierra mojada. Nuestro maridaje de casa.", note: "copa", long: "El tinto de nuestra comarca: Sangiovese en estado puro, acidez viva que pide bistec. Botella 28 €." },
    { cat: "vini", icon: "🥂", name: "Prosecco Superiore", it: "Valdobbiadene DOCG", price: 7.0, desc: "Burbuja fina, manzana verde, aperitivo perfecto.", note: "copa", long: "Glera de colinas empinadas, método charmat largo. Copa o botella para celebrar algo." },
    { cat: "vini", icon: "🍊", name: "Aperol Spritz della casa", it: "con naranja sanguina", price: 8.0, desc: "Nuestra versión: prosecco, aperol, cordial de naranja sanguina.", note: "", long: "Menos dulce, más cítrico: maceramos sanguinas enteras en almíbar para nuestro cordial casero." },
    { cat: "vini", icon: "☕", name: "Caffè mokaccino", it: "café italiano", price: 2.8, desc: "Espresso doble de mezcla arábica del sur de Italia.", note: "", long: "Grano Blend bar de Nápoles, torrado oscuro, extraído ristretto. Como debe ser después de comer." }
  ]
};
