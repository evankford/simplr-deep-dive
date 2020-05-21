import * as ScrollMagic from "scrollmagic";
import  {  TimelineMax, TweenMax, Power1} from 'gsap';
// import { DrawSVGPlugin } from "./DrawSVGPlugin";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";


export default class Goodbyes {
  constructor(el) {
    // ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
    this.el = el;
    this.parent = this. el.closest('[data-position]')
    this.controller = new ScrollMagic.Controller({
    });
    this.list = this.el.querySelector('.goodbye-list')
    this.number = this.list.childNodes.length -2;
    this.percentString = this.number*18 + '%';

    // this.init();
  }

  init() {

    let maxY = -100 + (100 / this.number) + '%';
    console.log(this.parent)
    new ScrollMagic.Scene({
      duration: this.percentString,
      triggerElement: this.el.parentNode.parentNode,
      triggerHook: "onLeave"
    }).addTo(this.controller).setTween(this.list, 0.2, { y: maxY, ease: Power1.easeOut }).setPin(this.el)

  }
}