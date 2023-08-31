import hamburgerMenu from "./adds/hamburger.js";
import digitalTimer from "./adds/contact-timer.js";

const $clock = document.getElementById("contact-clock");

hamburgerMenu();
if ($clock) {
  digitalTimer();
}
