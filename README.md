# ZENITH Studio 🧡 — Plantillas para Restaurantes

Repositorio de **plantillas web estáticas** para restaurantes, creado por [ZENITH Studio](https://zenithdevopt.netlify.app/). Sirven como catálogo comercial: cada plantilla es una demo real, responsive y optimizada para móvil (los menús se usan en el teléfono, en la mesa). Caso de éxito de referencia: [Burgos](https://burgos.netlify.app/).

## 📁 Estructura

```
.
├── index.html                  # Showcase / catálogo de plantillas
├── css/showcase.css            # Estética Zenith del catálogo (oscuro + dorado)
├── js/showcase.js
└── plantillas/
    ├── sakura/                 # 🌸 Omakase japonés — dark minimalista, pétalos, drawer de plato
    │   ├── index.html
    │   ├── css/style.css
    │   └── js/{menu-data.js, main.js}
    ├── brasa/                  # 🔥 Asador — tipografía contundente, brasas animadas, WhatsApp
    ├── maremma/                # 🍝 Trattoria toscana — tema claro editorial, carta tipo menú impreso
    └── zest/                   # 🍊 Juice bar healthy — estilo app, carrito con contador + pedido WA
```

Cada carpeta dentro de `plantillas/` es **autocontenida**: se puede desplegar sola en Netlify/Vercel o cualquier hosting estático.

## ✨ Qué comparten todas las plantillas

- **Mobile-first**: navegables con una mano, safe-areas de iPhone, tipografías legibles en pantalla pequeña.
- **Carta dinámica**: los platos viven en `js/menu-data.js`. El cliente cambia su menú editando un solo archivo (sin tocar HTML/CSS).
- **Categorías sticky deslizables** con resaltado automático de la sección visible (IntersectionObserver).
- **Ficha de plato al tocarlo** (drawer / modal / postal según el estilo) con descripción extendida.
- **Acción comercial**: botón de reserva o pedido por WhatsApp (`wa.me`) ya cableado.
- **Estética Zenith**: paleta cuidada, micro-animaciones sutiles, respeta `prefers-reduced-motion`.
- **Cero dependencias**: HTML + CSS + JS puro. Carga casi instantánea, ideal para hosting gratuito.

## 🚀 Probar en local

```bash
cd /workspace && python3 -m http.server 8080
# Catálogo:  http://localhost:8080
# Sakura:    http://localhost:8080/plantillas/sakura/
# Brasa:     http://localhost:8080/plantillas/brasa/
# Maremma:   http://localhost:8080/plantillas/maremma/
# Zest:      http://localhost:8080/plantillas/zest/
```

## 🎨 Personalizar para un cliente

1. Copia la carpeta de la plantilla elegida.
2. Edita `js/menu-data.js`: nombre, platos, precios, categoría, notas, número de WhatsApp.
3. Edita las variables CSS en `:root` del `css/style.css` (colores, radios, fuentes) para vestir la marca del cliente.
4. Actualiza textos de contacto/horario en `index.html`.
5. Despliega (arrastrar la carpeta a Netlify basta).

## 🗒️ Notas de venta

- Las imágenes usan emojis/SVG para que las demos carguen rápido; en producción se sustituyen por fotografía real del restaurante.
- Teléfonos y direcciones son ficticios (`600 00 00 00`, etc.).
- Para ampliar el catálogo: duplicar una plantilla y cambiar dirección creativa (mexicana, vegana, cafetería de especialidad, coctelería…).

© 2026 ZENITH Studio — zenithdevopt.netlify.app
