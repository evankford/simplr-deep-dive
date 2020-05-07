import  gsap, { TimelineMax, TweenMax, Power0, CSSPlugin } from "gsap";

gsap.registerPlugin(CSSPlugin)

export default class GalleryTimeline {
  constructor(el) {
    this.el = el
    this.initiated = false
    this.init();
  }
  init() {


    $('.gallery-image').each((i,child)=>{
      var tl = new TimelineMax({repeat: -1, yoyo: true})
      var dur = Math.random()*100 + 50;
      var direction = '50%';
      if (i % 2 > 0) {
        direction = '-50%'
      }
      tl.to(child, dur, {x: direction, ease: Power0.easeInOut})
    })


  }
}