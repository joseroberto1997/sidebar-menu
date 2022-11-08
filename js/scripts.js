window.addEventListener("load", () => {
  toggleMenu();
  changeMenuActive();
});

function toggleMenu() {
  const toggle = document.querySelector(".menu__header-toggle");
  toggle.addEventListener("click", (e) => {
    let aside = document.querySelector("aside");
    aside.classList.toggle("aside__toggle");

    let menuHeader = document.querySelector(".menu__header");
    menuHeader.classList.toggle("hide__logo");

    let logo = document.querySelector(".menu__header-logo img");
    logo.classList.toggle("hide");

    let spanLinks = document.querySelectorAll(".menu__nav-link span");
    spanLinks.forEach((span) => {
      span.classList.toggle("hide");
    });

    let footerUser = document.querySelector(".aside__footer-user");
    footerUser.classList.toggle("hide__avatar");

    let footerAvatar = document.querySelector(".aside__footer-info");
    footerAvatar.classList.toggle("hide");
  });
}

function changeMenuActive() {
  const menuItem = document.querySelectorAll(".menu__nav-item");

  menuItem.forEach((item) => {
    item.addEventListener("click", (e) => {
      let current = document.querySelector(".menu__nav-item.active-menu");

      if (current) {
        current.classList.remove("active-menu");
      }
      item.classList.add("active-menu");
    });
  });
}
