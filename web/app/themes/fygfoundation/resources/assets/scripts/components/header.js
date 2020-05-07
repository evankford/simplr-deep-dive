export default class Header {
  constructor(el) {
    this.el = el;
    this.main = document.getElementById('#mainContent')
    this.resize = this.handleSize.bind(this);
    // this.init();
  }
  init () {
    this.resize();
    window.addEventListener('resize', this.resize)
    window.addEventListener('load', this.resize)
  }

  handleSize() {
    var ht = this.el.offsetHeight;

    if (document.body.classList.contains('admin-bar')) {
       if (window.innerWidth > 600) {
         var adminHt = document.getElementById('wpadminbar').offsetHeight;
         this.el.style.position = 'fixed';
         this.el.style.top = adminHt + 'px';
        }
        // else {
        //   this.el.style.position = 'sticky';
        //   this.el.style.top = '0px';
        //   this.main.style.marginTop = '0px';
        //   return true;
        // }
      }
    this.main.style.marginTop = ht + 'px';
  }




  initMenu() {
    setupMenuListeners();

    setupMobileMenu();

  }


}

