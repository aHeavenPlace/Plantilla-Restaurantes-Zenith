// ZEST! · Juice Bar — lógica de la plantilla (menú + pedido con contador)
(() => {
  const DATA = window.MENU_DATA;

  /* ---------- Fotos de platos (Unsplash) con fallback elegante ---------- */
  const MAP = window.PHOTO_MAP || {};
  const FALLBACK = window.PHOTO_FALLBACK || (() => "linear-gradient(135deg,#2a2a2a,#1a1a1a)");
  function photo(name, icon) {
    const url = MAP[name];
    if (!url) return `<span class="dish-photo ph-broken" style="background:${FALLBACK(name)}">${icon}</span>`;
    return `<img class="dish-photo" src="${url}" data-name="${name}" data-icon="${icon}" alt="${name}" loading="lazy" decoding="async">`;
  }
  // Si una foto no carga (ID roto o sin conexión), se sustituye por el degradado de la plantilla.
  document.addEventListener("error", (e) => {
    const el = e.target;
    if (el.tagName === "IMG" && /^(dish-photo|drawer-photo|pop-photo)$/.test(el.className)) {
      const wrap = document.createElement("span");
      wrap.className = el.className + " ph-broken";
      wrap.style.background = window.PHOTO_FALLBACK ? PHOTO_FALLBACK(el.dataset.name || "") : "#222";
      wrap.textContent = el.dataset.icon || "";
      el.replaceWith(wrap);
    }
  }, true);

  const money = (n) => n.toFixed(2).replace(".", ",") + " " + DATA.currency;
  const waLink = (msg) => `https://wa.me/${DATA.whatsapp}?text=${encodeURIComponent(msg)}`;

  /* Carrito: { key: "cat-idx" -> qty } */
  const order = {};
  const dishOf = (key) => { const [cat, idx] = key.split("-"); return DATA.dishes.filter((d) => d.cat === cat)[+idx]; };
  const totalItems = () => Object.values(order).reduce((a, b) => a + b, 0);
  const totalPrice = () => Object.keys(order).reduce((sum, k) => sum + dishOf(k).price * order[k], 0);

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
        <div class="menu-head"><h2>${cat.label}</h2><p>${cat.note}</p></div>
        <div class="dishes">
          ${dishes.map((d, idx) => `
            <article class="dish" data-key="${cat.id}-${idx}" tabindex="0" aria-label="${d.name}, ${money(d.price)}">
              ${d.isNew ? '<span class="badge-new">Nuevo</span>' : ""}
              ${d.kcal ? `<span class="kcal">${d.kcal}</span>` : ""}
              <div class="dish-icon">${photo(d.name, d.icon)}</div>
              <h3 class="dish-name">${d.name}</h3>
              <p class="dish-desc">${d.desc}</p>
              <div class="dish-foot">
                <span class="dish-price">${money(d.price)}</span>
                <button class="add-btn" data-add="${cat.id}-${idx}" aria-label="Añadir ${d.name} al pedido">+</button>
              </div>
            </article>`).join("")}
        </div>
      </div>`;
    menuRoot.appendChild(sec);
  });

  /* ---------- Añadir / quitar del pedido ---------- */
  const favBadge = document.getElementById("fav-count");
  const favNum = document.getElementById("fav-num");
  const appbar = document.getElementById("appbar");
  const appNum = document.getElementById("app-num");
  const appTotal = document.getElementById("app-total");

  function refreshUI() {
    const n = totalItems();
    favNum.textContent = n;
    appNum.textContent = n;
    appTotal.textContent = money(totalPrice());
    appbar.classList.toggle("hidden", n === 0);
    favBadge.classList.remove("bump");
    void favBadge.offsetWidth; // reinicia animación
    favBadge.classList.add("bump");
    document.querySelectorAll(".add-btn").forEach((b) => {
      const q = order[b.dataset.add] || 0;
      b.classList.toggle("added", q > 0);
      b.textContent = q > 0 ? "✓" : "+";
    });
  }

  menuRoot.addEventListener("click", (e) => {
    const add = e.target.closest("[data-add]");
    if (add) {
      const k = add.dataset.add;
      order[k] = (order[k] || 0) + 1;
      refreshUI();
      return;
    }
    const card = e.target.closest(".dish");
    if (card && !e.target.closest("button")) openDetail(card.dataset.key);
  });
  menuRoot.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("dish")) {
      e.preventDefault(); openDetail(e.target.dataset.key);
    }
  });

  /* ---------- Detalle de producto ---------- */
  const overlay = document.getElementById("overlay");
  const sheet = document.getElementById("sheet");
  let mode = "detail"; // detail | order

  function openDetail(key) {
    const d = dishOf(key);
    if (!d) return;
    mode = "detail";
    sheet.innerHTML = `
      <div class="sheet-handle"></div>
      <div style="text-align:center;font-size:3rem">${d.icon}</div>
      <h3 style="text-align:center">${d.name}</h3>
      <p style="text-align:center;color:var(--muted);margin-bottom:.4rem">${d.long}</p>
      <p style="text-align:center;font-weight:800;font-size:1.3rem;margin-bottom:1.2rem">${money(d.price)} ${d.kcal ? '· <small style="color:var(--muted);font-size:.75rem">' + d.kcal + "</small>" : ""}</p>
      <div class="sheet-actions">
        <button class="btn-lime" data-add="${key}">Añadir al pedido</button>
        <button class="sheet-close" id="sheet-close">Seguir mirando</button>
      </div>`;
    overlay.classList.add("open");
    sheet.classList.add("open");
    sheet.querySelector("#sheet-close").addEventListener("click", closeSheet);
    sheet.querySelector("[data-add]").addEventListener("click", () => {
      order[key] = (order[key] || 0) + 1; refreshUI(); closeSheet();
    });
  }

  /* ---------- Panel del pedido ---------- */
  function openOrder() {
    mode = "order";
    renderOrder();
    overlay.classList.add("open");
    sheet.classList.add("open");
  }
  function renderOrder() {
    const keys = Object.keys(order).filter((k) => order[k] > 0);
    sheet.innerHTML = `
      <div class="sheet-handle"></div>
      <h3>Tu pedido 🧃</h3>
      ${keys.length === 0
        ? '<p class="order-empty">Aún no has añadido nada.<br>Toca el “+” de cualquier tarjeta.</p><button class="sheet-close" id="sheet-close">Cerrar</button>'
        : keys.map((k) => {
            const d = dishOf(k);
            return `<div class="order-line">
              <span class="oi">${d.icon}</span>
              <span class="on">${d.name}<br><span class="op">${money(d.price)} c/u</span></span>
              <span class="qty"><button data-dec="${k}">−</button><b>${order[k]}</b><button data-inc="${k}">+</button></span>
            </div>`;
          }).join("") +
          `<div class="order-total"><span>Total</span><span>${money(totalPrice())}</span></div>
           <div class="sheet-actions">
             <a class="wa-btn" target="_blank" rel="noopener" href="${waLink(orderMessage())}">Enviar pedido por WhatsApp 💬</a>
             <button class="sheet-close" id="sheet-close">Seguir mirando</button>
           </div>`}`;
    sheet.querySelector("#sheet-close").addEventListener("click", closeSheet);
    sheet.querySelectorAll("[data-inc]").forEach((b) => b.addEventListener("click", () => { order[b.dataset.inc]++; refreshUI(); renderOrder(); }));
    sheet.querySelectorAll("[data-dec]").forEach((b) => b.addEventListener("click", () => {
      const k = b.dataset.dec; order[k]--; if (order[k] <= 0) delete order[k];
      refreshUI(); renderOrder();
    }));
  }
  function orderMessage() {
    const lines = Object.keys(order).map((k) => `${order[k]}× ${dishOf(k).name} (${money(dishOf(k).price * order[k])})`);
    return `¡Hola Zest! Quiero pedir:\n${lines.join("\n")}\nTotal: ${money(totalPrice())}`;
  }
  function closeSheet() { overlay.classList.remove("open"); sheet.classList.remove("open"); }
  overlay.addEventListener("click", closeSheet);
  document.addEventListener("keydown", (e) => e.key === "Escape" && closeSheet());
  favBadge.addEventListener("click", openOrder);
  appbar.addEventListener("click", openOrder);

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

  /* ---------- Header scroll + menú móvil ---------- */
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", scrollY > 30);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav-desktop");
  burger.addEventListener("click", () => { burger.classList.toggle("open"); nav.classList.toggle("mobile-open"); });
  nav.addEventListener("click", (e) => { if (e.target.tagName === "A") { burger.classList.remove("open"); nav.classList.remove("mobile-open"); } });

  refreshUI();
})();
