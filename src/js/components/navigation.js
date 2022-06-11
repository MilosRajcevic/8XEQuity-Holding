import { activeClassName } from '../utils/config';

class Navigation {
  hamburgerMenu = document.querySelector('.js-btn-hamburger');
  overlay = document.querySelector('.js-overlay');
  navList = document.querySelector('.js-nav-list');
  stickyNav = document.querySelector('.js-nav');
  html = document.querySelector('.js');
  lastScroll = 0;
  mainNavItems = document.querySelectorAll('.nav__item');

  init() {
    window.addEventListener('scroll', this._stickyNavigation);
    if (window.screen.width < 1100) {
      this.hamburgerMenu.addEventListener('click', this.toggleNavigation);
    }
  }

  toggleNavigation = e => {
    [this.hamburgerMenu, this.overlay, this.navList, this.stickyNav].forEach(
      item => item.classList.toggle(activeClassName)
    );

    if (this.navList.classList.contains(activeClassName)) {
      this._fadeInNavigation();
    } else this._clearAllVisibleCalsses();

    this.html.classList.toggle('no-scroll');
  };

  _stickyNavigation = () => {
    window.scrollY > this.lastScrollTop
      ? this.stickyNav.classList.add('nav__sticky')
      : this.stickyNav.classList.remove('nav__sticky');

    this.lastScrollTop = window.scrollY;
  };

  _fadeInNavigation() {
    this.mainNavItems.forEach((item, i) => {
      setTimeout(() => {
        item.classList.add(activeClassName);
      }, i * 100 + 300);
    });
  }

  _clearAllVisibleCalsses() {
    this.mainNavItems.forEach(item => item.classList.remove(activeClassName));
  }
}

export default Navigation;
