import { CountUp } from 'countup.js';

export default class CountMe {
  constructor(el) {
    this.el = el;
    this.number = parseInt(el.innerHTML);
    this.run = this.runIt.bind(this);
    this.observer = new IntersectionObserver(this.run, {
      threshold: 0.6
    });
    this.observer.observe(this.el);
    this.countUp = new CountUp(this.el, this.number);
  }

  runIt(observed) {
    console.log(observed)
    if (observed[0].isIntersecting == true) {
      setTimeout(() => {
        this.countUp.start();
        this.observer.unobserve(this.el);
      }, 200);
    }
  }
}