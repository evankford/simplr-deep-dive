import contentSlider from '../components/content-slider';

import { gsap, CSSPlugin } from 'gsap';

const plugins = [CSSPlugin];
if (!plugins) {
  console.log('Error loading plugins!');
}

const vidOnscreen = new Event('onscreen', { bubbles: true, cancelable: false });
const vidOffscreen = new Event('offscreen', {
  bubbles: true,
  cancelable: false,
});

const colorAccent = '#a61d2a';
const colorBodyText = '#0a0a0a';
const colorBody = '#f2efef';

class FrontSlider extends contentSlider {
  constructor(el) {
    super(el, el);

    this.change = this.handleChange.bind(this);
    this.swiper.on('slideChange', this.change);
    this.swiper.on('init', this.change);

    this.swiper.params.autoplay = {
      delay: 14000,
    };
    this.swiper.autoplay.start();
    window.addEventListener('barbaFinish', this.change);
  }

  handleChange() {
    var activeSlide = this.swiper.slides[this.swiper.activeIndex];
    if (activeSlide) {
      var activeIsVideo = activeSlide.classList.contains('type--video');
    }

    if (activeSlide && activeIsVideo) {
      gsap.to('body', 1, {
        '--color-text': colorBody,
        '--color-accent': colorAccent,
        '--color-background': colorBodyText,
      });
    } else {
      gsap.to('body', 1, {
        '--color-text': colorBodyText,
        '--color-accent': colorAccent,
        '--color-background': colorBody,
      });
    }

    if (activeSlide && activeSlide.querySelector('[data-module="vidbox"]')) {
      setTimeout(() => {
        activeSlide
          .querySelector('[data-module="vidbox"]')
          .dispatchEvent(vidOnscreen);
      }, 100);
    }
    if (
      this.swiper.slides[this.swiper.previousIndex] &&
      this.swiper.slides[this.swiper.previousIndex].querySelector(
        '[data-module="vidbox"]'
      )
    ) {
      this.swiper.slides[this.swiper.previousIndex]
        .querySelector('[data-module="vidbox"]')
        .dispatchEvent(vidOffscreen);
    }
  }
}

export default FrontSlider;
