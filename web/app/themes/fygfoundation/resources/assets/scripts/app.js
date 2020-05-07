/**
 * External Dependencies
 */
import 'jquery';
import 'lazysizes';
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import { TimelineMax , TweenMax , Power2, CSSPlugin} from 'gsap';
import * as ScrollMagic from "ScrollMagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import "ScrollMagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import objectFitImages from 'object-fit-images';

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);


objectFitImages();

const plugins = [CSSPlugin];
// if (!plugins) {
//   console.log('Error loading plugins!');
// }


function initModules(parent = document) {
  Array.from(parent.querySelectorAll("[data-module]")).forEach((el) => {
    const name = el.getAttribute("data-module");
    const Module = require(`./modules/${name}`).default;
    new Module(el);
  });
}

$(document).ready(() => {
  // console.log('Hello world');



    initModules();
    var Scroller = new SiteScroller;

});


class SiteScroller {
  constructor() {
    this.controller = new ScrollMagic.Controller()
    this.init()
  }
  setupTimelines() {

    this.animTl = new TimelineMax()
    this.animTl.from()
  }

  init() {
    $('section, footer, header').each((i, parent)=> {
      $(parent).find('[data-anim-in]').each((childI, el)=> {
        var tl = new TimelineMax();
        var delay = childI*.1400;
        tl.from(el, 0.5, {opacity: 0, y: '40px', ease: Power2.easeInOut}).delay(delay);
        new ScrollMagic.Scene({
          triggerElement: el,
          triggerHook: 0.85,
          reverse: false
        })
          .setTween(tl)
          .addTo(this.controller);
      })


      $(parent).find('[data-anim-in-children]').each((childI, el)=> {
        var tl = new TimelineMax();
        var delay = childI*.1400;
        var children = $(el).children()
        tl.staggerFrom(children, 0.5,  {opacity: 0, y: '40px', ease: Power2.easeInOut}, 0.15).delay(delay)
        new ScrollMagic.Scene({
          triggerElement: el,
          triggerHook: 0.85,
          reverse: false
        })

          .setTween(tl)
          .addTo(this.controller);
      })
    })
  }
}