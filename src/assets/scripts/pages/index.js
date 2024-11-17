const CircleText = document.querySelector("#circular-text");
const rotate = new CircleType(CircleText);

// animation

heroAnimation();
statisticsAnimation();
servicesAnimation();
featuresAnimation();
parterAnimation();
blogAnimation();

function heroAnimation() {
  const hero = document.querySelector("#hero");

  gsap.to(hero.querySelector("#circular-text"), {
    rotate: -360,

    scrollTrigger: {
      trigger: hero,
      start: "top top",
      scrub: 0.5,
    },
  });
  gsap.to(hero.querySelectorAll(".move-up-text"), {
    y: -400,
    opacity: 0,

    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "+=100%",
      // end: "bottom top",
      scrub: 0.5,
      stagger: 0.25,
    },
  });
  gsap.to(hero.querySelectorAll(".move-up-image"), {
    y: -1000,
    opacity: 0,

    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "+=100%",
      // end: "bottom top",
      scrub: 0.5,
      stagger: 0.25,
    },
  });

  const titleWords = hero.querySelectorAll(".title-word");
  const lastTitleWord = titleWords[titleWords.length - 1];
  const secondLastTitleWord = titleWords[titleWords.length - 2];

  const lastTitleWordRect = lastTitleWord.getBoundingClientRect();
  const secondLastTitleWordRect = secondLastTitleWord.getBoundingClientRect();
  const totalHeight = lastTitleWordRect.height + secondLastTitleWordRect.height;
  const heroRect = hero.getBoundingClientRect();
  const distanceFromBottom =
    heroRect.bottom - lastTitleWordRect.bottom + totalHeight;

  gsap.to(titleWords, {
    opacity: 0,
    y: distanceFromBottom,

    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "+=100%",
      // end: "bottom top",
      scrub: 0.5,
    },
  });

  const titleElement = document.querySelector(".the-title");
  const statisticsElement = document.querySelector("#statistics");
  const titleRect = titleElement.getBoundingClientRect();
  const statisticsRect = statisticsElement.getBoundingClientRect();
  const distance = titleRect.top - statisticsRect.top + titleRect.height;

  gsap.from(titleElement, {
    y: -distance,
    opacity: 0,

    scrollTrigger: {
      trigger: statisticsElement,
      start: "top bottom",
      end: "top center",
      end: "+=100%",
      scrub: 0.5,
    },
  });
}

function statisticsAnimation() {
  const section = document.querySelector("#statistics");
  const statisticsList = section.querySelector(".statistics-list");

  const introTl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 25%",
    },
  });
  introTl
    .from(
      section.querySelector(".text"),
      {
        yPercent: 150,
        duration: 1,
      },
      "+10%",
    )
    .from(
      section.querySelector(".statistics-list"),
      {
        yPercent: 50,
        duration: 1,
      },
      "+10%",
    )
    .from(
      section.querySelector("#logo-shape"),
      {
        opacity: 0,
        duration: 1,
      },
      "+10%",
    );

  const mm = gsap.matchMedia();
  mm.add("(max-width: 1023px)", () => {
    const marqueeTl = gsap.timeline({
      scrollTrigger: {
        trigger: statisticsList,
        start: "top center",
        end: "+=100%",
        pin: true,
        scrub: 0.5,
      },
    });

    marqueeTl.to(statisticsList, {
      x: () => statisticsList.offsetWidth - statisticsList.scrollWidth,
      ease: "none",
    });
  });

  mm.add("(min-width: 1024px)", () => {
    const marqueeTl = gsap.timeline({
      scrollTrigger: {
        trigger: statisticsList,
        start: "top bottom",
        scrub: 1,
      },
    });

    marqueeTl
      .to(statisticsList, {
        x: () => statisticsList.offsetWidth - statisticsList.scrollWidth,
        ease: "none",
      })
      .to(
        section.querySelector("#logo-shape"),
        {
          xPercent: 125,
        },
        "<<",
      );
  });
}

function servicesAnimation() {
  const section = document.querySelector("#services");
  const services = section.querySelectorAll(".service");

  gsap
    .matchMedia()
    .add("(max-width: 1023px)", () => {
      services.forEach((service) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: service,
              start: "top 25%",
            },
          })
          .fromTo(
            service.querySelector(".service__content"),
            {
              opacity: 0,
            },
            {
              opacity: 1,
            },
          );
      });
    })
    .add("(min-width: 1024px)", () => {
      services.forEach((service) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: service,
              start: "top center",
              scrub: true,
            },
          })
          .to(service.querySelector(".inner-line"), {
            height: "100%",
          });
      });
    });

  // -----------------------

  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  gsap
    .matchMedia()
    .add("(max-width: 1023px)", () => {
      canvas.width = 425;
      canvas.height = 425;
    })
    .add("(min-width: 1024px)", () => {
      canvas.width = 667;
      canvas.height = 667;
    });

  const frameCount = 170;
  const currentFrame = (index) =>
    `./assets/images/toWEBP/${index.toString().padStart(4, "0")}.webp`;
  const images = [];
  const chanceImages = {
    frame: 0,
  };
  const m = document.createElement("img");
  m.src = "";

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i + 1);
    images.push(img);
  }

  images[0].onload = render;
  // images.forEach((img) => {
  //   img.addEventListener("load", () => {
  //     // Check all images loaded before proceeding
  //   });
  // });

  ScrollTrigger.create({
    trigger: section.querySelector(".services-list"),
    start: "top bottom",
    end: "bottom bottom+=5%",
    scrub: true,
    pin: section.querySelector(".canvas-wrapper"),
    pinType: "transform",
    pinSpacing: false,
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: section.querySelector(".services-list"),
        start: "top 80%",
        end: "top 25%",
        scrub: true,
      },
    })
    .from(canvas, {
      opacity: 0,
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: section.querySelector(".services-list"),
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    })
    .to(chanceImages, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render,
    });

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(
      images[Math.floor(chanceImages.frame)],
      0,
      0,
      canvas.width,
      canvas.height,
    );
    context.globalCompositeOperation = "xor";
    context.drawImage(m, 0, 0, canvas.width, canvas.height);
  }
}

function featuresAnimation() {
  const section = document.querySelector("#features");
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 25%",
    },
  });

  tl.from(section.querySelector("h2"), {
    opacity: 0,
    yPercent: 50,
    duration: 2,
    ease: "power3.out",
  });

  const features = section.querySelectorAll(".feature");
  features.forEach((feature) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: feature,
          start: "top center",
        },
      })
      .from(feature.querySelectorAll(".feature__content > *"), {
        opacity: 0,
        yPercent: 50,
        duration: 2,
        stagger: 0.5,
        ease: "power3.out",
      })
      .from(
        feature.querySelector(".feature__img"),
        {
          opacity: 0,
          yPercent: 25,
          duration: 1,
          ease: "power3.out",
        },
        "<+25%",
      )
      .from(
        feature.querySelector(".feature__shape"),
        {
          opacity: 0,
          yPercent: 25,
          duration: 1,
          ease: "power3.out",
        },
        "<+25%",
      );

    gsap.matchMedia().add("(min-width: 1024px)", () => {
      gsap.to(feature.querySelector(".feature__content"), {
        scrollTrigger: {
          trigger: feature,
          start: "bottom bottom",
          scrub: 1,
        },
        yPercent: -25,
        opacity: 0,
        ease: "power3.inOut",
      });
      gsap.to(feature.querySelector(".feature__img-wrapper"), {
        scrollTrigger: {
          trigger: feature,
          start: "bottom bottom",
          scrub: 0.5,
        },
        yPercent: -50,
        opacity: 0,
        ease: "power3.inOut",
      });
    });
  });
}

function parterAnimation() {
  const section = document.querySelector("#partner");
  const marquee = section.querySelector(".marquee");

  const mm = gsap.matchMedia();
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 75%",
    },
  });

  tl.from(section.querySelectorAll("header > *"), {
    opacity: 0,
    yPercent: 25,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
  }).from(
    marquee,
    {
      opacity: 0,
      yPercent: 50,
    },
    "<+20%",
  );

  mm.add("(min-width: 1024px) and (max-width: 1439px)", () => {
    gsap.to(marquee, getMarqueeOpts(marquee));
  });

  mm.add("(min-width: 1440px)", () => {
    gsap.to(marquee, getMarqueeOpts(section));
  });

  function getMarqueeOpts(trigger) {
    return {
      scrollTrigger: {
        trigger,
        start: "center center",
        end: "+=250%",
        pin: true,
        // pinType: "transform",
        scrub: 0.5,
      },
      x: () => marquee.offsetWidth - marquee.scrollWidth,
      ease: "none",
    };
  }
}

function blogAnimation() {
  const section = document.querySelector("#blog");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
      },
    })
    .from(section.querySelector("h2"), {
      opacity: 0,
      yPercent: 50,
      duration: 2,
      ease: "power3.out",
    })
    .from(
      section.querySelector(".blogs"),
      {
        // opacity: 0,
        yPercent: 50,
        duration: 2,
        ease: "power2.out",
        // stagger: 0.25,
      },
      "<+10%",
    )
    .from(
      section.querySelector(".more-articles"),
      {
        // opacity: 0,
        yPercent: 50,
      },
      "<+20%",
    );

  // -----------

  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: "bottom center",
        end: "bottom +=05%",
        scrub: 1,
      },
    })
    .to(section.querySelectorAll(".more-articles img"), {
      ease: "power3.inOut",
      yPercent: -50,
      opacity: 0,
      stagger: {
        amount: 0.15,
        from: "center",
      },
    })
    .fromTo(
      section.querySelector(".more-articles"),
      {
        opacity: 1,
      },
      {
        opacity: 0,
        ease: "power3.inOut",
      },
      "<",
    );
}
