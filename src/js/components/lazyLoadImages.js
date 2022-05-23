import LazyLoad from "vanilla-lazyload";

class LazyLoadImages {
  lazyLoadInstance = {};

  init() {
    this.lazyLoadInstance = new LazyLoad({
      unobserve_entered: true,
    });
  }

  update = () => this.lazyLoadInstance.update();
}

export default LazyLoadImages;
