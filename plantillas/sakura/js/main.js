// SAKURA · Omakase — lógica de la plantilla
(() => {
  const DATA = window.MENU_DATA;

  /* ---------- Imágenes de plato con fallback degradado ---------- */
  const MAP = window.PHOTO_MAP || {};
  const FALLBACK = window.PHOTO_FALLBACK || (() => "linear-gradient(135deg,#2a2a2a,#1a1a1a)");
  function photo(name) {
    const url = MAP[name];
    if (!url) return `<span class="dish-photo ph-broken" style="background:${FALLBACK(name)}"></span>`;
    return `<img class="dish-photo" src="${url}" data-name="${name}" alt="${name}" loading="lazy" decoding="async">`;
  }
  function photoBig(name) {
    const url = MAP[name];
    if (!url) return `<span class="drawer-photo ph-broken" style="background:${FALLBACK(name)}"></span>`;
    return `<img class="drawer-photo" src="${url}" data-name="${name}" alt="${name}" loading="lazy">`;
  }
  // Si una imagen no carga (sin conexión), se sustituye por el degradado temático.
  document.addEventListener("error", (e) => {
    const el = e.target;
    if (el.tagName === "IMG" && /^(dish-photo|drawer-photo|pop-photo)$/.test(el.className)) {
      const wrap = document.createElement("span");
      wrap.className = el.className + " ph-broken";
      wrap.style.background = window.PHOTO_FALLBACK ? PHOTO_FALLBACK(el.dataset.name || "") : "#222";
      el.replaceWith(wrap);
    }
  }, true);

  const money = (n) => n.toFixed(2).replace(".", ",") + " " + DATA.currency;

  /* ---------- Render del menú por categorías ---------- */
  const menuRoot = document.getElementById("menu");
  const catScroll = document.getElementById("cat-scroll");

  DATA.categories.forEach((cat, i) => {
    // Chip de categoría
    const chip = document.createElement("button");
    chip.className = "chip" + (i === 0 ? " active" : "");
    chip.textContent = `${cat.label} · ${cat.jp}`;
    chip.dataset.target = cat.id;
    catScroll.appendChild(chip);

    // Sección
    const sec = document.createElement("section");
    sec.className = "menu-section";
    sec.id = cat.id;
    const dishes = DATA.dishes.filter((d) => d.cat === cat.id);
    sec.innerHTML = `
      <div class="container">
        <div class="menu-head">
          <h2>${cat.label}</h2><span class="jp">${cat.jp}</span><span class="rule"></span>
        </div>
        <div class="dishes">
          ${dishes
            .map(
              (d, idx) => `
            <article class="dish" data-cat="${cat.id}" data-idx="${idx}" tabindex="0" role="button" aria-label="Ver detalle de ${d.name}">
              <div class="dish-art">${photo(d.name)}</div>
              <div class="dish-info">
                <div class="dish-top"><h3 class="dish-name">${d.name}</h3><span class="dish-price">${money(d.price)}</span></div>
                <p class="dish-desc">${d.desc}</p>
                <div class="dish-tags">${d.tags.map((t) => `<span class="dtag">${t}</span>`).join("")}</div>
              </div>
            </article>`
            )
            .join("")}
        </div>
      </div>`;
    menuRoot.appendChild(sec);
  });

  /* ---------- Drawer de detalle de plato ---------- */
  const overlay = document.getElementById("overlay");
  const drawer = document.getElementById("drawer");
  let lastFocus = null;

  function openDrawer(catId, idx) {
    const dish = DATA.dishes.filter((d) => d.cat === catId)[idx];
    if (!dish) return;
    lastFocus = document.activeElement;
    drawer.innerHTML = `
      <div class="drawer-handle"></div>
      <div class="drawer-art">${photoBig(dish.name)}</div>
      <h3>${dish.name}</h3>
      <p class="drawer-jp">${dish.jp}</p>
      <p class="drawer-price">${money(dish.price)}</p>
      <p class="drawer-desc">${dish.long}</p>
      <div class="drawer-meta">${dish.tags.map((t) => `<span class="dtag">${t}</span>`).join("")}</div>
      <button class="btn-outline drawer-close" id="drawer-close">Cerrar</button>`;
    overlay.classList.add("open");
    drawer.classList.add("open");
    drawer.querySelector("#drawer-close").addEventListener("click", closeDrawer);
  }
  function closeDrawer() {
    overlay.classList.remove("open");
    drawer.classList.remove("open");
    if (lastFocus) lastFocus.focus();
  }
  overlay.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", (e) => e.key === "Escape" && closeDrawer());

  menuRoot.addEventListener("click", (e) => {
    const card = e.target.closest(".dish");
    if (card) openDrawer(card.dataset.cat, +card.dataset.idx);
  });
  menuRoot.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".dish");
      if (card) { e.preventDefault(); openDrawer(card.dataset.cat, +card.dataset.idx); }
    }
  });

  /* ---------- Chips: scroll + resaltado por sección visible ---------- */
  catScroll.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    document.getElementById(chip.dataset.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  const setActive = (id) =>catScroll.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c.dataset.target === id));

  const sectionIO = new IntersectionObserver(
    (entries) => entries.forEach((en) => en.isIntersecting && setActive(en.target.id)),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  requestAnimationFrame(() => menuRoot.querySelectorAll(".menu-section").forEach((s) => sectionIO.observe(s)));

  /* ---------- Animación de aparición de platos ---------- */
  const dishIO = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("visible"); dishIO.unobserve(en.target); }
    }),
    { threshold: 0.15 }
  );
  document.querySelectorAll(".dish").forEach((d) => dishIO.observe(d));

  /* ---------- Header con scroll ---------- */
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", scrollY > 30);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Menú móvil ---------- */
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav-desktop");
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    nav.classList.toggle("mobile-open");
  });
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") { burger.classList.remove("open"); nav.classList.remove("mobile-open"); }
  });

  /* ---------- Pétalos de sakura ---------- */
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    setInterval(() => {
      if (document.hidden || document.querySelectorAll(".petal").length > 14) return;
      const p = document.createElement("span");
      p.className = "petal";
      const size = 6 + Math.random() * 8;
      p.style.width = size + "px";
      p.style.height = size * 0.8 + "px";
      p.style.left = Math.random() * 100 + "vw";
      p.style.animationDuration = 7 + Math.random() * 8 + "s";
      p.addEventListener("animationend", () => p.remove());
      document.body.appendChild(p);
    }, 900);
  }
})();
