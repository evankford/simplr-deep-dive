import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax , Power2} from "gsap"; // Also works with TweenLite and TimelineLite
// import { DrawSVGPlugin } from './js/vendor/DrawSVGPlugin';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

// import "Scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";


export default class Animator {
  constructor(el) {
    this.el = el
      this.controller = new ScrollMagic.Controller()
      this.init();
    // ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
  }

  start() {
    // console.log('initiating')
    if (!this.started) {
      this.started = true;
      // this.basics();
    }
  }
  stop() {
    console.log('stopping')
  }
  reset() {
    console.log('resetting')
  }

  init() {
     this.basics();
  }


  basics() {
    $(this.el).find('[data-anim-in]').each((childI, el)=> {
      var mainTl = new TimelineMax();
      var delay = childI*.2000;
      mainTl.from(el, 0.5, {autoAlpha: 0, y: '40px', ease: Power2.easeInOut}).delay(delay);
      new ScrollMagic.Scene({
        triggerElement: el,
        triggerHook: 0.85,
        reverse: false
      })
        .setTween(mainTl)
        .addTo(this.controller);
    })


    $(this.el).find('[data-anim-in-children]').each((childI, el)=> {
      var childTl = new TimelineMax();
      var delay = childI*.2000;
      var children = $(el).children()
      childTl.staggerFrom(children, 0.5,  {autoAlpha: 0, y: '40px', ease: Power2.easeInOut}, 0.15).delay(delay)
      new ScrollMagic.Scene({
        triggerElement: el,
        triggerHook: 0.95,
        reverse: false
      })

        .setTween(childTl)
        .addTo(this.controller);
    })

  }

}