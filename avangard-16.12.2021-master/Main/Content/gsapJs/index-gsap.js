// gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();
tl.from("#mainContentPart div, #mainContentPart p, #mainContentPart h1", 1, {
  y: -20,
  stagger: 0.2,
  // x: -800,
  opacity: 0,
  ease: Expo.Out,
}).from(
  ".img-lines img",
  2,
  {
    y: 900,
    x: -600,
    stagger: 0.33,
  },
  "<="
);

gsap.from(".card", 1.5, {
  delay: 0.1,
  y: 300,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    // markers: true,
    start: "150 bottom",
    // markers: true,
    toggleActions: "play none none none",
    trigger: "#cardSection",
  },
});
gsap.from(".cardHead", 1.5, {
  x: -500,
  opacity: 0,
  scrollTrigger: {
    trigger: "#cardSection",
  },
});

gsap.from(".paraqraf", 1, {
  y: 100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#infoAndProblem",
    start: "150 bottom",
    toggleActions: "play none none none",
  },
});

gsap.from(".partnerInfo", 0.8, {
  opacity: 0,
  stagger: {
    each: 0.1,
    from: "top",
  },
  y: -20,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".partnersGrid",
    start: "center bottom",
    toggleActions: "play none none none",

    // ,
  },
});

gsap.from(".partnerHeading", 0.8, {
  opacity: 0,
  stagger: {
    each: 0.1,
    from: "top",
  },
  y: -100,
  x: -40,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".partners",
    start: "200 bottom",
    // ,
  },
});

gsap.from(".upsCalculatorImage", 0.7, {
  opacity: 0,
  stagger: {
    each: 0.2,
    from: "top",
  },
  y: -20,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".upsCalculator",
    start: "center bottom",
    toggleActions: "play none none none",
    // ,
  },
});

gsap.from(".upsCalculatorInfo", 0.7, {
  opacity: 0,
  stagger: {
    each: 0.2,
    from: "top",
  },
  y: -20,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".upsCalculator",
    start: "center bottom",
    toggleActions: "play none none none",
  },
});

gsap.from(".mapImage", 1, {
  opacity: 0,
  stagger: {
    each: 0.2,
    from: "top",
  },
  y: -20,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".map",
    start: "250 bottom",
    end: "450 top",
    toggleActions: "play none none none",
  },
});

gsap.from(".info", 0.7, {
  opacity: 0,
  stagger: {
    each: 0.2,
    from: "top",
  },
  y: -20,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".map",
  },
});

gsap.from(".questionContainer", 1, {
  opacity: 0,
  stagger: {
    each: 0.2,
    from: "top",
  },
  xPercent: -10,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".faq",
    start: "150 bottom",
    toggleActions: "play none none none",
  },
});

// gsap.from(".footerbg", 0.7, {
//   opacity: 0,
//   scale: 0.7,
//   scrollTrigger: {
//     trigger: ".footerbg",
//     start: "center center",
//   },
// });
