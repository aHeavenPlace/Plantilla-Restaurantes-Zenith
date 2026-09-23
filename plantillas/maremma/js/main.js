// MAREMMA · Trattoria — lógica de la plantilla
(() => {
  const DATA = window.MENU_DATA;
  const money = (n) => n.toFixed(2).replace(".", ",") + " " + DATA.currency;

  /* ---------- Render carta estilo menú impreso ---------- */
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
          <span class="jp">${cat.it}</span>
          <h2>${cat.label}</h2>
          <div class="orn">— ❦ —</div>
        </div>
        <div class="dishes">
          ${dishes.map((d, idx) => `
            <article class="dish" data-cat="${cat.id}" data-idx="${idx}" tabindex="0" role="button" aria-label="Ver detalle de ${d.name}">
              <div class="dish-top">
                <h3 class="dish-name">${d.icon} ${d.name}</h3>
                <span class="dish-dots"></span>
                <span class="dish-price">${money(d.price)}</span>
              </div>
              <p class="dish-desc">${d.desc}</p>
              ${d.note ? `<span class="dish-note">${d.note}</span>` : ""}
            </article>`).join("")}
        </div>
      </div>`;
    menuRoot.appendChild(sec);
  });

  /* ---------- Popover postal ---------- */
  const overlay = document.getElementById("overlay");
  const pop = document.getElementById("card-pop");
  let lastFocus = null;

  function openPop(catId, idx) {
    const dish = DATA.dishes.filter((d) => d.cat === catId)[idx];
    if (!dish) return;
    lastFocus = document.activeElement;
    pop.innerHTML = `
      <div class="art">${dish.icon}</div>
      <h3>${dish.name}</h3>
      <p class="latina">${dish.it}</p>
      <p class="price">${money(dish.price)}</p>
      <p class="desc">${dish.long}</p>
      <button class="close" id="pop-close">Chiudi · Cerrar</button>`;
    overlay.classList.add("open");
    pop.classList.add("open");
    pop.querySelector("#pop-close").addEventListener("click", closePop);
  }
  function closePop() {
    overlay.classList.remove("open");
    pop.classList.remove("open");
    if (lastFocus) lastFocus.focus();
  }
  overlay.addEventListener("click", closePop);
  document.addEventListener("keydown", (e) => e.key === "Escape" && closePop());

  menuRoot.addEventListener("click", (e) => {
    const card = e.target.closest(".dish");
    if (card) openPop(card.dataset.cat, +card.dataset.idx);
  });
  menuRoot.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".dish");
      if (card) { e.preventDefault(); openPop(card.dataset.cat, +card.dataset.idx); }
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

  /* ---------- Aparición suave ---------- */
  const dishIO = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("visible"); dishIO.unobserve(en.target); }
  }), { threshold: 0.15 });
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
})();
