// SAKURA · Omakase — datos de la carta (edítalos aquí)
window.MENU_DATA = {
  currency: "COP",
  categories: [
    { id: "entrantes", label: "Entrantes", jp: "前菜" },
    { id: "sushi", label: "Sushi & Sashimi", jp: "寿司" },
    { id: "calientes", label: "Platos calientes", jp: "熱々" },
    { id: "postres", label: "Postres", jp: "甘味" },
    { id: "bebidas", label: "Bebidas", jp: "飲み物" }
  ],
  dishes: [
    { cat: "entrantes", name: "Edamame con sal marina", jp: "枝豆", price: 12000, desc: "Vainas al vapor, escamas de sal y ralladura de lima.", tags: ["Vegano", "Sin gluten"], long: "Nuestros edamame se cosechan en Hokkaido y se cocinan al vapor durante tres minutos exactos para conservar su dulzor. Servidos con sal marina de Okinawa y lima de Shikoku." },
    { cat: "entrantes", name: "Chawanmushi", jp: "茶碗蒸し", price: 22000, desc: "Flan de huevo al dashi con gambara y ginkgo.", tags: ["Signature"], long: "Técnica kaiseki: huevo batido con dashi de kombu y katsuoa, cocido al vapor en cuenco. Textura de seda pura con gambara sellada y semillas de ginkgo." },
    { cat: "entrantes", name: "Tako wasabi", jp: "蛸ワサビ", price: 20000, desc: "Pulpo crudo con wasabi fresco y ponzu.", tags: ["Picante"], long: "Pulpo cortado finísimo sobre hielo, servido con wasabi real rallado al momento (del mismo tallo) y ponzu cítrico de la casa." },

    { cat: "sushi", name: "Omakase Nigiri (8 pzs)", jp: "おまかせ握り", price: 95000, desc: "Selección del chef según mercado del día.", tags: ["Signature", "Solo aquí"], long: "Ocho piezas elegidas por nuestro itamae según el mercado del día: atún de tres cortes, urai, hamachi, vieira y más. El arroz se sirve a temperatura corporal, como manda la tradición Edo-mae." },
    { cat: "sushi", name: "Sashimi Premium (12 pzs)", jp: "刺身盛り", price: 78000, desc: "Atún rojo, salmón, besugo y calamar.", tags: ["Sin gluten"], long: "Corte usuzukuri sobre hielo con shiso, daikon y wasabi fresco. Cuatro pescados seleccionados del mercado diario de la Central de Abastos." },
    { cat: "sushi", name: "Hand roll de anguila", jp: "手巻き鰻", price: 26000, desc: "Unagi glaseado, pepino y sésamo negro.", tags: [], long: "Anguila de lago pintada con salsa tare tres veces y caramelizada al carbón, envuelta en nori crujiente con pepino y sésamo negro tostado." },
    { cat: "sushi", name: "Veggie maki (6 pzs)", jp: "野菜巻き", price: 24000, desc: "Aguacate, mango, pepino y shiitake.", tags: ["Vegano"], long: "Maki de temporada vegetariana con shiitake marinado en mirin y mayonesa vegana de sriracha." },

    { cat: "calientes", name: "Ramen Tonkotsu", jp: "豚骨ラーメン", price: 38000, desc: "Caldo de cerdo 18 h, chashu y huevo ajitama.", tags: ["Signature"], long: "Caldo blanco hervido a fuego vivo durante 18 horas hasta lograr una emulsión cremosa. Fideos frescos de corte fino, chashu de panceta confitada, huevo marinado 12 horas, negui y aceite de ajo negro." },
    { cat: "calientes", name: "Wagyu teppanyaki A5", jp: "和牛鉄板", price: 135000, desc: "Solomillo Miyazaki A5, sal de yuzu y wasabi.", tags: ["Premium", "Sin gluten"], long: "Dos cortes de wagyu A5 sellados a la plancha robata, reposados y terminados con sal de yuzu y wasabi fresco rallado. Servido con kimchi de manzana." },
    { cat: "calientes", name: "Okonomiyaki de marisco", jp: "お好み焼き", price: 36000, desc: "Tortilla de col con gambas y calamar.", tags: [], long: "La 'pizza de Osaka': masa ligera de col y harina con marisco, plancha, salsa okonomi, mayo japonesa, bonito que se mueve con el calor y aonori." },
    { cat: "calientes", name: "Brochetas yakitori (4 u.)", jp: "焼鳥", price: 30000, desc: "Muslo, tsukune y pimiento shishito al carbón.", tags: ["Picante"], long: "Pollo de corral ensartado a mano y asado sobre carbón binchotan con tare casero. Incluye albóndigas tsukune y shishitos." },

    { cat: "postres", name: "Tiramisú de matcha", jp: "抹茶ティラミス", price: 18000, desc: "Mascarpone de matcha ceremonial y bizcocho mojado en hojicha.", tags: ["Vegetariano"], long: "Matcha de primer recolección de Uji batido con mascarpone, capas de bizcocho empapado en té hojicha y cacao amargo." },
    { cat: "postres", name: "Dango de temporada", jp: "だんご", price: 15000, desc: "Bolitas de arroz con mitarashi y flor de sakura.", tags: ["Vegano", "Sin gluten"], long: "Dango artesano de harina mochiko glaseado con mitarashi (salsa de soja dulce) y flor de sakura en salmuera." },
    { cat: "postres", name: "Helado de sésamo negro", jp: "黒ゴレアイスクリーム", price: 16000, desc: "Kin goma cremoso con crujiente de karinto.", tags: ["Vegetariano"], long: "Helado de sésamo negro tostado y molido al momento, con trozos de karinto crujiente y sirope de azúcar moreno kokuto." },

    { cat: "bebidas", name: "Sake Junmai Ginjo (copa)", jp: "酒", price: 22000, desc: "Frutal y sedoso, 15% vol. Prefectura Niigata.", tags: [], long: "Arroz pulido al 60%, fermentación lenta en frío. Notas de pera nashi y flores blancas. Servido en copa de cristal o tetera de barro." },
    { cat: "bebidas", name: "Cerveza artesana yuzu", jp: "柚子ビール", price: 16000, desc: "Pale ale japonesa con piel de yuzu.", tags: ["Nuevo"], long: "Colaboración con cervecería local: base de lúpulo Cascade infusionada con piel de yuzu y cilantro japonés." },
    { cat: "bebidas", name: "Matcha latte (frío/caliente)", jp: "抹茶ラテ", price: 13000, desc: "Matcha ceremonial con leche de avena barista.", tags: ["Vegano"], long: "Matcha batido con chasen y leche de avena para barista. Sin azúcares añadidos." }
  ]
};
