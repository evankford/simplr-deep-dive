
import $ from 'jquery';
import  { TimelineMax , TweenMax , Power2, CSSPlugin, gsap} from 'gsap';
import { DrawSVGPlugin } from "./DrawSVGPlugin";
import * as ScrollMagic from "ScrollMagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import "ScrollMagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
gsap.registerPlugin(DrawSVGPlugin);

const plugins = [CSSPlugin, DrawSVGPlugin];

export default class Animator {
  constructor(el) {
    this.el = el
      this.controller = new ScrollMagic.Controller()

  }

  start() {
    console.log('initiating')

    this.basics();
  }
  stop() {
    console.log('stopping')
  }


  basics() {
    console.log("running basc animation")
    $(this.el).find('[data-anim-in]').each((childI, el)=> {
      var mainTl = new TimelineMax();
      var delay = childI*.2000;
      console.log(delay);
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
    $(this.el).find('[data-anim-in-issue]').each((childI, el)=> {
      var childTl = new TimelineMax();
      var delay = childI * 0.2;
      childTl.from($(el).find('path'),{ duration: 1.15, drawSVG: 0 }, 0.75).delay(delay)
      childTl.from($(el).find('.flex-300:first-child'), 1,  { autoAlpha: 0,y: 20, ease: Power2.easeInOut }, 0).delay(delay)
      childTl.from($(el).find('.flex-300:last-child'), 1, { autoAlpha: 0,y: 20, ease: Power2.easeInOut}, 1.5).delay(delay)
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