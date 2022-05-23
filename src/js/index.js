import Navigation from "./components/navigation";
import HrefScrollSmooth from "./components/hrefScroll";
import Slider from "./components/slider";
import Observer from "./components/observer";
import LazyLoadImages from "./components/lazyLoadImages";

function init() {
  new Slider().init();
  new Navigation().init();
  new HrefScrollSmooth().init();
  new Observer().init();
  new LazyLoadImages().init();
}

init();
