// BRASA · Asador — lógica de la plantilla
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
  const waLink = (msg) => `https://wa.me/${DATA.whatsapp}?text=${encodeURIComponent(msg)}`;

  /* ---------- Render carta ---------- */
  const menuRoot = document.getElementById("menu");
  const catScroll = document.getElementById("cat-scroll");

  DATA.categories.forEach((cat, i) => {
    const chip = document.createElement("button");
    chip.className = "chip" + (i === 0 ? " active" : "");
    chip.textContent = cat.label;
    chip.dataset.target = cat.id;
    catScroll.appendChild(chip);

    const sec = document.createElement("section");
    sec.className = "menu-section";
    sec.id = cat.id;
    const dishes = DATA.dishes.filter((d) => d.cat === cat.id);
    sec.innerHTML = `
      <div class="container">
        <div class="menu-head">
          <span class="num">${cat.num} /</span>
          <h2>${cat.label}</h2>
          <p>${cat.note}</p>
        </div>
        <div class="dish-list">
          ${dishes.map((d, idx) => `
            <article class="dish" data-cat="${cat.id}" data-idx="${idx}" tabindex="0" role="button" aria-label="Ver detalle de ${d.name}">
              <div class="dish-banner">${photo(d.name)}${d.weight ? `<span class="weight">${d.weight}</span>` : ""}</div>
              <div class="dish-body">
                <div class="dish-top">
                  <h3 class="dish-name">${d.name} ${d.recommended ? "" : ""}</h3>
                  <span class="dish-price">${money(d.price)}</span>
                </div>
                <p class="dish-desc">${d.desc} ${d.spicy ? '<span class="spicy"></span>' : ""}</p>
              </div>
            </article>`).join("")}
        </div>
      </div>`;
    menuRoot.appendChild(sec);
  });

  /* ---------- Modal detalle + pedido por WhatsApp ---------- */
  const modalBg = document.getElementById("modal-bg");
  const modal = document.getElementById("modal");
  let lastFocus = null;

  function openModal(catId, idx) {
    const dish = DATA.dishes.filter((d) => d.cat === catId)[idx];
    if (!dish) return;
    lastFocus = document.activeElement;
    modal.innerHTML = `
      <div class="modal-art">${photoBig(dish.name)}</div>
      <h3>${dish.name}</h3>
      <p class="modal-price">${money(dish.price)} ${dish.weight ? "· " + dish.weight : ""}</p>
      <p>${dish.long}</p>
      <div class="modal-actions">
        <a class="btn-fire" target="_blank" rel="noopener" href="${waLink(`¡Hola Brasa! Quiero pedir/reservar: ${dish.name} (${money(dish.price)})`)}">Pedir por WhatsApp</a>
        <button class="btn-ghost" id="modal-close">Volver a la carta</button>
      </div>`;
    modalBg.classList.add("open");
    modal.querySelector("#modal-close").addEventListener("click", closeModal);
  }
  function closeModal() {
    modalBg.classList.remove("open");
    if (lastFocus) lastFocus.focus();
  }
  modalBg.addEventListener("click", (e) => e.target === modalBg && closeModal());
  document.addEventListener("keydown", (e) => e.key === "Escape" && closeModal());

  menuRoot.addEventListener("click", (e) => {
    const card = e.target.closest(".dish");
    if (card) openModal(card.dataset.cat, +card.dataset.idx);
  });
  menuRoot.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".dish");
      if (card) { e.preventDefault(); openModal(card.dataset.cat, +card.dataset.idx); }
    }
  });

  /* ---------- Chips ---------- */
  catScroll.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (chip) document.getElementById(chip.dataset.target)?.scrollIntoView({ behavior: "smooth" });
  });
  const setActive = (id) => catScroll.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c.dataset.target === id));
  const sectionIO = new IntersectionObserver(
    (entries) => entries.forEach((en) => en.isIntersecting && setActive(en.target.id)),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  requestAnimationFrame(() => menuRoot.querySelectorAll(".menu-section").forEach((s) => sectionIO.observe(s)));

  /* ---------- Aparición de tarjetas ---------- */
  const dishIO = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("visible"); dishIO.unobserve(en.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll(".dish").forEach((d) => dishIO.observe(d));

  /* ---------- Header scroll ---------- */
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", scrollY > 30);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Menú móvil ---------- */
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav-desktop");
  burger.addEventListener("click", () => { burger.classList.toggle("open"); nav.classList.toggle("mobile-open"); });
  nav.addEventListener("click", (e) => { if (e.target.tagName === "A") { burger.classList.remove("open"); nav.classList.remove("mobile-open"); } });

  /* ---------- Brasas ascendentes en el hero ---------- */
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const box = document.getElementById("embers");
    setInterval(() => {
      if (document.hidden || box.childElementCount > 18) return;
      const e = document.createElement("span");
      e.className = "ember-dot";
      const s = 3 + Math.random() * 4;
      e.style.width = e.style.height = s + "px";
      e.style.left = Math.random() * 100 + "%";
      e.style.setProperty("--sway", (Math.random() * 120 - 60) + "px");
      e.style.animationDuration = 4 + Math.random() * 5 + "s";
      e.addEventListener("animationend", () => e.remove());
      box.appendChild(e);
    }, 500);
  }
})();
