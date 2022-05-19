import Swiper, { Autoplay, Pagination } from "swiper";
import "swiper/css";

class Slider {
  swiper;

  init() {
    this._initSwiper();
  }

  _initSwiper() {
    this.swiper = new Swiper(".swiper", {
      modules: [Pagination, Autoplay],
      loop: true,

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

export default Slider;
