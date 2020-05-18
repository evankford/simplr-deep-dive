import {gsap, Power2} from 'gsap'

export default class FooterDrawer {
  constructor(el) {
    this.el = el;
    this.button = document.querySelector("[data-open-footer-drawer]")
    this.closers = document.querySelectorAll('[data-close-footer-drawer]')

    this.open = this.openDrawer.bind(this)
    this.close = this.closeDrawer.bind(this)
    this.off = this.clickOff.bind(this)
    this.setupListeners();

  }

  setupListeners() {
    this.button.addEventListener('click', this.open)
    this.closers.forEach((closer)=> {
      closer.addEventListener('click', this.close)
    })
  }

  clickOff(event) {
    console.log(event.target.closest('.footer-drawer'));
    if (event.target.closest('.footer-drawer') == null) {
      this.close();
    }
  }

  openDrawer() {
    this.el.classList.add('open')
    console.log('opening Drawer')
    gsap.to('.footer-drawer', {y: '-100%', duration: 0.8, ease: Power2.easeInOut})
    setTimeout(() => {
      window.addEventListener('click', this.off)
    }, 300);

  }
  closeDrawer() {
    this.el.classList.add('open')
    gsap.to('.footer-drawer', {y: '1%', duration: 0.8, ease: Power2.easeInOut})
    window.removeEventListener('click', this.off)
  }
}