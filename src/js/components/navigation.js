import { activeClassName } from "../utils/config";

class Navigation {
  hamburgerMenu = document.querySelector(".js-btn-hamburger");
  overlay = document.querySelector(".js-overlay");
  navList = document.querySelector(".js-nav-list");
  stickyNav = document.querySelector(".js-nav");
  html = document.querySelector(".js");
  lastScroll = 0;

  init() {
    window.addEventListener("scroll", this._stickyNavigation);
    if (window.screen.width < 1100)
      this.hamburgerMenu.addEventListener("click", this.toggleNavigation);
  }

  toggleNavigation = (e) => {
    [this.hamburgerMenu, this.overlay, this.navList, this.stickyNav].forEach(
      (item) => item.classList.toggle(activeClassName)
    );
    this.html.classList.toggle("no-scroll");
  };

  _stickyNavigation = () => {
    window.scrollY > this.lastScrollTop
      ? this.stickyNav.classList.add("nav__sticky")
      : this.stickyNav.classList.remove("nav__sticky");

    this.lastScrollTop = window.scrollY;
  };
}

export default Navigation;
