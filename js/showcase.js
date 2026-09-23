// ZENITH Studio — Showcase: interacciones globales
(() => {
  // Navbar con fondo al hacer scroll
  const navbar = document.querySelector(".navbar");
  const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Menú móvil
  const burger = document.querySelector(".hamburger");
  const menu = document.querySelector(".nav-links");
  if (burger && menu) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("open");
      menu.classList.toggle("open");
      document.body.style.overflow = menu.classList.contains("open") ? "hidden" : "";
    });
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        burger.classList.remove("open");
        menu.classList.remove("open");
        document.body.style.overflow = "";
      })
    );
  }

  // Animaciones de aparición (IntersectionObserver)
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
