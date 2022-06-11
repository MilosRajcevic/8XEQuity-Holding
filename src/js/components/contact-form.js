class ContactForm {
  constructor() {
    this.form = document.querySelector('[data-contact-form]');
  }

  init() {
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      fetch('/ContactApi/Contact', {
        method: 'POST',
        body: new FormData(e.target),
      }).then(response =>
        response.text().then(html => {
          this.form.parentNode.replaceChild(
            new DOMParser().parseFromString(html, 'text/html').body.firstChild,
            this.form
          );
          const recaptchaField = document.querySelector('.g-recaptcha');
          if (recaptchaField) {
            grecaptcha.render(document.querySelector('.g-recaptcha'));
          }
        })
      );
    });
  }
}

export default ContactForm;
