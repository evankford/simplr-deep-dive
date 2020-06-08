import { TimelineMax, Power2, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

export default class Animator {
  constructor(el) {
    this.el = el;
    this.init();
  }

  start() {
    // console.log('initiating')
    if (!this.started) {
      this.started = true;
      // this.basics();
    }
  }
  stop() {
    console.log("stopping");
  }
  reset() {
    console.log("resetting");
  }

  init() {
    this.basics();
  }

  basics() {
    $(this.el)
      .find("[data-anim-in]")
      .each((childI, el) => {
        var childTl = new TimelineMax();
        var delay = Math.min(childI * 0.2, 1);
        childTl
          .from(el, 0.5, {
            autoAlpha: 0,
            y: "40px",
            ease: Power2.easeInOut
          })
          .delay(delay);
      });

    $(this.el)
      .find("[data-anim-in-children]")
      .each((childI, el) => {
        var childTl = new TimelineMax();
        var delay = Math.min(childI * 0.2, 1);
        var children = $(el).children();
        childTl
          .staggerFrom(
            children,
            0.5,
            {
              autoAlpha: 0,
              y: "40px",
              ease: Power2.easeInOut
            },
            0.15
          )
          .delay(delay);
      });
  }
}
