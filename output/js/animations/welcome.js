import { gsap } from "gsap";

const welcomeLoad = (callback) => {
  const $circle = document.getElementById("welcome-circle");
  console.log($circle);

  const timeline = gsap.timeline({
    onComplete: () => {
      callback();
    },
  });

  timeline
      .set($swipeElement, { y: "100%" })
      .to($swipeElement, { y: "0%" })
      .to($swipeElement, { y: "-100%", delay: 0.3 })
      .to($swipeParent, { x: "100%", duration: 1, ease: "Expo.easeIn" });
};

export default welcomeLoad;
