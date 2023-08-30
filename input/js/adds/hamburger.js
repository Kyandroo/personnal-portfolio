const hamburgerMenu = () => {
  const $nav = document.getElementById("hamb-nav");
  const $openNav = document.getElementById("menu-open");
  const $closeNav = document.getElementById("menu-close");

  $openNav.addEventListener("click", () => {
    $nav.classList.remove("invisible");
    $openNav.classList.add("invisible");
  });

  $closeNav.addEventListener("click", () => {
    $nav.classList.add("invisible");
    $openNav.classList.remove("invisible");
  });
};

export default hamburgerMenu;
