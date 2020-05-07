import Swiper from 'swiper';

export default class contentSlider {
  constructor(el) {
    this.el = el;
    ////// Swiper for slideshow
    this.dataCurrent = this.el.querySelectorAll('[data-current]');

    this.initSliders();
  }

  initSliders() {
    this.swiper = new Swiper(this.el, {
      slidesPerView: 1,
      centeredSlides: true,
      centerInsufficientSlides: true,
      spaceBetween: 120,
      effect: 'fade',
      threshold: 6,
      speed: 800,
      autoHeight: true,
      navigation: {
        nextEl: this.el.querySelector('.swiper-button-next'),
        prevEl: this.el.querySelector('.swiper-button-prev'),
      },
      coverflowEffect: {
        rotate: 30,
        slideShadows: false,
      },

      init: false,
      breakpointsInverse: {
        1000: {
          spaceBetween: 80,
        },
        800: {
          spaceBetween: 40,
          autoHeight: false,
          effect: 'coverflow',
        },
      },
    });

    if (this.dataCurrent.length) {
      this.swiper.on('slideChange', () => {
        this.dataCurrent.forEach(el=> {
          el.innerHTML = this.swiper.activeIndex + 1;
        })
      })
    }

    setTimeout(() => {
      this.swiper.init();
    }, 200);
    window.addEventListener('load', () =>{
      this.swiper.update();
    })
    window.addEventListener('barbaFinish', () =>{
      setTimeout(() => {
        // this.swiper.update();
        this.swiper.updateAutoHeight();
      }, 100);
    })
  }
}
