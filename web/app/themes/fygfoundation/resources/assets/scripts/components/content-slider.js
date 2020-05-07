import Swiper from 'swiper';
import queryString from 'query-string';

export default class contentSlider {
  constructor(el) {
    this.el = el.querySelector('[data-parent-slide]');
    this.view = this.el.closest('.view');
    this.thumbEl = el.querySelector('[data-thumb-slider]');
    this.wrap = el;
    ////// Swiper for slideshow
    this.thumbOptions = false;
    this.perview = 1;
    this.initialSlide = 0;

    this.dataCurrent = this.wrap.querySelectorAll('[data-current]');
    this.pause = this.pauseSliders.bind(this)

    this.initSliders();
    this.setupListeners();
    this.initLinks();
    this.checkForInitial();
  }

  setupListeners()  {
    var self = this;
    this.view.addEventListener('barbaOffscreen', self.pause);
  }

  pauseSliders() {
    if (this.swiper) {
      this.swiper.autoplay.stop()
    }
  }

  checkForInitial() {
    var parsed = queryString.parse(window.location.search);
    if (parsed.as) {
      var as = this.wrap.querySelector('[data-post-id="' + parsed.as + '"]');
      console.log(parsed.as);
      if (as) {
        var url = as.getAttribute('data-permalink');
        window.history.replaceState(false, false, url);
        this.initialSlide = as.getAttribute('data-loop-index')
      }
    }
  }

  initSliders() {
    if (this.thumbEl) {
      this.thumbSwiper = new Swiper(this.thumbEl, {
        centeredSlides: false,
        slidesPerView: 1.35,
        loop: false,
        slidesOffsetAfter: 100,
        threshold: 10,
        initialSlide: this.initialSlide,
        spaceBetween: 15,
        speed: 800,
        effect: 'slide',
        slideToClickedSlide: true,
        navigation: false,
        breakpoints: {
          760: {
            slidesPerView: 1.9,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 2.2,
            spaceBetween: 35,
            slidesOffsetAfter: 200,
          },
        },
      });

      this.thumbOptions = {
        swiper: this.thumbSwiper,
      };
    }

    this.swiper = new Swiper(this.el, {
      slidesPerView: 1,
      centeredSlides: true,
      centerInsufficientSlides: true,
      effect: 'slide',
      threshold: 6,
      initialSlide: this.initialSlide,
      speed: 800,
      virtualTranslate: true,
      autoHeight: true,
      navigation: {
        nextEl: this.el.querySelector('.swiper-button-next'),
        prevEl: this.el.querySelector('.swiper-button-prev'),
      },
      coverflowEffect: {
        rotate: 30,
        slideShadows: false,
      },
      thumbs: this.thumbOptions,
      init: false,
    });

    if (this.dataCurrent.length) {
      this.swiper.on('slideChange', () => {
        this.dataCurrent.forEach((el) => {
          el.innerHTML = this.swiper.activeIndex + 1;
        });

        if (this.thumbSwiper) {
          this.thumbSwiper.slideTo(this.swiper.activeIndex);
        }
      });
    }

    setTimeout(() => {
      this.swiper.init();
    }, 200);
    window.addEventListener('load', () => {
      this.swiper.update();
    });
    this.view.addEventListener('barbaFinish', () => {
      setTimeout(() => {
        // this.swiper.update();
        if (this.thumbSwiper) {
          this.thumbSwiper.update();
        }

        this.swiper.updateAutoHeight();
      }, 100);
    });
  }

  initLinks() {
    this.parent = this.el.parentNode.parentNode;
    this.thumbs = this.wrap.querySelectorAll('[data-loop-index]');
    console.log(this.thumbs);

    if (this.thumbs) {
      this.thumbs.forEach((el) => {
        el.setAttribute('href', '#')
        el.addEventListener('click', (e) => {
          console.log(e);
          e.preventDefault();
          this.parent.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            this.swiper.slideTo(el.getAttribute('data-loop-index'));
            // window.history.replaceState(false, false, el.getAttribute('data-permalink'))
          }, 200);
        });
      });
  }
  }
}
