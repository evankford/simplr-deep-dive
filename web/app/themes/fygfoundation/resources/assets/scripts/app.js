/**
 * External Dependencies
 */
import 'jquery';
import 'lazysizes';
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import  { TimelineMax , TweenMax , Power2, CSSPlugin, gsap} from 'gsap';
import { DrawSVGPlugin } from "./components/DrawSVGPlugin";
import * as ScrollMagic from "ScrollMagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import "ScrollMagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import objectFitImages from 'object-fit-images';

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);


objectFitImages();
gsap.registerPlugin(DrawSVGPlugin);

const plugins = [CSSPlugin, DrawSVGPlugin];
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


      $(parent).find('[data-anim-in-children]').each((childI, el)=> {
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
      $(parent).find('[data-anim-in-issue]').each((childI, el)=> {
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
    })
  }
}