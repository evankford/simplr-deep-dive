import * as basicLightbox from "basiclightbox";

export default class SignupPopup {
  constructor(el) {
    this.el = el;
    this.content = this.el.querySelector("[data-signup-form]");

    this.close = this.closePopup.bind(this);
    this.open = this.openPopup.bind(this);
    this.resize = this.checkSize.bind(this);

    this.init();
  }

  init() {
    this.findButtons();
    this.addListeners();
  }

  createPopup() {
    if (!this.popup) {
      this.popup = basicLightbox.create(this.content);
    }
  }

  checkSize() {
    if (window.width >= 820) {
      this.close();
    }
  }

  findButtons() {
    this.openers = document.querySelectorAll('[data-signup-popup-open]')
    this.closers = this.el.querySelectorAll("[data-close]");
  }

  addListeners() {
    this.openers.forEach(el => {
      el.addEventListener("click", e => {
        e.preventDefault();
        this.open();
      });
    });
    this.closers.forEach(el => {
      el.addEventListener("click", e => {
        e.preventDefault();
        this.close();
      });
    });
    window.addEventListener("resize", this.resize);
  }

  closePopup() {
    this.popup.close();
  }
  openPopup() {
    if (!this.popup) {
      this.createPopup();
    }
    this.popup.show();
  }
}
