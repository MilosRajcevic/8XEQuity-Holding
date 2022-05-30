class ContactForm {
  constructor(){
    this.form = document.querySelector('[data-contact-form]');
  }

  init() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      fetch('/ContactApi/Contact',
        {
          method: 'POST',
          body: new FormData(e.target)
        })
        .then(response => response.text()
          .then(html => this.form.parentNode.replaceChild(new DOMParser().parseFromString(html, 'text/html').body.firstChild, this.form)));
      });
    }
}

export default ContactForm;
