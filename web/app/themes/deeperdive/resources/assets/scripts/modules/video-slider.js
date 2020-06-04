import contentSlider from '../components/content-slider';

const vidOnscreen =  new Event('onscreen', {'bubbles':true, 'cancelable':false});
const vidOffscreen =  new Event('offscreen', {'bubbles':true, 'cancelable':false});

class videoSwiper  extends contentSlider{
  constructor(el) {
    super(el, el);
       this.swiper.on('slideChange', () => {
      //This is now the swiper instance
      this.swiper.slides[this.swiper.previousIndex].querySelector('[data-module="vidbox"]').dispatchEvent(vidOffscreen)
      setTimeout(() => {
        this.swiper.slides[this.swiper.activeIndex].querySelector('[data-module="vidbox"]').dispatchEvent(vidOnscreen)
      }, 100);

    })

    this.swiper.on('init', () => {
      //This is now the swiper instance
      if (this.swiper.slides[this.swiper.activeIndex]) {
        this.swiper.slides[this.swiper.activeIndex].querySelector('[data-module="vidbox"]').dispatchEvent(vidOnscreen);
      }
    })

    window.addEventListener('barbaFinish', ()=>{
      this.swiper.slides[this.swiper.activeIndex]
        .querySelector('[data-module="vidbox"]')
        .dispatchEvent(vidOnscreen);
     })
  }
}

export default videoSwiper;