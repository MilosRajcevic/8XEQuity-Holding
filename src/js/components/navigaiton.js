import { activeClassName } from "../utils/config";

class Navigation {
  hamburgerMenu = document.querySelector(".js-btn-hamburger");
  overlay = document.querySelector(".js-overlay");
  navList = document.querySelector(".js-nav-list");
  stickyNav = document.querySelector(".js-nav");
  html = document.querySelector(".js");
  lastScroll = 0;

  init() {
    this.stickyNavHandler();
    if (window.screen.width < 1100) this.hamburgerMenuHandler();
  }

  hamburgerMenuHandler() {
    this.hamburgerMenu.addEventListener("click", this.openNavigation);
  }

  stickyNavHandler() {
    window.addEventListener("scroll", this._stickyNavigation);
  }

  openNavigation = (e) => {
    [this.hamburgerMenu, this.overlay, this.navList].forEach((item) =>
      item.classList.toggle(activeClassName)
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
