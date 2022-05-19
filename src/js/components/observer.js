import { activeClassName } from "../utils/config";

class Observer {
  allSections = document.querySelectorAll("[data-section]");

  init() {
    if (window.screen.width > 1100) this._observer();
  }

  _intersectingObserver(entries, observer) {
    const [entry] = entries;
    const intersectionSectionAtt = entry.target.getAttribute("data-section");
    const allNavItems = document.querySelectorAll("[data-nav]");

    allNavItems.forEach((item) => {
      const itemNavAtt = item.getAttribute("data-nav");
      item.classList.remove(activeClassName);
      if (intersectionSectionAtt === itemNavAtt)
        item.classList.add(activeClassName);
    });
  }

  _observer() {
    const sectionObserver = new IntersectionObserver(
      this._intersectingObserver,
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );
    this.allSections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }
}

export default Observer;
