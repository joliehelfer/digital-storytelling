gsap.to(".parallax-element", {
  scrollTrigger: {
    trigger: ".parallax-container",
    pin: true,
    scrub: 1,
  },
  y: -200,
});

gsap.to("#paysage", {
  scrollTrigger: {
    trigger: ".container-paysage",
    pin: true,
    scrub: 1,
  },
  left: "0",
});

gsap.to("#perso", {
  scrollTrigger: {
    trigger: ".container-cimetiere",
    pin: true,
    scrub: 1,
  },
  transform: "scale(0.7)",
});

gsap.to("#lune", {
  scrollTrigger: {
    trigger: ".container-lune",
    start: "top top",
    pin: true,
    scrub: 1,
  },
  bottom: "0",
});

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

gsap.to("#rect", {
  duration: 10,
  motionPath: {
    path: "#path",
    align: "#path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
  scrollTrigger: {
    trigger: "#path", // l'élément qui déclenche l'animation
    start: "top center", // point de départ de l'animation
    end: "bottom+=1000px top", // point de fin de l'animation
    scrub: 2, // synchronise l'animation avec le défilement
    // markers: true, // pour visualiser les points de déclenchement
  },
});

gsap.to("#miroir", {
  scrollTrigger: {
    trigger: ".container-miroir",
    start: "center bottom",
    scrub: 1,
    markers: true,
  },
  x: "60%",
});

gsap.to("#img-2", {
  scrollTrigger: {
    trigger: ".container-img-2",
    start: "center bottom",
    scrub: 1,
    markers: true,
  },
  x: "-40%",
});

gsap.to("#img-3", {
  scrollTrigger: {
    trigger: ".container-img-3",
    start: "center bottom",
    scrub: 1,
    markers: true,
  },
  x: "-20%",
});

gsap.to("#img-4", {
  scrollTrigger: {
    trigger: ".container-img-4",
    start: "center bottom",
    scrub: 1,
    markers: true,
  },
  x: "0",
});

gsap.to("#img-5", {
  scrollTrigger: {
    trigger: ".container-img-5-6-7",
    start: "center bottom",
    scrub: 1,
    markers: true,
  },
  top: "0",
});
// AK
gsap.to("#img-6", {
  scrollTrigger: {
    trigger: ".container-img-5-6-7",
    start: "center bottom",
    scrub: 1,
    markers: true,
  },
  top: "0",
});

gsap.to("#img-7", {
  scrollTrigger: {
    trigger: ".container-img-5-6-7",
    start: "center bottom",
    scrub: 1,
    markers: true,
  },
  top: "0",
});

gsap.to("#img-8", {
  scrollTrigger: {
    trigger: ".container-img-8",
    start: "center bottom",
    scrub: 1,
    markers: true,
  },
  top: "0%",
});
