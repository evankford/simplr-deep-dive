export default class MobileMenu {
  constructor(el) {
    this.el = el;
    this.close = this.closeMenu.bind(this);
    this.open = this.openMenu.bind(this)
    this.resize = this.checkSize.bind(this);


    this.init();
  }

  init() {
    this.findButtons();
    this.addListeners();
  }

  checkSize() {
    if (window.width >= 820) {
      this.close();
    }
  }

  findButtons() {
    this.openers = this.el.querySelectorAll('[data-open="mobile-menu"]')
    this.closers = this.el.querySelectorAll('[data-close="mobile-menu"]')
    this.menuButtons = this.el.querySelectorAll('.menu-item a');
  }

  addListeners() {
    this.openers.forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        this.open();
      })
    });
    this.closers.forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        this.close();
      })
    });
    this.menuButtons.forEach(el => {
      el.addEventListener('click', () => {
        this.close();
      })
    });
    window.addEventListener('resize', this.resize);
  }

  closeMenu() {
    this.el.classList.remove('open');
  }
  openMenu() {
    this.el.classList.add('open');
  }
}