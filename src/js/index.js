import Navigation from './components/navigation';
import HrefScrollSmooth from './components/hrefScroll';
import Observer from './components/observer';
import LazyLoadImages from './components/lazyLoadImages';
import ContactForm from './components/contact-form';

function init() {
  new Navigation().init();
  new HrefScrollSmooth().init();
  new Observer().init();
  new LazyLoadImages().init();
  new ContactForm().init();
}

init();
