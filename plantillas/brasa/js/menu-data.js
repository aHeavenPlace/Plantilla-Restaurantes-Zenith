// BRASA · Asador — datos de la carta (edítalos aquí)
window.MENU_DATA = {
  currency: "€",
  whatsapp: "34600000000", // número para reservas/pedidos (sin +, sin espacios)
  categories: [
    { id: "para-empezar", label: "Para empezar", num: "01", note: "Del humo pequeño a la mesa. Perfectos para compartir mientras llega tu corte." },
    { id: "cortes", label: "Cortes a la brasa", num: "02", note: "Maduración propia en cámara. Todos los cortes se sellan sobre carbón de encina." },
    { id: "cocina", label: "De la cocina", num: "03", note: "Guarniciones y platos de cuchara para acompañar el fuego." },
    { id: "postres", label: "Dulce cierre", num: "04", note: "Porque el final también se asa." },
    { id: "barra", label: "Barra & vinos", num: "05", note: "Robles con carácter para carnes con carácter." }
  ],
  dishes: [
    { cat: "para-empezar", name: "Chorizo criollo al carbón", price: 7.5, weight: "para compartir", desc: "Curado 30 días, triplo natural, llama viva.", long: "Chorizo criollo de cerdo Duroc curado un mes en bodega. Al carbón estalla la tripa y suelta todo el pimentón de la Vera. Llega con pan de cristal tostado.", spicy: true },
    { cat: "para-empezar", name: "Provoleta con chimichurri", price: 9.0, weight: "200 g", desc: "Queso provolone a la plancha, orégano y chili.", long: "Rodaja gruesa de provolone fundida directamente sobre la parrilla hasta formar costra, terminada con chimichurri de la casa y escamas de chili.", spicy: true },
    { cat: "para-empezar", name: "Gambas al ajillo ahumado", price: 11.0, weight: "8 uds", desc: "Ajo confitado, guindilla y humo de encina.", long: "Gambas rojas salteadas en aceite con ajo laminado y ñora ahumada por encima del carbón. Pan para mojar, obligatorio.", spicy: true },
    { cat: "para-empezar", name: "Costillas ahumadas 6 h", price: 14.5, weight: "½ rack", desc: "Ahumado lento, glaseado BBQ de café.", long: "Rack de cerdo ahumado seis horas con astillas de encina y glaseado de BBQ reducido con café de tueste natural. Se deshace con mirar.", spicy: true },

    { cat: "cortes", name: "T-bone madurado 45 días", price: 34.0, weight: "600 g aprox.", desc: "Vaca vieja, costra perfecta, reposo de 5 min.", long: "Pieza de vaca madura 45 días en cámara propia. Sellada a fuego directo y rematada en zona fría del asador. Sal en escamas, pimienta negra rota y mantequilla de tuétano. Para compartir entre dos.", recommended: true },
    { cat: "cortes", name: "Entrecot de angus", price: 24.0, weight: "350 g", desc: "Graso medio, punto recomendado: tres cuartos.", long: "Entrecot de Angus con vetteo uniforme, cortado al hueso si lo prefieres. A la brasa con sal parrillera y limón asado.", recommended: false },
    { cat: "cortes", name: "Picaña al corte argentino", price: 21.0, weight: "300 g", desc: "La gorrita de grasa dorada al carbón.", long: "Picaña con su capa de grasa sellada hacia abajo los primeros minutos para que se funda sobre la carne. Chimichurri fresco batido al momento." },
    { cat: "cortes", name: "Pollo peri-peri entero", price: 16.5, weight: "½ pollo", desc: "Marinado 24 h en salsa peri-peri de la casa.", long: "Medio pollo marinado un día entero en nuestra peri-peri (piri-piri portugués con limón y ajo), pasado por brasa hasta piel crujiente. Aliño de la casa y patatas brasas.", spicy: true },
    { cat: "cortes", name: "Presas ibéricas de bellota", price: 19.0, weight: "280 g", desc: "Presa de Vázquez Corzo, veta fina.", long: "Presa de cerdo ibérico de bellota marcada a fuego fuerte, poco hecha por dentro como le gusta al carnívoro serio. Pimienta verde y flor de sal." },
    { cat: "cortes", name: "Hamburguesa Brasa (veggie)", price: 13.0, weight: "220 g", desc: "Portobello a la parrilla, queso de cabra y rúcula.", long: "Para los que también quieren humo: portobello entero asado a la brasa como medallón, pan brioche tostado en parrilla, cabra semicurado, cebolla quemada y rúcula.", recommended: true },

    { cat: "cocina", name: "Patatas brasas con alioli", price: 5.5, weight: "", desc: "Corte grueso, cocción lenta, aceite de encina.", long: "Patata gallega confitada a baja temperatura y terminada en la parrilla para marcarla. Alioli suave de huevo campero." },
    { cat: "cocina", name: "Maíz a la parrilla con lima", price: 5.0, weight: "2 mitades", desc: "Manteca, queso cotija y chile.", long: "Elote estilo callejero mexicano: maíz dulce asado con hoja, pintado con manteca y terminado con cotija rallada, lima y chile de árbol.", spicy: true },
    { cat: "cocina", name: "Pimientos de Padrón", price: 6.0, weight: "racimo", desc: "Blisterizados en chapa, sal maldon.", long: "Directos del huerto a la chapa caliente hasta romper la piel. Un 10% arde, es parte del juego.", spicy: true },
    { cat: "cocina", name: "Ensalada de la huerta", price: 7.0, weight: "", desc: "Verde de temporada, vinagreta de mostaza antigua.", long: "Lechugas de km0 según temporada, tomate corazón de buey, cebolleta y vinagreta de mostaza a la antigua." },

    { cat: "postres", name: "Flan de huevo casero", price: 5.5, weight: "", desc: "Receta de la abuela, caramelo oscuro.", long: "Flan de horno al baño maría, cuatro huevos por litro de leche, caramelo quemado en el punto justo." },
    { cat: "postres", name: "Coulant de chocolate Ahumado", price: 6.5, weight: "", desc: "Corazón líquido, helado de vainilla bourbon.", long: "Bizcocho templado de chocolate 70% con un toque de humo líquido en la masa, centro fundente y bola de helado de vainilla de Madagascar.", recommended: true },
    { cat: "postres", name: "Torrija caramelizada", price: 5.5, weight: "", desc: "Brioche infusionada, crema inglesa.", long: "Nuestra torrija de brioche con leche frita por encima y azúcar sopleteado al momento." },

    { cat: "barra", name: "Ribera del Duero Crianza", price: 5.0, weight: "copa", desc: "Tempranillo potente, tanino noble.", long: "Copa de Ribera del Duero crianza 12 meses en roble francés. El compañero natural de tu T-bone." },
    { cat: "barra", name: "Craft lager local", price: 4.0, weight: "33 cl", desc: "Lager de trigo ahumada de cervecería de barrio.", long: "Colaboración con cervecería artesana local: lager ligera con malta ligeramente ahumada. Refrescante junto al carbón." },
    { cat: "barra", name: "Whisky bourbon on the rocks", price: 8.0, weight: "", desc: "Vanilla, maíz y fuego lento.", long: "Bourbon small batch con hielo grande para que no lo agüe. Cierre perfecto." },
    { cat: "barra", name: "Refrescos & aguas", price: 2.5, weight: "", desc: "Premium mixers y agua con/sin gas.", long: "Coca-cola, tonic premium, zumos naturales y agua mineral con o sin gas." }
  ]
};
