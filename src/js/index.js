import Navigation from "./components/navigaiton";
import HrefScrollSmooth from "./components/hrefScroll";
import Slider from "./components/slider";
import Observer from "./components/observer";

function init() {
  new Slider().init();
  new Navigation().init();
  new HrefScrollSmooth().init();
  new Observer().init();
}

init();
