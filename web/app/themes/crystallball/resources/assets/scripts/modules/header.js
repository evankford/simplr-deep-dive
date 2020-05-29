
import $ from 'jquery'
import Headroom from 'headroom.js';

export default class Header {
  constructor(el) {
    this.el = el;
    this.main = document.getElementById('MainContent')
    this.resize = this.handleSize.bind(this);
    this.showMenuBg = this.showBg.bind(this);
    this.hideMenuBg = this.hideBg.bind(this);
    this.root = document.documentElement;
    this.init();
  }
  init () {

    this.el.classList.add('js')
    // this.resize();
    this.initMenu();
    this.scrollToSection();

    // window.addEventListener('resize', this.resize)
    // window.addEventListener('load', this.resize)
  }

  handleSize() {
    var ht = this.el.offsetHeight;
    this.root.style.setProperty("--header-height", ht + "px");
    document.body.style.paddingTop = ht + "px";
    this.main.style.marginTop = -ht + "px";


    if (this.imageHeader.length && !this.imageHeader.hasClass('js-fixed')) {
      this.imageHeader.addClass('js-fixed');
      this.imageHeader.css({"margin-top": -ht, 'padding-top' : ht});
    }

    if (this.gradientHeader.length && !this.gradientHeader.hasClass('js-fixed')) {
      this.gradientHeader.addClass('js-fixed')
      this.gradientHeader.css({"margin-top": -ht, 'padding-top' : ht});
    }
  }



  initMenu() {
    this.setupMenuListeners();

    this.setupMobileMenu();
    this.setupHeadroom();
  }

  setupHeadroom() {

    this.headroom = new Headroom(this.el, {
      "offset": 100,
      "tolerance": 2,
    }).init();
  }

  setupMobileMenu() {
    this.mobileToggle = this.el.querySelector('[data-mobile-menu-toggle]')
    this.mobileMenu = document.querySelector('[data-mobile-menu]')


    if (this.mobileToggle && this.mobileMenu) {
      this.openIcon = this.el.querySelector('[data-open]')
      this.closeIcon = this.el.querySelector('[data-close]')
      var self = this;
      this.mobileToggle.addEventListener('click', function() {
        document.body.classList.toggle('mobileNavOpen');

        if (document.body.classList.contains('mobileNavOpen')) {
          self.closeIcon.setAttribute('aria-hidden', false);
          self.openIcon.setAttribute('aria-hidden', true);
        } else {
          self.closeIcon.setAttribute("aria-hidden", true);
          self.openIcon.setAttribute("aria-hidden", false);
        }
      })
    }
  }

  showBg()  {
    this.menubg.classList.add('bgVisible')
    this.menubg.classList.remove('bgHidden')
  }

  hideBg() {
    this.menubg.classList.add('bgHidden')
    this.menubg.classList.remove('bgVisible')
  }

  setupMenuListeners() {
    var self = this;

    self.menubg = document.querySelector('.header-bg');
    this.submenus = this.el.querySelectorAll('.menu-item-has-children');

    this.submenus.forEach(submenu => {
      submenu.addEventListener('mouseenter', self.showMenuBg)
      submenu.addEventListener('mouseleave', self.hideMenuBg)

      var submenuLink = submenu.firstElementChild;
      submenuLink.addEventListener('click', (e) => {
        console.log(e.target.closest('.submenu-toggled'))
        if (! e.target.closest('.submenu-toggled')) {
          e.preventDefault();
          self.openSubMenu(submenu);
          self.showBg()
        }
      })

      submenuLink.addEventListener('focus', () => {
        self.openSubMenu(submenu)
      })

      window.addEventListener('scroll', self.closeSubMenus)
    })
  }

  openSubMenu(el) {
    var self = this;
    setTimeout(() => {
      el.classList.add('submenu-toggled');
      window.addEventListener('click', self.closeSubMenus);
    }, 200);

  }

  closeSubMenus() {
    //Lazy jquery

    $('.submenu-toggled').removeClass('submenu-toggled')
  }

  clickOff(el) {
    window.addEventListener('click', (e) => {
      if (!el.contains(e.target) && el == e.target) {
        return closeSubMenus(el);
      }
    })
  }

  scrollToSection() {
    this.links = this.el.querySelectorAll('[href]');
    if (this.links)
 {

   this.links.forEach(element => {
      element.addEventListener('click', function (event) {
        let hashFinder = /\#(.*)/;
        let targEl = document.getElementById(hashFinder.exec(event.target.href)[1]);
        if (targEl) {
          event.preventDefault();
          targEl.scrollIntoView({ behavior: "smooth" });
          document.body.classList.remove('mobileNavOpen');
          menuButton.setAttribute('aria-expanded', 'false');
        }

      })
    })
    }
 }
}

