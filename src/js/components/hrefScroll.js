import Navigation from "./navigation";
import { activeClassName } from "../utils/config";

class HrefScrollSmooth extends Navigation {
  allLinks = document.querySelectorAll(`[href^='#']`);

  init() {
    this._hrefScrollHandler();
  }

  _hrefScrollHandler() {
    this.allLinks.forEach((link) =>
      link.addEventListener("click", this._smoothScroll)
    );
  }

  _smoothScroll = (e) => {
    e.preventDefault();
    const href = e.target.hash;

    document.querySelector(href).scrollIntoView({ behavior: "smooth" });

    if (this.navList.classList.contains(activeClassName)) {
      this.toggleNavigation(e);
    }
  };

  _closeHamburgerMenu = () => {};
}

export default HrefScrollSmooth;
