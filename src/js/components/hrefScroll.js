import Navigation from "./navigaiton";
import { activeClassName } from "../utils/config";

class HrefScrollSmooth extends Navigation {
  allLinks = document.querySelectorAll(`[href^='#']`);

  init() {
    this.hrefScrollHanderl();
  }

  hrefScrollHanderl() {
    this.allLinks.forEach((link) =>
      link.addEventListener("click", this._smothScroll)
    );
  }

  _smothScroll = (e) => {
    e.preventDefault();
    const href = e.target.hash;

    document.querySelector(href).scrollIntoView({ behavior: "smooth" });

    if (this.navList.classList.contains(activeClassName)) {
      this.openNavigation(e);
    }
  };

  _closeHamburgerMenu = () => {};
}

export default HrefScrollSmooth;
