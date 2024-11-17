gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({ lerp: 0.1 });

lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// _________________________
// cursor
gsap.matchMedia().add("(min-width: 1024px)", () => {
  document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector("body");
    const customCursor = document.createElement("div");
    customCursor.classList.add("custom-cursor");
    container.prepend(customCursor);

    gsap.set(customCursor, { autoAlpha: 0 });

    function updateCursorPosition(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      gsap.to(customCursor, {
        x: mouseX,
        y: mouseY,
        autoAlpha: 1,
        duration: 0.15,
        ease: "none",
      });
    }

    document.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("scroll", updateCursorPosition);

    updateCursorPosition({
      clientX: window.innerWidth / 2,
      clientY: window.innerHeight / 2,
    });
  });
});

// _________________________
// mega menu
const serviceMenuBtn = document.querySelector(
  "[data-hs-overlay='#services-menu']",
);
window.addEventListener("load", () => {
  const { element } = HSOverlay.getInstance(serviceMenuBtn, true);

  element.on("open", () => handelOverlayOpen(true));
  element.on("close", () => handelOverlayOpen(false));
});

function handelOverlayOpen(isOpen) {
  // lenis[isOpen ? "stop" : "start"]();
  serviceMenuBtn.ariaPressed = isOpen ? "true" : "false";
}

// _________________________
// hero-single parallax
gsap.utils.toArray(".hero-single").forEach((container) => {
  const img = container.querySelector(".hero-single__bg");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      scrub: true,
      pin: false,
    },
  });

  tl.fromTo(
    img,
    {
      yPercent: -20,
      ease: "none",
    },
    {
      yPercent: 20,
      ease: "none",
    },
  );
});
